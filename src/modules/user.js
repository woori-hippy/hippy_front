import * as loginAPI from "../api/auth";
import * as profileAPI from "../api/profile";
import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

const LOGIN_REQUEST = "user/LOGIN_REQUEST";
const LOGIN_REQUEST_SUCCESS = "user/LOGIN_REQUEST_SUCCESS";
const LOGIN_REQUEST_ERROR = "user/LOGIN_REQUEST_ERROR";
const SIGNOUT_REQUEST = "user/SIGNOUT_REQUEST";
const SIGNOUT_REQUEST_SUCCESS = "user/SIGNOUT_REQUEST_SUCCESS";
const SIGNOUT_REQUEST_ERROR = "user/SIGNOUT_REQUEST_ERROR";
const SIGNUP_REQUEST = "user/SIGNUP_REQUEST";
const SIGNUP_REQUEST_SUCCESS = "user/SIGNUP_REQUEST_SUCCESS";
const SIGNUP_REQUEST_ERROR = "user/SIGNUP_REQUEST_ERROR";
const PROFILE_REQUEST = "user/PROFILE_REQUEST";
const PROFILE_REQUEST_SUCCESS = "user/PROFILE_REQUEST_SUCCESS";
const PROFILE_REQUEST_ERROR = "user/PROFILE_REQUEST_ERROR";

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email: email,
    password: password,
  },
  meta: email,
});
export const signoutRequest = () => ({
  type: SIGNOUT_REQUEST,
});
export const signupRequest = ({ name, email, password }) => ({
  type: SIGNUP_REQUEST,
  payload: {
    name: name,
    email: email,
    password: password,
  },
  meta: email,
});
export const profileRequest = () => ({
  type: PROFILE_REQUEST,
});

const loginRequestSaga = createPromiseSaga(
  LOGIN_REQUEST,
  loginAPI.loginRequest
);
const signoutRequestSaga = createPromiseSaga(
  SIGNOUT_REQUEST,
  loginAPI.signoutRequest
);
const signupRequestSaga = createPromiseSaga(
  SIGNUP_REQUEST,
  loginAPI.signupRequest
);
const profileRequestSaga = createPromiseSaga(
  PROFILE_REQUEST,
  profileAPI.profileRequest
);

export function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, loginRequestSaga);
  yield takeEvery(SIGNOUT_REQUEST, signoutRequestSaga);
  yield takeEvery(SIGNUP_REQUEST, signupRequestSaga);
  yield takeEvery(PROFILE_REQUEST, profileRequestSaga);
}

const initialState = {
  user: reducerUtils.initial(),
};

export default function user(state = initialState, action) {
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
