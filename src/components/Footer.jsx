import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiGithub, FiInstagram, FiMail, FiMapPin, FiYoutube } from "react-icons/fi";
import logo from "../assets/dorse-logo.svg";

const Footer = () => {
  return (
    <footer>
      <section className="footer-cta">
        <div>
          <span>Start with one honest question</span>
          <h2>What does the learner want to build?</h2>
        </div>
        <Link to="/contact">Get guidance <FiArrowRight /></Link>
      </section>

      <section className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Dorse Learning Studio" />
          <p>Mentorship-led tech learning for young builders, problem solvers, and future product thinkers.</p>
          <span><FiMapPin /> Remote-first, small-cohort learning</span>
        </div>

        <div className="footer-links">
          <h5>Studio</h5>
          <Link to="/about">About</Link>
          <Link to="/outcomes">Outcomes</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/showcase">Showcase</Link>
        </div>

        <div className="footer-links">
          <h5>Learn</h5>
          <Link to="/programs">Programs</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Plans</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h5>Connect</h5>
          <a href="https://youtube.com" aria-label="YouTube"><FiYoutube /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FiInstagram /></a>
          <a href="https://github.com" aria-label="GitHub"><FiGithub /></a>
          <a href="mailto:hello@dorse.dev" aria-label="Email"><FiMail /></a>
        </div>
      </section>

      <section className="footer-bottom">
        <span>© 2026 Dorse Learning Studio</span>
        <span>Built for practice, projects, and better questions.</span>
      </section>
    </footer>
  );
};

export default Footer;
