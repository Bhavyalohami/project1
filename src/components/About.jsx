import React from "react";
import network from "../assets/dorse-hero.svg";
import { FiArrowRight, FiCheckCircle, FiHeart, FiMap, FiShield, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const principles = [
  ["Questions first", "Learners are encouraged to explain what they tried, what failed, and what they think is happening."],
  ["Real projects", "Every concept connects to something visible, useful, and demo-ready."],
  ["Kind rigor", "We keep standards high without making students afraid to be wrong."],
  ["Parent clarity", "Families get plain-language progress updates and practical next steps."],
];

const About = () => {
  return (
    <main className="about-page">
      <RevealSection className="page-hero about-hero">
        <div>
          <span className="eyebrow">About Dorse</span>
          <h1>A small learning studio for students who want tech to finally make sense.</h1>
          <p>
            Dorse was shaped around a simple observation: students learn faster when they
            have permission to ask rough questions, build imperfect drafts, and get precise
            feedback from people who actually write software.
          </p>
          <Link to="/programs" className="button primary">See our tracks <FiArrowRight /></Link>
        </div>
        <div className="hero-media-stack">
          <img src={network} alt="Connected workspace showing digital collaboration" />
          <KineticScene variant="page" label="Animated Dorse studio system" />
        </div>
      </RevealSection>

      <RevealSection className="story-band section-shell">
        <div>
          <span className="eyebrow">Our point of view</span>
          <h2>Tech education should feel practical, human, and confidence-building.</h2>
        </div>
        <p>
          We are not trying to turn every student into the same kind of coder. Some learners
          want to build games, some want websites, some want to understand AI tools, and some
          just want homework concepts to stop feeling mysterious. Dorse gives them a steady
          path: understand the idea, try the skill, build something real, review the result,
          and explain what changed.
        </p>
      </RevealSection>

      <RevealSection className="principle-grid section-shell">
        {principles.map(([title, text], index) => (
          <article key={title}>
            {[<FiMap />, <FiCheckCircle />, <FiHeart />, <FiShield />][index]}
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="team-note">
        <FiUsers />
        <div>
          <h2>Built for students, parents, and school teams.</h2>
          <p>
            Dorse can support individual learners, small peer groups, and focused school
            workshops. The experience stays personal: small groups, clear goals, practical
            projects, and feedback that students can act on immediately.
          </p>
        </div>
      </RevealSection>
    </main>
  );
};

export default About;
