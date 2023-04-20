import axios from "axios";
import { GETUSERURL } from "./ConnectionStrings";

function getUserById(userId) {
  const config = {
    method: "get",
    url: GETUSERURL + userId,
    headers: {
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error finding user");
      alert("Error fetching a user");
    });
}
export default {
  getUserByIds,
};
