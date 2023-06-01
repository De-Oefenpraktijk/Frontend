import axios from "axios";
import { GET_INVITED_USERS_URL } from "./ConnectionStrings";

export function getUserIdEmailDTO(substr) {
  return axios.get(GET_INVITED_USERS_URL + substr);
}
