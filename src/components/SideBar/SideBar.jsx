import React, { useMemo } from "react";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Profile from "../../pages/Profile";

import './SideBar.css'

export default function SideBar() {

  const sideBarItems = []

  const menuItems = useMemo(() => {
    //todo
  })
  return (
    <>
      {/* <Routes> */}
      <div class="sidebar__menu">
        <ul>
          <li >
            <font-awesome-icon icon="fa-solid fa-chart-pie" />
            <span>Overview</span>
          </li>
          <li >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <span>Search</span>
          </li>
          <li>
            <Link to='/workspaces'>

              <font-awesome-icon icon="fa-solid fa-people-roof" />
              <span>Workspaces</span>
            </Link>

          </li>
          <li >
            <font-awesome-icon icon="fa-solid fa-users" />
            <span>Social</span>
          </li>
          <li >
            <font-awesome-icon icon="fa-regular fa-calendar" />
            <span>Calendar</span>
          </li>
          <li >
            <font-awesome-icon icon="fa-solid fa-book" />
            <span>Articles</span>
          </li>
          <li >
            <font-awesome-icon icon="fa-solid fa-rectangle-list" />
            <span>Forum</span>
          </li>
        </ul>

        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-gear" />
            <span>Settings</span>
          </li>
          <li>
            <Link to='/organization'>
              <span>Organization</span>
            </Link>
            <font-awesome-icon icon="fa-solid fa-users" />
          </li>

          <li>
            <Link to='/profile'>
              <span>Profile</span>
            </Link>
            <font-awesome-icon icon="fa-solid fa-users" />



          </li>
        </ul >
      </div >
      {/* </Routes> */}
    </>
  )
}



