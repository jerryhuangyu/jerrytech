import SectionTitle from '@/src/components/SectionTitle';
import SkillBadge from '@/src/components/SkillBadge';
import { skills } from '@/src/constants';
import { useTranslations } from 'next-intl';

const Skillset = () => {
  const t = useTranslations('Index');
  return (
    <div className="section-wrap">
      <SectionTitle title={t('sectionTitle.skillset')} />
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
