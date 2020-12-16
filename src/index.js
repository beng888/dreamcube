import React from "react";
import ReactDom from "react-dom";
import { ContextWrapper } from "./lib/commerce";
import "./index.css";
import App from "./App";
import GlobalStateProvider from "./GlobalState/GlobalStateProvider";

ReactDom.render(
  <ContextWrapper>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </ContextWrapper>,
  document.getElementById("root")
);
