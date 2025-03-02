import "../styles/App.css";

import Section from "../components/Section/IntroSection.jsx";
import Table from "../components/Tables/IntroTable.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const IntroPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (experienceInView) {
      setActiveSection("experience");
    } else if (projectInView) {
      setActiveSection("project");
    } else if (educationInView) {
      setActiveSection("education");
    }
  }, [experienceInView, projectInView, educationInView]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-colour-background text-colour-words overflow-x-clip">
      <div className="bg-colour-background flex flex-col w-screen mx-auto max-w-1440 md:flex-row">
        <Section activeSection={activeSection} />
        <Table
          experienceRef={experienceRef}
          projectRef={projectRef}
          educationRef={educationRef}
        />
      </div>
      <Header />
      <Footer />
    </div>
  );
};

export default IntroPage;
