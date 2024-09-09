import FloatBtn from '@/src/components/FloatBtn';
import { RiHome5Line } from 'react-icons/ri';
import { PiLightbulb } from 'react-icons/pi';
import { BsSuitcase } from 'react-icons/bs';
import { MdOutlineCases } from 'react-icons/md';
import {
  Skillset,
  Projects,
  Hero,
  Experience,
  About,
  Footer,
  Navbar
} from '@/src/sections';
import { useTranslations } from 'next-intl';
import { HOME_SECTIONS } from '@/types';

export default function Home() {
  const t = useTranslations();
  const home = t('Index.sectionTitle.home');
  const about = t('Index.sectionTitle.about');
  const experience = t('Index.sectionTitle.experience');
  const project = t('Index.sectionTitle.project');

  const NavbarButtons = [
    {
      title: home,
      to: `#${home.toLowerCase()}`,
      sectionKey: HOME_SECTIONS.HOME,
      icon: <RiHome5Line />
    },
    {
      title: about,
      to: `#${about.toLowerCase()}`,
      sectionKey: HOME_SECTIONS.ABOUT,
      icon: <PiLightbulb />
    },
    {
      title: experience,
      to: `#${experience.toLowerCase()}`,
      sectionKey: HOME_SECTIONS.EXPERIENCE,
      icon: <BsSuitcase />
    },
    {
      title: project,
      to: `#${project.toLowerCase()}`,
      sectionKey: HOME_SECTIONS.PROJECT,
      icon: <MdOutlineCases />
    }
  ];

  return (
    <main className="flex min-h-screen select-none flex-col items-center justify-around">
      <Navbar buttons={NavbarButtons} />
      <Hero />
      <About />
      <Skillset />
      <Experience />
      <Projects />
      <Footer />
      <FloatBtn />
    </main>
  );
}
