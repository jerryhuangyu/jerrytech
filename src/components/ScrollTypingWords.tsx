"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import SplitType from "split-type"
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

type WordsAnimateProps = {
	text: string
}

const ScrollTypingWords = ({ text }: WordsAnimateProps) => {
	const container = useRef(null)

	useGSAP(
		() => {
			if (!container.current) return
			const splitTypes = new SplitType(container.current, {
				types: ["chars"],
				tagName: "p",
			})
			gsap.from(splitTypes.chars, {
				scrollTrigger: {
					trigger: container.current,
					start: "top 70%",
					end: "top 30%",
					scrub: true,
					markers: false,
				},
				opacity: 0.2,
				stagger: 0.1,
			})
		},
		{ scope: container, dependencies: [container] },
	)

	return (
		<p className="break-all" ref={container}>
			{text}
		</p>
	)
}
export default ScrollTypingWords
