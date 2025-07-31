import React from "react";

const ProjectCard = ({ title, detail, projectLink }) => {
  return (
    <a href={projectLink} className="w-[250px] bg-pink-50 p-3 outline outline-pink-300 rounded-lg flex flex-col gap-2 cursor-pointer hover:scale-105">
      <div>
        <h2 className="text-xl text-center font-semibold">{title}</h2>
        <p>{detail}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
