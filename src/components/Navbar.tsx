import NavbarBtn from '@/src/components/NavbarBtn';
import { RiHome5Line } from 'react-icons/ri';
import { PiLightbulb } from 'react-icons/pi';
import { BsSuitcase } from 'react-icons/bs';
import { MdOutlineCases } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="fixed top-8 z-50 grid grid-cols-2 gap-[0.5px] rounded-2xl bg-zinc-800/70 bg-clip-padding px-3 py-[6px] backdrop-blur sm:h-12 sm:grid-cols-4 sm:gap-1">
      <NavbarBtn to="#home" name="Home" icon={<RiHome5Line />} />
      <NavbarBtn to="#about" name="About" icon={<PiLightbulb />} />
      <NavbarBtn to="#experience" name="Experience" icon={<BsSuitcase />} />
      <NavbarBtn to="#project" name="Project" icon={<MdOutlineCases />} />
    </div>
  );
};
export default Navbar;
