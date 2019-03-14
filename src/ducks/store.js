import { combineReducers, applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "./middlewares/routerMiddleware";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { locationReducer } from "./reducers/locationReducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});



const middlewares = applyMiddleware(routerMiddleware, thunk, logger);

const store = createStore(locationReducer, {}, middlewares);

export default store;
