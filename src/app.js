import "normalize.css/normalize.css";
import React from "react";
import { render } from "react-dom";

import AppRouter from "./AppRouter/AppRouter";

const app = <AppRouter />;

render(app, document.querySelector("#app"));