import axios from "axios";
import { GETUSERROOMSBYWORKSPACEURL } from "./ConnectionStrings";

export default function getUserRoomsByWorkspace(setMeetingRooms,setWorkspaceName,workspaceId,userId){
    return axios
      .get(GETUSERROOMSBYWORKSPACEURL + workspaceId + "/" + userId)
      .then((response) => {
        setMeetingRooms(response.data.rooms);
        setWorkspaceName(response.data.name);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
}