import axios from "axios";

export const login = async ({ email, password }) => {
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

export const signout = async () => {
  const response = await axios({
    method: "post",
    url: "/auth/signout",
  });
  return null;
};

export const signup = async ({ name, email, password }) => {
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
