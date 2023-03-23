import React from "react";
import "./TopBar.css";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function TopBar() {
  const location = useLocation();
  const { user, logout } = useAuth0();
  function title() {
    switch (location.pathname) {
      case "/overview":
        return <h1>OVERVIEW</h1>;
      case "/search":
        return <h1>SEARCH</h1>;
      case "/workspaces":
        return <h1>WORKSPACES</h1>;
      case "/social":
        return <h1>SOCIAL</h1>;
      case "/calendar":
        return <h1>CALENDAR</h1>;
      case "/articles":
        return <h1>ARTICLES</h1>;
      case "/forum":
        return <h1>FORUM</h1>;
      case "/settings":
        return <h1>SETTINGS</h1>;
      case "/organization":
        return <h1>ORGANIZATION</h1>;
      case "/profile":
        return <h1>PROFILE</h1>;
      default:
        return <h1>404</h1>;
    }
  }

  return (
    <div className="topbar">
      <div className="title">{title()}</div>
      <div>
        <div className="topbar__profile">
          <div className="topbar__profile__dropdown">
            <div className="topbar__profile__dropdown__button">
              <span>{user.given_name}</span>
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </div>
            <div className="topbar__profile__dropdown__content">
              <ul>
                <li>
                  <font-awesome-icon icon="fa-solid fa-user" />
                  <span>Profile</span>
                </li>
                <li onClick={() => logout({logoutParams:{returnTo:window.location.origin}})}>
                  <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
}
