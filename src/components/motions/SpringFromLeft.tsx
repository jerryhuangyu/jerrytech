"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

type SpringFromLeftProps = {
	children: ReactNode
}

const SpringFromLeft = ({ children }: SpringFromLeftProps) => {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			transition={{ delay: 0.33, type: "spring", stiffness: 220 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}

export default SpringFromLeft
