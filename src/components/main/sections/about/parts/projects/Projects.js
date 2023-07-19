import "./Projects.scss"
function Projects() {
    const projects = [
      {
        title: "Mericos",
        description:
          "Mericos is an innovative company in the field of food delivery, with the objective of providing a fast and interactive experience to its customers.",
        img: "https://mericos.store/assets/only-logo-1bd82ad9.svg",
        url: "https://mericos.store/",
      },
    ];
    return (
      <div className="projects-section" id="projects">
        <div className="projects-heading-container">
          <h1 className="projects-heading">Projects</h1>
        </div>
        <div className="projects-container" id="projects">
          {projects.map(({ title, description, img, url }, index) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <div className="project">
                <img src={img} alt={`${title} logo`} className="project-icon" />
                <div className="project-description-container">
                  <h2 className="project-title">{title}</h2>
                  <p className="project-description">{description}</p>
                </div>
                <div className="project-button-container">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="project-button">Visit</button>
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
}
export default Projects;