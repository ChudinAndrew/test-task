import React from "react"
import { applyMiddleware, combineReducers, createStore } from "redux"
import worldReducer from "../components/World/store/reducer"
import createSagaMiddleware from "redux-saga"
import ukraineReducer from "../components/Ukraine/store/reducer";
import { helloSaga } from "./rootSaga";

const sagaMiddlware = createSagaMiddleware();

const reducers = combineReducers({
    world:worldReducer,
    ukraine:ukraineReducer
})

const store = createStore(reducers, applyMiddleware(sagaMiddlware));
sagaMiddlware.run(helloSaga);

export type RootState = ReturnType<typeof reducers>


export default store;