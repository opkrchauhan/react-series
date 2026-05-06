const projects = [
  {
    title: "Project 1",
    description: "Web Application for managing tasks",
    Link: "#",
  },
  {
    title: "Project 2",
    description: "Java Application for an Ecommerce website",
    Link: "#",
  },
  {
    title: "Project 3",
    description: "React Full Stack Application for Social Media Platform",
    Link: "#",
  },
];

function Project() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href="{project.link}" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
