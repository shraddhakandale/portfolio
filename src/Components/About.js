import React from "react";
import AwardCard from "./AwardCard";
import { AWARD_1_LINK, AWARD_2_LINK } from "../utility/constants";
import AWARD_1_IMG from "../utility/images/award_1_image.png";
import AWARD_2_IMG from "../utility/images/award_2_image.png";
import SkillTag from "./SkillTag";
import Resume from "../utility/ShraddhaKandale-Full-Stack-developer-Resume.pdf";
import PARAGON_DCX_LOGO from "../utility/images/paragon_dcx_logo.jfif";
import DASSAULT_LOGO from "../utility/images/dassault_logo.png";
import OrganizationCard from "./OrganizationCard";

const About = () => {
  const skills = [
    "React",
    "Drupal",
    "Aquia Site Studio",
    "HTML5",
    "CSS",
    "Tailwind",
    "Javascript",
    "JSX",
    "RestApi",
    "Redux Toolkit",
    "Figma",
    "Git",
    "Jenkins",
    "JIRA",
    "Docker",
    "Composer",
  ];
  return (
    <div className="w-full flex flex-col gap-20 text-white">
      <a
        className="absolute bg-[#034948] p-2 opacity-85 top-5 font-semibold rounded-md"
        href={Resume}
        download
      >
        Download Resume
      </a>
      <div className="mt-[40px] md:m-0 flex flex-col sm:flex-row gap-10 justify-between p-4 sm:p-10 bg-[linear-gradient(to_bottom,#121313_90%,#034948)]">
        <div className="flex w-full md:w-[50%]">
          <div className="font-semibold flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Hi, I am Shraddha!</h1>
            <p>
              I'm a full stack developer with passion for creating robust and
              user friendly web applications. I specialize in building dynamic,
              responsive interface using modern front end technologies like
              React / Drupal theming paired with powerful backend solutions
              using Drupal.
            </p>
            <p>
              I thrive on solving complex problems and continuously seek to
              improve my coding skills.
            </p>
            <p>
              I enjoy turning ideas into reality, ensurin the applications i
              built are accessible and performant. I am dedicated to lifelong
              learning and keeping up with latest industry trends and best
              practices.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] mb-14 flex flex-col gap-8">
          <div className="skills-container">
            <h1 className="text-2xl font-bold mb-4">Skills</h1>
            <div className="text-lg flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillTag skill={skill} />
              ))}
            </div>
          </div>
          <hr />
          <div className="edu-details">
            <h1 className="text-2xl font-bold mb-4">Education</h1>
            <span>
              B.Tech Computer Science and Engineering | 2022 (Passout)
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-between p-4 sm:p-10 bg-[linear-gradient(to_bottom,#121313_95%,#034948)]">
        <div className="flex flex-col gap-4 exp-section">
          <h1 className="text-2xl font-bold">Professional Experience</h1>
          <hr />
          <div className="work-history flex gap-4">
            <OrganizationCard
              isCurrentOrg={true}
              orgLogo={PARAGON_DCX_LOGO}
              orgName="Paragon DCX"
            />
            <OrganizationCard
              isCurrentOrg={false}
              orgLogo={DASSAULT_LOGO}
              orgName="Dassault Systemes"
            />
          </div>
          <hr />
          <div className="react-experience">
            <div>
              <h1 className="text-xl font-bold">React</h1>
              <ul className="p-4">
                <li>
                  Increased component reuse by 35% and reduced redundant code by
                  leading React applications using Redux Toolkit, Custom Hooks,
                  and dynamic routing.
                </li>
                <li>
                  Enhanced Core Web Vitals (FCP, LCP, CLS) by 20-25% through
                  code splitting, lazy loading, and optimized asset management.
                </li>
                <li>
                  Accelerated feature development and reduced frontend time by
                  30% by building reusable components and hooks.
                </li>
                <li>
                  Achieved 95% WCAG 2.1 AA accessibility compliance by
                  implementing ARIA support and keyboard navigation in
                  interfaces.
                </li>
                <li>
                  Delivered responsive,cross-browser layouts, increasing mobile
                  usability by 20.
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="drupal-experience">
            <div>
              <h1 className="text-xl font-bold">Drupal</h1>
              <ul className="p-4">
                <li>
                  Developed a custom script in Drupal to generate dynamic CSV
                  reports across multiple content types based on specific
                  filters and business conditions.
                </li>
                <li>
                  Worked on Acquia Site Studio to create and customize reusable
                  components and styles, improving content flexibility and UI
                  consistency.
                </li>
                <li>
                  Implemented custom styling and layout adjustments using HTML
                  and CSS to enhance frontend alignment and responsiveness.
                </li>
                <li>
                  Led Drupal 9 to 10 migration, improving system maintainability
                  and performance by 15% for Dassault Systemes.
                </li>
                <li>
                  Developed Custom Drupal Modules and Themes (Brick Widget,
                  Brick Revision Delete) with Twig and Tailwind CSS, reducing
                  content creation time by 40%.
                </li>
                <li>
                  Integrated Search API with advanced filtering, increasing
                  content discoverability by 50%.
                </li>
                <li>
                  Improved site navigation by 40% using Big Menu integration and
                  accessibility-first design for 1,000+ users.
                </li>
                <li>
                  Enabled multilingual support, streamlining global content
                  management.
                </li>
                <li>
                  Optimized caching and asset aggregation, cutting page load
                  times by 25%.
                </li>
                <li>
                  Built an AI-powered POC to auto-assign content types and
                  fields, reducing manual setup by 70%.
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="collaboration-experience">
            <div>
              <h1 className="text-xl font-bold">Collaboration and Workflow</h1>
              <ul className="p-4">
                <li>
                  Participated in Agile/Scrum ceremonies, achieving 98% sprint
                  completion rate.
                </li>
                <li>
                  Conducted code reviews and maintained Git workflows, ensuring
                  stable, maintainable production builds.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-between p-4 sm:p-10 bg-[linear-gradient(to_bottom,#121313_95%,#034948)]">
        <div>
          <h1 className="text-2xl font-bold">Achievements</h1>
          <h3 className="">What I’m Grateful For...</h3>
        </div>
        <div className="flex gap-8 flex-wrap sm:flex-nowrap justify-center items-center sm:justify-normal sm:items-start mb-14">
          <AwardCard
            img_url={AWARD_1_IMG}
            title={"Genius"}
            description={
              <span>
                Received the prestigious <strong>'Genius'</strong> Single Award
                in recognition of my individual contribution towards delivering
                innovative digital solutions that drove measurable impact and
                excellence in project execution
              </span>
            }
            linkToAward={AWARD_1_LINK}
          />
          <AwardCard
            img_url={AWARD_2_IMG}
            title={"Team Collaboration Award"}
            description={
              <span>
                Honored with the <strong>'Team Collaboration Award'</strong> for
                fostering strong teamwork, seamless communication, and
                successfully leading cross-functional collaboration to achieve
                project goals.
              </span>
            }
            linkToAward={AWARD_2_LINK}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
