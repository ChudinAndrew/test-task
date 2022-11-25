import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import { helloSaga } from "./rootSaga";
import countryReducer from "../components/Country/store/reducer";

const sagaMiddlware = createSagaMiddleware();

const reducers = combineReducers({
    country:countryReducer
})

const store = createStore(reducers, applyMiddleware(sagaMiddlware));
sagaMiddlware.run(helloSaga);

export type RootState = ReturnType<typeof reducers>


export default store;