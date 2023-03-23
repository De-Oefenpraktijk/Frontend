import React, { useEffect, useState } from "react";
import "./WorkspacesPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function WorkspacesOverview() {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5137/api/v1/Workspace")
      .then((response) => {
        setWorkspaces(response.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  return (
    <div>
      <div className="mainCard__body">
        {workspaces.map((workspace) => {
          return (
            <div key={workspace["id"]} className="card workspace-card">
              <Link to={`/workspacedevelop/${workspace["id"]}`}>
                <div className="workspace-card-content-wrapper">
                  <div className="workspace-card-content">
                    <span className="workspace-card-content__title">
                      {workspace["name"]}
                    </span>
                  </div>
                </div>
                <img src={workspace["imageFile"]} style={{ height: "300px" }} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
