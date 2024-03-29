import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkspacesPage from "./pages/Workspaces/WorkspacesPage";
import AppLayout from "./Layout/AppLayout";
import Blank from "./pages/NoContentPage/Blank";
import UserOverviewPage from "./pages/UserOverview/UserOverviewPage";
import WorkspacePage from "./pages/Workspace/WorkspacePage";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import RoomPage from "./pages/Room/RoomPage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<WorkspacesPage />} />
        <Route path="/overview" element={<WorkspacesPage />} />
        <Route path="/search" element={<Blank />} />
        <Route path="/social" element={<UserOverviewPage />} />
        <Route path="/calendar" element={<Blank />} />
        <Route path="/articles" element={<Blank />} />
        <Route path="/forum" element={<Blank />} />
        <Route path="/settings" element={<Blank />} />
        <Route path="/organization" element={<Blank />} />
        <Route path="/workspaces" element={<WorkspacesPage />} />
        <Route path="/workspace/:workspaceId" element={<WorkspacePage />} />
        <Route path="/workspace/join-room" element={<RoomPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Blank />} />
      </Route>
    </Routes>
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <p>Loading...</p>,
});
