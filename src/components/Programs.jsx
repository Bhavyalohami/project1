import React from "react";
import { FiArrowRight, FiBookOpen, FiCode, FiCpu, FiLayers, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import programsArt from "../assets/programs-art.svg";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const programs = [
  {
    icon: <FiCpu />,
    title: "Tech Foundations",
    age: "Ages 8-12",
    text: "Logic, internet safety, creative computing, and everyday problem-solving habits.",
  },
  {
    icon: <FiCode />,
    title: "Full-Stack Studio",
    age: "Ages 13-18",
    text: "Build websites, APIs, dashboards, and real portfolio projects with guided reviews.",
  },
  {
    icon: <FiUsers />,
    title: "Peer Lab",
    age: "All cohorts",
    text: "Small circles where learners debug together, explain ideas, and practice teamwork.",
  },
  {
    icon: <FiLayers />,
    title: "Product Sprint",
    age: "Advanced",
    text: "A launch-style program for students ready to design, ship, and present a product.",
  },
];

const Programs = () => {
  return (
    <main className="programs-page">
      <RevealSection className="page-hero compact">
        <span className="eyebrow">Dorse programs</span>
        <h1>Structured tracks for curious builders.</h1>
        <p>
          Every Dorse track blends fundamentals, mentoring, practice sessions, and project
          reviews so students learn how to think through technology, not just copy steps.
        </p>
        <img className="page-visual" src={programsArt} alt="Dorse program path graphic" />
        <KineticScene variant="page" label="Animated Dorse program orbit" />
      </RevealSection>

      <RevealSection className="program-grid section-shell">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <div className="icon-badge">{program.icon}</div>
            <span>{program.age}</span>
            <h2>{program.title}</h2>
            <p>{program.text}</p>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="learning-path section-shell">
        <div>
          <span className="eyebrow">How it works</span>
          <h2>From first question to finished project.</h2>
        </div>
        <ol>
          <li>
            <FiBookOpen />
            <strong>Discover</strong>
            <span>We map the learner's interests, confidence, and current skill level.</span>
          </li>
          <li>
            <FiCode />
            <strong>Build</strong>
            <span>They ship focused weekly projects with mentor and peer feedback.</span>
          </li>
          <li>
            <FiArrowRight />
            <strong>Present</strong>
            <span>Each cycle ends with a demo, reflection, and a next-step roadmap.</span>
          </li>
        </ol>
      </RevealSection>

      <RevealSection className="cta-band">
        <div>
          <h2>Ready to find the right track?</h2>
          <p>Tell us what the learner wants to build and we will recommend a path.</p>
        </div>
        <Link to="/contact" className="button primary">
          Start a conversation <FiArrowRight />
        </Link>
      </RevealSection>
    </main>
  );
};

export default Programs;
