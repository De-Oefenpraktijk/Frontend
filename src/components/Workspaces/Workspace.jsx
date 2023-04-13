// should contain design/logic relating to a single workspace, Workspace.css has the css from the last project

import React, { useEffect, useState } from "react";
import "./Workspace.css";
import { useParams, useNavigate } from "react-router-dom";
import CreateRoomModal from "./CreateRoomModal";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import Moment from "moment-timezone";
import { formatDistanceToNowStrict } from "date-fns";
import {
  GETUSERROOMSBYWORKSPACEURL,
  GETPUBLICROOM,
} from "../../service/ConnectionStrings";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Workspace() {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  //States
  const [open, setOpen] = useState(false); //Used for the Modal
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [workspaceName, setWorkspaceName] = useState([]);
  const [publicRooms, setPublicRooms] = useState([]);
  const [refreshRooms, setRefreshRooms] = useState(false);

  //Params
  const { user } = useAuth0();
  const userId = user.sub.split("|")[1];

  // Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const triggerRefreshRoom = () => setRefreshRooms(!refreshRooms);

  const joinRoom = (roomId) => {
    navigate(`/workspace/join-room/${roomId}`);
  };

  //Effects
  useEffect(() => {
    //Set rooms, public rooms and workspace name
    axios
      .get(GETUSERROOMSBYWORKSPACEURL + workspaceId + "/" + userId)
      .then((response) => {
        setMeetingRooms(response.data["rooms"]);
        setWorkspaceName(response.data["name"]);
      })
      .catch((err) => {
        console.log("error: " + err);
      });

    axios
      .get(`http://localhost:5137/api/v1/PublicRoom/${workspaceId}`)
      .then((response) => {
        setPublicRooms(response.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, [refreshRooms]);

  return (
    <div id="workspace-info">
      <h1>{workspaceName}</h1>

      <div id="room-options" style={{ textAlign: "right" }}>
        <Button variant="outlined" onClick={handleOpen}>
          Create a meeting
        </Button>
        <CreateRoomModal
          handleClose={handleClose}
          open={open}
          workspaceId={workspaceId}
          userId={userId}
          triggerRefreshRooms={triggerRefreshRoom}
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
                    <Button variant="outlined" onClick={() => joinRoom()}>
                      Join meeting
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
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
          <Form.Label>Available Webinars</Form.Label>

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
              <Form.Label>Available Webinars</Form.Label>

              <Box padding={1}>
                {publicRooms.map((publicRoom) => (
                  <>
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                          {console.log(publicRoom)}

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
                            onClick={() => joinRoom(publicRoom.roomId)}
                          >
                            Join
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                    <br></br>
                  </>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>
      </div>
    </div>
  );
}
