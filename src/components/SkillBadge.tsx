"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "../lib/class-name"

type SkillBadgeProps = {
  skill: string
  highlight?: boolean
  animate?: boolean
}

const SkillBadge = ({ skill, highlight, animate = true }: SkillBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const themeStyle =
    highlight || isHovered
      ? "border-purple-300 dark:border-[#C785EC] bg-purple-200 dark:bg-[#3D2853] text-purple-600 dark:text-[#C785EC]"
      : "border-zinc-200/70 dark:border-[#333333] bg-zinc-50 dark:bg-[#232323] text-primary dark:text-[#b9b9b9]"

  return (
    <motion.div
      whileHover={animate ? { scale: 1.4 } : {}}
      whileInView={animate ? { rotate: [5, -5, 5, -5, 0] } : {}}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={cn("text-sm font-light text-center text-nowrap", "rounded-sm border-[1px]", "px-2 py-1", themeStyle)}
      >
        {skill}
      </p>
    </motion.div>
  )
}
export default SkillBadge
