import React from "react";
import createRoom from "../../service/createRoom";
import { Modal, Box } from "@mui/material";
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

export default function CreateRoomModal({ handleClose, open, workspaceId }) {
  const [room, setRoom] = React.useState({
    roomName: "",
    scheduledDate: "",
    invitedIds: [],
  });
  const handleRoomChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var body = {
      hostId: workspaceId, //TODO
      invitedIds: room.invitedIds, //TODO
      scheduledDate: room.scheduledDate,
      workspaceId: workspaceId,
      roomName: room.roomName,
    };
    createRoom(body);
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
            <label forhtml="userName">Invite user</label>
            <select id="userName" name="invitedIds" onChange={handleRoomChange}>
              username
            </select>
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
