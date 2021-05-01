import React from "react";
import { useSelector } from "react-redux";
import BankAccountRegister from "../components/BankAccountRegister";

const BankAccountRegisterContainer = (props) => {
  const user = useSelector((state) => state.user.user);
  return <BankAccountRegister user={user} />;
};

export default BankAccountRegisterContainer;
