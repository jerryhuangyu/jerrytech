import SectionTitle from '@/src/components/SectionTitle';
import ExperienceDetail from '@/src/components/ExperienceDetail';
import { experiences } from '@/src/constants';

const Experience = () => {
  return (
    <div className="section-wrap mb-4">
      <SectionTitle title="Experience" />
      <div className="flex flex-col gap-8">
        {experiences.map((ex) => (
          <ExperienceDetail
            timestamp={ex.timestamp}
            title={ex.title}
            detail={ex.detail}
            skills={ex.skills}
            key={ex.title}
          />
        ))}
      </div>
    </div>
  );
};
export default Experience;
