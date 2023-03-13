import './App.css';
import './components/SideBar/SideBar'
import React from 'react';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile';
import WorkspacesOverview from './components/Workspaces/WorkspacesOverview';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<HomePage></HomePage>}>

        </Route>
      </Routes> */}
      <Routes>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/workspaces' element={<WorkspacesOverview />} ></Route>
      </Routes>

      <SideBar></SideBar>

    </div>
  );
}

export default App;
