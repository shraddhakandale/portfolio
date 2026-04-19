import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
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
