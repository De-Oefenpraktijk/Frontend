import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const UpdateLastTimeOnline = () => {
  const TIME_INTERVAL = 60000;
  const { user } = useAuth0();
  const userId = user.sub.split("|")[1];

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .put(`https://localhost:7147/api/v1/User/UpdateActivityStatus/${userId}`)
        .then(response => {
          console.log("PUT request sent successfully. User is online.");
          // Handle response or perform additional actions if needed
        })
        .catch(error => {
          console.error("Error sending PUT request:", error);
          // Handle error if needed
        });
    }, TIME_INTERVAL);

    return () => clearInterval(interval);
  }, []);
};

export default UpdateLastTimeOnline;
