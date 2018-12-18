import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "../reducers/reducer";

const logger = createLogger();

const reducers = combineReducers({
	reducer: reducer
});

export let store = createStore(reducers, applyMiddleware(logger));