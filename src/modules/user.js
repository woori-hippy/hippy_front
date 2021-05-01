import * as loginAPI from "../api/auth";
import * as profileAPI from "../api/profile";
import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

const LOGIN = "user/LOGIN";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGIN_ERROR = "user/LOGIN_ERROR";
const SIGNOUT = "user/SIGNOUT";
const SIGNOUT_SUCCESS = "user/SIGNOUT_SUCCESS";
const SIGNOUT_ERROR = "user/SIGNOUT_ERROR";
const SIGNUP = "user/SIGNUP";
const SIGNUP_SUCCESS = "user/SIGNUP_SUCCESS";
const SIGNUP_ERROR = "user/SIGNUP_ERROR";

const GET_PROFILE = "user/GET_PROFILE";
const GET_PROFILE_SUCCESS = "user/GET_PROFILE_SUCCESS";
const GET_PROFILE_ERROR = "user/GET_PROFILE_ERROR";
const GET_NFT_PROFILE = "user/GET_NFT_PROFILE";
const GET_NFT_PROFILE_SUCCESS = "user/GET_NFT_PROFILE_SUCCESS";
const GET_NFT_PROFILE_ERROR = "user/GET_NFT_PROFILE_ERROR";

export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email: email,
    password: password,
  },
  meta: email,
});
export const signout = () => ({
  type: SIGNOUT,
});
export const signup = ({ name, email, password }) => ({
  type: SIGNUP,
  payload: {
    name: name,
    email: email,
    password: password,
  },
  meta: email,
});
export const getProfile = () => ({
  type: GET_PROFILE,
});
export const getNFTProfile = () => ({
  type: GET_NFT_PROFILE,
});

const loginSaga = createPromiseSaga(LOGIN, loginAPI.login);
const signoutSaga = createPromiseSaga(SIGNOUT, loginAPI.signout);
const signupSaga = createPromiseSaga(SIGNUP, loginAPI.signup);
const getProfileSaga = createPromiseSaga(GET_PROFILE, profileAPI.getProfile);
const getNFTProfileSaga = createPromiseSaga(
  GET_NFT_PROFILE,
  profileAPI.getNFTProfile
);

export function* userSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(SIGNOUT, signoutSaga);
  yield takeEvery(SIGNUP, signupSaga);
  yield takeEvery(GET_PROFILE, getProfileSaga);
  yield takeEvery(GET_NFT_PROFILE, getNFTProfileSaga);
}

const initialState = {
  user: reducerUtils.initial(),
  nftProfile: reducerUtils.initial(),
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return handleAsyncActions(LOGIN, "user")(state, action);
    case SIGNOUT:
    case SIGNOUT_SUCCESS:
    case SIGNOUT_ERROR:
      return handleAsyncActions(SIGNOUT, "user")(state, action);
    case SIGNUP:
    case SIGNUP_SUCCESS:
    case SIGNUP_ERROR:
      return handleAsyncActions(SIGNUP, "user")(state, action);
    case GET_PROFILE:
    case GET_PROFILE_SUCCESS:
    case GET_PROFILE_ERROR:
      return handleAsyncActions(GET_PROFILE, "user")(state, action);
    case GET_NFT_PROFILE:
    case GET_NFT_PROFILE_SUCCESS:
    case GET_NFT_PROFILE_ERROR:
      return handleAsyncActions(GET_NFT_PROFILE, "nftProfile")(state, action);
    default:
      return state;
  }
}
