import "../styles/App.css";

import Section from "../components/Section/ProjectSection.jsx";
import Table from "../components/Tables/ProjectTable.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const ProjectPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const { ref: ALMLRef, inView: ALMLInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: FSWBRef, inView: FSWBInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: IoTRef, inView: IoTInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const { ref: otherRef, inView: otherInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (ALMLInView) {
      setActiveSection("AIML");
    } else if (FSWBInView) {
      setActiveSection("FSWB");
    } else if (IoTInView) {
      setActiveSection("IoT");
    } else if (otherInView) {
      setActiveSection("other");
    }
  }, [ALMLInView, FSWBInView, IoTInView, otherInView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-colour-background text-colour-words overflow-x-clip">
      <div className="bg-colour-background flex flex-col w-screen mx-auto max-w-1440 md:flex-row">
        <Section activeSection={activeSection} />
        <Table
          ALMLRef={ALMLRef}
          FSWBRef={FSWBRef}
          IoTRef={IoTRef}
          otherRef={otherRef}
        />
      </div>
      <Header />
      <Footer />
    </div>
  );
};

export default ProjectPage;
