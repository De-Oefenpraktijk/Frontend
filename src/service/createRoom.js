import axios from "axios";
import {POSTROOMURL} from './ConnectionStrings'

export default function createRoom(body) {
  const config = {
    method: "post",
    url: POSTROOMURL,
    headers: {
      Authorization: "Bearer " + "aaa",
      contentType: "application/json",
    },
    data: body,
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error creating room");
      alert("Error creating room");
    });
}
