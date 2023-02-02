import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import "./index.css";
import { worker } from "./server";

const root = ReactDOM.createRoot(document.getElementById("root"));

worker.start({ onUnhandledRequest: "bypass" });

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
