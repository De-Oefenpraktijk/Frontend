import React from "react";
import createPublicRoom from "../../service/createPublicRoom";
import { Modal, Box } from "@mui/material";
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

export default function CreatePublicRoomModal({
  handleClose,
  open,
  workspaceId,
  userId,
  fetchPublicRooms,
}) {
  const [room, setRoom] = React.useState({
    roomName: "",
    description: "",
    scheduledDate: new Date(),
  });

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
      scheduledDate: new Date(now_utc),
      workspaceId: workspaceId,
      roomName: room.roomName,
      description: room.description,
    };

    createPublicRoom(body, getAccessTokenSilently).then(() =>
      fetchPublicRooms()
    );
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3>Create new public room</h3>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label forhtml="roomName">Public room name</label>
            <input
              type="text"
              id="roomName"
              name="roomName"
              onChange={handleRoomChange}
            />
          </div>
          <div className="form__group">
            <label forhtml="roomName">Description</label>
            <textarea
              name="description"
              onChange={handleRoomChange}
              rows="4"
              cols="50"
            ></textarea>
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
