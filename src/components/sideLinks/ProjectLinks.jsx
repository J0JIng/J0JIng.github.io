import "../../styles/App.css";
import { HashLink } from "react-router-hash-link";

const ProjectLinks = ({ activeSection }) => {
  return (
    <div className="hidden text-sm md:text-2xl font-bold uppercase text-widest text-colour-words md:block ">
      <div className="flex flex-row md:flex-col md:my-4">
        <ul className="md:my-3">
          <li>
            <HashLink smooth to="#AIML">
              <div
                className={`inline-flex items-center text-xs group hover:cursor-pointer hover:text-amber-400 duration-300 ${
                  activeSection === "AIML" ? "text-amber-400" : ""
                }`}
              >
                <span className="tracking-wide">01</span>
                <span
                  className={`inline-block w-6 h-px mx-4 -mt-px group-hover:w-12  group-hover:bg-amber-400 duration-300 ${
                    activeSection === "AIML"
                      ? "text-amber-400 bg-amber-400 w-12"
                      : "bg-white"
                  }`}
                ></span>
                <span className="tracking-widest uppercase">ML & AI</span>
              </div>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#FSWB">
              <div
                className={`inline-flex items-center text-xs group hover:cursor-pointer hover:text-amber-400 duration-300 ${
                  activeSection === "FSWB" ? "text-amber-400" : ""
                }`}
              >
                <span className="tracking-wide">02</span>
                <span
                  className={`inline-block w-6 h-px mx-4 -mt-px group-hover:w-12  group-hover:bg-amber-400 duration-300 ${
                    activeSection === "FSWB"
                      ? "text-amber-400 bg-amber-400 w-12"
                      : "bg-white"
                  }`}
                ></span>
                <span className="tracking-widest uppercase">Full Stack & Web</span>
              </div>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#IoT">
              <div
                className={`inline-flex items-center text-xs group hover:cursor-pointer hover:text-amber-400 duration-300 ${
                  activeSection === "IoT" ? "text-amber-400" : ""
                }`}
              >
                <span className="tracking-wide">03</span>
                <span
                  className={`inline-block w-6 h-px mx-4 -mt-px group-hover:w-12  group-hover:bg-amber-400 duration-300 ${
                    activeSection === "IoT"
                      ? "text-amber-400 bg-amber-400 w-12"
                      : "bg-white"
                  }`}
                ></span>
                <span className="tracking-widest uppercase">Embedded Systems</span>
              </div>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#other">
              <div
                className={`inline-flex items-center text-xs group hover:cursor-pointer hover:text-amber-400 duration-300 ${
                  activeSection === "other" ? "text-amber-400" : ""
                }`}
              >
                <span className="tracking-wide">03</span>
                <span
                  className={`inline-block w-6 h-px mx-4 -mt-px group-hover:w-12  group-hover:bg-amber-400 duration-300 ${
                    activeSection === "other"
                      ? "text-amber-400 bg-amber-400 w-12"
                      : "bg-white"
                  }`}
                ></span>
                <span className="tracking-widest uppercase">Other Projects</span>
              </div>
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectLinks;
