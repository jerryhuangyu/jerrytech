import { SocialMediaLink } from "@/types";
import Image from "next/image";
import Link from "next/link";

type SocialMediaProps = {
  link: SocialMediaLink;
};

const SocialMedia = ({ link }: SocialMediaProps) => {
  return (
    <li className="cursor-pointer">
      <Link href={link.to}>
        <Image
          className="invert"
          src={link.icon}
          alt={link.name}
          height={20}
          width={20}
        />
      </Link>
    </li>
  );
};
export default SocialMedia;
