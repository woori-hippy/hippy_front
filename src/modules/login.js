import * as loginAPI from "../api/login";
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
const LOGIN_REQUEST_SUCCESS = "login/LOGIN_REQUEST_SUCCESS";
const LOGIN_REQUEST_ERROR = "login/LOGIN_REQUEST_ERROR";
const SIGNUP_REQUEST = "login/SIGNUP_REQUEST";
const SIGNUP_REQUEST_SUCCESS = "login/SIGNUP_REQUEST_SUCCESS";
const SIGNUP_REQUES_ERRORT = "login/SIGNUP_REQUES_ERRORT";
const GO_MY_PAGE = "login/GO_MY_PAGE";
const GO_LOGIN = "login/GO_LOGIN";

export const loginLequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: {
    email: email,
    password: password,
  },
  meta: email,
});
export const signUpLequest = ({ name, email, password }) => ({
  type: SIGNUP_REQUEST,
  payload: {
    name: name,
    email: email,
    password: password,
  },
  meta: email,
});
export const goMyPage = () => ({ type: GO_MY_PAGE });
export const goLogin = () => ({ type: GO_LOGIN });

const loginLequestSaga = createPromiseSaga(
  LOGIN_REQUEST,
  loginAPI.LoginLequest
);
const signUpLequestSaga = createPromiseSaga(
  SIGNUP_REQUEST,
  loginAPI.signupLequest
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
  yield takeEvery(LOGIN_REQUEST, loginLequestSaga);
  yield takeEvery(SIGNUP_REQUEST, signUpLequestSaga);
  yield takeEvery(GO_MY_PAGE, goMyPageSaga);
  yield takeEvery(GO_LOGIN, goLoginSaga);
}

const initialState = {
  user: reducerUtils.initial(),
};

export default function login(state = initialState, action) {
  switch (true) {
    case action.type.startsWith(LOGIN_REQUEST):
      return handleAsyncActions(LOGIN_REQUEST, "user", true)(state, action);
    case action.type.startsWith(SIGNUP_REQUEST):
      return handleAsyncActions(SIGNUP_REQUEST, "user", true)(state, action);
    default:
      return state;
  }
}
