import { takeEvery } from "redux-saga/effects";
import {
  addItemAsyncAction,
  checkItemAsyncAction,
  deleteItemAsyncAction,
  getDataAsyncAction,
  setItemsAsyncAction,
} from "./asyncActions";
import getDataWorker from "./workers/getData";
import addItemWorker from "./workers/addItem";
import checkItemWorker from "./workers/checkItem";
import setItemsWorker from "./workers/setItems";
import deleteItemWorker from "./workers/deleteItem";

export function* watcher() {
  yield takeEvery(getDataAsyncAction.type, getDataWorker);
  yield takeEvery(addItemAsyncAction.type, addItemWorker);
  yield takeEvery(checkItemAsyncAction.type, checkItemWorker);
  yield takeEvery(setItemsAsyncAction.type, setItemsWorker);
  yield takeEvery(deleteItemAsyncAction.type, deleteItemWorker);
}
