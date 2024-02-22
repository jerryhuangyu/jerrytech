'use client';

import { Card } from '@/types';
import IconLink from './IconLink';
import github from '@/images/github.svg';
import link from '@/images/link.svg';

type ProjectCardPorps = {
  card: Card;
};

const ProjectCard = ({ card }: ProjectCardPorps) => {
  return (
    <div
      className="relative flex h-40 min-w-full flex-1 flex-col items-center justify-around rounded border-[1.5px] border-[#333333] bg-gradient-to-br from-[#202020] to-[#151515] px-5 pb-5 pt-10 duration-300 ease-in-out hover:border-purple-400 hover:border-opacity-60 hover:from-[#242424] hover:to-[#101010] md:min-w-[40%] md:max-w-[49.6%]"
      onClick={() => window.open(card.demo, '_blank')}
    >
      <div className="absolute right-0 top-0 flex gap-3 p-5">
        <IconLink icon={github} name="github" to={card.source} />
        <IconLink icon={link} name="demo" to={card.demo} />
      </div>
      <h3 className="text-xl font-light text-primary">{card.name}</h3>
      <div className="flex flex-wrap justify-center gap-3 tracking-tight text-secondary ">
        {card.skills.map((s) => (
          <p key={s} className="font-mono text-xs font-thin brightness-75">
            {s}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
