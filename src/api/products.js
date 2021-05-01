import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("http://localhost:4000/products");
  console.log(response);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`http://localhost:4000/products/${id}`);
  return response.data;
};
