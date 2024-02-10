import { put, select } from "redux-saga/effects";
import { deleteItem } from "../../../features/Todo/slice/todoSlice";

export default function* deleteItemWorker(action) {
  const id = action.payload;
  yield put(deleteItem(id));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));
}
