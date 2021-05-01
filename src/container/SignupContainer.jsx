import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Signup from "../components/Signup";
import { signupLequest } from "../modules/login";

const SignupContainer = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const handleSignup = ({ name, email, password }) => {
    console.log(name);
    console.log(email);
    console.log(password);
    dispatch(signupLequest({ name, email, password }));
  };

  useEffect(() => {
    if (user.data) history.push("/");
  }, [dispatch, user, history]);

  return <Signup onSignup={handleSignup} />;
};

export default SignupContainer;
