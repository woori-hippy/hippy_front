import axios from "axios";

export const profileRequest = async () => {
  const response = await axios({
    method: "get",
    url: "/profile",
  });
  return response.data.user;
};
