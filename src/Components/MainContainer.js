import React from "react";
import MY_IMG from "../utility/images/shraddha_photo.png";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex gap-8 justify-center items-center p-10 md:p-20 bg-[linear-gradient(to_bottom_left,#121313_45%,#034948)] rounded-lg max-w-[860px] flex-wrap lg:flex-nowrap">
      <div className="img-container xl:w-[40%] w-40 h-40 sm:h-80 sm:w-80">
        <img className="rounded-full sm:max-w-fit" src={MY_IMG} alt="My photo" />
      </div>
      <div className="info-container text-white flex flex-col gap-4 xl:w-[60%]">
        <div className="info-container-detail flex flex-col gap-2">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold">
            <span className="block overflow-hidden whitespace-nowrap w-[18ch] animate-typing">
              Hi, I’m Shraddha
            </span>
          </h1>
          <h3>Full-Stack Developer (React | Drupal)</h3>
          <p className="max-w-xl font-semibold text-white">
            A Software Engineering Specialist crafting web solutions using
            Drupal and React. I blend creativity with clean code to build
            scalable, user-friendly digital experiences.
          </p>
        </div>
        <div className="btns-container w-full flex flex-wrap sm:flex-nowrap md:justify-between gap-4 font-semibold">
          <button className="w-[100%] md:w-[50%] p-2 rounded-lg bg-[#03514d]">
            <Link to="/projects">View Projects</Link>
          </button>
          <button className="w-[100%] md:w-[50%] p-2 rounded-lg bg-[#03514d]">
            <Link to="/contact">Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
