import GitHubIcon from "../icons/GitHubIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
 
const ProjectCard = ({projects}) => {
  return (
    <div>
      {/* Education card */}
      {projects.map((project, index) => (
        <div
          key={index}
          className="my-2 transition bg-colour-card md:group-hover:opacity-40 md:hover:!opacity-100 md:hover:scale-110 duration-300"
        >
          <div className="block p-10 text-wrap">
            <p className="text-xs font-bold tracking-widest uppercase text-white">
              {project.header}
            </p>

            <h2 className="text-white text-lg font-bold mt-2 leading-tight">
              {project.name}
            </h2>
            <p className="mt-2 text-colour-words text-[14px]">
              {project.description}
            </p>
            <p className="mt-2 text-[14px] break-words">
              Built using{" "}
              {project.technology.length === 1 && (
                <>
                  <span className="underline inline-block">
                    {project.technology[0]}
                  </span>
                  .
                </>
              )}
              {project.technology.length > 1 && (
                <>
                  {project.technology.slice(0, -2).map((item, index) => (
                    <>
                      <span key={index} className="underline inline-block">
                        {item}
                      </span>
                      ,{" "}
                    </>
                  ))}
                  <span className="underline inline-block">
                    {project.technology[project.technology.length - 2]}
                  </span>
                  , and{" "}
                  <span className="underline inline-block">
                    {project.technology[project.technology.length - 1]}
                  </span>
                  .
                </>
              )}
            </p>

            <div className="flex flex-row text-colour-words mt-4 text-[14px] flex-wrap items-center">
              {project.githubRepo.length > 0 && (
                <a
                  className="flex flex-row justify-center items-center gap-1 hover:text-white"
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                  Source Code
                </a>
              )}

              {project.website.length > 0 && (
                <>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    className="flex flex-row justify-center items-center gap-1 hover:text-white"
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebsiteIcon />
                    Website
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
