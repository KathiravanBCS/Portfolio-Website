import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowUpRightFromSquare, FaCode, FaReact } from "react-icons/fa6";

function About() {
  return (
    <section id="Home" className="portfolio-hero" aria-labelledby="intro-title">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy">
        <p className="hero-eyebrow"><span /> A LITTLE ABOUT ME</p>
        <h1 id="intro-title" className="hero-title">
          Hi, I&apos;m<br />
          <span>Kathiravan.</span>
        </h1>
        <p className="hero-role">Front End Developer<span aria-hidden="true"> /</span></p>
        <p className="hero-description">
          I turn ideas into thoughtful, responsive web experiences. With React,
          JavaScript, and an eye for detail, I build interfaces that feel as good
          as they look.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="hero-button hero-button-primary">
            Explore my work <FaArrowUpRightFromSquare aria-hidden="true" />
          </Link>
          <Link to="/contact" className="hero-button hero-button-secondary">
            Let&apos;s talk <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <ul className="hero-stack" aria-label="Technologies I work with">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML &amp; CSS</li>
        </ul>
      </div>

      <div className="hero-portrait">
        <div className="portrait-outline" aria-hidden="true" />
        <figure className="portrait-card">
          <img
            src="/kathiravan-profile.jpg"
            alt="Kathiravan V wearing a dark green shirt"
            width="6000"
            height="4000"
            fetchPriority="high"
            className="portrait-photo"
          />
          <figcaption className="portrait-caption">
            <div>
              <span className="portrait-caption-label">THE PERSON BEHIND THE CODE</span>
              <span className="portrait-caption-name">Kathiravan V</span>
            </div>
            <FaCode aria-hidden="true" />
          </figcaption>
        </figure>
        <div className="portrait-badge portrait-badge-react" aria-hidden="true">
          <FaReact /> <span>Built with React</span>
        </div>
        <div className="portrait-badge portrait-badge-detail" aria-hidden="true">
          <span className="portrait-spark">✦</span> A little detail. A lot of care.
        </div>
      </div>
    </section>
  );
}

export default About;
