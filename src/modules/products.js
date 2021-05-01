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

const CLEAR_POST = "CLEAR_POST";

export const getProducts = () => ({ type: GET_PRODUCTS });
export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id,
  meta: id,
});
export const clearPost = () => ({ type: CLEAR_POST });

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
  switch (action.type) {
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
