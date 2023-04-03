import axios from "axios";
import { GETROOMROOMURL } from './ConnectionStrings';

export default function getRoom(roomId) {
  const config = {
    method: "get",
    url: GETROOMROOMURL + roomId,
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
