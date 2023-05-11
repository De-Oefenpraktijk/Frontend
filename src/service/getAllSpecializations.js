import axios from "axios";
import { GET_ALL_SPECIALIZATIONS_URL } from "./ConnectionStrings";

export default function getAllSpecializations() {
  const config = {
    method: "get",
    url: GET_ALL_SPECIALIZATIONS_URL,
    headers: {
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding all specializations");
      alert("Error finding all specializations");
    });
}
