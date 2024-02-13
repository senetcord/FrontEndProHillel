import { v4 as uuidv4 } from "uuid";
import { put, select } from "redux-saga/effects";
import { addItem } from "../slices/todoSlice";
import { setLoading, unsetLoading } from "../slices/isLoadingSlice";

export default function* addItemWorker(action) {
  yield put(setLoading());

  const text = action.payload;
  const id = yield uuidv4();
  yield put(addItem({ text: text, checked: false, id: id }));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(unsetLoading());
}
