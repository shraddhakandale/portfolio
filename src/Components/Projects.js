import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="p-32 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="flex gap-6 flex-wrap sm:flex-nowrap">
          <ProjectCard
            title={"FilmVault"}
            detail={
              "A React-based movie listing application that fetches movie data from an external API. Implemented dynamic pagination and interactive movie cards featuring a favorite icon to add movies to a personalized Watchlist. Includes dedicated routes for Movies and Watchlist, with real-time search functionality within the watchlist for quick filtering."
            }
            projectLink={"https://imdb-clone-filmvault.netlify.app/"}
          />
          <ProjectCard
            title={"Chef Claude"}
            detail={
              "A React application that uses a Hugging Face AI model to generate recipes based on user-input ingredients. Users enter at least four ingredients, and with a single click, the app fetches and displays a complete recipe suggestion. Seamlessly integrates an AI agent to turn everyday ingredients into creative meals."
            }
            projectLink={"https://ai-cook.netlify.app/"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-3xl font-bold">🛠 Skills & Tools</h2>
        <div className="p-6 bg-pink-50 outline outline-pink-300 rounded-lg">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-800">
            <li>React.js</li>
            <li>Redux Toolkit</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Drupal 9/10/11</li>
            <li>Twig</li>
            <li>REST API Integration</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
