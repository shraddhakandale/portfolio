import React from "react";

const AwardCard = ({ img_url, title, description, linkToAward }) => {

  return (
    <a href={linkToAward}>
    <div className="bg-pink-50 max-w-[250px] p-2 flex flex-col items-center gap-1 rounded-lg hover:scale-105 cursor-pointer">
      <img className="h-2/3" src={img_url} alt="Award image" />
      <h3 className="text-l text-center font-semibold">{title}</h3>
      <p className="">{description}</p>
    </div>
    </a>
  );
};

export default AwardCard;
