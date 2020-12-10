import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import thunk from "redux-thunk";

import combineReducers from "./reducers";
import reducers from "./reducers";
const store = createStore(combineReducers, applyMiddleware(thunk));
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
