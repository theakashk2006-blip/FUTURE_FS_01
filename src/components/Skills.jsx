function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills">
      <p className="section-label">TECHNICAL SKILLS</p>

      <h2>Technologies I Work With</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;