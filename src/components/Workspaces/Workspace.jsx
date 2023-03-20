// should contain design/logic relating to a single workspace, Workspace.css has the css from the last project

import React from "react";
import "./Workspace.css";
import { useParams } from "react-router-dom";
import CreateRoomModal from "./CreateRoomModal";

export default function Workspace() {
  let { workspaceId } = useParams();

  //Used for the Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <div className="main">
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

      </div>
      <CreateRoomModal handleClose={handleClose} open={open} workspaceId={workspaceId}/>
    </div>
  );
}
