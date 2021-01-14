import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware))
);
// const store = createStore(
// 	rootReducer,
// 	compose(applyMiddleware(...middleware))
// );

export default store;

// export default store;
