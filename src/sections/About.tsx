import SectionTitle from '@/src/components/SectionTitle';
import { about } from '@/src/constants';

const About = () => {
  return (
    <div className="section-wrap">
      <SectionTitle title="About" />
      <p className="text font-light text-secondary brightness-110 xl:text-[17px]">
        {about}
      </p>
    </div>
  );
};
export default About;
