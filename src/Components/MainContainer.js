import React from "react";
import MY_IMG from "../utility/images/shraddha_photo.png";

const MainContainer = () => {
  return (
    <div className="flex flex-col h-dvh p-40 gap-4 justify-center items-center">
        <img className="w-40 h-40 rounded-full object-contain" src={MY_IMG} alt="My photo"/>
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        <span className="block overflow-hidden whitespace-nowrap w-[18ch] animate-typing">
          Hi, I’m Shraddha
        </span>
      </h1>
      <p className="text-center max-w-xl font-semibold text-gray-900">
        A Software Engineering Specialist crafting web solutions using Drupal and React. I blend creativity with clean code to build scalable, user-friendly digital experiences.
      </p>
    </div>
  );
};

export default MainContainer;
