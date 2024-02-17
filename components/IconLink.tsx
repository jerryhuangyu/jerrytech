import Image from "next/image";

type IconLinkProps = {
  icon: string;
  name: string;
  to: string;
};

const IconLink = ({ icon, name, to }: IconLinkProps) => {
  return (
    <a href={to} target="_blank" className="cursor-pointer" title={name}>
      <Image className="invert" src={icon} alt={name} height={20} width={20} />
    </a>
  );
};
export default IconLink;
