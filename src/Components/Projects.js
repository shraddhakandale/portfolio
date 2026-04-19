import React from "react";
import ProjectCard from "./ProjectCard";
import filmvault from "../utility/images/film_vault.png";
import branding from "../utility/images/branding.png";
import ticketapp from "../utility/images/ticketapp.jpg";
import rathbones from "../utility/images/rathbones.PNG"

const Projects = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center text-white">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="flex gap-10 flex-wrap justify-center items-center">
          <ProjectCard
            title={"Rathbones"}
            detail={
              "Developed and implemented responsive UI components for a wealth management platform, enhancing user engagement."
            }
            projectLink={"https://www.rathbones.com/en-gb/wealth-management"}
            projectImg={rathbones}
            projectType={"Paragon DCX"}
          />
          <ProjectCard
            title={"Branding"}
            detail={
              "Standardized branding and visual assets, achieving 100% visual consistency across all Brands."
            }
            projectLink={"https://branding.3ds.com"}
            projectImg={branding}
            projectType={"3DS Partners"}
          />
          <ProjectCard
            title={"Employee Query Dashboard"}
            detail={
              "Designed an employee dashboard for HR and IT issue tracking, reducing resolution time by 30%."
            }
            projectImg={ticketapp}
            projectType={"3DS Internal"}
          />
          <ProjectCard
            title={"Film Vault"}
            detail={
              " Developed a movie discovery platform with dynamic search and API-driven content, improving user engagement and response time."
            }
            projectLink={"https://imdb-clone-filmvault.netlify.app/"}
            projectImg={filmvault}
            projectType={"Personal"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
