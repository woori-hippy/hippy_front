import axios from "axios";

export const createNFT = async (ipfsHash) => {
  const response = await axios({
    method: "post",
    url: "/api/nft",
    data: {
      ipfsHash: ipfsHash,
    },
  });
  return response.data;
};

export const estimateGas = async (ipfsHash) => {
  const response = await axios({
    method: "post",
    url: "/api/nft/estimate",
    data: {
      ipfsHash: ipfsHash,
    },
  });
  return response.data;
};
