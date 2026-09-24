function Hero() {
  return (
    <section id="home">
      <p className="intro">HELLO, I'M</p>

      <h1>Akash K.</h1>

      <h2>Full Stack Developer</h2>

      <p>
        B.Tech Information Technology student focused on building
        practical web applications and solving real-world problems
        through software.
      </p>

      <div className="hero-buttons">
        <a href="#projects">
          <button>View Projects</button>
        </a>

        <a
          href="https://github.com/theakashk2006-blip"
          target="_blank"
          rel="noreferrer"
        >
          <button className="secondary-button">GitHub</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;