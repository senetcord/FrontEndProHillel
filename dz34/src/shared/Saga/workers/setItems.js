import { put, select } from "redux-saga/effects";
import { setState } from "../../../features/Todo/slice/todoSlice";

export default function* setItemsWorker(actions) {
  const data = actions.payload;
  yield put(setState(data));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));
}
