import { useState } from "react";
import "../../styles/App.css";

import { Projintro } from "../../config/introConstant";
import SectionLinks from "../sideLinks/ProjectLinks";
import ExternalLinks from "../ExternalLinks";
import { Link } from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

const ProjectSection = ({ activeSection }) => {
  return (
    <div className=" bg-colour-background w-full p-6 sm:p-12 md:fixed md:p-14 md:w-1/2 md:h-screen lg:p-24 ">
      <div className="h-full flex flex-col justify-between ">
        <div>
          <h2 className="mt-4 capitalize text-[28px] font-semibold leading-tight hover:text-amber-400">
            <Link to="/">Jing's</Link>
          </h2>

          <h1 className="text-5xl font-bold leading-tight md:text-5xl lg:text-6xl lg:leading-none text-amber-400">
            Projects
          </h1>

          <h2 className="mt-4 text-[28px] font-semibold leading-tight">
            ML | AI | Full Stack
          </h2>
          <div className="leading-relaxed text-colour-words mt-8">
            <p className="mt-2">
              Passionate about solving complex problems with innovative{" "}
              <b>full stack AI / ML</b> solutions that drive{" "}
              <b>real-world impact</b>.
            </p>
            <p className="mt-2">
              Turning data into insights and code into seamless experiences —
              where <b>technology meets creativity</b>.
            </p>

            <ExternalLinks />
          </div>
          <SectionLinks activeSection={activeSection} />
        </div>

        <div className="flex flex-row justify-between text-colour-words mt-8">
          <Link
            className="flex flex-row items-center gap-1 cursor-pointer hover:text-white visible"
            to="/"
          >
            <LeftArrowIcon />
            About Me
          </Link>
          <Link
            className="flex flex-row items-center gap-1 cursor-pointer hover:text-white invisible"
            to="/project"
          >
            My Projects
            <RightArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
