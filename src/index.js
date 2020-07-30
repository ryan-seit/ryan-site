import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { HashRouter } from "react-router-dom";

const app = <App />;

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
