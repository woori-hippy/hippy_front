import React from "react";
import ProductContainer from "../container/ProductContainer";

const ProductPage = ({ match }) => {
  const { id } = match.params; // URL 파라미터 조회하기

  return <ProductContainer productId={parseInt(id, 10)} />;
};

export default ProductPage;
