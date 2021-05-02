import axios from "axios";

export const getProfile = async () => {
  const response = await axios({
    method: "get",
    url: "/api/profile",
  });
  return response.data.user;
};

export const accountChangeReqeust = async (wooriAccount, wooriToken) => {
  const response = await axios({
    method: "patch",
    url: "/api/profile/woori",
    data: {
      wooriAccount: wooriAccount,
      wooriToken: wooriToken,
    },
  });
  return response.data;
};

export const getNFTProfile = async () => {
  const response = await axios({
    method: "get",
    url: "/api/profile/nft",
  });
  return response.data;
};

export const updateCoinAccount = async (account) => {
  const response = await axios({
    method: "patch",
    url: "/api/profile/coin",
    data: {
      coinAccount: account.coinAccount,
    },
  });
  return response.data;
};
