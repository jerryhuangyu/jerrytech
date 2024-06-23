import { useTranslations, useMessages } from 'next-intl';
type IntlMessages = typeof import('@/messages/en.json');

import SectionTitle from '@/src/components/SectionTitle';
import ExperienceDetail from '@/src/components/ExperienceDetail';
import SpringFromLeft from '@/src/components/motions/SpringFromLeft';

const Experience = () => {
  const t = useTranslations('Index');
  const m = useMessages() as IntlMessages;
  const experiences = Object.values(m.Index.experiences);

  return (
    <div className="section-wrap mb-4">
      <SectionTitle title={t('sectionTitle.experience')} />
      <div className="flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <SpringFromLeft>
            <ExperienceDetail
              timestamp={experience.timestamp}
              title={experience.title}
              detail={experience.detail}
              skills={Object.values(experience.skills)}
              key={`experience-${index}`}
            />
          </SpringFromLeft>
        ))}
      </div>
    </div>
  );
};
export default Experience;
