import React, { useState, useEffect } from "react";

const UpdateLastTimeOnline = () => {
  const TIME_INTERVAL = 60000;
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
    }, TIME_INTERVAL);

    return () => clearInterval(interval);
  }, []);
};

export default UpdateLastTimeOnline;
