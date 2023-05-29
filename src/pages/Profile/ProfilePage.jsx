import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  TextField,
  Button,
  Autocomplete,
  MenuItem,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import userProfileService from "../../service/userProfileService";
import "./ProfilePage.css";
import getUserEmail from "../../utils/getUserEmail";

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

  const { user, getAccessTokenSilently } = useAuth0();

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

  const updateProfileData = async () => {
    try {
      const response = await userProfileService.updateUserByEmail(
        getUserEmail(user),
        getAccessTokenSilently,
        userData
      );
      if (response) {
        console.log("Successful profile update!");
      }
    } catch (e) {
      console.log("Problem occured while updating the profile information!");
      alert("Problem occured while updating the profile information!");
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const response = await userProfileService.getUserByEmail(getUserEmail(user), getAccessTokenSilently);
      setUserData(response);
    };

    const getAllFunctionsData = async () => {
      const response = await userProfileService.getAllFunctions(getAccessTokenSilently);
      setAllFunctions(response);
    };

    const getAllSpecializationsData = async () => {
      const response = await userProfileService.getAllSpecializations(getAccessTokenSilently);
      setAllSpecializations(response);
    };

    const getAllEducationsData = async () => {
      const response = await userProfileService.getAllEducations(getAccessTokenSilently);
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
        <div className="mainCard">
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
              gap={10}
              style={{ justifyContent: "center" }}
            >
              <Grid item md={12} lg={4}>
                {/* Basic Profile information */}
                <Stack spacing={4.9}>
                  <div>
                    <TextField
                      name="firstName"
                      id="outlined-basic"
                      label="First name"
                      variant="outlined"
                      value={userData.firstName}
                      onChange={handleChange}
                      sx={{ minWidth: "300px", width: "100%" }}
                    />
                  </div>
                  <div>
                    <TextField
                      name="lastName"
                      id="outlined-basic"
                      label="Last name"
                      variant="outlined"
                      value={userData.lastName}
                      onChange={handleChange}
                      sx={{ minWidth: "300px", width: "100%" }}
                    />
                  </div>

                  <div>
                    <TextField
                      name="username"
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                      disabled
                      value={userData.username}
                      onChange={handleChange}
                      sx={{ minWidth: "300px", width: "100%" }}
                    />
                  </div>
                  <div>
                    <TextField
                      name="email"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      value={userData.email}
                      disabled
                      onChange={handleChange}
                      sx={{ minWidth: "300px", width: "100%" }}
                    />
                  </div>
                  <div>
                    <TextField
                      name="workplace"
                      id="outlined-basic"
                      label="Workplace"
                      variant="outlined"
                      value={userData.workplace}
                      sx={{ minWidth: "300px", width: "100%" }}
                      onChange={handleChange}
                    />
                  </div>
                </Stack>
              </Grid>
              <Grid item md={12} lg={6}>
                <Stack spacing={3}>
                  {/* Function */}
                  <TextField
                    id="standard-select-currency"
                    name="function"
                    value={userData.function}
                    label="Function"
                    onChange={handleChange}
                    variant="outlined"
                    select
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
                    // classes={{ inputRoot: "autocompleteContainer" }}

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
                    open={false}
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
