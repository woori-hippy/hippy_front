import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Market from "../components/Market";
import { create_nft, delete_nft } from "../modules/nftItems";

const MarketContainer = (props) => {
  const nftItems = useSelector((state) => state.nftItems);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(create_nft(text));
  const onDelete = (id) => dispatch(delete_nft(id));
  return <Market nftItems={nftItems} />;
};

export default MarketContainer;
