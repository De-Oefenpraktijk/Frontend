import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  InputLabel,
  TextField,
  Button,
  Autocomplete,
  MenuItem,
  Stack,
  Select,
  Chip,
  Grid,
} from "@mui/material";
import userProfileService from "../../service/userProfileService";
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
  const [allFunctions, setAllFunctions] = useState([{ id: "", name: "" }]);
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
            <Grid
              container
              direction="row"
              gap={2}
              style={{ justifyContent: "center" }}
            >
              <Grid item xs={5}>
                {/* Basic Profile information */}
                <Stack spacing={4.5}>
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
                </Stack>
              </Grid>
              <Grid item xs={5}>
                <Stack spacing={3} sx={{ maxWidth: "450px" }}>
                  {/* Function */}
                  <TextField
                    id="standard-select-currency"
                    labelId="select-label"
                    name="function"
                    value={userData.function}
                    select
                    label="Function"
                    onChange={handleChange}
                  >
                    {allFunctions.map((option) => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* Educations */}
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    name="educations"
                    options={allEducations.map((education) => education.name)}
                    onChange={handleSelectEducationsChange}
                    value={userData.educations}
                    limitTags={2}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
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
                    options={allSpecializations.map(
                      (specialization) => specialization.name
                    )}
                    limitTags={2}
                    value={userData.specializations} //TODO Change
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
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
                    size="small"
                    freeSolo
                    classes={{ inputRoot: "autocompleteContainer" }}
                    ListboxProps={{ style: { maxHeight: 150 } }}
                    limitTags={3}
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
                        variant="outlined"
                        label="Hobbies"
                        placeholder="Your hobbies"
                      />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
            <div className="buttons" v-if="isOwnProfile()">
              <Button variant="outlined" onClick={updateProfileData}>
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
