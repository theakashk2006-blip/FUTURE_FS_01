function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "HTML & CSS",
    "Git & GitHub",
  ];

  return (
    <section id="skills">
      <p className="section-label">TECHNICAL SKILLS</p>

      <h2>Technologies I Work With</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;