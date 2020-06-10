import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import state from "./reducers";
import App from "./components/App";

require("@babel/polyfill");

const store = createStore(state);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
