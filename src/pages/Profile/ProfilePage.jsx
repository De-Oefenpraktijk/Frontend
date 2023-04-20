import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import userProfileService from "../../service/userProfileService";
import { useAuth0 } from "@auth0/auth0-react";

import "./ProfilePage.css";

const userDataSkeleton = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  workplace: "",
};

export default function ProfilePage() {
  const [userData, setUserData] = useState(userDataSkeleton);
  const { user } = useAuth0();

  useEffect(() => {
    userProfileService.getUserByIds();
  });
  return (
    <>
      <div className="profile">
        <div className="mainCard left-card">
          <div className="mainCard__header">
            <span>user</span>
          </div>
          <div className="profile_image">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile_image"
            />
          </div>
          <div className="personal_details">
            <div>
              <label>First Name</label>
              <input
                className="input-default"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                className="input-default"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <div>
              <label>Username</label>
              <input
                className="input-default"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="input-default"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <label>Workplace</label>
              <input
                className="input-default"
                type="text"
                placeholder="Workplace"
              />
            </div>
            <div className="buttons" v-if="isOwnProfile()">
              <Button>Update</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
