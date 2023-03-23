// should contain design/logic relating to a single workspace, Workspace.css has the css from the last project

import React, { useEffect, useState } from "react";
import "./Workspace.css";
import { useParams } from "react-router-dom";
import CreateRoomModal from "./CreateRoomModal";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import Moment from "moment-timezone";
import { formatDistanceToNowStrict } from "date-fns";

// Table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Workspace() {
  let { workspaceId } = useParams();

  //States
  const [open, setOpen] = useState(false); //Used for the Modal
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [workspaceName, setWorkspaceName] = useState([]);

  //Params
  const { user } = useAuth0();
  const userId = user.sub.split("|")[1];

  // Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDateDifference = (date) => {
    const meetingStarts = new Date(Moment.utc(date).toDate());
    const newHours = meetingStarts.getHours() - 1; // Converts the start of the meeting to UTC. I couldn't find a better fix
    meetingStarts.setHours(newHours);
    const result = formatDistanceToNowStrict(Date.parse(meetingStarts), {
      addSuffix: true,
    });

    return result;
  };

  //Effects
  useEffect(() => {
    //Set rooms and workspace name
    axios
      .get(`http://localhost:5137/api/v1/Room/${workspaceId}/${userId}`)
      .then((response) => {
        setMeetingRooms(response.data["rooms"]);
        setWorkspaceName(response.data["name"]);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  return (
    <div id="workspace-info">
      <h1>{workspaceName}</h1>

      <div id="room-options">
        <div className="mainCard">
          <div className="mainCard__header">
            <span>Private rooms</span>
          </div>
          <div className="mainCard__body">
            <div className="card" onClick={handleOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
              </svg>
              <p>Create new room</p>
            </div>
            <div className="card">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="XMLID_1_">
                  <path
                    id="XMLID_5_"
                    d="M175.9,256H15.8v-64.2h160.1v-64.2l95.9,95.9l-95.9,96.8V256z M496.2,0v416.1L304.4,512v-95.9H111.7V287.7
              h32.6v95.9h160.1V95.9l128.5-64.2H144.3v128.5h-31.7V0H496.2z"
                  />
                </g>
              </svg>
              <p>Room name</p>
            </div>
          </div>
        </div>
        <CreateRoomModal
          handleClose={handleClose}
          open={open}
          workspaceId={workspaceId}
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
                  key={room["roomName"]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {room["roomName"]}
                  </TableCell>
                  <TableCell align="center">
                    {Moment.utc(room["scheduledDate"]).format(
                      "DD-MM-YYYY hh:mm A"
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {handleDateDifference(room["scheduledDate"])}
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="outlined">Join meeting</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
