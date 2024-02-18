import SectionTitle from "@/components/SectionTitle";
import ExperienceDetail from "@/components/ExperienceDetail";
import { experiences } from "@/constants";

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
