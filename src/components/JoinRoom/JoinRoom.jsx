import { JitsiMeeting } from "@jitsi/react-sdk";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

//import uuid v4
import { v4 as uuid } from "uuid";
import getRoom from "../../service/joinRoom";
import { useParams, useNavigate } from "react-router-dom";

export default function JoinRoom() {
  // Skeletons
  const configSettingsSkeleton = {
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: false,
    enableEmailInStats: false,
  };

  // Const vars
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  // Params
  const { roomId } = useParams();

  // useState
  const [room, setRoom] = useState(null);
  const [username, setUsername] = useState("Example User");
  const { user } = useAuth0();
  const [configSettings, setConfigSettings] = useState(configSettingsSkeleton);
  const navigate = useNavigate();

  // helper functions
  const fetchRoom = async (roomId) => {
    getRoom(roomId)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error fetching a room");
        alert("Error fetching a room");
      });
  };

  // useEffect
  useEffect(() => {
    setUsername(user.nickname);
  }, [user]);

  useEffect(() => {
    fetchRoom(roomId);
  }, [roomId]);

  return (
    <>
      {room && (
        <JitsiMeeting
          // domain = { YOUR_DOMAIN }
          roomName={room.roomName}
          configOverwrite={configSettings}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}
          userInfo={{
            displayName: username,
          }}
          onApiReady={(externalApi) => {
            // here you can attach custom event listeners to the Jitsi Meet External API
            // you can also store it locally to execute commands
            externalApi.addListener("videoConferenceLeft", function () {
              navigate(`/workspace/${room.workspaceId}`);
            });
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "400px";
          }}
        />
      )}
    </>
  );
}
