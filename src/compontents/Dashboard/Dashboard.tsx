import * as React from "react";
import Header from "./Header/Header";
import About from "./About/About";

const Dashboard = () => (
  <div>
    <Header />
    <About />
    <div style={{height: '100vh'}}></div>
  </div>
);

export default Dashboard;
