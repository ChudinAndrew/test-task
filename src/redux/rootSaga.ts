import { all, fork } from "redux-saga/effects";
import countrySaga from "../components/Country/store/saga";

export function* helloSaga() {
  yield all([
    fork(countrySaga)
  ]);
}
