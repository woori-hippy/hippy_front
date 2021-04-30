import { combineReducers } from "redux";
import products from "./products";
import login from "./login";
import { productsSaga } from "./products";
import { loginSaga } from "./login";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  products,
  login,
});
export function* rootSaga() {
  yield all([productsSaga(), loginSaga()]);
}

export default rootReducer;
