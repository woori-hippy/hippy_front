import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Login from "../components/Login";
import { login, oauthGoogle, oauthKakao } from "../modules/user";

const LoginContainer = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { Kakao } = window;

  const handleLogin = (email, password) => {
    dispatch(login(email, password));
  };

  const handleOauthKakao = () => {
    Kakao.Auth.login({
      success: (response) => {
        dispatch(oauthKakao(response.access_token));
        alert("로그인 되었습니다.");
        history.push("/");
      },
      fail: (error) => {
        alert(JSON.stringify(error));
      },
    });
  };

  const handleOauthGoogle = (token) => {
    dispatch(oauthGoogle(token));
    alert("로그인 되었습니다.");
    history.push("/");
  };

  useEffect(() => {
    if (user.data) history.push("/");
  }, [history, user]);

  return (
    <Login
      onLogin={handleLogin}
      onOauthKakao={handleOauthKakao}
      onOauthGoogle={handleOauthGoogle}
    />
  );
};

export default LoginContainer;
