import { all, fork } from "redux-saga/effects";
import ukraineSaga from "../components/Ukraine/store/saga";
import worldSaga from "../components/World/store/saga";

export function* helloSaga() {
  yield all([
    fork(worldSaga),
    fork(ukraineSaga)
  ]);
}
