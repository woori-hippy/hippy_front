import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NFTCreate from "../components/NFTCreate";
import { createNFT } from "../modules/nft";

const NFTCreateContainer = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleCreateNFT = (hash) => {
    dispatch(createNFT(hash));
  };

  return <NFTCreate user={user} onCreateNFT={handleCreateNFT} />;
};

export default NFTCreateContainer;
