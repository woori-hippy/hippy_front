import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import { create_nft, delete_nft } from "../modules/nftItems";

const MainContainer = (props) => {
  const nftItems = useSelector((state) => state.nftItems);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(create_nft(text));
  const onDelete = (id) => dispatch(delete_nft(id));

  return <Main nftItems={nftItems} onCreate={onCreate} onDelete={onDelete} />;
};

export default MainContainer;
