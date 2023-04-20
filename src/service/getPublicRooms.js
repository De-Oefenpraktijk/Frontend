import axios from "axios";
import { GETPUBLICROOMURL } from "./ConnectionStrings";

export default function getPublicRooms(workspaceId, setPublicRooms) {
  const config = {
    method: "get",
    url: GETPUBLICROOMURL + "/" + workspaceId,
    headers: {
      Authorization: "Bearer " + "aaa",
      contentType: "application/json",
    },
  };
  return axios(config)
    .then((response) => setPublicRooms(response.data))
    .catch(() => {
      console.error("Error fetching a room");
      alert("Error fetching a room");
    });
}
