import "../../styles/App.css";
import ProjectCard from "../cards/ProjectCard.jsx";
import {
  ProjAIML,
  Projfullstack,
  ProjIot,
  ProjOther,
} from "../../config/projConstant.jsx";

const Table = ({ ALMLRef, FSWBRef, IoTRef, otherRef }) => {
  return (
    <div className="bg-colour-background p-6 sm:p-12 md:absolute md:right-0 md:p-14 md:pl-0 md:w-1/2 lg:p-24 lg:pl-0 ">
      <div ref={ALMLRef}>
        <div id="AIML" className="md:pt-24">
          <h2 className="sticky top-0 z-10 py-6 text-[14px] font-extrabold tracking-widest uppercase text-colour-words backdrop-blur-md md:sr-only">
            01 — ML | AI
          </h2>
          <h2 className="hidden md:block pt-6 pb-2 text-[14px] font-semibold tracking-widest uppercase text-colour-words bg-sp-gray">
            01 — ML | AI
          </h2>
          <div className="pb-10 -my-2 group md:py-0">
            <ProjectCard projects={ProjAIML} />
          </div>
        </div>
      </div>

      <div ref={FSWBRef}>
        <div id="FSWB" className="md:pt-24">
          <h2 className="sticky top-0 z-10 py-6 text-[14px] font-extrabold tracking-widest uppercase text-colour-words backdrop-blur-md md:sr-only">
            02 — Full Stack | Web
          </h2>
          <h2 className="hidden md:block pt-6 pb-2 text-[14px] font-semibold tracking-widest uppercase text-colour-words bg-sp-gray">
            02 — Full Stack | Web
          </h2>
          <div className="pb-10 -my-2 group md:py-0">
            <ProjectCard projects={Projfullstack} />
          </div>
        </div>
      </div>

      <div ref={IoTRef}>
        <div id="IoT" className="md:pt-24">
          <h2 className="sticky top-0 z-10 py-6 text-[14px] font-extrabold tracking-widest uppercase text-colour-words backdrop-blur-md md:sr-only">
            03 — Embedded Systems
          </h2>
          <h2 className="hidden md:block pt-6 pb-2 text-[14px] font-semibold tracking-widest uppercase text-colour-words bg-sp-gray">
            03 — Embedded Systems
          </h2>
          <div className="pb-10 -my-2 group md:py-0">
            <ProjectCard projects={ProjIot} />
          </div>
        </div>
      </div>

      <div ref={otherRef}>
        <div id="other" className="md:pt-24">
          <h2 className="sticky top-0 z-10 py-6 text-[14px] font-extrabold tracking-widest uppercase text-colour-words backdrop-blur-md md:sr-only">
            04 — Other Projects
          </h2>
          <h2 className="hidden md:block pt-6 pb-2 text-[14px] font-semibold tracking-widest uppercase text-colour-words bg-sp-gray">
            04 — Other Projects
          </h2>
          <div className="pb-10 -my-2 group md:py-0">
            <ProjectCard projects={ProjOther} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
