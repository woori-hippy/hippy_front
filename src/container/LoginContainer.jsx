import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInternalRouter from "../pages/useInternalRouter";
import Login from "../components/Login";
import { login } from "../modules/user";

const LoginContainer = (props) => {
  const router = useInternalRouter();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user.data) router.push("/mypage");
  }, [router, user]);

  return <Login onLogin={handleLogin} />;
};

export default LoginContainer;
