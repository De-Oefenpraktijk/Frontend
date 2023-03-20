import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./TopBar.css";

export default function TopBar() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div className="topbar">
      <div className="title">
        <h1>Title</h1>
      </div>
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
                <li>
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
