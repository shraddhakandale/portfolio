import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="w-full flex justify-center bg-[#0F0F0F] flex-1 p-10 md:p-20 relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
