import axios from "axios";
export default function createWorkspace(body) {
  const config = {
    method: "post",
    url: "http://localhost:5137/api/v1/Workspace",
    headers: {
      Authorization: "Bearer " + "aaa",
      contentType: "application/json",
    },
    data: body,
  };

  console.log(body);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error creating workspace");
      alert("Error creating workspace");
    });
}
