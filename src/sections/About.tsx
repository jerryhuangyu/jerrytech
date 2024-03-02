import SectionTitle from '@/src/components/SectionTitle';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('Index');
  return (
    <div className="section-wrap">
      <SectionTitle title={t('sectionTitle.about')} />
      <p className="text font-light text-secondary brightness-110 xl:text-[17px]">
        {t('about')}
      </p>
    </div>
  );
};
export default About;
