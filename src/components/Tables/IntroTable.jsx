import "../../styles/App.css";
import ExperienceCard from "../cards/ExperienceCard.jsx";
import ProjectCard from "../cards/ProjectCard.jsx";
import EducationCard from "../cards/EducationCard.jsx";
import LeftArrowIcon from "../icons/RightArrowIcon.jsx";
import { Link } from "react-router-dom";

import Experiences from "../../config/expConstant";
import Projects from "../../config/simpleProjConstant.jsx";
import Education from "../../config/eduConstant.jsx";



const Table = ({ experienceRef, projectRef, educationRef }) => {
  return (
    <div className="bg-colour-background p-6 sm:p-12 md:absolute md:right-0 md:p-14 md:pl-0 md:w-1/2 lg:p-24 lg:pl-0 ">
      <div ref={experienceRef}>
        <div id="experience" className="md:pt-24 md:-pt-24">
          <h2 className="sticky top-0 z-10 py-6 text-[14px] font-extrabold tracking-widest uppercase text-colour-words backdrop-blur-md md:sr-only">
            01 — experience
          </h2>
          <h2 className="hidden md:block pt-6 pb-2 text-[14px] font-semibold tracking-widest uppercase text-colour-words bg-sp-gray">
            01 — experience
          </h2>
          <div className="pb-10 -my-2 group md:py-0">
            <ExperienceCard Experiences={Experiences}/>
          </div>
        </div>
      </div>

      <div ref={projectRef}>
        <div id="project" className="md:pt-24">
          <h2 className="sticky top-0 z-10 py-6 text-[14px] font-extrabold tracking-widest uppercase text-colour-words backdrop-blur-md md:sr-only">
            02 — projects
          </h2>
          <h2 className="hidden md:block pt-6 pb-2 text-[14px] font-semibold tracking-widest uppercase text-colour-words bg-sp-gray">
            02 — projects
          </h2>
          <div className="pb-10 -my-2 group md:py-0">
            <ProjectCard projects={Projects}/>
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
              All Projects
              <LeftArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <div ref={educationRef}>
        <div id="education" className="md:pt-24">
          <h2 className="sticky top-0 z-10 py-6 text-[14px] font-extrabold tracking-widest uppercase text-colour-words backdrop-blur-md md:sr-only">
            03 — education
          </h2>
          <h2 className="hidden md:block pt-6 pb-2 text-[14px] font-semibold tracking-widest uppercase text-colour-words bg-sp-gray">
            03 — education
          </h2>
          <div className="pb-10 -my-2 group md:py-0">
            <EducationCard  universities={Education}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
