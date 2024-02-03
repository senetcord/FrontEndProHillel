import { put, select } from "redux-saga/effects";
import { setState } from "../../Redux/Slices/todoSlice";

export default function* clearItemsWorker() {
  yield put(setState([]));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));
}
