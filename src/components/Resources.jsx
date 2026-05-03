import React from "react";
import { FiArrowRight, FiBookOpen, FiClock, FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import resourcesArt from "../assets/resources-art.svg";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const resources = [
  {
    icon: <FiBookOpen />,
    title: "Starter roadmap",
    type: "Guide",
    text: "A beginner-friendly path for students moving from curiosity to their first useful project.",
  },
  {
    icon: <FiTool />,
    title: "Debug checklist",
    type: "Worksheet",
    text: "A simple routine students can use before asking for help or rewriting everything.",
  },
  {
    icon: <FiClock />,
    title: "Weekly practice planner",
    type: "Template",
    text: "A realistic schedule for keeping momentum without burning out after day two.",
  },
];

const Resources = () => {
  return (
    <main className="resources-page">
      <RevealSection className="page-hero compact">
        <span className="eyebrow">Resources</span>
        <h1>Helpful tools for students and parents.</h1>
        <p>
          A practical resource hub for choosing a starting point, practicing consistently,
          and making independent progress between mentor sessions.
        </p>
        <img className="page-visual" src={resourcesArt} alt="Dorse resource kit graphic" />
        <KineticScene variant="page" label="Animated Dorse resource system" />
      </RevealSection>

      <RevealSection className="resource-grid section-shell">
        {resources.map((resource) => (
          <article key={resource.title}>
            <div className="icon-badge">{resource.icon}</div>
            <span>{resource.type}</span>
            <h2>{resource.title}</h2>
            <p>{resource.text}</p>
            <Link to="/contact" className="resource-link">Request this <FiArrowRight /></Link>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="faq-panel section-shell">
        <div>
          <span className="eyebrow">Common questions</span>
          <h2>Before you start.</h2>
        </div>
        <div className="faq-list">
          <article>
            <h3>Does a student need coding experience?</h3>
            <p>No. We place learners by confidence and goals, not by age alone.</p>
          </article>
          <article>
            <h3>Can Dorse help with school projects?</h3>
            <p>Yes. We can help students understand concepts, plan work, and debug responsibly.</p>
          </article>
          <article>
            <h3>What should a learner bring?</h3>
            <p>A laptop, curiosity, and one thing they would love to build or understand.</p>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="cta-band">
        <div>
          <h2>Need a custom roadmap?</h2>
          <p>Send us the learner's goals and we will recommend a track.</p>
        </div>
        <Link to="/contact" className="button primary">Ask Dorse <FiArrowRight /></Link>
      </RevealSection>
    </main>
  );
};

export default Resources;
