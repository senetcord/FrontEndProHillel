import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../features/Todo/slice/todoSlice";
import sagaMiddleware from "../Saga/saga";
import { rootSaga } from "../Saga/rootSaga";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
