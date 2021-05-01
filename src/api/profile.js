import axios from "axios";

export const getProfile = async () => {
  const response = await axios({
    method: "get",
    url: "/profile",
  });
  return response.data.user;
};

export const getNFTProfile = async () => {
  const response = await axios({
    method: "get",
    url: "/profile/nft",
  });
  return response.data;
};

export const updateWooriAccount = async (account) => {
  const response = await axios({
    method: "patch",
    url: "/profile/woori",
    data: {
      wooriAccount: account.wooriAccount,
      wooriToken: account.wooriToken,
    },
  });
  return response.data;
};

export const updateCoinAccount = async (account) => {
  const response = await axios({
    method: "patch",
    url: "/profile/coin",
    data: {
      coinAccount: account.coinAccount,
    },
  });
  return response.data;
};
