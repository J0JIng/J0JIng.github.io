import LinkedinIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import CVIcon from "./icons/CVIcon";
import ExpandIcon from "./icons/ExpandIcon";

import {Aboutintro} from "../config/IntroConstant";

const ExternalLinks = () => {
  return (
    <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 mt-8">
      <a
        href={Aboutintro.linkedInLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-1 text-colour-words hover:text-blue-400"
      >
        <div className="flex justify-center items-center">
          <LinkedinIcon />
        </div>
        <div>LinkedIn</div>
        <div className="flex justify-center items-center">
          <ExpandIcon />
        </div>
      </a>
      <a
        href={Aboutintro.gitHubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-1 text-colour-words hover:text-purple-400"
      >
        <div className="flex justify-center items-center">
          <GitHubIcon />
        </div>
        <div>GitHub</div>
        <div className="flex justify-center items-center">
          <ExpandIcon />
        </div>
      </a>
      <a
        href={Aboutintro.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-1 text-colour-words hover:text-green-400"
      >
        <div className="flex justify-center items-center">
          <CVIcon />
        </div>
        <div>Resume</div>
        <div className="flex justify-center items-center">
          <ExpandIcon />
        </div>
      </a>
    </div>
  );
};

export default ExternalLinks;
