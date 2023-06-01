export default function getUserEmail(user) {
    return process.env.NODE_ENV === "production"
      ? user.email
      : "example@gmail.com";
};