import { put, select } from "redux-saga/effects";
import { setState } from "../slices/todoSlice";
import { setLoading, unsetLoading } from "../slices/isLoadingSlice";

export default function* setItemsWorker(actions) {
  yield put(setLoading());

  const data = actions.payload;
  yield put(setState(data));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(unsetLoading());
}
