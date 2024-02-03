import { all, call } from "redux-saga/effects";
import { watcher as TodoWatcher } from "./watcher";

export function* rootSaga() {
  yield all([call(TodoWatcher)]);
}
