import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import formReducer from "./reducers";

const rootReducer = combineReducers({ formReducer });

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));