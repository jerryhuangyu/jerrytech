import { SocialMediaLink } from "@/types";
import Image from "next/image";

type SocialMediaProps = {
  link: SocialMediaLink;
};

const SocialMedia = ({ link }: SocialMediaProps) => {
  return (
    <li className="cursor-pointer" title={link.name}>
      <a href={link.to} target="_blank">
        <Image
          className="invert"
          src={link.icon}
          alt={link.name}
          height={20}
          width={20}
        />
      </a>
    </li>
  );
};
export default SocialMedia;
