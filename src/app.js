import "normalize.css/normalize.css";
import "aos/dist/aos.css";
import React from "react";
import aos from "aos";
import { render } from "react-dom";

import AppRouter from "./AppRouter/AppRouter";

aos.init({
  duration: 1000
});

const app = <AppRouter />;

render(app, document.querySelector("#app"));
