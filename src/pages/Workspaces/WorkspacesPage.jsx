import React, { useEffect, useState } from "react";
import "./WorkspacesPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateWorkspace from "../../components/Workspaces/CreateWorkspace";
import { Stack } from "@mui/system";

export default function WorkspacesOverview() {
  const [workspaces, setWorkspaces] = useState([]);
  const [addedWorkspace, setAddedWorkspace] = useState(false);

  const updateForRefresh = () => {
    setAddedWorkspace(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5137/api/v1/Workspace")
      .then((response) => {
        setWorkspaces(response.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });

    setAddedWorkspace(false);
  }, [addedWorkspace]);

  return (
    <div>
      <Stack direction="row">
        <CreateWorkspace updateForRefresh={updateForRefresh} />

        <div className="mainCard__body">
          {workspaces.map((workspace) => {
            return (
              <div key={workspace["id"]} className="card workspace-card">
                <Link to={`/ workspace / ${workspace["id"]}`}>
                  <div className="workspace-card-content-wrapper">
                    <div className="workspace-card-content">
                      <span className="workspace-card-content__title">
                        {workspace["name"]}
                      </span>
                    </div>
                  </div>
                  <img
                    src={workspace["imageFile"]}
                    style={{ height: "300px" }}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Stack>
    </div>
  );
}
