import NavbarBtn from "@/components/NavbarBtn";
import { RiHome5Line } from "react-icons/ri";
import { PiLightbulb } from "react-icons/pi";
import { BsSuitcase } from "react-icons/bs";
import { MdOutlineCases } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed top-8 flex h-12 gap-1 rounded-2xl bg-zinc-800/70 bg-clip-padding px-3 py-[6px] backdrop-blur">
      <NavbarBtn to="" name="Home" icon={<RiHome5Line />} />
      <NavbarBtn to="#about" name="About" icon={<PiLightbulb />} />
      <NavbarBtn to="#experience" name="Experience" icon={<BsSuitcase />} />
      <NavbarBtn to="#project" name="Project" icon={<MdOutlineCases />} />
    </div>
  );
};
export default Navbar;
