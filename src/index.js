import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import index from "./js/index";

if (!index) {
  throw new Error("Mumbo jumbo happened!");
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
