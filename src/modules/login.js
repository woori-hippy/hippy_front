import * as loginAPI from "../api/login";
import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

//TODO 이미지, 태그, 제목을 통해 NFT Product만들기
const LOGIN_REQUEST = "login/LOGIN_REQUEST";
const LOGIN_REQUEST_SUCCESS = "login/LOGIN_REQUEST_SUCCESS";
const LOGIN_REQUEST_ERROR = "login/LOGIN_REQUEST_ERROR";
const SIGNOUT_REQUEST = "login/SIGNOUT_REQUEST";
const SIGNOUT_REQUEST_SUCCESS = "login/SIGNOUT_REQUEST_SUCCESS";
const SIGNOUT_REQUEST_ERROR = "login/SIGNOUT_REQUEST_ERROR";
const SIGNUP_REQUEST = "login/SIGNUP_REQUEST";
const SIGNUP_REQUEST_SUCCESS = "login/SIGNUP_REQUEST_SUCCESS";
const SIGNUP_REQUEST_ERROR = "login/SIGNUP_REQUEST_ERROR";
const PROFILE_REQUEST = "login/PROFILE_REQUEST";
const PROFILE_REQUEST_SUCCESS = "login/PROFILE_REQUEST_SUCCESS";
const PROFILE_REQUEST_ERROR = "login/PROFILE_REQUEST_ERROR";

export const loginLequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email: email,
    password: password,
  },
  meta: email,
});
export const signoutLequest = () => ({
  type: SIGNOUT_REQUEST,
});
export const signupLequest = ({ name, email, password }) => ({
  type: SIGNUP_REQUEST,
  payload: {
    name: name,
    email: email,
    password: password,
  },
  meta: email,
});
export const profileLequest = () => ({
  type: PROFILE_REQUEST,
});

const loginLequestSaga = createPromiseSaga(
  LOGIN_REQUEST,
  loginAPI.loginLequest
);
const signoutLequestSaga = createPromiseSaga(
  SIGNOUT_REQUEST,
  loginAPI.signoutLequest
);
const signupLequestSaga = createPromiseSaga(
  SIGNUP_REQUEST,
  loginAPI.signupLequest
);
const profileLequestSaga = createPromiseSaga(
  PROFILE_REQUEST,
  loginAPI.profileLequest
);

export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginLequestSaga);
  yield takeEvery(SIGNOUT_REQUEST, signoutLequestSaga);
  yield takeEvery(SIGNUP_REQUEST, signupLequestSaga);
  yield takeEvery(PROFILE_REQUEST, profileLequestSaga);
}

const initialState = {
  user: reducerUtils.initial(),
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_REQUEST_SUCCESS:
    case LOGIN_REQUEST_ERROR:
      return handleAsyncActions(LOGIN_REQUEST, "user", true)(state, action);
    case SIGNOUT_REQUEST:
    case SIGNOUT_REQUEST_SUCCESS:
    case SIGNOUT_REQUEST_ERROR:
      return handleAsyncActions(SIGNOUT_REQUEST, "user", true)(state, action);
    case SIGNUP_REQUEST:
    case SIGNUP_REQUEST_SUCCESS:
    case SIGNUP_REQUEST_ERROR:
      return handleAsyncActions(SIGNUP_REQUEST, "user", true)(state, action);
    case PROFILE_REQUEST:
    case PROFILE_REQUEST_SUCCESS:
    case PROFILE_REQUEST_ERROR:
      return handleAsyncActions(PROFILE_REQUEST, "user", true)(state, action);
    default:
      return state;
  }
}
