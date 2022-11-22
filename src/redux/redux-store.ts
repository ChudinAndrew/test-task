import React from "react"
import { applyMiddleware, combineReducers, createStore } from "redux"
import worldReducer from "./world-reducer"
import createSagaMiddleware from "redux-saga"

const sagaMiddlware = createSagaMiddleware();

const reducers = combineReducers({
    world:worldReducer
})

const store = createStore(reducers, applyMiddleware(sagaMiddlware));

export default store;