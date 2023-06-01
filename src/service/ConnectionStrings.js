// ===== BASE URLs =====
export const ROOM_SERVICE_URL = 
    process.env.NODE_ENV === "production" ?
    "https://oefenpraktijkapi.westeurope.cloudapp.azure.com/room/api/v1/"
    : "http://localhost:5137/api/v1/"

export const SOCIAL_SERVICE_URL = 
    process.env.NODE_ENV === "production" ?
    "https://oefenpraktijkapi.westeurope.cloudapp.azure.com/social/"
    : "http://localhost:5672/"

export const PROFILE_SERVICE_URL = 
    process.env.NODE_ENV === "production" ? 
    "https://oefenpraktijkapi.westeurope.cloudapp.azure.com/profile/api/v1/"
    : "https://localhost:7147/api/v1/"

// ===== Workspace =====
export const WORKSPACES_URL = ROOM_SERVICE_URL + "Workspace/";

// ===== Room =====
export const ROOM_URL = ROOM_SERVICE_URL + "Room/";

// ===== Public Room =====
export const PUBLIC_ROOM_URL = ROOM_SERVICE_URL + "PublicRoom/";

// ===== Social service: Invite users =====
export const GET_INVITED_USERS_URL = SOCIAL_SERVICE_URL + "Person/dtos/emailandid/";

// ===== User =====

// GET
export const GET_USER_URL = PROFILE_SERVICE_URL + "User/GetUserById/";
export const GET_USER_BY_EMAIL_URL = PROFILE_SERVICE_URL + "User/GetUserByEmail/";

export const GET_ALL_FUNCTIONS_URL = PROFILE_SERVICE_URL + "Function/GetAllFunctions";
export const GET_ALL_EDUCATIONS_URL = PROFILE_SERVICE_URL + "Education/GetEducations";
export const GET_ALL_SPECIALIZATIONS_URL = PROFILE_SERVICE_URL + "Specialization/GetAllSpecializations";
export const GET_USERS_ACTIVITY_URL = PROFILE_SERVICE_URL + "User/GetEveryonesActivityStatus/";

// Update
export const UPDATE_USER_URL = PROFILE_SERVICE_URL + "User/UpdateUser/";
export const UPDATE_USER_BY_EMAIL_URL = PROFILE_SERVICE_URL + "User/UpdateUserByEmail/";
export const UPDATE_USER_ACTIVITY = PROFILE_SERVICE_URL + "User/UpdateActivityStatus/";