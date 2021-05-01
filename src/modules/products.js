import * as productsAPI from "../api/products";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

const CREATE_PRODUCTS = "products/CREATE_PRODUCTS";
const CREATE_PRODUCTS_SUCCESS = "products/CREATE_PRODUCTS_SUCCESS";
const CREATE_PRODUCTS_ERROR = "products/CREATE_PRODUCTS_ERROR";

const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "products/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "products/GET_PRODUCTS_ERROR";

const GET_PRODUCT = "products/GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "products/GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "products/GET_PRODUCT_ERROR";

const CLEAR_POST = "products/CLEAR_POST";

export const createProducts = (product) => ({
  type: CREATE_PRODUCTS,
  payload: product,
});
export const getProducts = () => ({ type: GET_PRODUCTS });
export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id,
  meta: id,
});
export const clearPost = () => ({ type: CLEAR_POST });

const createProductsSaga = createPromiseSaga(
  CREATE_PRODUCTS,
  productsAPI.createProduct
);
const getProductsSaga = createPromiseSaga(
  GET_PRODUCTS,
  productsAPI.getProducts
);
const getProductSaga = createPromiseSagaById(
  GET_PRODUCT,
  productsAPI.getProductById
);

export function* productsSaga() {
  yield takeEvery(CREATE_PRODUCTS, createProductsSaga);
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
  yield takeEvery(GET_PRODUCT, getProductSaga);
}

const initialState = {
  message: reducerUtils.initial(),
  products: reducerUtils.initial(),
  product: reducerUtils.initial(),
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCTS:
    case CREATE_PRODUCTS_SUCCESS:
    case CREATE_PRODUCTS_ERROR:
      return handleAsyncActions(CREATE_PRODUCTS, "message")(state, action);
    case GET_PRODUCTS:
    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_ERROR:
      return handleAsyncActions(GET_PRODUCTS, "products", true)(state, action);
    case GET_PRODUCT:
    case GET_PRODUCT_SUCCESS:
    case GET_PRODUCT_ERROR:
      return handleAsyncActionsById(
        GET_PRODUCT,
        "product",
        true
      )(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}
