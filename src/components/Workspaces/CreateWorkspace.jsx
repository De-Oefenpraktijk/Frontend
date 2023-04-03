import React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CreateWorkspaceModal from "./CreateWorkspaceModal";

export default function CreateWorkspace({ updateForRefresh }) {
  //Used for the Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        onClick={handleOpen}
      >
        <AddCircleIcon style={{ color: "black" }} fontSize="large" />
      </IconButton>
      <CreateWorkspaceModal
        handleClose={handleClose}
        open={open}
        updateForRefresh={updateForRefresh}
      />
    </div>
  );
}
