import axios from "axios";
export const signUpService = async ({ email, name, password }) =>
  await axios.post(
    "/api/auth/signup",
    {
      email,
      password,
      name,
    },

    { headers: { "Content-Type": "application/json" } }
  );
