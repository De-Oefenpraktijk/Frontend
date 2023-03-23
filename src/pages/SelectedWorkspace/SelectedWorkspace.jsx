import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

import { Link, useParams } from "react-router-dom";

export default function SelectedWorkspace() {
  const [meetingRooms, setMeetingRooms] = useState([]);
  const params = useParams();
  const hostid = "Placeholder";

  useEffect(() => {
    axios
      .get(`http://localhost:5137/api/v1/Room/${hostid}/${params["id"]}`)
      .then((response) => {
        setWorkspaces(response.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  return (
    <>
      <h1>hi workspace {params["id"]}</h1>
      <div>
        <Form.Label>Choose a meeting room:</Form.Label>
        <Form.Select style={{width: "200px"}}>
          <option value=""></option>
          {meetingRooms.map((room) => {
            return <option value={room["id"]}>{room["name"]}</option>;
          })}
        </Form.Select>
      </div>
    </>
  );
}
