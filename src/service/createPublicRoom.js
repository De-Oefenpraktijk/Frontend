import axios from "axios";
import {POSTPUBLICROOMURL} from './ConnectionStrings'

export default function createPublicRoom(body) {
  const config = {
    method: "post",
    url: POSTPUBLICROOMURL,
    headers: {
    //TODO:    
    //   Authorization: "Bearer " + "<key>",
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
