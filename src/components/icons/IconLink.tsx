import type { BasicLink } from "@/types"
import Image from "next/image"

type IconLinkProps = BasicLink

const IconLink = ({ icon, name, to }: IconLinkProps) => {
  return (
    <a
      href={to}
      target="_blank"
      className="cursor-pointer brightness-40 dark:brightness-[.6] hover:brightness-0 dark:hover:brightness-200"
      title={name}
      rel="noreferrer"
    >
      <Image className="invert" src={icon} alt={name} height={20} width={20} />
    </a>
  )
}
export default IconLink
