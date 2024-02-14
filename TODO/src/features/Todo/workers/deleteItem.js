import { put, select } from "redux-saga/effects";
import { deleteItem, setLoader } from "../slices/todoSlice";
import { deleteItemLoading } from "./loaders/loaders";

export default function* deleteItemWorker(action) {
  yield put(setLoader({ loaderName: deleteItemLoading, isLoading: true }));

  const id = action.payload;
  yield put(deleteItem(id));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(setLoader({ loaderName: deleteItemLoading, isLoading: false }));
}
