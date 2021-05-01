import React from "react";
import { useSelector } from "react-redux";
import NFTCreate from "../components/NFTCreate";

const NFTCreateContainer = (props) => {
  const user = useSelector((state) => state.login.user);

  return <NFTCreate user={user} />;
};

export default NFTCreateContainer;
