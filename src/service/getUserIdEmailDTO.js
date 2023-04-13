import axios from "axios";
import { GETINVITEDUSERSURL } from "./ConnectionStrings";

export function getUserIdEmailDTO(substr) {
  return axios.get(GETINVITEDUSERSURL + substr);
}
