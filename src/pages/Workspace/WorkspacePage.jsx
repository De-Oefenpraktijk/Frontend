import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreatePublicRoomModal from "../../components/Workspaces/CreatePublicRoomModal";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { formatDistanceToNowStrict } from "date-fns";
import Moment from "moment-timezone";
import CreateRoomModal from "../../components/Workspaces/CreateRoomModal";
import Form from "react-bootstrap/Form";
import getUserRoomsByWorkspace from "../../service/getUserRoomsByWorkspace";
import "./WorkspacePage.css";
import axios from "axios";
import jwt from "jwt-decode";

// Table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { GETPUBLICROOMURL } from "../../service/ConnectionStrings";
// Const
const CREATE_PUBLIC_ROOM_PERMISSION = "create:public-rooms";

export default function WorkspacePage() {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  //States
  const [open, setOpen] = useState(false); //Used for the Modal
  const [openPublic, setOpenPublic] = useState(false); //Used for the Modal
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [workspaceName, setWorkspaceName] = useState([]);
  const [refreshRooms, setRefreshRooms] = useState(false);
  const [refreshRoomsPublic, setRefreshRoomsPublic] = useState(false);
  const [publicRooms, setPublicRooms] = useState([]);
  const [userCanCreatePublicRooms, setUserCanCreatePublicRooms] =
    useState(false);

  //Params
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const userId = user.sub.split("|")[1];

  // Functions
  const handlePrivateOpen = () => setOpen(true);
  const handlePublicOpen = () => setOpenPublic(true);
  const handleClose = () => setOpen(false);
  const handlePublicClose = () => setOpenPublic(false);
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
  const dataFetch = async () => {
    getUserRoomsByWorkspace(
      setMeetingRooms,
      setWorkspaceName,
      workspaceId,
      userId
    );
  };
  const triggerRefreshRoom = () => setRefreshRooms(!refreshRooms);
  const triggerRefreshRoomPublic = () =>
    setRefreshRoomsPublic(!refreshRoomsPublic);

  const joinRoom = (room) => {
    navigate(`/workspace/join-room`, { state: { room } });
  };

  //Effects
  useEffect(() => {
    //Set rooms and workspace name
    axios
      .get(`${GETPUBLICROOMURL}/${workspaceId}`)
      .then((response) => {
        setPublicRooms(response.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
    dataFetch();
  }, []);

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

  return (
    <div id="workspace-info">
      <h1>{workspaceName}</h1>

      <div id="room-options" style={{ textAlign: "right" }}>
        <Button variant="outlined" onClick={handlePrivateOpen}>
          Create a private meeting
        </Button>
        {isAuthenticated && userCanCreatePublicRooms && (
          <Button variant="outlined" onClick={handlePublicOpen}>
            Create a public meeting
          </Button>
        )}
        <CreateRoomModal
          handleClose={handleClose}
          open={open}
          workspaceId={workspaceId}
          userId={userId}
          dataFetch={dataFetch}
        />
        <CreatePublicRoomModal
          handleClose={handlePublicClose}
          open={openPublic}
          workspaceId={workspaceId}
          userId={userId}
          triggerRefreshRooms={triggerRefreshRoomPublic}
        />
      </div>

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
              {meetingRooms.map((room) => (
                <TableRow
                  key={room.roomId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {room["roomName"]}
                  </TableCell>
                  <TableCell align="center">
                    {Moment(room["scheduledDate"]).format("DD-MM-YYYY hh:mm A")}
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
          </Table>
        </TableContainer>

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
                            {handleDateDifference(publicRoom.date)}
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
      </div>
    </div>
  );
}
