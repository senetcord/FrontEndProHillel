import { takeEvery } from "redux-saga/effects";
import {
  addItemAsyncAction,
  checkItemAsyncAction,
  deleteItemAsyncAction,
  getDataAsyncAction,
  setItemsAsyncAction,
} from "./asyncActions";
import getDataWorker from "../../features/Todo/workers/getData";
import addItemWorker from "../../features/Todo/workers/addItem";
import checkItemWorker from "../../features/Todo/workers/checkItem";
import setItemsWorker from "../../features/Todo/workers/setItems";
import deleteItemWorker from "../../features/Todo/workers/deleteItem";

export function* watcher() {
  yield takeEvery(getDataAsyncAction.type, getDataWorker);
  yield takeEvery(addItemAsyncAction.type, addItemWorker);
  yield takeEvery(checkItemAsyncAction.type, checkItemWorker);
  yield takeEvery(setItemsAsyncAction.type, setItemsWorker);
  yield takeEvery(deleteItemAsyncAction.type, deleteItemWorker);
}
