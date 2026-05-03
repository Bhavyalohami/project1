import React from "react";
import { FiCpu, FiDatabase, FiGlobe, FiPlay, FiSmartphone } from "react-icons/fi";
import { Link } from "react-router-dom";
import showcaseArt from "../assets/showcase-art.svg";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const projects = [
  {
    icon: <FiGlobe />,
    title: "Personal portfolio",
    level: "Beginner",
    text: "A responsive site where students learn layout, content hierarchy, and publishing.",
  },
  {
    icon: <FiDatabase />,
    title: "Student help desk",
    level: "Intermediate",
    text: "A full-stack ticket app with forms, API routes, filtering, and clean status design.",
  },
  {
    icon: <FiSmartphone />,
    title: "Habit tracker",
    level: "Intermediate",
    text: "A practical app for state, local storage, charts, and weekly reflection.",
  },
  {
    icon: <FiCpu />,
    title: "AI idea sorter",
    level: "Advanced",
    text: "A guided project for responsible AI use, structured prompts, and result evaluation.",
  },
];

const Showcase = () => {
  return (
    <main className="showcase-page">
      <RevealSection className="page-hero compact">
        <span className="eyebrow">Project showcase</span>
        <h1>Students learn by making things they can explain.</h1>
        <p>
          These are the kinds of projects Dorse learners build, review, improve, and demo.
        </p>
        <img className="page-visual" src={showcaseArt} alt="Dorse student project gallery graphic" />
        <KineticScene variant="page" label="Animated student project system" />
      </RevealSection>

      <RevealSection className="showcase-grid section-shell">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="icon-badge">{project.icon}</div>
            <span>{project.level}</span>
            <h2>{project.title}</h2>
            <p>{project.text}</p>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="demo-room">
        <div>
          <FiPlay />
          <h2>Every project ends with a demo room moment.</h2>
          <p>
            Students present the problem, their design decisions, the bug they solved, and
            what they would improve next. That reflection is where the learning sticks.
          </p>
        </div>
        <Link to="/contact" className="button primary">Plan a project path</Link>
      </RevealSection>
    </main>
  );
};

export default Showcase;
