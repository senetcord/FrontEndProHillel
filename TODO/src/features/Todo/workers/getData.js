import { delay, put } from "redux-saga/effects";
import { initialState, setLoader, setState } from "../slices/todoSlice";
import {
  addItemLoading,
  checkItemLoading,
  deleteItemLoading,
  getDataLoading,
  setItemsLoading,
} from "./loaders/loaders";

export default function* getDataWorker() {
  yield put(setLoader({ loaderName: getDataLoading, isLoading: true }));

  const data = JSON.parse(localStorage.getItem("todo")) || initialState;
  yield delay(3000);

  yield put(setState(data));

  yield put(setLoader({ loaderName: deleteItemLoading, isLoading: false }));
  yield put(setLoader({ loaderName: checkItemLoading, isLoading: false }));
  yield put(setLoader({ loaderName: addItemLoading, isLoading: false }));
  yield put(setLoader({ loaderName: setItemsLoading, isLoading: false }));
  yield put(setLoader({ loaderName: setItemsLoading, isLoading: false }));

  yield put(setLoader({ loaderName: getDataLoading, isLoading: false }));
}
