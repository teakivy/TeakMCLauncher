import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { login } from "../electron/core/accountManager";

declare global {
  interface Window {
    api: any;
  }
}

ReactDOM.render(
  <React.StrictMode>
    Test
    <button onClick={window.api.accounts.login}>Login</button>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
