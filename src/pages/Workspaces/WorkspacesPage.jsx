import React from "react";
import Workspace from "../../components/Workspaces/Workspace";
import "./WorkspacesPage.css";

export default function WorkspacesOverview() {
  return (
    <div>
      <div className="main">
        <div className="mainCard__body">
          <div className="card workspace-card">
            <div className="workspace-card-content-wrapper">
              <div className="workspace-card-content">
                {/* <h1>Workspace page</h1> */}
                <span className="workspace-card-content__title"></span>
              </div>
            </div>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
}
