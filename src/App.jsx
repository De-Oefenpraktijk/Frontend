import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import WorkspacesPage from "./pages/Workspaces/WorkspacesPage";
import AppLayout from "./Layout/AppLayout";
import Blank from "./pages/NoContentPage/Blank";
import Workspace from "./components/Workspaces/Workspace";
import SelectedWorkspace from "./pages/SelectedWorkspace/SelectedWorkspace";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<Blank />} />
        <Route path="/search" element={<Blank />} />
        <Route path="/workspaces" element={<WorkspacesPage />} />
        <Route path="/social" element={<Blank />} />
        <Route path="/calendar" element={<Blank />} />
        <Route path="/articles" element={<Blank />} />
        <Route path="/forum" element={<Blank />} />
        <Route path="/settings" element={<Blank />} />
        <Route path="/organization" element={<Blank />} />
        <Route path="/workspaces" element={<WorkspacesPage />} />
        <Route path="/workspace/:id" element={<SelectedWorkspace/>} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Testing */}
        <Route path="/workspace/:workspaceId" element={<Workspace />} />
        <Route path="*" element={<Blank/>}/>
      </Route>
    </Routes>
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <p>Loading...</p>,
});
