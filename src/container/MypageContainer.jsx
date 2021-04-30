import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mypage from "../components/Mypage";
import { getProducts } from "../modules/products";

const MypageContainer = (props) => {
  const { data, loading, error } = useSelector(
    (state) => state.products.products
  );
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  
  return <Mypage products={data} />;
};

export default MypageContainer;
