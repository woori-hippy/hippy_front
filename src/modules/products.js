import * as productsAPI from "../api/products";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

export const getProducts = () => ({ type: GET_PRODUCTS });
export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id,
  meta: id,
});

const getProductsSaga = createPromiseSaga(
  GET_PRODUCTS,
  productsAPI.getProducts
);
const getProductSaga = createPromiseSagaById(
  GET_PRODUCT,
  productsAPI.getProductById
);

export function* productsSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
  yield takeEvery(GET_PRODUCT, getProductSaga);
}

const initialState = {
  products: reducerUtils.initial(),
  product: reducerUtils.initial(),
};

export default function products(state = initialState, action) {
  switch (true) {
    case action.type.startsWith(GET_PRODUCTS):
      return handleAsyncActions(GET_PRODUCTS, "products", true)(state, action);
    case action.type.startsWith(GET_PRODUCT):
      return handleAsyncActionsById(
        GET_PRODUCT,
        "product",
        true
      )(state, action);
    default:
      return state;
  }
}
