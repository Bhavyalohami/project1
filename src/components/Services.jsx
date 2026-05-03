import React from "react";
import serviceImage from "../assets/services-art.svg";
import { FiArrowRight, FiCheck, FiCode, FiLifeBuoy, FiMonitor, FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const services = [
  {
    icon: <FiCode />,
    title: "Full-stack build labs",
    text: "Guided project sessions covering React, APIs, databases, auth basics, and deployment.",
  },
  {
    icon: <FiLifeBuoy />,
    title: "Query support desk",
    text: "Students bring bugs, blockers, and concept questions into a structured support flow.",
  },
  {
    icon: <FiTarget />,
    title: "Portfolio coaching",
    text: "Project selection, polish, storytelling, and demo practice for school or internship readiness.",
  },
  {
    icon: <FiMonitor />,
    title: "Live workshops",
    text: "Focused sessions on web basics, Git, responsive UI, AI tools, and product thinking.",
  },
];

const Services = () => {
  return (
    <main className="services-page">
      <RevealSection className="page-hero services-hero">
        <div>
          <span className="eyebrow">Dorse services</span>
          <h1>Support for every stage of a student's tech journey.</h1>
          <p>
            From first web pages to full-stack demos, Dorse gives learners a practical place
            to build, ask, test, and present.
          </p>
          <Link to="/contact" className="button primary">Plan a cohort <FiArrowRight /></Link>
        </div>
        <div className="hero-media-stack">
          <img src={serviceImage} alt="Development services workspace" />
          <KineticScene variant="page" label="Animated service support system" />
        </div>
      </RevealSection>

      <RevealSection className="service-grid section-shell">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="icon-badge">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="deliverables section-shell">
        <div>
          <span className="eyebrow">Included in every engagement</span>
          <h2>A learning system, not a one-off session.</h2>
        </div>
        <ul>
          <li><FiCheck /> Diagnostic onboarding call</li>
          <li><FiCheck /> Weekly project brief</li>
          <li><FiCheck /> Code and concept review</li>
          <li><FiCheck /> Parent-friendly progress notes</li>
          <li><FiCheck /> Final demo and next-step roadmap</li>
        </ul>
      </RevealSection>
    </main>
  );
};

export default Services;
