import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Body = () => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center bg-gradient-to-tr from-pink-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
