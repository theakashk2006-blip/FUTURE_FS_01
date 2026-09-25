import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
  FaJava
} from "react-icons/fa6";

import akashPhoto from "../assets/akashk.png";

function Hero() {
  return (
    <section id="home">
      <div className="hero-content">
        <p className="intro">HELLO, I'M</p>

        <h1>Akash K.</h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          B.Tech Information Technology student focused on building
          practical web applications and solving real-world problems
          through software.
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="hero-button primary-button"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-button secondary-button"
          >
            View Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/theakashk2006-blip"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-k-657914338"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:theakashk2006@gmail.com"
            aria-label="Email"
          >
            @
          </a>
        </div>

        <a href="/Resume.pdf" className="download-cv">
          Download CV
        </a>
      </div>

      <div className="hero-visual">
        <div className="hero-photo">
          <img src={akashPhoto} alt="Akash K." />
        </div>

        <div className="hero-tech-icon icon-java">
          <FaJava />
        </div>

        <div className="hero-tech-icon icon-react">
          <SiReact />
        </div>

        <div className="hero-tech-icon icon-node">
          <SiNodedotjs />
        </div>

        <div className="hero-tech-icon icon-js">
          <SiJavascript />
        </div>

        <div className="hero-tech-icon icon-mongo">
          <SiMongodb />
        </div>
      </div>
    </section>
  );
}

export default Hero;