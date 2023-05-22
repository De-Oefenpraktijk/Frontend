import axios from "axios";
import { GET_ALL_FUNCTION_URL } from "./ConnectionStrings";

export default function getAllFunctions() {
  const config = {
    method: "get",
    url: GET_ALL_FUNCTION_URL,
    headers: {
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding functions");
      alert("Error finding a functions");
    });
}
