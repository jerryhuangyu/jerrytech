import ProjectCard from '@/src/components/ProjectCard';
import SectionTitle from '@/src/components/SectionTitle';
import { useTranslations, useMessages } from 'next-intl';
type IntlMessages = typeof import('@/messages/en.json');

const Projects = () => {
  const t = useTranslations('Index');
  const m = useMessages() as IntlMessages;
  const projects = Object.values(m.Index.projects);

  return (
    <div className="section-wrap mb-16">
      <SectionTitle title={t('sectionTitle.project')} />
      <div className="flex flex-wrap gap-2">
        {projects.map((project, index) => (
          <ProjectCard
            description={project.description}
            projectImage={project.projectImage}
            source={project.source}
            demo={project.demo}
            name={project.name}
            skills={Object.values(project.skills)}
            key={`project-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
