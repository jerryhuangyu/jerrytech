import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projectCards } from "@/constants";

const Projects = () => {
  return (
    <div className="section-wrap">
      <SectionTitle title="Project" />
      <div className="flex flex-wrap gap-2">
        {projectCards.map((card) => (
          <ProjectCard card={card} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
