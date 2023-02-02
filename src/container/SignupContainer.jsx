import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInternalRouter from "../pages/useInternalRouter";
import Signup from "../components/Signup";
import { signup } from "../modules/user";

const SignupContainer = (props) => {
  const router = useInternalRouter();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleSignup = ({ name, email, password }) => {
    dispatch(signup({ name, email, password }));
  };

  useEffect(() => {
    if (user.data) router.push("/");
  }, [dispatch, user, router]);

  return <Signup onSignup={handleSignup} />;
};

export default SignupContainer;
