import { createStore, compose } from "redux";
import rootReducer from "../modules/index";
const defaultState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers());

export default store;
