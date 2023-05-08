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
  username: "",
  email: "",
  workplace: "",
};

export default function ProfilePage() {
  const [userData, setUserData] = useState(userDataSkeleton);
  const { user } = useAuth0();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value});
  };

  const updateProfileData = async () => {
    try {
      const response = await userProfileService.updateUserByEmail("ivan@gmail.com", userData);
      console.log("Updated user: ", response);
    } catch(e) {
      console.log("Problem occured while updating the profile information!");
      alert("Problem occured while updating the profile information!");
    }
  }

  useEffect(() => {
    const getUserData = async () => {
      const response = await userProfileService.getUserByEmail("ivan@gmail.com");
      setUserData(response);
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="profile">
        <div className="mainCard left-card">
          <div className="mainCard__header">
            <span>User</span>
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
                name="firstName" 
                className="input-default"
                type="text"
                placeholder="First Name"
                defaultValue={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                name="lastName"
                className="input-default"
                type="text"
                placeholder="Last Name"
                defaultValue={userData.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Username</label>
              <input
                name="username"
                className="input-default"
                type="text"
                placeholder="Username"
                defaultValue={userData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                className="input-default"
                type="text"
                placeholder="Email"
                defaultValue={userData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Workplace</label>
              <input
                name="workplace"
                className="input-default"
                type="text"
                placeholder="Workplace"
                defaultValue={userData.workplace}
                onChange={handleChange}
              />
            </div>
            <div className="buttons" v-if="isOwnProfile()">
              <Button onClick={updateProfileData}>Update</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
