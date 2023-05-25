import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Moment from "moment-timezone";
import { formatDistanceToNowStrict } from "date-fns";
import getUserRoomsByWorkspace from "../../service/getUserRoomsByWorkspace";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "@mui/material/styles";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/system";

import { Pagination } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";

import getPublicRooms from "../../service/getPublicRooms";

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

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function BasicTabs() {
  const [workspaceName, setWorkspaceName] = useState([]);

  const [publicRooms, setPublicRooms] = useState([]); //maybe move to workspace page
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0(); //move to workspace page
  const [meetingRooms, setMeetingRooms] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  const userId = user.sub.split("|")[1];
  const { workspaceId } = useParams();

  const [value, setValue] = React.useState(0);

  const fetchPrivateRooms = async () => {
    getUserRoomsByWorkspace(
      setMeetingRooms,
      setWorkspaceName,
      workspaceId,
      userId
    );
  };

  const fetchPublicRooms = async () => {
    getPublicRooms(workspaceId, setPublicRooms);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const joinRoom = (room) => {
    navigate(`/workspace/join-room`, { state: { room } });
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - meetingRooms.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    fetchPublicRooms();
    fetchPrivateRooms();
  }, []);

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  const rows = meetingRooms;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Private Rooms" {...a11yProps(0)} />
          <Tab label="Public Meetings" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div id="room-list">
          <Form.Label>Meeting names</Form.Label>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Meeting name:</TableCell>
                  <TableCell align="center">Schedule time</TableCell>
                  <TableCell align="center">Meeting starts in</TableCell>
                  <TableCell align="center">Join</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((room) => (
                  <TableRow
                    key={room.roomId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {room["roomName"]}
                    </TableCell>
                    <TableCell align="center">
                      {Moment(room["scheduledDate"]).format(
                        "DD-MM-YYYY hh:mm A"
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {handleDateDifference(room["scheduledDate"])}
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="outlined" onClick={() => joinRoom(room)}>
                        Join meeting
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={meetingRooms.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </TabPanel>
      {/* <Pagination></Pagination> */}

      <TabPanel value={value} index={1}>
        <Box paddingTop={2}>
          <Form.Label>Available Webinars</Form.Label>
          {publicRooms.length > 0 && (
            <Paper elevation={3}>
              <Box
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
              >
                <Box padding={0}>
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
                </Box>
              </Box>
            </Paper>
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
