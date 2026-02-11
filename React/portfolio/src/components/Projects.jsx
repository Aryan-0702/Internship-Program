import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          title="Portfolio Website"
          description="Responsive React portfolio website."
        />
        <ProjectCard
          title="Car Rental App"
          description="Car booking platform using React."
        />
      </div>
    </section>
  );
};

export default Projects;