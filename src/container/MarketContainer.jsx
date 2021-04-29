import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Market from "../components/Market";
import { getProducts } from "../modules/products";

const MarketContainer = (props) => {
  const { data, loading, error } = useSelector(
    (state) => state.products.products
  );
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading && !data) console.log("loading...");
  if (error) console.log("Error");
  if (!data) console.log("No data");

  return <Market products={data} loading={loading && !data} />;
};

export default MarketContainer;
