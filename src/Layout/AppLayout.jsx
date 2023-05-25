import React from "react";
import { Outlet } from "react-router-dom/dist";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import UpdateLastTimeOnline from "../pages/UserOverview/UpdateLastTimeOnline";

export default function AppLayout() {
  return (
    <main className="main">
      <UpdateLastTimeOnline />
      <TopBar></TopBar>
      <SideBar />
      <div>
        <Outlet />
      </div>
    </main>
  );
}
