import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./modules";
import rootReducer from "./modules/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
