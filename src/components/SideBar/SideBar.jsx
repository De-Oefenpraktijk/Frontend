import React, { useMemo } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import "./SideBar.css";

export default function SideBar() {
  const sideBarItems = [];

  const menuItems = useMemo(() => {
    //todo
  });
  return (
      <div className="sidebar">
        <div className="sidebar__menu">
          <ul>
            <li>
              <Link to="/overview">
                <font-awesome-icon icon="fa-solid fa-chart-pie" />
                <span>Overview</span>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link to="/workspaces">
                <font-awesome-icon icon="fa-solid fa-people-roof" />
                <span>Workspaces</span>
              </Link>
            </li>
            <li>
              <Link to="/social">
                <font-awesome-icon icon="fa-solid fa-users" />
                <span>Social</span>
              </Link>
            </li>
            <li>
              <Link to="/calendar">
                <font-awesome-icon icon="fa-regular fa-calendar" />
                <span>Calendar</span>
              </Link>
            </li>
            <li>
              <Link to="/articles">
                <font-awesome-icon icon="fa-solid fa-book" />
                <span>Articles</span>
              </Link>
            </li>
            <li>
              <Link to="/forum">
                <font-awesome-icon icon="fa-solid fa-rectangle-list" />
                <span>Forum</span>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/settings">
                <font-awesome-icon icon="fa-solid fa-gear" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/organization">
                <span>Organization</span>
                <font-awesome-icon icon="fa-solid fa-users" />
              </Link>
            </li>

            <li>
              <Link to="/profile">
                <span>Profile</span>
              </Link>
              <font-awesome-icon icon="fa-solid fa-users" />
            </li>
          </ul>
        </div>
      </div>
  );
}
