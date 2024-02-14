import { put, select } from "redux-saga/effects";
import { setLoader, setState } from "../slices/todoSlice";
import { setItemsLoading } from "./loaders/loaders";

export default function* setItemsWorker(actions) {
  yield put(setLoader({ loaderName: setItemsLoading, isLoading: true }));

  const data = actions.payload;
  yield put(setState(data));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(setLoader({ loaderName: setItemsLoading, isLoading: false }));
}
