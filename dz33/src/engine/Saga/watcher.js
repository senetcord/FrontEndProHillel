import { takeEvery } from "redux-saga/effects";
import {
  getDataAsyncAction,
  addItemAsyncAction,
  clearItemsAsyncAction,
  deleteItemAsyncAction,
} from "./asyncActions";
import getDataWorker from "./workers/getData";
import addItemWorker from "./workers/addItemWorker";
import clearItemsWorker from "./workers/clearItemsWorker";
import deleteItemWorker from "./workers/deleteItemWorker";

export function* watcher() {
  yield takeEvery(getDataAsyncAction.type, getDataWorker);
  yield takeEvery(addItemAsyncAction.type, addItemWorker);
  yield takeEvery(clearItemsAsyncAction.type, clearItemsWorker);
  yield takeEvery(deleteItemAsyncAction.type, deleteItemWorker);
}
