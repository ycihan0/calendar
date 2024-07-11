import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="header_section">
        <Header />
        <Slider />
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Home;
