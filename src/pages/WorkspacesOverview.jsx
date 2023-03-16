import React from "react";
import Workspace from "../components/Workspaces/Workspace";
import './Workspaces.css'

export default function WorkspacesOverview() {
    return (
        <div>
            <h1>Workspaces page</h1>
            <Workspace></Workspace>
            <div class="main">
                <div class="mainCard__body">
                    <div
                        class="card workspace-card">

                        <div class="workspace-card-content-wrapper">
                            <div class="workspace-card-content">
                                {/* <h1>Workspace page</h1> */}
                                <span class="workspace-card-content__title"></span>
                            </div>
                        </div>
                        <img />
                    </div>
                </div >
            </div >

        </div>
    )
}



