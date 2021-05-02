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

export const createProduct = async (product) => {
  const response = await axios({
    method: "post",
    url: "/product",
    data: {
      tokenId: product.tokenId,
      price: product.price,
      isAcution: product.isAcution,
      name: product.name,
      src: product.src,
      tag: product.tag,
    },
  });
  return response.data;
};
