import "normalize.css/normalize.css";
import "aos/dist/aos.css";
import React, { useState } from "react";
import aos from "aos";
import { render } from "react-dom";
import Blazy from "blazy";

import AppRouter from "./AppRouter/AppRouter";
import Loader from "./compontents/Loader/Loader";

aos.init({
  duration: 1000
});

let loadeadImages = 0;

const App = () => {
  const [loaderVisible, setloaderVisible] = useState(true);
  const bLazy = new Blazy({
    success: img => {
      loadeadImages+=1;
      setloaderVisible(loadeadImages<11);
    },
    offset: 99999999999999999
  });

  return (
    <div>
      {loaderVisible && <Loader />}
      <AppRouter />
    </div>
  );
};

const jsx = <App />;

render(jsx, document.querySelector("#app"));
