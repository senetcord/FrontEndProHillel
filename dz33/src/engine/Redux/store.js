import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../Saga/rootSaga";
import todoSlice from "./Slices/todoSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
