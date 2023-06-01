import axios from "axios";
import { 
    ROOM_URL,
    PUBLIC_ROOM_URL,
} 
from "./ConnectionStrings";


// ====== Auth middleware ======
// Middleware function to fetch and add token to request headers
async function authMiddleware(config, getAccessTokenSilently, withScope=false) {
    const tokeOptions = withScope ? { scope: 'create:public-rooms' } : {}
    const token = await getAccessTokenSilently(tokeOptions);
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
}

async function createRoom(getAccessTokenSilently, newRoom) {
    let config = {
      method: "post",
      url: ROOM_URL,
      headers: {
        contentType: "application/json",
      },
      data: newRoom,
    };
    config = await authMiddleware(config, getAccessTokenSilently);
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error creating room");
        alert("Error creating room");
      });
}

async function createPublicRoom(getAccessTokenSilently, newRoom) {
    let config = {
      method: "post",
      url: PUBLIC_ROOM_URL,
      headers: {
        contentType: "application/json",
      },
      data: newRoom,
    };
    config = await authMiddleware(config, getAccessTokenSilently, true);
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error creating public room");
        alert("Error creating public room");
      });
}

async function getPublicRooms(workspaceId, getAccessTokenSilently) {
    let config = {
      method: "get",
      url: PUBLIC_ROOM_URL + workspaceId,
      headers: {
        contentType: "application/json",
      },
    };
    config = await authMiddleware(config, getAccessTokenSilently);
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error getting public rooms");
        alert("Error getting public rooms");
      });
}

async function getUserRoomsByWorkspace(workspaceId, userId, getAccessTokenSilently) {
    let config = {
      method: "get",
      url: ROOM_URL + workspaceId + "/" + userId,
      headers: {
        contentType: "application/json",
      },
    };
    config = await authMiddleware(config, getAccessTokenSilently);
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error getting rooms");
        alert("Error getting rooms");
      });
}

export default {
  createPublicRoom,
  createRoom,
  getPublicRooms,
  getUserRoomsByWorkspace,
}