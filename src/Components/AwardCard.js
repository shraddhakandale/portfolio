import React from "react";

const AwardCard = ({ img_url, title, description, linkToAward }) => {

  return (
    <a href={linkToAward}>
    <div className="bg-[linear-gradient(to_top_right,#191b1b_65%,#034948)] max-w-[300px] p-4 flex flex-col items-center gap-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <img className="w-full h-[240px] sm:h-[280px] object-cover" src={img_url} alt="Award image" />
      <h3 className="text-l text-center font-bold">{title}</h3>
      <p className="">{description}</p>
    </div>
    </a>
  );
};

export default AwardCard;
