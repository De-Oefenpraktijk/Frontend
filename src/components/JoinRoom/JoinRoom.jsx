import { JitsiMeeting } from '@jitsi/react-sdk';
import { useState } from 'react';

//import uuid v4
import { v4 as uuid } from 'uuid';

export default function JoinRoom() {
    // Skeletons
    const configSettingsSkeleton = {
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: false,
        enableEmailInStats: false
    }

    // Const vars
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)

    // useState
    const [roomName, setRoomName] = useState(`room-${small_id}`)
    const [username, setUsername] = useState("Example User");
    const [configSettings, setConfigSettings] = useState(configSettingsSkeleton);

    return (
        <JitsiMeeting
            // domain = { YOUR_DOMAIN }
            roomName = { roomName }
            configOverwrite = {configSettings}
            interfaceConfigOverwrite = {{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
            }}
            userInfo = {{
                displayName: username
            }}
            onApiReady = { (externalApi) => {
                // here you can attach custom event listeners to the Jitsi Meet External API
                // you can also store it locally to execute commands
            } }
            getIFrameRef = { (iframeRef) => { iframeRef.style.height = '400px'; } }
        />
    );
}
