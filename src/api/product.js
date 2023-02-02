import axios from "axios";

export const createProduct = async (product) => {
  const response = await axios({
    method: "post",
    url: "/api/product",
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

export const buyProducts = async (id) => {
  const response = await axios({
    method: "post",
    url: "/api/product/buy",
    data: {
      productId: id,
    },
  });
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get("/api/product");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`/api/product/${id}`);
  return response.data;
};
