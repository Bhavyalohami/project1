import React from "react";
import { FiArrowRight, FiCheckCircle, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import pricingArt from "../assets/pricing-art.svg";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const plans = [
  {
    name: "Starter",
    bestFor: "Curious beginners",
    price: "Placement first",
    items: ["Learning map", "First project brief", "Parent summary", "Track recommendation"],
  },
  {
    name: "Studio",
    bestFor: "Consistent builders",
    price: "Weekly cohort",
    featured: true,
    items: ["Small-group sessions", "Mentor code review", "Project milestones", "Demo preparation"],
  },
  {
    name: "Intensive",
    bestFor: "Portfolio goals",
    price: "Custom sprint",
    items: ["1:1 guidance", "Full-stack project", "Deployment support", "Presentation polish"],
  },
];

const Pricing = () => {
  return (
    <main className="pricing-page">
      <RevealSection className="page-hero compact">
        <span className="eyebrow">Plans</span>
        <h1>Simple options based on learner support level.</h1>
        <p>
          Dorse starts with placement because the right track depends on age, confidence,
          schedule, and what the learner wants to build.
        </p>
        <img className="page-visual" src={pricingArt} alt="Dorse plan orbit graphic" />
        <KineticScene variant="page" label="Animated Dorse plans system" />
      </RevealSection>

      <RevealSection className="pricing-grid section-shell">
        {plans.map((plan) => (
          <article className={plan.featured ? "featured" : ""} key={plan.name}>
            {plan.featured && <span className="plan-badge"><FiStar /> Most popular</span>}
            <h2>{plan.name}</h2>
            <p>{plan.bestFor}</p>
            <strong>{plan.price}</strong>
            <ul>
              {plan.items.map((item) => (
                <li key={item}><FiCheckCircle /> {item}</li>
              ))}
            </ul>
            <Link to="/contact" className="button primary">Ask about {plan.name} <FiArrowRight /></Link>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="pricing-note">
        <h2>No fake urgency, no mystery package.</h2>
        <p>
          We recommend the smallest useful plan first. If a learner only needs concept repair
          or project feedback, we will say that clearly.
        </p>
      </RevealSection>
    </main>
  );
};

export default Pricing;
