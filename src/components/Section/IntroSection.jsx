import { useState } from "react";
import "../../styles/App.css";

import LeftArrowIcon from "../icons/RightArrowIcon";
import { Aboutintro } from "../../config/IntroConstant";
import SectionLinks from "../sideLinks/IntroLinks";
import ExternalLinks from "../ExternalLinks";
import { Link } from "react-router-dom";

const IntroSection = ({ activeSection }) => {
  return (
    <div className=" bg-colour-background w-full p-6 sm:p-12 md:fixed md:p-14 md:w-1/2 md:h-screen lg:p-24 ">
      <div className="h-full flex flex-col justify-between ">
        <div>
          <h1 className="text-5xl font-bold leading-tight md:text-5xl lg:text-6xl lg:leading-none text-amber-400">
            <a href="/">{Aboutintro.name}</a>
          </h1>

          <h2 className="mt-4 text-[22px] font-semibold leading-tight">
            {Aboutintro.studentPosition}
            <a
              className="hover:underline"
              href={Aboutintro.universityLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Aboutintro.university}
            </a>
          </h2>
          <div className="leading-relaxed text-colour-words mt-8">
            <p className="mt-2">
              Just a chill dude who loves writing code and building cool{" "}
              <Link className="text-colour-words underline" to="/project">
                projects
              </Link>{" "}
              in my free time.
            </p>
            <p className="mt-2">
              Diving into the world of software development has been an exciting
              ride. Every day, I get to turn ideas into
              reality with code.
            </p>
            <ExternalLinks />
          </div>
          <SectionLinks activeSection={activeSection} />
        </div>

        <div className="flex flex-row justify-between text-colour-words mt-8">
          <Link
            className="flex flex-row items-center gap-1 cursor-pointer hover:text-white invisible"
            to="/"
          ></Link>
          <Link
            className="flex flex-row items-center gap-1 cursor-pointer hover:text-white visible"
            to="/project"
          >
            My Projects
            <LeftArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
