import { AnyAction, applyMiddleware, createStore, compose } from "redux";
import ReduxThunk, { ThunkDispatch } from "redux-thunk";

import reducers from "./reducers";

// @ts-ignore (Enable redux devtools browser extension)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(reducers, middlewares);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export default store;
