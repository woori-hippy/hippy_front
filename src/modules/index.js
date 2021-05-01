import { combineReducers } from "redux";
import products from "./products";
import user from "./user";
import { productsSaga } from "./products";
import { userSaga } from "./user";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  products,
  user,
});
export function* rootSaga() {
  yield all([productsSaga(), userSaga()]);
}

export default rootReducer;
