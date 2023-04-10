import axios from "axios";
import { GETWORKSPACESURL } from "./ConnectionStrings";

export default async function getWorkspaces(setWorkspaces) {
  return axios
    .get(GETWORKSPACESURL)
    .then((response) => {
      setWorkspaces(response.data);
    })
    .catch((err) => {
      console.log("error: " + err);
    });
}
