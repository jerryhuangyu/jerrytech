import { Card } from "@/types";
import IconLink from "./IconLink";
import github from "@/images/github.svg";
import link from "@/images/link.svg";

type ProjectCardPorps = {
  card: Card;
};

const ProjectCard = ({ card }: ProjectCardPorps) => {
  return (
    <div className="relative flex h-40 max-w-[49.6%] flex-1 flex-col items-center justify-around rounded border-[1.5px] border-[#333333] bg-gradient-to-br from-[#202020] to-[#151515] px-5 pb-5 pt-10 duration-300 ease-in-out hover:border-purple-400 hover:border-opacity-60 hover:from-[#242424] hover:to-[#101010]">
      <div className="absolute right-0 top-0 flex gap-3 p-5">
        <IconLink icon={github} name="github" to={card.source} />
        <IconLink icon={link} name="github" to={card.demo} />
      </div>
      <h3 className="text-primary text-xl font-light">{card.name}</h3>
      <div className="text-secondary flex gap-4 text-sm font-extralight">
        {card.skills.map((s) => (
          <p>{s}</p>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
