type SkillBadgeProps = {
  skill: string;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <p className="text-nowrap rounded-sm border-[1px] border-[#333333] bg-[#232323] px-2 py-1 text-center text-sm font-light text-[#b9b9b9]">
      {skill}
    </p>
  );
};
export default SkillBadge;
