import axios from "axios";
import { 
  GET_USER_URL, 
  GET_USER_BY_EMAIL_URL, 
  UPDATE_USER_URL, 
  UPDATE_USER_BY_EMAIL_URL,
  GET_USERS_ACTIVITY_URL,
  UPDATE_USER_ACTIVITY,
  GET_ALL_FUNCTIONS_URL,
  GET_ALL_SPECIALIZATIONS_URL,
  GET_ALL_EDUCATIONS_URL
} 
from "./ConnectionStrings";

// ====== Auth middleware ======
// Middleware function to fetch and add token to request headers
async function authMiddleware(config, getAccessTokenSilently, withScope=false) {
  const tokeOptions = withScope ? { scope: 'manage:profile' } : {}
  const token = await getAccessTokenSilently(tokeOptions);
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  return config;
}

// ====== User ======
async function getUserById(userId, getAccessTokenSilently) {
  let config = {
    method: "get",
    url: GET_USER_URL + userId,
    headers: {
      contentType: "application/json",
    },
  };
  config = await authMiddleware(config, getAccessTokenSilently, true);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding user");
      alert("Error finding a user");
    });
}

async function getUserByEmail(userEmail, getAccessTokenSilently) {
  let config = {
    method: "get",
    url: GET_USER_BY_EMAIL_URL + userEmail,
    headers: {
      contentType: "application/json",
    },
  };
  config = await authMiddleware(config, getAccessTokenSilently, true);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding user");
      alert("Error finding a user");
    });
}

async function updateUserById(userId, getAccessTokenSilently, userData) {
  let config = {
    method: "put",
    url: UPDATE_USER_URL + userId,
    headers: {
      contentType: "application/json",
    },
    data: userData,
  };
  config = await authMiddleware(config, getAccessTokenSilently, true);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error updating the user");
      alert("Error updating the user");
    });
}

async function updateUserByEmail(userEmail, getAccessTokenSilently, userData) {
  let config = {
    method: "put",
    url: UPDATE_USER_BY_EMAIL_URL + userEmail,
    headers: {
      contentType: "application/json",
    },
    data: userData,
  };
  config = await authMiddleware(config, getAccessTokenSilently, true);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error updating the user");
      alert("Error updating the user");
    });
}

// ====== User functions ======
async function getAllFunctions(getAccessTokenSilently) {
  let config = {
    method: "get",
    url: GET_ALL_FUNCTIONS_URL,
    headers: {
      contentType: "application/json",
    },
  };
  config = await authMiddleware(config, getAccessTokenSilently); 

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding functions");
      alert("Error finding a functions");
    });
}

// ====== User educations ======
async function getAllEducations(getAccessTokenSilently) {
  let config = {
    method: "get",
    url: GET_ALL_EDUCATIONS_URL,
    headers: {
      contentType: "application/json",
    },
  };
  config = await authMiddleware(config, getAccessTokenSilently); 

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding all educations");
      alert("Error finding all educations");
    });
}

// ====== User specializations ======
async function getAllSpecializations(getAccessTokenSilently) {
  let config = {
    method: "get",
    url: GET_ALL_SPECIALIZATIONS_URL,
    headers: {
      contentType: "application/json",
    },
  };
  config = await authMiddleware(config, getAccessTokenSilently); 

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding all specializations");
      alert("Error finding all specializations");
    });
}

// ====== User activity ======
async function getUsersActivityStatuses(getAccessTokenSilently) {
  let config = {
    method: "get",
    url: GET_USERS_ACTIVITY_URL,
    headers: {
      contentType: "application/json",
    },
  };
  config = await authMiddleware(config, getAccessTokenSilently);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error updating the user");
      alert("Error updating the user");
    });
}

async function updateUserAcitvityStatus(userEmail, getAccessTokenSilently) {
  let config = {
    method: "put",
    url: UPDATE_USER_ACTIVITY + userEmail,
    headers: {
      contentType: "application/json",
    },
  };
  config = await authMiddleware(config, getAccessTokenSilently);
  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error updating the user activity status");
  });
}

export default {
  // ====== user ======
  getUserById,
  getUserByEmail,
  updateUserById,
  updateUserByEmail,
  // ====== functions ======
  getAllFunctions,
  // ====== educations ======
  getAllEducations,
  // ====== specializations ======
  getAllSpecializations,
  // ====== user activity ======
  getUsersActivityStatuses,
  updateUserAcitvityStatus
};
