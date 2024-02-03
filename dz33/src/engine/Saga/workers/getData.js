import { put } from "redux-saga/effects";
import { setState } from "../../Redux/Slices/todoSlice";

export default function* getDataWorker() {
  const data = JSON.parse(localStorage.getItem("todo")) || [];
  yield put(setState(data));
}
