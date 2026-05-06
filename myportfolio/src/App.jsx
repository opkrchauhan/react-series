import "./App.css";

function App() {
  const name = "Omprakash Kumar";
  const profession = "Software Engineer";
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

  return (
    <div>
      {/* header Section */}
      <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello! I am {name}, a passionate {profession}, I love building web
          application that solves real world user problems.
        </p>
      </section>

      {/* Projects Section */}

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a
                href="{project.link}"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>
          If you would like to get touch, feel free to email me at
          <a href="mailto:abc@gmail.com"> abc@gmail.com</a>{" "}
        </p>
      </section>
      {/* Footer Section */}
      <footer className="footer-section">
        <p>2026. All Right Reserved</p>
      </footer>
    </div>
  );
}

export default App;
