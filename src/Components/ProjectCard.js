import React from "react";

const ProjectCard = ({
  title,
  detail,
  projectLink,
  projectImg,
  projectType,
}) => {
  return (
    <div className="w-[330px] sm:w-[350px] bg-[linear-gradient(to_bottom_left,#191b1b_75%,#034948)] p-4 rounded-lg flex flex-col justify-between gap-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 h-auto relative">
      <div className="h-max flex flex-col gap-4">
        <img
          className="w-full h-[200px] object-cover rounded-md"
          src={projectImg}
        />
        <h2 className="text-xl text-center font-semibold">{title}</h2>
        <p>{detail}</p>
      </div>
      <div className="w-full">
        {(projectType !== "3DS Internal" ) ? <a
          className="w-full block text-center p-2 rounded-lg bg-[#03514d]"
          href={projectLink}
        >
          Check Live
        </a> : <a
          className="w-full block text-center p-2 rounded-lg bg-[#03514d]"
          href={projectLink}
        >
          Cannot Check live (Internal Project)
        </a>}
      </div>
      <div className="absolute top-0 right-0 bg-[#034948] p-2 opacity-85 rounded-tr-md">
        {projectType}
      </div>
    </div>
  );
};

export default ProjectCard;
