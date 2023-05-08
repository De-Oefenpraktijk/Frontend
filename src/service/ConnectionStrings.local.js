export const ROOMURL = "http://localhost:5137/api/v1/";

export const SOCIALSERVICEURL = "http://localhost:5672/";

export const PROFILESERVICEURL = "https://localhost:7147/api/v1/"

export const GETWORKSPACESURL = ROOMURL + "Workspace";

export const GETROOMURL = ROOMURL + "Room/";

export const GETUSERROOMSBYWORKSPACEURL = ROOMURL + "Room/";

export const GETROOMROOMURL = ROOMURL + "Room/room/";

export const POSTROOMURL = ROOMURL + "Room";

export const GETPUBLICROOMURL = ROOMURL + "PublicRoom";

// TODO: Change it ROOMURL
export const POSTPUBLICROOMURL = ROOMURL + "PublicRoom";

export const POSTWORKSPACEURL = ROOMURL + "Workspace";

export const GETINVITEDUSERSURL = SOCIALSERVICEURL + "Person/dtos/emailandid/";

export const GET_USER_URL = PROFILESERVICEURL + "User/GetUserById/";

export const GET_USER_BY_EMAIL_URL = PROFILESERVICEURL + "User/GetUserByEmail/";

export const UPDATE_USER_URL = PROFILESERVICEURL + "User/UpdateUser/";

export const UPDATE_USER_BY_EMAIL_URL = PROFILESERVICEURL + "User/UpdateUserByEmail/";