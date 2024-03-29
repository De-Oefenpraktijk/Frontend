import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import workspaceService from "../../service/workspaceService";
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

export default function CreateWorkspaceModal({ handleClose, open, dataFetch }) {
  const [workspaceName, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  
  const { getAccessTokenSilently } = useAuth0();

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setName(value);
  };

  const handleFileUpload = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", workspaceName);
    fd.append("inputImageFile", imageFile);

    const createNewWorkspace = async () => {
      try{
        const response = await workspaceService.createWorkspace(getAccessTokenSilently, fd)
        if (response) {
          dataFetch();
        }
      } catch(err) {
        console.log(err);
      }
    }
    createNewWorkspace();
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
              name="imageFile"
              id="file"
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
