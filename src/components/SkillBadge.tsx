'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

type SkillBadgeProps = {
  skill: string;
  highlight?: boolean;
  animate?: boolean;
};

const SkillBadge = ({ skill, highlight, animate = true }: SkillBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeStyle =
    highlight || isHovered
      ? 'border-[#C785EC] bg-[#3D2853] text-[#C785EC]'
      : 'border-[#333333] bg-[#232323] text-[#b9b9b9]';

  return (
    <motion.div
      whileHover={animate ? { scale: 1.4 } : {}}
      whileInView={animate ? { rotate: [5, -5, 5, -5, 0] } : {}}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`text-nowrap rounded-sm border-[1px] px-2 py-1 text-center text-sm font-light ${themeStyle}`}
      >
        {skill}
      </p>
    </motion.div>
  );
};
export default SkillBadge;
