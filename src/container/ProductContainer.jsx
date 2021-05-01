import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProduct } from "../modules/products";

const ProductContainer = ({ productId }) => {
  const user = useSelector((state) => state.user.user);
  const { data, loading, error } = useSelector(
    (state) => state.products.product[productId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    console.log("dispatch 시작");
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Product product={data} user={user} />;
};

export default ProductContainer;
