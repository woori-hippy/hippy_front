import { combineReducers } from "redux";
import products from "./products";
import user from "./user";
import nft from "./nft";
import { productsSaga } from "./products";
import { userSaga } from "./user";
import { nftSaga } from "./nft";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  products,
  user,
  nft,
});
export function* rootSaga() {
  yield all([productsSaga(), userSaga(), nftSaga()]);
}

export default rootReducer;
