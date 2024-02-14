import { v4 as uuidv4 } from "uuid";
import { delay, put, select } from "redux-saga/effects";
import { addItem, setLoader } from "../slices/todoSlice";
import { addItemLoading } from "./loaders/loaders";

export default function* addItemWorker(action) {
  yield put(setLoader({ loaderName: addItemLoading, isLoading: true }));

  yield delay(3000);

  const text = action.payload;
  const id = yield uuidv4();
  yield put(addItem({ text: text, checked: false, id: id }));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));

  yield put(setLoader({ loaderName: addItemLoading, isLoading: false }));
}
