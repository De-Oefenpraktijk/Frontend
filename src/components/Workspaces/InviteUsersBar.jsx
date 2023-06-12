import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import userProfileService from "../../service/userProfileService";
import { useAuth0 } from "@auth0/auth0-react";

const DEBOUNCE_DELAY = 250; // milliseconds

export default function InviteUsersBar(props) {
  const [inputValue, setInputValue] = useState('*');
  const [options, setOptions] = useState([]);
  const { getAccessTokenSilently } = useAuth0();


  useEffect(() => {
    const getData = async () => {
      await userProfileService.getUserIdEmailDTO(inputValue, getAccessTokenSilently).then((response) => {
        setInputValue('*');
        setOptions(response);
      });
    };

    const timer = setTimeout(() => {
      if (inputValue) {
        getData();
      }
    }, DEBOUNCE_DELAY);
    
    return () => clearTimeout(timer);
  }, [inputValue]);


  const handleSelectedValuesChange = (event, values) => {
    props.setSelectedValues(values);
  };

  return (
    (
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option["email"]}
        defaultValue={[]}
        filterSelectedOptions
        onChange={handleSelectedValuesChange}
        isOptionEqualToValue={(option, value) => option["email"] === value["email"]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Invite by email"
            placeholder="Users"
            onChange={(event) => setInputValue(event.target.value)}
          />
        )}
      />
    )
  );
}
