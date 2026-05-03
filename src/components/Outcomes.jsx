import React from "react";
import { FiAward, FiBarChart2, FiCheckCircle, FiCode, FiMessageSquare, FiTrendingUp } from "react-icons/fi";
import outcomesArt from "../assets/outcomes-art.svg";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const outcomes = [
  ["Project fluency", "Students learn to plan, build, test, polish, and present complete projects."],
  ["Debugging confidence", "They practice reading errors, isolating problems, and asking useful questions."],
  ["Communication", "Learners explain tradeoffs, describe blockers, and demo work with clarity."],
  ["Portfolio readiness", "Finished projects become evidence of skill, not just certificates."],
];

const milestones = [
  "Week 1: diagnostic project and learning map",
  "Week 2-3: core concepts, guided builds, and daily debugging reps",
  "Week 4-5: independent project sprint with mentor review",
  "Week 6: final demo, reflection, and next-track recommendation",
];

const Outcomes = () => {
  return (
    <main className="outcomes-page">
      <RevealSection className="page-hero compact">
        <span className="eyebrow">Learner outcomes</span>
        <h1>Progress you can see in the work.</h1>
        <p>
          Dorse measures growth through finished projects, better questions, clearer
          explanations, and the learner's ability to keep going when something breaks.
        </p>
        <img className="page-visual" src={outcomesArt} alt="Dorse outcome graph graphic" />
        <KineticScene variant="page" label="Animated learner outcome system" />
      </RevealSection>

      <RevealSection className="proof-strip section-shell">
        <article>
          <FiTrendingUp />
          <strong>Confidence</strong>
          <span>Students leave with repeatable ways to approach new problems.</span>
        </article>
        <article>
          <FiCode />
          <strong>Craft</strong>
          <span>Projects are reviewed for structure, usability, and presentation.</span>
        </article>
        <article>
          <FiMessageSquare />
          <strong>Clarity</strong>
          <span>Every learner practices explaining what they built and why it works.</span>
        </article>
      </RevealSection>

      <RevealSection className="outcome-grid section-shell">
        {outcomes.map(([title, text]) => (
          <article key={title}>
            <FiAward />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="milestone-panel section-shell">
        <div>
          <span className="eyebrow">A typical cycle</span>
          <h2>Six weeks from unsure to demo-ready.</h2>
        </div>
        <ul>
          {milestones.map((milestone) => (
            <li key={milestone}><FiCheckCircle /> {milestone}</li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="quote-panel">
        <FiBarChart2 />
        <p>
          "The goal is not to memorize more syntax. The goal is to build the habit of
          investigating, testing, improving, and communicating."
        </p>
      </RevealSection>
    </main>
  );
};

export default Outcomes;
