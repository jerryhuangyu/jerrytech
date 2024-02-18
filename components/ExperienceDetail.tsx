import SkillBadge from '@/components/SkillBadge';

type ExperienceDetailProps = {
  timestamp: string;
  title: string;
  detail: string;
  skills: string[];
};

const ExperienceDetail = ({
  timestamp,
  title,
  detail,
  skills
}: ExperienceDetailProps) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <h3 className="text text-secondary mr-6 min-w-40 text-sm">{timestamp}</h3>
      <div className="flex flex-col gap-2">
        <h3 className="text text-primary text-base">{title}</h3>
        <p className="text text-secondary text-base">{detail}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} highlight />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
