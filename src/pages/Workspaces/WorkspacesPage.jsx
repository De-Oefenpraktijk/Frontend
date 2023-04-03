import React, { useEffect, useState } from "react";
import "./WorkspacesPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateWorkspace from "../../components/Workspaces/CreateWorkspace";
import { Stack } from "@mui/system";
import { GETWORKSPACEURL } from "../../service/ConnectionStrings";

export default function WorkspacesOverview() {
  const [workspaces, setWorkspaces] = useState([]);
  const [addedWorkspace, setAddedWorkspace] = useState(false);

  const updateForRefresh = () => {
    setAddedWorkspace(true);
  };

  useEffect(() => {
    const dataFetch = async () => {
      axios
        .get(GETWORKSPACEURL)
        .then((response) => {
          setWorkspaces(response.data);
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    };
    dataFetch();
  }, []);

  return (
    <div>
      <Stack direction="row">
        <CreateWorkspace
          updateForRefresh={updateForRefresh}
          className="card workspace-card"
        />

        <div className="mainCard__body">
          {workspaces.map((workspace) => {
            return (
              <div key={workspace["id"]} className="card workspace-card">
                <Link to={`/workspace/${workspace["id"]}`}>
                  <div className="workspace-card-content-wrapper">
                    <div className="workspace-card-content">
                      <span className="workspace-card-content__title">
                        {workspace["name"]}
                      </span>
                    </div>
                  </div>
                  <img
                    src={`${workspace["imageFile"]["fileUrl"]}`}
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
