import * as localLoginAPI from "../api/localLogin";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/asyncUtils";
import { getContext, takeEvery, takeLatest } from "redux-saga/effects";

//TODO 이미지, 태그, 제목을 통해 NFT Product만들기
const LOGIN_REQUEST = "login/LOGIN_REQUEST";
const GO_MY_PAGE = "login/GO_MY_PAGE";
const GO_LOGIN = "login/GO_LOGIN";

export const localLoginLequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: {
    email: email,
    password: password,
  },
  meta: email,
});
export const goMyPage = () => ({ type: GO_MY_PAGE });
export const goLogin = () => ({ type: GO_LOGIN });

const localLoginLequestSaga = createPromiseSagaById(
  LOGIN_REQUEST,
  localLoginAPI.loginLequest
);
function* goMyPageSaga() {
  const history = yield getContext("history");
  history.push("/mypage");
}
function* goLoginSaga() {
  const history = yield getContext("history");
  history.push("/login");
}

export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, localLoginLequestSaga);
  yield takeEvery(GO_MY_PAGE, goMyPageSaga);
  yield takeEvery(GO_LOGIN, goLoginSaga);
}

const initialState = {
  user: reducerUtils.initial(),
};

export default function login(state = initialState, action) {
  switch (true) {
    default:
      return state;
  }
}
