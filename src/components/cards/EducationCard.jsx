import ArrowIcon from "../icons/arrowIcon";

const EducationCard = ({ universities }) => {
  return (
    <div>
      {/* Education card */}
      {universities.map((university, index) => (
        <div
          key={index}
          className="my-2 transition bg-colour-card md:group-hover:opacity-40 md:hover:!opacity-100 md:hover:scale-110 duration-300"
        >
          <div className="block p-10">
            <div className="flex flex-row justify-between">
              <header className="text-[14px]">
                <p className="tracking-widest uppercase text-red-300 font-bold ">
                  {university.school}
                </p>
                <div className="flex flex-col mt-2 text-colour-words">
                  <p>{university.location}</p>
                  <time className="inline-block">{university.time}</time>
                </div>
              </header>
              {/* <img src={ntulogo} className="bg-white sr-only  sm:not-sr-only sm:w-auto sm:h-10">
        </img> */}
            </div>

            <div className="flex flex-col mt-6">
              <h3 className="font-semibold text-[24px] text-white leading-tight ">
                {university.degree}
              </h3>

              <div className="mt-2 flex flex-col">
                {/* achievements */}
                {university.achievements.length > 0 && (
                  <div className="text-sm md:text-base mt-4 text-colour-words">
                    <span className="uppercase text-red-300 font-semibold mt-4">
                      achievements
                    </span>
                    {university.achievements.map((item, index) => (
                      <ul
                        key={index}
                        className="flex flex-col items-start justify-center"
                      >
                        <li className="mt-1 flex flex-row items-center text-[14px]">
                          <div className="self-start mt-[6px] mr-1 ">
                            <ArrowIcon colour="text-red-300" />
                          </div>
                          {item}
                        </li>
                      </ul>
                    ))}
                  </div>
                )}

                {/* courses */}
                {university.courses.length > 0 && (
                  <div className="text-sm md:text-base mt-4 text-colour-words">
                    <span className="uppercase text-red-300 font-semibold mt-4">
                      courses
                    </span>
                    {university.courses.map((item, index) => (
                      <ul
                        key={index}
                        className="flex flex-col items-start justify-center"
                      >
                        <li className="mt-1 flex flex-row items-center text-[14px]">
                          <div className="self-start mt-[6px] mr-1 ">
                            <ArrowIcon colour="text-red-300" />
                          </div>
                          {item}
                        </li>
                      </ul>
                    ))}
                  </div>
                )}

                {/* clubs */}
                {university.clubs.length > 0 && (
                  <div className="text-sm md:text-base mt-4 text-colour-words">
                    <span className="uppercase text-red-300 font-semibold mt-4">
                      clubs
                    </span>
                    {university.clubs.map((item, index) => (
                      <ul
                        key={index}
                        className="flex flex-col items-start justify-center"
                      >
                        <li className="mt-1 flex flex-row items-center text-[14px]">
                          <div className="self-start mt-[6px] mr-1 ">
                            <ArrowIcon colour="text-red-300" />
                          </div>
                          {item}
                        </li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
