import * as productsAPI from "../api/products";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

const CREATE_PRODUCT = "products/CREATE_PRODUCT";
const CREATE_PRODUCT_SUCCESS = "products/CREATE_PRODUCT_SUCCESS";
const CREATE_PRODUCT_ERROR = "products/CREATE_PRODUCT_ERROR";
const BUY_PRODUCT = "products/BUY_PRODUCT";
const BUY_PRODUCT_SUCCESS = "products/BUY_PRODUCT_SUCCESS";
const BUY_PRODUCT_ERROR = "products/BUY_PRODUCT_ERROR";

const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "products/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "products/GET_PRODUCTS_ERROR";

const GET_PRODUCT = "products/GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "products/GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "products/GET_PRODUCT_ERROR";

const CLEAR_POST = "products/CLEAR_POST";

export const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product,
});
export const buyProduct = (id) => ({
  type: BUY_PRODUCT,
  payload: id,
});
export const getProducts = () => ({ type: GET_PRODUCTS });
export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id,
  meta: id,
});
export const clearPost = () => ({ type: CLEAR_POST });

const createProductSaga = createPromiseSaga(
  CREATE_PRODUCT,
  productsAPI.createProduct
);
const buyProductSaga = createPromiseSaga(BUY_PRODUCT, productsAPI.buyProducts);
const getProductsSaga = createPromiseSaga(
  GET_PRODUCTS,
  productsAPI.getProducts
);
const getProductSaga = createPromiseSagaById(
  GET_PRODUCT,
  productsAPI.getProductById
);

export function* productsSaga() {
  yield takeEvery(CREATE_PRODUCT, createProductSaga);
  yield takeEvery(BUY_PRODUCT, buyProductSaga);
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
    case CREATE_PRODUCT:
    case CREATE_PRODUCT_SUCCESS:
    case CREATE_PRODUCT_ERROR:
      return handleAsyncActions(CREATE_PRODUCT, "message")(state, action);
    case BUY_PRODUCT:
    case BUY_PRODUCT_SUCCESS:
    case BUY_PRODUCT_ERROR:
      return handleAsyncActions(BUY_PRODUCT, "message")(state, action);
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
