import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import Mypage from "../components/Mypage";
import { goLogin } from "../modules/login";

const MypageContainer = (props) => {
  const { data, loading, error } = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  if (!data) {
    dispatch(goLogin());
    window.location.reload();
  } else {
    return <Mypage />;
  }
};

export default MypageContainer;
