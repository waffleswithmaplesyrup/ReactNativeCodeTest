import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import favouritesReducer from "./reducers/favouritesReducer";
import upcomingMovieReducer from "./reducers/upcomingMovieReducer";
import popularMovieReducer from "./reducers/popularMovieReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ upcomingMovieReducer, popularMovieReducer, favouritesReducer });
export const Store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware, thunk));

sagaMiddleware.run(rootSaga);