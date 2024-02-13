import { put } from "redux-saga/effects";
import { setState } from "../slices/todoSlice";
import { setLoading, unsetLoading } from "../slices/isLoadingSlice";

export default function* getDataWorker() {
  yield put(setLoading());

  const data = JSON.parse(localStorage.getItem("todo")) || [];
  yield put(setState(data));

  yield put(unsetLoading());
}
