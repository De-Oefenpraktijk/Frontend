import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import CreatePrivateRoomModal from "./CreatePrivateRoomModal";
import CreatePublicRoomModal from "./CreatePublicRoomModal";
import Form from "react-bootstrap/Form";
import jwt from "jwt-decode";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";

import { visuallyHidden } from "@mui/utils";
import Moment from "moment-timezone";
import { formatDistanceToNowStrict } from "date-fns";

import roomService from "../../service/roomService";
const CREATE_PUBLIC_ROOM_PERMISSION = "create:public-rooms";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const headCells = [
  {
    id: "roomName",
    numeric: false,
    disablePadding: true,
    label: "Meeting Name",
  },
  {
    id: "scheduledDate",
    numeric: true,
    disablePadding: false,
    label: "Scheduled Date",
  },
  {
    id: "startTime",
    numeric: true,
    disablePadding: false,
    label: "Meeting starts in",
  },
  {
    id: "join",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    // onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            // padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function BasicWorkspaceTabs2() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0(); //move to workspace page

  const { workspaceId } = useParams();

  const [meetingRooms, setMeetingRooms] = useState([]);
  const [publicRooms, setPublicRooms] = useState([]); //maybe move to workspace page
  const userId = user.sub.split("|")[1];

  // const fetchPublicRooms = async () => {
  //   // await getPublicRooms(workspaceId, setPublicRooms);
  // };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const [openPublic, setOpenPublic] = useState(false); //Used for the Modal

  //table
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [workspaceName, setWorkspaceName] = useState([]);
  const [rows, setRows] = useState([]);
  const [userCanCreatePublicRooms, setUserCanCreatePublicRooms] =
    useState(false);

  const fetchPrivateRooms = async () => {
    try {
      const response = await roomService.getUserRoomsByWorkspace(
        workspaceId,
        userId,
        getAccessTokenSilently
      );
      if (response) {
        setMeetingRooms(response.rooms);
        setWorkspaceName(response.name);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPublicRooms = async () => {
    try {
      const response = await roomService.getPublicRooms(
        workspaceId,
        getAccessTokenSilently
      );
      if (response) {
        setPublicRooms(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchPrivateRoomsOnLoad = async () => {
      const response = await roomService.getUserRoomsByWorkspace(
        workspaceId,
        userId,
        getAccessTokenSilently
      );
      setMeetingRooms(response.rooms);
    };

    const fetchPublicRoomsOnLoad = async () => {
      try {
        const response = await roomService.getPublicRooms(
          workspaceId,
          getAccessTokenSilently
        );
        if (response) {
          setPublicRooms(response);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPublicRoomsOnLoad();
    fetchPrivateRoomsOnLoad();
    console.log(publicRooms);
  }, []);

  useEffect(() => {
    const visibleRows = stableSort(
      meetingRooms,
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    setRows(visibleRows);
  }, [meetingRooms, order, orderBy, rowsPerPage, page]);

  useEffect(() => {
    const canCreatePublicRooms = async () => {
      const token = await getAccessTokenSilently();
      const decoded_token = jwt(token);
      const { permissions } = decoded_token;
      if (permissions.includes(CREATE_PUBLIC_ROOM_PERMISSION)) {
        console.log("Has permissions");
        setUserCanCreatePublicRooms(true);
      } else {
        setUserCanCreatePublicRooms(false);
      }
    };
    canCreatePublicRooms();
  }, [getAccessTokenSilently]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleDateDifference = (date) => {
    const meetingStarts = new Date(Moment(date).toDate());
    const newHours = meetingStarts.getHours(); // Converts the start of the meeting to UTC. I couldn't find a better fix
    meetingStarts.setHours(newHours);
    const nowDate = new Date(meetingStarts).toISOString();
    const result = formatDistanceToNowStrict(new Date(nowDate), {
      addSuffix: true,
    });

    return result;
  };

  const handlePrivateOpen = () => setOpen(true);
  const handlePublicOpen = () => setOpenPublic(true);
  const handleClose = () => setOpen(false);
  const handlePublicClose = () => setOpenPublic(false);
  const [open, setOpen] = useState(false); //Used for the Modal

  const joinRoom = (room) => {
    navigate(`/workspace/join-room`, { state: { room } });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Private Rooms" {...a11yProps(0)} />
          <Tab label="Public Rooms" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {" "}
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  // onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  sx={{ display: "table-header-group" }}
                />
                <TableBody>
                  {rows.map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          align="center"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row["roomName"]}
                        </TableCell>
                        <TableCell>
                          {Moment(row["scheduledDate"]).format(
                            "DD-MM-YYYY hh:mm A"
                          )}
                        </TableCell>
                        <TableCell>
                          {handleDateDifference(row["scheduledDate"])}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            onClick={() => joinRoom(row)}
                          >
                            Join meeting
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow>{/* <TableCell colSpan={6} /> */}</TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={meetingRooms.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>

          <div id="room-options" style={{ textAlign: "right" }}>
            <Button
              variant="outlined"
              onClick={handlePrivateOpen}
              sx={{ margin: "10" }}
            >
              Create a private meeting
            </Button>

            <CreatePrivateRoomModal
              handleClose={handleClose}
              open={open}
              workspaceId={workspaceId}
              userId={userId}
              fetchPrivateRooms={fetchPrivateRooms}
            />
          </div>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box paddingTop={2}>
          {/* <Form.Label>Available Webinars</Form.Label> */}
          {publicRooms.length > 0 && (
            <div>
              {/* <Paper elevation={3}> */}
              {/* <Box
                padding={0}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignSelf: "flex-end",
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    height: "100%",
                  },
                }}
              > */}
              <div id="room-options" style={{ textAlign: "right" }}>
                {isAuthenticated && userCanCreatePublicRooms && (
                  <Button
                    variant="outlined"
                    onClick={handlePublicOpen}
                    sx={{ marginBottom: "10px" }}
                  >
                    Create a public meeting
                  </Button>
                )}

                <CreatePublicRoomModal
                  handleClose={handlePublicClose}
                  open={openPublic}
                  workspaceId={workspaceId}
                  userId={userId}
                  fetchPublicRooms={fetchPublicRooms}
                />
              </div>
              {/* <Box padding={0}> */}
              {publicRooms.map((publicRoom) => (
                <div key={publicRoom.roomId}>
                  <Card sx={{ maxWidth: "100%" }}>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        {publicRoom.roomName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {publicRoom.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontWeight: "bold", m: 0 }}
                      >
                        Webinar starts in:{" "}
                        {handleDateDifference(publicRoom.scheduledDate)}
                      </Typography>
                      <CardActions sx={{ float: "right", paddingRight: 0 }}>
                        <Button
                          variant="outlined"
                          size="large"
                          onClick={() => joinRoom(publicRoom)}
                        >
                          Join
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>

                  <br></br>
                </div>
              ))}
              {/* </Box> */}
              {/* </Box> */}
              {/* </Paper> */}
            </div>
          )}
        </Box>
      </TabPanel>
    </Box>
  );
}
