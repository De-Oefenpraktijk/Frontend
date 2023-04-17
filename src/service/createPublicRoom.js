import axios from "axios"
import {POSTPUBLICROOMURL} from './ConnectionStrings'

export default async function createPublicRoom(body, getAccessTokenSilently) {
  try{
    const token = await getAccessTokenSilently();
    const config = {
      method: "post",
      url: POSTPUBLICROOMURL,
      headers: {    
        Authorization: `Bearer ${token}`,
        contentType: "application/json",
      },
      data: body,
    };
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error creating room");
        alert("Error creating room");
      });
  } catch(err) {
    console.error(err);
  }
}