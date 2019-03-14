import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { createBrowserHistory } from "history";
import { startListener } from "./ducks/actions/listener";
import { push } from "./ducks/actions/locationSync";

const history = createBrowserHistory();

startListener(history, store);

let currentLocation = store.getState().pathname;

let unsubscribe = store.subscribe(() => {
  let previousLocation = currentLocation;
  currentLocation = store.getState().pathname;

  if (previousLocation !== currentLocation) {
    console.log(
      `Location changed from ${previousLocation} to ${currentLocation}`
    );
    store.dispatch(push(`${currentLocation}`));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
