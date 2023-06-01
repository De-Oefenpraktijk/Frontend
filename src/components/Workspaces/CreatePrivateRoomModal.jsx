import React from "react";
import roomService from "../../service/roomService";
import { Modal, Box } from "@mui/material";
import InviteUsers from "./InviteUsersBar";
import { useAuth0 } from "@auth0/auth0-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreatePrivateRoomModal({
  handleClose,
  open,
  workspaceId,
  userId,
  fetchPrivateRooms,
}) {
  const [room, setRoom] = React.useState({
    roomName: "",
    scheduledDate: new Date(),
    invitedIds: [],
  });

  const [invitedUsers, setInvitedUsers] = React.useState([]);

  const { getAccessTokenSilently } = useAuth0();

  const handleRoomChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const scheduledDate = new Date(room.scheduledDate);

    var now_utc = Date.UTC(
      scheduledDate.getUTCFullYear(),
      scheduledDate.getUTCMonth(),
      scheduledDate.getUTCDate(),
      scheduledDate.getUTCHours(),
      scheduledDate.getUTCMinutes(),
      scheduledDate.getUTCSeconds()
    );
    var body = {
      hostId: userId,
      invitedIds: invitedUsers.map((x) => x["n.Id"]),
      scheduledDate: new Date(now_utc),
      workspaceId: workspaceId,
      roomName: room.roomName,
    };
    const createNewRoom = async () => {
      try{
        const response = await roomService.createRoom(getAccessTokenSilently, body)
        if (response) {
          fetchPrivateRooms()
        }
      } catch(err) {
        console.log(err);
      }
    }
    createNewRoom();
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3>Create new room</h3>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label forhtml="roomName">Room name</label>
            <input
              type="text"
              id="roomName"
              name="roomName"
              onChange={handleRoomChange}
            />
          </div>
          <div className="form__group">
            <label forhtml="roomName">Attendees</label>
            <InviteUsers
              selectedValues={invitedUsers}
              setSelectedValues={setInvitedUsers}
            />
          </div>
          <div className="form__group">
            <label forhtml="date">Date and time</label>
            <input
              type="datetime-local"
              name="scheduledDate"
              onChange={handleRoomChange}
            />
          </div>
          <div className="form__group">
            <input type="submit" />
          </div>
        </form>
      </Box>
    </Modal>
  );
}
