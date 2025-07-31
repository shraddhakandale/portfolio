import React from "react";
import AwardCard from "./AwardCard";
import {
  AWARD_1_IMG,
  AWARD_1_LINK,
  AWARD_2_IMG,
  AWARD_2_LINK,
} from "../utility/constants";

const About = () => {
  return (
    <div>
      <div className="flex flex-col p-32 text-gray-900 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hi,</h1>
          <p className="font-semibold">
            I'm a Software Engineering Specialist with over 3 years of hands-on
            experience crafting scalable and interactive web applications. I
            specialize in Drupal CMS, React.js, Redux Toolkit, and bring strong
            skills in JavaScript, HTML, and CSS. Throughout my journey, I've
            successfully built and deployed 10+ dynamic web pages, seamlessly
            integrating REST APIs, and implementing robust patterns like state
            management and efficient API fetching. I blend clean code with
            thoughtful UX to deliver solutions that are both functional and
            user-friendly.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            What I’m Grateful For
          </h1>
          <div className="flex flex-row gap-6">
            <AwardCard
              img_url={AWARD_1_IMG}
              title={"Genius"}
              description={
                "Received the prestigious gEnius Single Award in recognition of my individual contribution towards delivering innovative digital solutions that drove measurable impact and excellence in project execution"
              }
              linkToAward={AWARD_1_LINK}
            />
            <AwardCard
              img_url={AWARD_2_IMG}
              title={"Team Collaboration Award"}
              description={
                "Honored with the Team Collaboration Award for fostering strong teamwork, seamless communication, and successfully leading cross-functional collaboration to achieve project goals."
              }
              linkToAward={AWARD_2_LINK}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
