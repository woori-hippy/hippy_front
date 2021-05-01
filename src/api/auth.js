import axios from "axios";

export const loginRequest = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "/auth/signin",
    data: {
      email: email,
      password: password,
    },
  });
  return response.data;
};

export const signoutRequest = async () => {
  const response = await axios({
    method: "post",
    url: "/auth/signout",
  });
  return null;
};

export const signupRequest = async ({ name, email, password }) => {
  const response = await axios({
    method: "post",
    url: "/auth/signup",
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return response.data;
};
