import React from "react";
import { FiArrowRight, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import contactArt from "../assets/contact-art.svg";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";

const Contact = () => {
   return <main className="contact">
        <RevealSection className="contact-intro">
            <span className="eyebrow">Contact Dorse</span>
            <h1>Tell us what the learner wants to build.</h1>
            <p>
                Share a little context and we will suggest a practical first step, program,
                or support path.
            </p>
            <div className="contact-cards">
              <span><FiMail /> hello@dorse.dev</span>
              <span><FiMapPin /> Remote-first cohorts</span>
              <span><FiMessageCircle /> Reply within 24 hours</span>
            </div>
            <img className="contact-art" src={contactArt} alt="Dorse placement call graphic" />
            <KineticScene variant="page" label="Animated Dorse contact system" />
        </RevealSection>
        <RevealSection className="contact-form-panel">
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder="Your name"/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required placeholder="you@example.com"/>
                </div>

                <div>
                    <label>Learning goal</label>
                    <select defaultValue="full-stack">
                      <option value="foundations">Tech foundations</option>
                      <option value="full-stack">Full-stack projects</option>
                      <option value="support">Query support</option>
                      <option value="workshop">Workshop or cohort</option>
                    </select>
                </div>

                <div>
                    <label>Message</label>
                    <textarea required placeholder="Tell us about the learner, current level, and what they want to build."/>
                </div>
                <button type="submit">Send message <FiArrowRight /></button>
            </form>
        </RevealSection>
    </main>
};

export default Contact;
