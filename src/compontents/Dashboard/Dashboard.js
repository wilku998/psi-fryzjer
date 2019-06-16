import React, { useState } from "react";
import Blazy from "blazy";

import Loader from "../Loader/Loader";
import Header from "./Header/Header";
import About from "./About/About";
import Footer from "./Footer/Footer";

let loadedImages = 0;

const Dashboard = () => {
  loadedImages = 0;
  const [loaderVisible, setloaderVisible] = useState(true);

  const bLazy = new Blazy({
    success: img => {
      loadedImages += 1;
      setloaderVisible(loadedImages < 11);
    },
    offset: 99999999999999999
  });

  return (
    <div>
      {loaderVisible && <Loader />}
      <Header />
      <About />
      <Footer />
    </div>
  );
};
export default Dashboard;
