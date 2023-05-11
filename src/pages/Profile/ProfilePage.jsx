import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import userProfileService from "../../service/userProfileService";
import { useAuth0 } from "@auth0/auth0-react";
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
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

  const getUserEmail = () => {
    return process.env.NODE_ENV === "production" ? user.email : "example@gmail.com"
  }

  const updateProfileData = async () => {
    try {
      const response = await userProfileService.updateUserByEmail(getUserEmail(), userData);
      console.log("Updated user: ", response);
    } catch(e) {
      console.log("Problem occured while updating the profile information!");
      alert("Problem occured while updating the profile information!");
    }
  }

  useEffect(() => {
    const getUserData = async () => {
      const response = await userProfileService.getUserByEmail(getUserEmail());
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
              <InputLabel>First Name</InputLabel>
              <TextField
                name="firstName"
                id="outlined-basic" 
                variant="outlined"
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputLabel>Last Name</InputLabel>
              <TextField
                name="lastName"
                id="outlined-basic" 
                variant="outlined"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <InputLabel>Username</InputLabel>
              <TextField
                name="username"
                id="outlined-basic" 
                variant="outlined"
                disabled
                value={userData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputLabel>Email</InputLabel>
              <TextField
                name="email"
                id="outlined-basic" 
                variant="outlined"
                value={userData.email}
                disabled
                onChange={handleChange}
              />
            </div>
            <div>
              <InputLabel>Workplace</InputLabel>
              <TextField
                name="workplace"
                id="outlined-basic" 
                variant="outlined"
                value={userData.workplace}
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
