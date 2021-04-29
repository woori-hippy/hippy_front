import { combineReducers } from "redux";
import products from "./products";
import { productsSaga } from "./products";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  products,
});
export function* rootSaga() {
  yield all([productsSaga()]);
}

export default rootReducer;
