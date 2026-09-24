function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI-Based IoT Microservice Optimization",
      description:
        "An adaptive framework designed to optimize dynamic IoT microservice deployment across Edge, Fog and Cloud infrastructure using AI-based resource optimization.",
      technologies: "AI • IoT • Edge/Fog/Cloud • Microservices",
    },
    {
      number: "02",
      title: "Smart Queue Management System",
      description:
        "A hospital token management concept designed to organize patient queues and reduce waiting-time related problems.",
      technologies: "Web Development • Backend • Database",
    },
    {
      number: "03",
      title: "Smart Attendance Management System",
      description:
        "A digital attendance management system designed to simplify attendance tracking and record management.",
      technologies: "Web Development • Database • Automation",
    },
  ];

  return (
    <section id="projects">
      <p className="section-label">PROJECTS</p>

      <h2>Things I've Been Building</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <span>{project.number}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <small>{project.technologies}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;