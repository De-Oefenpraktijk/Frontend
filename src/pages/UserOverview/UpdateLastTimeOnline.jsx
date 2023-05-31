import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateLastTimeOnline = () => {
  const TIME_INTERVAL = 6000;
  const config = {
    method: "put",
    url: "http://localhost:7147/api/v1/user/updateactivitystatus/646f2535cb5634aabf8463a7",
    headers: {
      contentType: "application/json",
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      axios(config).then((response) => response.data);
      console.log("Logs every minute");
    }, TIME_INTERVAL);

    return () => clearInterval(interval);
  }, []);
};

export default UpdateLastTimeOnline;
