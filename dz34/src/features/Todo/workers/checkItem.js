import { put, select } from "redux-saga/effects";
import { checkItem } from "../../../features/Todo/slice/todoSlice";

export default function* checkItemWorker(action) {
  const id = action.payload;
  yield put(checkItem(id));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));
}
