import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
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

export default function CreateWorkspaceModal({
  handleClose,
  open,
  updateForRefresh,
  addWorkspace,
}) {
  const [workspaceName, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setName(value);
  };

  const handleFileUpload = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const fd = new FormData();
    // fd.append("name", workspaceName);
    // fd.append("inputImageFile", imageFile);

    // console.log(fd.get("name"));
    // console.log(fd.get("imageFile"));

    // const newWorkspace = await createWorkspace(fd);
    const workspaceObject = {
      id: "64218ebe7448e6e0ad273b7c",
      name: "aide stoychoooo",
      imageFile: {
        fileUrl:
          "https://oefenpraktijkstorageacc.blob.core.windows.net/workspace-images?sv=2021-12-02&se=2023-03-27T13%3A40%3A30Z&sr=c&sp=r&sig=cBy15ZPhnwPBmtNuTVYw4PM4yIZxKpNiBLjyySu0%2BZU%3D",
        fileName: "243126457_234030476.jpeg",
      },
      files: [],
      rooms: [],
    };

    addWorkspace(workspaceObject);

    // updateForRefresh();
    // addWorkspace(newWorkspace);
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
              required
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
