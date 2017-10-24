import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { AUTH_USER } from "./actions/Users";
import ReduxThunk from "redux-thunk";
import "./index.css";
import reducers from "./reducers";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

const token = localStorage.getItem("token");

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
