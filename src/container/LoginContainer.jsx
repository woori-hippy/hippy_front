import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import { goMyPage, loginLequest } from "../modules/login";

const LoginContainer = (props) => {
  const { data, loading, error } = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(loginLequest(email, password));
  };

  if (data) dispatch(goMyPage());
  return <Login onLoginLequest={handleLogin} />;
};

export default LoginContainer;
