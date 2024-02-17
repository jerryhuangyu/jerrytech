import ProjectCard from "@/components/ProjectCard";
import { projectCards } from "@/constants";

const Projects = () => {
  return (
    <div className="section-wrap flex flex-wrap justify-center gap-2">
      {projectCards.map((card) => (
        <ProjectCard card={card} />
      ))}
    </div>
  );
};
export default Projects;
