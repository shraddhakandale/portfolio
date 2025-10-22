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
      <div className="w-full flex justify-center bg-gradient-to-tr from-pink-200 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
