import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Mypage from "../components/Mypage";
import { goLogin } from "../modules/login";
import { getProducts } from "../modules/products";

const MypageContainer = (props) => {
  const user = useSelector((state) => state.login.user);
  const { data, loading, error } = useSelector(
    (state) => state.products.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Mypage products={data} user={user} />;
};

export default MypageContainer;
