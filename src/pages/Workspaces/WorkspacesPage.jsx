import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateWorkspace from "../../components/Workspaces/CreateWorkspace";
import getWorkspaces from "../../service/getWorkspaces";
import { Stack } from "@mui/system";
import "./WorkspacesPage.css";

export default function WorkspacesOverview() {
  const [workspaces, setWorkspaces] = useState([]);
  const dataFetch = async () => {
    getWorkspaces(setWorkspaces);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <Stack direction="row">
        <div className="mainCard__body">
          <div className="addWorkspaceButton card">
            <CreateWorkspace
              dataFetch={dataFetch}
              style={{ height: "300px" }}
            />
          </div>

          {workspaces.map((workspace) => {
            return (
              <div key={workspace.id} className="card workspace-card">
                <Link to={`/workspace/${workspace.id}`}>
                  <div className="workspace-card-content-wrapper">
                    <div className="workspace-card-content">
                      <span className="workspace-card-content__title">
                        {workspace.name}
                      </span>
                    </div>
                  </div>
                  <img
                    src={`${workspace.imageFile.fileUrl}`}
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
