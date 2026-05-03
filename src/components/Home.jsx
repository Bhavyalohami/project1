import React, { useState } from "react";
import vg from "../assets/2.webp";
import network from "../assets/4.jpg";
import { Link } from "react-router-dom";
import KineticScene from "./KineticScene";
import RevealSection from "./RevealSection";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiCompass,
  FiCpu,
  FiLayers,
  FiMessageCircle,
  FiMonitor,
  FiPlayCircle,
  FiShield,
  FiStar,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const outcomes = [
  "Ask better technical questions",
  "Build useful projects end to end",
  "Debug with confidence",
  "Explain ideas clearly",
];

const tracks = [
  {
    icon: <FiCpu />,
    title: "Foundations",
    text: "Computing basics, creative logic, digital fluency, and healthy problem-solving habits.",
  },
  {
    icon: <FiCode />,
    title: "Full-stack projects",
    text: "Frontend, backend, APIs, databases, deployment, and portfolio-ready applications.",
  },
  {
    icon: <FiUsers />,
    title: "Peer support",
    text: "Guided circles where students learn to review, explain, collaborate, and unblock each other.",
  },
];

const metrics = [
  ["4", "learning tracks"],
  ["12+", "project briefs"],
  ["1:1", "mentor reviews"],
  ["24h", "support response"],
];

const quizOptions = [
  {
    key: "new",
    label: "Brand new",
    result: "Start with Tech Foundations: visual logic, creative computing, and a first mini-project.",
  },
  {
    key: "builder",
    label: "Has built before",
    result: "Choose Full-stack Studio: React, APIs, auth basics, deployment, and mentor code review.",
  },
  {
    key: "stuck",
    label: "Gets stuck often",
    result: "Try Query Desk: debugging routines, concept repair, and weekly unblock sessions.",
  },
];

const comparisons = [
  ["Generic video courses", "Dorse live project review"],
  ["One-size-fits-all lessons", "Placement-led learner roadmap"],
  ["Syntax memorization", "Problem-solving and demo practice"],
  ["Unclear progress", "Parent-friendly milestones"],
];

const testimonials = [
  {
    quote: "The best change was not just the code. My son now explains what broke before asking for help.",
    name: "Parent of age 12 learner",
  },
  {
    quote: "I finally understood how frontend and backend connect because we built the same idea step by step.",
    name: "Full-stack studio student",
  },
  {
    quote: "The cohort format made debugging feel normal. Everyone had a blocker, and everyone learned from it.",
    name: "Peer lab learner",
  },
];

const Home = () => {
  const [selectedPath, setSelectedPath] = useState(quizOptions[0]);

  return (
    <>
      <RevealSection className="home" id="home">
        <main className="hero-content">
          <span className="eyebrow">Tech mentorship for young builders</span>
          <h1>Dorse helps curious students turn questions into shipped projects.</h1>
          <p>
            A learning studio for coding, full-stack development, peer support, and the
            durable problem-solving skills students need beyond the classroom.
          </p>
          <div className="hero-actions">
            <Link to="/programs" className="button primary">Explore programs <FiArrowRight /></Link>
            <Link to="/services" className="button secondary"><FiPlayCircle /> See services</Link>
          </div>
        </main>
        <aside className="hero-panel" aria-label="Dorse learning dashboard">
          <KineticScene />
          <div className="status-card">
            <span>Current sprint</span>
            <strong>Build a student help desk</strong>
            <p>APIs, forms, routing, deployment</p>
          </div>
          <div className="pulse-card">
            <FiZap />
            <span>Mentor feedback live</span>
          </div>
          <div className="metric-stack">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </RevealSection>

      <RevealSection className="signal-ribbon" aria-label="Dorse learning signals">
        <span>Mentor review</span>
        <span>Project sprints</span>
        <span>Debug labs</span>
        <span>Demo rooms</span>
        <span>Parent clarity</span>
        <span>Portfolio proof</span>
      </RevealSection>

      <RevealSection className="home2" id="service">
        <img src={vg} alt="Student technology illustration" />
        <div>
          <span className="eyebrow">What Dorse does</span>
          <h2>We make tech feel learnable, practical, and alive.</h2>
          <p>
            Students do not need another pile of tutorials. They need a place to bring
            messy questions, practice with structure, and build the confidence to solve
            real problems from scratch.
          </p>
          <div className="check-list">
            {outcomes.map((item) => (
              <span key={item}><FiCheckCircle /> {item}</span>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="home3" id="about">
        <div>
          <span className="eyebrow">Who we are</span>
          <h1>A mentor-led studio built for learners who want to understand technology deeply.</h1>
          <p>
            Dorse combines practical engineering, friendly guidance, and peer learning.
            We help students move from "I have no idea where to start" to "I can break this
            problem down, test it, improve it, and explain it."
          </p>
        </div>
        <img src={network} alt="Connected digital workspace" />
      </RevealSection>

      <RevealSection className="fit-finder section-shell">
        <div>
          <span className="eyebrow">Placement finder</span>
          <h2>Find a better starting point in ten seconds.</h2>
          <p>
            Competitors often begin with a giant catalog. Dorse starts with learner confidence,
            goals, and the type of support they need next.
          </p>
        </div>
        <article>
          <h3>What best describes the learner?</h3>
          <div className="quiz-options">
            {quizOptions.map((option) => (
              <button
                className={selectedPath.key === option.key ? "active" : ""}
                key={option.key}
                onClick={() => setSelectedPath(option)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="quiz-result">
            <FiTarget />
            <p>{selectedPath.result}</p>
          </div>
        </article>
      </RevealSection>

      <RevealSection className="home4" id="brands">
        <div>
          <span className="eyebrow">Learning tracks</span>
          <h1>Built around the skills that make students independent.</h1>
          <article>
            {tracks.map((track) => (
              <div key={track.title}>
                {track.icon}
                <h2>{track.title}</h2>
                <p>{track.text}</p>
              </div>
            ))}
          </article>
        </div>
      </RevealSection>

      <RevealSection className="advantage-section section-shell">
        <div>
          <span className="eyebrow">Dorse advantage</span>
          <h2>More personal than a self-paced app. More flexible than a local-only center.</h2>
        </div>
        <div className="comparison-list">
          {comparisons.map(([common, dorse]) => (
            <article key={common}>
              <span>{common}</span>
              <FiArrowRight />
              <strong>{dorse}</strong>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="feature-showcase">
        <div className="feature-copy">
          <span className="eyebrow">Learning operating system</span>
          <h2>Everything a serious young builder needs in one path.</h2>
          <p>
            Each learner gets a project brief, mentor notes, debugging checklist, milestone
            tracker, and demo preparation. It feels like a real product team, sized for students.
          </p>
        </div>
        <div className="dashboard-mock">
          <header>
            <span>Studio dashboard</span>
            <strong>Week 04</strong>
          </header>
          <div className="mock-grid">
            <article><FiBookOpen /><span>Brief</span><strong>Portfolio API</strong></article>
            <article><FiCode /><span>Review</span><strong>3 notes</strong></article>
            <article><FiShield /><span>Safety</span><strong>Checked</strong></article>
            <article><FiMonitor /><span>Demo</span><strong>Friday</strong></article>
          </div>
          <div className="progress-line"><span /></div>
        </div>
      </RevealSection>

      <RevealSection className="testimonial-section section-shell">
        <div>
          <span className="eyebrow">Parent and learner voice</span>
          <h2>Proof that feels human.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name}>
              <FiStar />
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="pathway-strip">
        <article>
          <FiLayers />
          <span>Step 01</span>
          <strong>Placement</strong>
          <p>We identify the learner's level, interest, and best project type.</p>
        </article>
        <article>
          <FiZap />
          <span>Step 02</span>
          <strong>Sprint</strong>
          <p>They build in weekly milestones with live mentor feedback.</p>
        </article>
        <article>
          <FiAward />
          <span>Step 03</span>
          <strong>Demo</strong>
          <p>They present the finished project and leave with a next roadmap.</p>
        </article>
      </RevealSection>

      <RevealSection className="home5">
        <div>
          <FiCompass />
          <h2>Not sure where to begin?</h2>
          <p>Send us the learner's age, interests, and current comfort level. We will suggest a first project and track.</p>
        </div>
        <Link to="/contact" className="button primary">Get a roadmap <FiMessageCircle /></Link>
      </RevealSection>
    </>
  );
};

export default Home;
