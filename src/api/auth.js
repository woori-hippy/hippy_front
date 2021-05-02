import axios from "axios";

export const login = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/signin",
    data: {
      email: email,
      password: password,
    },
  });
  return response.data;
};

export const signout = async () => {
  const response = await axios({
    method: "post",
    url: "/api/auth/signout",
  });
  return null;
};

export const signup = async ({ name, email, password }) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/signup",
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return response.data;
};
