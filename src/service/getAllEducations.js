import axios from "axios";
import { GET_ALL_EDUCATIONS_URL } from "./ConnectionStrings";

export default function getAllEducations() {
  const config = {
    method: "get",
    url: GET_ALL_EDUCATIONS_URL,
    headers: {
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding all educations");
      alert("Error finding all educations");
    });
}
