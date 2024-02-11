import SectionTitle from "../SectionTitle";
import SkillBadge from "../SkillBadge";
import { skills } from "@/constants";

const Skillset = () => {
  return (
    <div className="section-wrap">
      <SectionTitle title="Skillset" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div key={skill}>
            <SkillBadge skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skillset;
