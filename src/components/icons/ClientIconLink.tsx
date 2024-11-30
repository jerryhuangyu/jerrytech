"use client"

import type { BasicLink } from "@/types"
import Image from "next/image"
import React from "react"

type ClientIconLinkProps = BasicLink

const ClientIconLink = ({ icon, name, to }: ClientIconLinkProps) => {
	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		window.open(to, "_blank")
	}
	return (
		<div
			onClick={onClick}
			onKeyDown={() => {}}
			className="cursor-pointer pointer-events-auto brightness-[.6] hover:brightness-200"
		>
			<Image className="invert" src={icon} alt={name} height={30} width={30} />
		</div>
	)
}

export default ClientIconLink
