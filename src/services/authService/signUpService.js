import axios from "axios";
export const signUpService = async ({ email, username, password }) =>
  await axios.post("/api/auth/signup", {
    email,
    password,
    username,
  });
