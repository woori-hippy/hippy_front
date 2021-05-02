import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateNFT from "../components/CreateNFT";
import { createNFT } from "../modules/nft";
import { getNFTProfile } from "../modules/user";

const CreateNFTContainer = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleCreateNFT = (hash) => {
    dispatch(createNFT(hash));
    dispatch(getNFTProfile());
  };

  return <CreateNFT user={user} onCreateNFT={handleCreateNFT} />;
};

export default CreateNFTContainer;
