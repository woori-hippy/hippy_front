import * as nftAPI from "../api/nft";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

const CREATE_NFT = "nft/CREATE_NFT";
const CREATE_NFT_SUCCESS = "nft/CREATE_NFT";
const CREATE_NFT_ERROR = "nft/CREATE_NFT";

const ESTIMATE_GAS = "nft/ESTIMATE_GAS";
const ESTIMATE_GAS_SUCCESS = "nft/ESTIMATE_GAS_SUCCESS";
const ESTIMATE_GAS_ERROR = "nft/ESTIMATE_GAS_ERROR";

export const createNFT = (ipfsHash) => ({
  type: CREATE_NFT,
  payload: ipfsHash,
});
export const estimateGas = (ipfsHash) => ({
  type: ESTIMATE_GAS,
  payload: ipfsHash,
});

const createNFTSaga = createPromiseSaga(CREATE_NFT, nftAPI.createNFT);
const estimateGasSaga = createPromiseSaga(ESTIMATE_GAS, nftAPI.estimateGas);

export function* nftSaga() {
  yield takeEvery(CREATE_NFT, createNFTSaga);
  yield takeEvery(ESTIMATE_GAS, estimateGasSaga);
}

const initialState = {
  message: reducerUtils.initial(),
  nft: reducerUtils.initial(),
};

export default function nft(state = initialState, action) {
  switch (action.type) {
    case CREATE_NFT:
    case CREATE_NFT_SUCCESS:
    case CREATE_NFT_ERROR:
      return handleAsyncActions(CREATE_NFT, "message")(state, action);
    case ESTIMATE_GAS:
    case ESTIMATE_GAS_SUCCESS:
    case ESTIMATE_GAS_ERROR:
      return handleAsyncActions(ESTIMATE_GAS, "message")(state, action);
    default:
      return state;
  }
}
