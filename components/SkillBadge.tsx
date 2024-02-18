type SkillBadgeProps = {
  skill: string;
  highlight?: boolean;
};

const SkillBadge = ({ skill, highlight }: SkillBadgeProps) => {
  const themeStyle = highlight
    ? 'border-[#C785EC] bg-[#3D2853] text-[#C785EC]'
    : 'border-[#333333] bg-[#232323] text-[#b9b9b9]';
  return (
    <p
      className={`text-nowrap rounded-sm border-[1px] px-2 py-1 text-center text-sm font-light ${themeStyle}`}
    >
      {skill}
    </p>
  );
};
export default SkillBadge;
