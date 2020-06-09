import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";

const store = createStore(
  tasks, // reducers
  initialData // optional, just sample tasks
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
