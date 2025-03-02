import ArrowIcon from "../icons/arrowIcon";
import DiamondIcon from "../icons/DiamondIcon";
import BookMarkIcon from "../icons/BookMarkIcon";

const ExperienceCard = ({Experiences}) => {
  return (
    <div>
      {/* Education card */}
      {Experiences.map((experience, index) => (
        <div
          key={index}
          className="my-2 transition bg-colour-card md:group-hover:opacity-40 md:hover:!opacity-100 md:hover:scale-110 duration-300"
        >
          <div className="block p-10">
            <header className="text-[14px]">
              <p className="font-bold tracking-widest uppercase text-orange-300">
                {experience.company}
              </p>
              <div className="flex flex-col mt-2 text-colour-words">
                <p>{experience.location}</p>

                <time className="inline-block">{experience.time}</time>
                <div className="flex flex-col mt-6">
                  <h2 className="text-[24px] font-semibold leading-tight text-white">
                    {experience.job}
                  </h2>
                </div>

                <div className="mt-2 flex flex-col">
                  {/* Ex points */}
                  {experience.description.length > 0 && (
                    <div className="text-sm md:text-base mt-4 text-colour-words">
                      <span className="uppercase text-orange-300 font-semibold mt-4">
                        experience
                      </span>

                      {experience.description.map((item, index) => (
                        <ul
                          key={index}
                          className="flex flex-col items-start justify-center mb-2"
                        >
                          <li className="mt-1 flex flex-row items-center text-[14px]">
                            <div className="self-start mt-[6px] mr-1 ">
                              <ArrowIcon colour="text-orange-300" />
                            </div>
                            {item}
                          </li>
                        </ul>
                      ))}
                    </div>
                  )}
                </div>

                <p className="mt-4 text-[14px] break-words text-colour-words flex flex-wrap items-center">
                  <DiamondIcon className="w-4 h-4" />
                  &nbsp;&nbsp;
                  <span>
                    {experience.skills.length > 1 && (
                      <>
                        {experience.skills.slice(0, -2).map((item, index) => (
                          <>
                            <span
                              key={index}
                              className="underline inline-block"
                            >
                              {item},{" "}
                            </span>
                            &nbsp;
                          </>
                        ))}
                        <span className="underline inline-block">
                          {experience.skills[experience.skills.length - 2]}
                        </span>
                        , and{" "}
                        <span className="underline inline-block">
                          {experience.skills[experience.skills.length - 1]}
                          .
                        </span>
                      </>
                    )}
                  </span>
                  {experience.testimonials.length > 0 && (
                    <>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      <a
                        className="flex flex-row justify-center items-center gap-1 hover:text-orange-300"
                        href="../assets/Testimonial_jingo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookMarkIcon />
                        Testimonial
                      </a>
                    </>
                  )}
                </p>
              </div>
            </header>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
