import Proptypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import React from "react";
import NextPlan from "../NextPlan/NextPlan";
import Footer from "../Footer/Footer";

const Home = ({ tasks, events }) => {
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <div className="header_section">
        <Header />
        {pathname === "/" || pathname === "/home"?<Slider />:""}
      </div>
      {pathname === "/" || pathname === "/home"?<NextPlan events={events} tasks={tasks}/>:""}
      <Outlet />
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
Home.propTypes = {
  events: Proptypes.array,
  tasks: Proptypes.array,
};