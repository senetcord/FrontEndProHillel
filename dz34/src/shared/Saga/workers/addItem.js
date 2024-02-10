import { v4 as uuidv4 } from "uuid";
import { put, select } from "redux-saga/effects";
import { addItem } from "../../../features/Todo/slice/todoSlice";

export default function* addItemWorker(action) {
  const text = action.payload;
  const id = yield uuidv4();
  yield put(addItem({ text: text, checked: false, id: id }));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));
}
