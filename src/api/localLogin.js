import axios from "axios";

export const loginLequest = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "hi",
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
    url: "hi",
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return response.data;
};
