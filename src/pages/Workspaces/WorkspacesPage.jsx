import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateWorkspace from "../../components/Workspaces/CreateWorkspace";
import workspaceService from "../../service/workspaceService";
import { Stack } from "@mui/system";
import "./WorkspacesPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import BasicWorkspaceTabs2 from "../../components/Workspaces/TabPanel2";

export default function WorkspacesOverview() {
  const [workspaces, setWorkspaces] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const dataFetch = async () => {
    try {
      const response = await workspaceService.getWorkspaces(
        getAccessTokenSilently
      );
      if (response) {
        setWorkspaces(response);
      }
    } catch (err) {
      console.log(err);
    }
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
