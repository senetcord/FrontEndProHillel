import { delay, put, select } from "redux-saga/effects";
import { checkItem, setLoader } from "../slices/todoSlice";
import { checkItemLoading } from "./loaders/loaders";

export default function* checkItemWorker(action) {
  yield put(setLoader({ loaderName: checkItemLoading, isLoading: true }));

  yield delay(3000);

  const id = action.payload;
  yield put(checkItem(id));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(setLoader({ loaderName: checkItemLoading, isLoading: false }));
}
