import axios from "axios";
import { 
    WORKSPACES_URL,
} 
from "./ConnectionStrings";

// ====== Auth middleware ======
// Middleware function to fetch and add token to request headers
async function authMiddleware(config, getAccessTokenSilently) {
    const token = await getAccessTokenSilently();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
}

async function getWorkspaces(getAccessTokenSilently) {
    let config = {
      method: "get",
      url: WORKSPACES_URL,
      headers: {
        contentType: "application/json",
      },
    };
    config = await authMiddleware(config, getAccessTokenSilently);
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error getting workspaces");
        alert("Error getting workspaces");
      });
}

async function createWorkspace(getAccessTokenSilently, newWorkspace) {
    let config = {
      method: "post",
      url: WORKSPACES_URL,
      headers: {
        contentType: "application/json",
      },
      data: newWorkspace,
    };
    config = await authMiddleware(config, getAccessTokenSilently);
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error creating workspace");
        alert("Error creating workspace");
      });
}

export default {
    getWorkspaces,
    createWorkspace
}