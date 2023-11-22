import React from "react";
import ReactDOM from "react-dom/client";

import { URLpath } from "config.ts";

import { Provider } from "react-redux";
import { store } from "store";

import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./assets/styles/index.scss";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={URLpath}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
