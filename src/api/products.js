import axios from "axios";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "/"
    : "https://woori-hippy.github.io/hippy_front/";

export const getProducts = async () => {
  const response = await axios.get("/products");
  console.log(response);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};
