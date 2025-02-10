"use client"

import { techSkills } from "@/src/constants"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"
import { twMerge } from "tailwind-merge"
import DndSkill from "./DndSkill"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const DND_HINT_DURATION_SEC = 2

const _DndHint = () => {
	// const [dndHintComplete, setDndHintComplete] = useState(false)

	const hiddenDndHint = () => {
		// 	const job = setTimeout(() => {
		// 		setDndHintComplete(true)
		// 		clearTimeout(job)
		// 		gsap.to(".dnd-hint-text", { opacity: 0, duration: 0.15 })
		// 	}, 8000)
	}

	const showDndHintText = () => {
		gsap.to(".dnd-hint-text", { opacity: 1, duration: DND_HINT_DURATION_SEC + 2 })
	}

	useGSAP(() => {
		gsap.to(".dnd-hint", {
			scrollTrigger: { trigger: ".dnd-hint", start: "top 90%" },
			x: 210,
			y: -75,
			rotate: 18,
			duration: DND_HINT_DURATION_SEC,
			ease: "elastic.in(1,0.3)",
			onStart: showDndHintText,
			onComplete: hiddenDndHint,
		})
	})

	return (
		<>
			<p
				className={twMerge(
					"dnd-hint-text [text-shadow:_0_4px_4px_rgb(216_180_254_/_0.7)]",
					"absolute text-purple-300 font-bold text-md -top-28 left-[180px] rotate-[18deg] m-1 opacity-0",
					"before:absolute before:h-full before:w-full before:-z-10",
					// dndHintComplete && "opacity-0 duration-500 pointer-events-none",
				)}
			>
				Try Drag and Drop
			</p>
			<div
				className={twMerge(
					"dnd-hint flex absolute pointer-events-none transition-all",
					// dndHintComplete && "opacity-0 duration-500 pointer-events-none",
				)}
			>
				<DndSkill
					key={techSkills[0].id}
					id={techSkills[0].id}
					label={techSkills[0].label}
					src={techSkills[0].icon}
					isHover
				/>
			</div>
		</>
	)
}

const DndHint = dynamic(() => Promise.resolve(_DndHint), { ssr: false })
export default DndHint
