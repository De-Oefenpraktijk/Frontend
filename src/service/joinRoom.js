import axios from "axios";
export default function getRoom(roomId) {
  const config = {
    method: "get",
    url: `http://localhost:5137/api/v1/Room/room/${roomId}`,
    headers: {
      Authorization: "Bearer " + "aaa",
      contentType: "application/json",
    },
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error fetching a room");
      alert("Error fetching a room");
    });
}
