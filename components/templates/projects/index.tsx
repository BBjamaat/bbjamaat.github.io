import ProjectCard from "./project-card";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <div>
      <h2 className="my-4 text-2xl font-bold">Our Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
