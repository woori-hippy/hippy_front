import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProduct from "../components/CreateProduct";
import { createProduct } from "../modules/products";

const CreateProductContainer = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleCreateProduct = (product) => {
    dispatch(createProduct(product));
  };

  return <CreateProduct user={user} onCreateProduct={handleCreateProduct} />;
};

export default CreateProductContainer;
