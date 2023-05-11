import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import userProfileService from "../../service/userProfileService";
import { useAuth0 } from "@auth0/auth0-react";
import Select from "@mui/material/Select";
import getAllFunctions from "../../service/getAllFunctions";
import getAllEducations from "../../service/getAllEducations";
import getAllSpecializations from "../../service/getAllSpecializations";
import "./ProfilePage.css";

const userDataSkeleton = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  workplace: "",
  function: "",
  educations: [],
  specializations: [],
  biography: "",
  hobbies: [],
};

export default function ProfilePage() {
  const [userData, setUserData] = useState(userDataSkeleton);
  const [allFunctions, setAllFunctions] = useState([{id:"",name:""}]);
  const [allEducations, setAllEducations] = useState([""]);
  const [allSpecializations, setAllSpecializations] = useState([""]);

  const { user } = useAuth0();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSelectEducationsChange = (event, values) => {
    setUserData({ ...userData, ["educations"]: values });
  };
  const handleSelectSpecializationsChange = (event, values) => {
    setUserData({ ...userData, ["specializations"]: values });
  };
  const handleSelectHobbiesChange = (event, values) => {
    setUserData({ ...userData, ["hobbies"]: values });
  };
  const getUserEmail = () => {
    return process.env.NODE_ENV === "production"
      ? user.email
      : "example@gmail.com";
  };

  const updateProfileData = async () => {
    try {
      const response = await userProfileService.updateUserByEmail(
        getUserEmail(),
        userData
      );
    } catch (e) {
      console.log("Problem occured while updating the profile information!");
      alert("Problem occured while updating the profile information!");
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const response = await userProfileService.getUserByEmail(getUserEmail());
      setUserData(response);
    };

    const getAllFunctionsData = async () => {
      const response = await getAllFunctions();
      setAllFunctions(response);
    };

    const getAllSpecializationsData = async () => {
      const response = await getAllSpecializations();
      setAllSpecializations(response);
    };

    const getAllEducationsData = async () => {
      const response = await getAllEducations();
      setAllEducations(response);
    };
    getAllEducationsData();
    getAllFunctionsData();
    getAllSpecializationsData();
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
            <Stack spacing={3} sx={{ width: 300 }}>
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

              {/* Function */}
              <Select
                id="standard-select-currency"
                name="function"
                label="Function"
                value={userData.function}
                onChange={handleChange}
                variant="standard"
              >
                {allFunctions.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>

              {/* Educations */}
              <Autocomplete
                multiple
                id="tags-standard"
                name="educations"
                options={allEducations.map((education) => education.name)}
                onChange={handleSelectEducationsChange}
                value={userData.educations}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Educations"
                    placeholder="Favorites"
                  />
                )}
              />

              {/* Specializations */}
              <Autocomplete
                multiple
                name="specializations"
                onChange={handleSelectSpecializationsChange}
                id="tags-standard"
                options={allSpecializations.map((specialization)=>specialization.name)}
                value={userData.specializations} //TODO Change
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Specializations"
                    placeholder="Favorites"
                  />
                )}
              />

              {/* Biography */}
              <TextField
                id="outlined-multiline-static"
                label="Biography"
                name="biography"
                onChange={handleChange}
                multiline
                rows={4}
                value={userData.biography} //TODO Change
              />

              {/* Hobbies */}
              <Autocomplete
                multiple
                id="tags-filled"
                value={userData.hobbies}
                name="hobbies"
                onChange={handleSelectHobbiesChange}
                options={[""]}
                freeSolo
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Hobbies"
                    placeholder="Your hobbies"
                  />
                )}
              />
            </Stack>

            <div className="buttons" v-if="isOwnProfile()">
              <Button onClick={updateProfileData}>Update</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
