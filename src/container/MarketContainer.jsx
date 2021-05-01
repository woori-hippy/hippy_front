import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Market from "../components/Market";
import { clearPost, getProducts } from "../modules/products";

const MarketContainer = (props) => {
  const user = useSelector((state) => state.login.user);
  const { data, loading, error } = useSelector(
    (state) => state.products.products
  );
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청`
  useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch]);

  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Market products={data} loading={loading && !data} user={user} />;
};

export default MarketContainer;
