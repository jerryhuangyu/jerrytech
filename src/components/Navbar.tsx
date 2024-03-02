import NavbarBtn from '@/src/components/NavbarBtn';
import { RiHome5Line } from 'react-icons/ri';
import { PiLightbulb } from 'react-icons/pi';
import { BsSuitcase } from 'react-icons/bs';
import { MdOutlineCases } from 'react-icons/md';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const t = useTranslations();
  const home = t('Index.sectionTitle.home');
  const about = t('Index.sectionTitle.about');
  const experience = t('Index.sectionTitle.experience');
  const project = t('Index.sectionTitle.project');

  return (
    <div className="fixed top-8 z-50 grid grid-cols-2 gap-[0.5px] rounded-2xl bg-zinc-800/70 bg-clip-padding px-3 py-[6px] backdrop-blur sm:h-12 sm:grid-cols-4 sm:gap-1">
      <NavbarBtn
        to={`#${home.toLowerCase()}`}
        name={home}
        icon={<RiHome5Line />}
      />
      <NavbarBtn
        to={`#${about.toLowerCase()}`}
        name={about}
        icon={<PiLightbulb />}
      />
      <NavbarBtn
        to={`#${experience.toLowerCase()}`}
        name={experience}
        icon={<BsSuitcase />}
      />
      <NavbarBtn
        to={`#${project.toLowerCase()}`}
        name={project}
        icon={<MdOutlineCases />}
      />
    </div>
  );
};
export default Navbar;
