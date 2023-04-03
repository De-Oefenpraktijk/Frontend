import axios from "axios";
import {POSTWORKSPACEURL} from './ConnectionStrings'

export default function createWorkspace(body) {
  const config = {
    method: "post",
    url: POSTWORKSPACEURL,
    headers: {
      Authorization: "Bearer " + "aaa",
      contentType: "multipart/form-data",

    },
    data: body,
  };


  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error creating workspace");
      alert("Error creating workspace");
    });
}