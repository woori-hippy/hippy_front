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

export const oauthKakao = async (token) => {
  const response = await axios({
    method: "get",
    url: "/api/oauth/kakao",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return response.data[0];
};

export const oauthGoogle = async (token) => {
  const response = await axios({
    method: "post",
    url: `/api/oauth/google`,
    data: {
      token_type: token.token_type || "bearer",
      access_token: token.access_token,
      scope: token.scope || "",
      expires_in: token.expires_in || "",
      id_token: token.id_token || "",
      expires_at: token.expires_at || "",
    },
  });
  return response.data;
};
