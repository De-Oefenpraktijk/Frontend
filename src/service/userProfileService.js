import axios from "axios";
import { 
  GET_USER_URL, 
  GET_USER_BY_EMAIL_URL, 
  UPDATE_USER_URL, 
  UPDATE_USER_BY_EMAIL_URL } 
  from "./ConnectionStrings";

function getUserById(userId) {
  const config = {
    method: "get",
    url: GET_USER_URL + userId,
    headers: {
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding user");
      alert("Error finding a user");
    });
}

function getUserByEmail(userEmail) {
  const config = {
    method: "get",
    url: GET_USER_BY_EMAIL_URL + userEmail,
    headers: {
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding user");
      alert("Error finding a user");
    });
}

function updateUserById(userId, userData) {
  const config = {
    method: "put",
    url: UPDATE_USER_URL + userId,
    headers: {
      contentType: "application/json",
    },
    data: userData,
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error updating the user");
      alert("Error updating the user");
    });
}

function updateUserByEmail(userEmail, userData) {
  const config = {
    method: "put",
    url: UPDATE_USER_BY_EMAIL_URL + userEmail,
    headers: {
      contentType: "application/json",
    },
    data: userData,
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error updating the user");
      alert("Error updating the user");
    });
}

export default {
  getUserById,
  getUserByEmail,
  updateUserById,
  updateUserByEmail
};
