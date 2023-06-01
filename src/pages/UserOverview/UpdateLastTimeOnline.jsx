import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import userProfileService from "../../service/userProfileService";
import getUserEmail from "../../utils/getUserEmail";

const UpdateLastTimeOnline = () => {
  const TIME_INTERVAL = 60000;
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await userProfileService.updateUserAcitvityStatus(getUserEmail(user), getAccessTokenSilently)
        if (response) {
          console.log("User is online!");
        }
      } catch(err) {
        console.log(err);
      }
    }, TIME_INTERVAL);

    return () => clearInterval(interval);
  }, []);
};

export default UpdateLastTimeOnline;
