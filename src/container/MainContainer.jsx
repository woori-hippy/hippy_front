import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import { getProducts } from "../modules/products";

const MainContainer = (props) => {
  const user = useSelector((state) => state.login.user);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    console.log("dispatch 시작");
    dispatch(getProducts());
  }, [dispatch]);

  if (products.loading && !products.data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (products.error) return <div>에러 발생!</div>;
  if (!products.data) return null;

  return (
    <Main
      products={products.data}
      loading={products.loading && !products.data}
      user={user}
    />
  );
};

export default MainContainer;
