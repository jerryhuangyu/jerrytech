"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import Image from "next/image"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

type DndSkillProps = {
	label: string
	id: string
	src: string
	isHover?: boolean
}

const DndSkill = ({ label, id, src, isHover = false }: DndSkillProps) => {
	const { listeners, attributes, setNodeRef, transform, transition } = useSortable({ id: id })
	const [isHovered, setIsHovered] = useState(isHover)

	return (
		<div
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			style={{
				transform: CSS.Translate.toString(transform),
				transition: transition,
				touchAction: "none",
			}}
			className={twMerge(
				"rounded-sm border-[1px] flex flex-col items-center border-[#333333] bg-[#232323] text-[#b1b1b1] min-w-12 min-h-12 px-2 pt-2 pb-[1px]",
				isHovered && "border-[#C785EC] bg-[#3D2853] text-[#C785EC]",
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onDragEnd={() => setIsHovered(false)}
		>
			<div className="size-5">
				<Image alt={label} src={src} style={{ maxWidth: "100%", height: "auto" }} />
			</div>
			<p className="text-nowrap text-center text-[9px] font-light mt-[2px]">{label}</p>
		</div>
	)
}
export default DndSkill
