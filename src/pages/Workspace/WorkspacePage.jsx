import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreatePublicRoomModal from "../../components/Workspaces/CreatePublicRoomModal";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { formatDistanceToNowStrict, subHours, parseISO } from "date-fns";
import Moment from "moment-timezone";
import CreatePrivateRoomModal from "../../components/Workspaces/CreatePrivateRoomModal";
import Form from "react-bootstrap/Form";
import "./WorkspacePage.css";
import jwt from "jwt-decode";
import roomService from "../../service/roomService";

import BasicWorkspaceTabs from "../../components/Workspaces/TabPanel";
import BasicWorkspaceTabs2 from "../../components/Workspaces/TabPanel2";

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
// Const
const CREATE_PUBLIC_ROOM_PERMISSION = "create:public-rooms";

export default function WorkspacePage() {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  //States
  const [open, setOpen] = useState(false); //Used for the Modal
  const [openPublic, setOpenPublic] = useState(false); //Used for the Modal
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [recentMeetingRooms, setRecentMeetingRooms] = useState([]);
  const [workspaceName, setWorkspaceName] = useState([]);
  const [publicRooms, setPublicRooms] = useState([]);
  const [recentPublicRooms, setRecenPublicRooms] = useState([]);
  const [refreshRoomsPublic, setRefreshRoomsPublic] = useState(false);
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

  const fetchPrivateRooms = async () => {
    getUserRoomsByWorkspace(
      setMeetingRooms,
      setWorkspaceName,
      workspaceId,
      userId
    );

    //sets to display only meetings within the last 2 hours
    let recentPrivateRooms = [];
    const currentDate = Date();

    for (const recentPrivateRoom of meetingRooms) {
      if (
        new Date(recentPrivateRoom.scheduledDate) >
        subHours(new Date(currentDate), 2)
      ) {
        recentPrivateRooms.push(recentPrivateRoom);
      }
      setRecentMeetingRooms(recentPrivateRooms);
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
    }
  };

  const fetchPublicRooms = async () => {
    getPublicRooms(workspaceId, setPublicRooms);
    //sets to display only meetings within the last 2 hours
    let recentPublicRooms = [];
    const currentDate = Date();
    for (const recentPublicRoom of publicRooms) {
      if (
        new Date(recentPublicRoom.scheduledDate) >
        subHours(new Date(currentDate), 2)
      ) {
        recentPublicRooms.push(recentPublicRoom);
      }
      setRecentMeetingRooms(recentPublicRooms);
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
    }

    const joinRoom = (room) => {
      navigate(`/workspace/join-room`, { state: { room } });
    };

    //Effects
    useEffect(() => {
      fetchPublicRooms();
      fetchPrivateRooms();
      console.log(meetingRooms);
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
        <BasicWorkspaceTabs2
        // currentWorkspaceName={currentWorkspaceName}
        ></BasicWorkspaceTabs2>
      </div>
    );
  };
}
