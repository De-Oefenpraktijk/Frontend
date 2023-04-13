import axios from "axios";
import { GETPUBLICROOM } from './ConnectionStrings';

export default function getPublicRooms(workspaceId) {
  const config = {
    method: "get",
    url: GETPUBLICROOM + workspaceId,
    headers: {
      Authorization: "Bearer " + "aaa",
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error fetching a room");
      alert("Error fetching a room");
    });
}
