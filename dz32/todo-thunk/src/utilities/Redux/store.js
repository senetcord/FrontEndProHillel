import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import todoReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: () => [thunk],
});

export default store;
