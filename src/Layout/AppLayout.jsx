import React from "react";
import { Outlet } from "react-router-dom/dist";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

export default function AppLayout() {
    return (
        <main>
            <TopBar></TopBar>
            <SideBar></SideBar>
            <div>
                <Outlet />
            </div>
        </main>
    )
}



