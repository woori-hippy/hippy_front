import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Login from "../components/Login";
import { goMyPage, loginLequest } from "../modules/login";

const LoginContainer = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(loginLequest(email, password));
  };

  useEffect(() => {
    if (user.data) history.push("/mypage");
  }, [history, user]);

  return <Login onLoginLequest={handleLogin} />;
};

export default LoginContainer;
