import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Moment from 'moment-timezone';
import { formatDistanceToNowStrict } from "date-fns";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SelectedWorkspace() {
  // States
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [workspaceName, setWorkspaceName] = useState([]);

  //Params
  const params = useParams();
  const { user } = useAuth0();
  const userId = user.sub.split("|")[1]

  //Set rooms and workspace name
  useEffect(() => {
    axios
      .get(`http://localhost:5137/api/v1/Room/${params["id"]}/${userId}`)
      .then((response) => {
        setMeetingRooms(response.data["rooms"]);
        setWorkspaceName(response.data["name"]);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  const handleDateDifference = (date) => {
    const meetingStarts = new Date(Moment.utc(date).toDate())
    const newHours = meetingStarts.getHours() - 1 // Converts the start of the meeting to UTC. I couldn't find a better fix
    meetingStarts.setHours(newHours)
    const result = formatDistanceToNowStrict(Date.parse(meetingStarts), {addSuffix: true})

    return result
  }


  return (
    <>
      <h1>{workspaceName}</h1>
      <div>
        <Form.Label>Choose a meeting room:</Form.Label>
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {room["roomName"]}
              </TableCell>
              <TableCell align="center">{Moment.utc(room["scheduledDate"]).format('DD-MM-YYYY hh:mm A')}</TableCell>
              <TableCell align="center">{handleDateDifference(room["scheduledDate"])}</TableCell>
              <TableCell align="center"><Button variant="outlined">Join meeting</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </>
  );
}