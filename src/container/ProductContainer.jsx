import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Product from "../components/Product";
import { buyProduct, getProduct } from "../modules/products";

const ProductContainer = ({ productId }) => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const { data, loading, error } = useSelector(
    (state) => state.products.product[productId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatch 시작");
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const handleBuyProduct = () => {
    window.confirm("구매가 완료되었습니다");
    dispatch(buyProduct(data.id));
    history.push("/mypage");
  };

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <Product product={data} user={user} handleBuyProduct={handleBuyProduct} />
  );
};

export default ProductContainer;
