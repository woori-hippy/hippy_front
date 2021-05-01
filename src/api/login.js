import axios from "axios";

export const loginLequest = async ({ email, password }) => {
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

export const signupLequest = async ({ name, email, password }) => {
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
