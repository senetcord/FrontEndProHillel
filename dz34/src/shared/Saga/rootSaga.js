import { all, call } from "redux-saga/effects";
import { watcher } from "./watcher";

export function* rootSaga() {
  yield all([call(watcher)]);
}
