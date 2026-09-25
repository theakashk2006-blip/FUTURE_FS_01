function About() {
  return (
    <section id="about">
      <p className="section-label">ABOUT ME</p>

      <h2>Building. Learning. Improving.</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am a B.Tech Information Technology student at Sri Shakthi
            Institute of Engineering and Technology, focused on full-stack
            development and building practical software applications.
          </p>

          <p>
            I am currently developing my skills in Java, JavaScript, React,
            Node.js, databases, and modern web development.
          </p>
        </div>

        <div className="education">
          <h3>Education</h3>

          <div className="education-item">
            <span className="education-year">2024 – 2028</span>

            <h4>B.Tech — Information Technology</h4>

            <p>
              Sri Shakthi Institute of Engineering and Technology
            </p>

            <small>CGPA: 7.9</small>
          </div>

          <div className="education-item">
            <span className="education-year">2024</span>

            <h4>Higher Secondary — 12th</h4>

            <p>
              Kongu Vellalar Matriculation Higher Secondary School
            </p>

            <small>Percentage: 86%</small>
          </div>

          <div className="education-item">
            <span className="education-year">2022</span>

            <h4>Secondary — 10th</h4>

            <p>
              Kongu Vellalar Matriculation Higher Secondary School
            </p>

            <small>Percentage: 96%</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;