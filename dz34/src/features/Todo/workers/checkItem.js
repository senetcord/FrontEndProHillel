import { put, select } from "redux-saga/effects";
import { checkItem } from "../slices/todoSlice";
import { setLoading, unsetLoading } from "../slices/isLoadingSlice";

export default function* checkItemWorker(action) {
  yield put(setLoading());

  const id = action.payload;
  yield put(checkItem(id));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(unsetLoading());
}
