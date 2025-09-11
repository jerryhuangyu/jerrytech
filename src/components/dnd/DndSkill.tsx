"use client"

import { cn } from "@/src/lib/class-name"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import Image from "next/image"
import { useState } from "react"

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
      aria-describedby={label}
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition,
        touchAction: "none",
      }}
      className={cn(
        "flex flex-col items-center",
        "rounded-sm border-[1px] border-zinc-100 dark:border-[#333333] shadow-xs",
        "bg-zinc-50 dark:bg-[#232323] text-secondary dark:text-secondary-dark",
        "min-w-12 min-h-12",
        "px-2 pt-2 pb-[1px]",
        isHovered && "border-purple-300 dark:border-purple-300 bg-purple-200 dark:bg-purple-950",
        isHovered && "text-purple-500 dark:text-purple-300",
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
