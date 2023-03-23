import React, { useState } from "react";
import createRoom from "../../service/createRoom";
import { Modal, Box } from "@mui/material";
import InviteUsers from "./InviteUsersBar";
import createWorkspace from "../../service/createWorkspace";

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

export default function CreateWorkspaceModal({ handleClose, open }) {
  const [name, setName] = useState("");
  const [files, setFiles] = useState("");
  //   const [workspace, setWorkspace] = React.useState({
  //     workspaceName: "",
  //     files: "",
  //   });

  //   const [invitedUsers, setInvitedUsers] = React.useState([]);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    // setWorkspace((prevState) => ({
    //   ...prevState,
    //   [workspaceName]: value,
    // }));
    setName(value);
    console.log(name);
  };

  const handleFileUpload = (e) => {
    const { files, value } = e.target;
    setFiles(value);

    // setWorkspace((prevState) => ({
    //   ...prevState,
    //   [files]: value,
    // }));
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var body = {
      name,
      files,
    };

    console.log(body);
    createWorkspace(body);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3>Create new Workspace</h3>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label forhtml="workspaceName">Workspace name</label>
            <input
              type="text"
              id="workspaceName"
              name="workspaceName"
              onChange={handleNameChange}
            />
          </div>
          <div className="form__group">
            Upload File
            <input
              type="file"
              name="files"
              id="files"
              onChange={handleFileUpload}
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
