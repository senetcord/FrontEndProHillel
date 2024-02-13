import { put, select } from "redux-saga/effects";
import { deleteItem } from "../slices/todoSlice";
import { setLoading, unsetLoading } from "../slices/isLoadingSlice";

export default function* deleteItemWorker(action) {
  yield put(setLoading());

  const id = action.payload;
  yield put(deleteItem(id));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(unsetLoading());
}
