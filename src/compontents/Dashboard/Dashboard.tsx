import * as React from "react";
import Header from "./Header/Header";
import Navigation from "../Navigation/Navigation";

const Dashboard = () => (
  <div>
    <Navigation />
    <Header />
    <div style={{height: '100vh'}}></div>
  </div>
);

export default Dashboard;
