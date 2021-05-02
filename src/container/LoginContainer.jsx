import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Login from "../components/Login";
import { login } from "../modules/user";

const LoginContainer = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user.data) history.push("/mypage");
  }, [history, user]);

  return <Login onLogin={handleLogin} />;
};

export default LoginContainer;
