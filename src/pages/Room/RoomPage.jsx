import { JitsiMeeting } from "@jitsi/react-sdk";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

export default function RoomPage() {
  // Skeletons
  const configSettingsSkeleton = {
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: false,
    enableEmailInStats: false,
  };

  // useState
  const [room, setRoom] = useState(null);
  const [username, setUsername] = useState("Example User");
  const { user } = useAuth0();
  const [configSettings, setConfigSettings] = useState(configSettingsSkeleton);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect
  useEffect(() => {
    setUsername(user.nickname);
  }, [user]);

  useEffect(() => {
    if (location.state == null) {
      navigate("/workspaces"); //if there is no room saved in the location, go back to the previous page
    } else {
      setRoom(location.state.room);
    }
  }, []);

  return (
    <div className="room" style={{ height: "80vh" }}>
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
            iframeRef.style.height = "100%";
          }}
        />
      )}
    </div>
  );
}
