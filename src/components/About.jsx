function About() {
  return (
    <section id="about">
      <p className="section-label">ABOUT ME</p>

      <h2>Building. Learning. Improving.</h2>

      <p>
        I am a B.Tech Information Technology student at Sri Shakthi
        Institute of Engineering and Technology, focused on full-stack
        development and building practical software applications.
      </p>

      <p>
        I am currently developing my skills in Java, JavaScript, React,
        Node.js, databases, and modern web development.
      </p>

      <div className="education">
        <h3>Education</h3>

        <div className="education-item">
          <h4>B.Tech — Information Technology</h4>
          <p>Sri Shakthi Institute of Engineering and Technology</p>
          <span>2024 – 2028 | CGPA: 7.9</span>
        </div>

        <div className="education-item">
          <h4>Higher Secondary — 12th</h4>
          <p>Kongu Vellalar Matriculation Higher Secondary School</p>
          <span>2024 | 86%</span>
        </div>

        <div className="education-item">
          <h4>Secondary — 10th</h4>
          <p>Kongu Vellalar Matriculation Higher Secondary School</p>
          <span>2022 | 96%</span>
        </div>
      </div>
    </section>
  );
}

export default About;