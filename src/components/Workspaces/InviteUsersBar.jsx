import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";
import {GetDataBySubstr} from "../../service/inviteUsers";

const DEBOUNCE_DELAY = 250; // milliseconds

export default function InviteUsers(props) {
  const [inputValue, setInputValue] = useState('*');
  const [options, setOptions] = useState([]);


  useEffect(() => {
    const getData = async () => {
      await GetDataBySubstr(inputValue).then((response) => {
        setInputValue('*');
        setOptions(response.data.map(x => x.Values));
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
        getOptionLabel={(option) => option["n.Email"]}
        defaultValue={[]}
        filterSelectedOptions
        onChange={handleSelectedValuesChange}
        isOptionEqualToValue={(option, value) => option["n.Email"] === value["n.Email"]}
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
