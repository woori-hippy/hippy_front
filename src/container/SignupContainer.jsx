import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Signup from "../components/Signup";
import { signup } from "../modules/user";

const SignupContainer = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleSignup = ({ name, email, password }) => {
    dispatch(signup({ name, email, password }));
    history.push("/");
  };

  useEffect(() => {
    if (user.data) history.push("/");
  }, [dispatch, user, history]);

  return <Signup onSignup={handleSignup} />;
};

export default SignupContainer;
