"use client"
import { type ReactNode, useRef } from "react"
import useMouseAndScroll from "../hooks/mouse"
import { cn } from "../lib/class-name"
import ClientIconLink from "./icons/ClientIconLink"

export const CursorEffectCard = ({
	title,
	tags,
	description,
	links,
	withArrow = false,
	circleSize = 400,
	className,
	children,
	focus,
}: {
	title: string
	tags: string[]
	description: string
	links: {
		href: string
		icon: string
	}[]
	withArrow?: boolean
	circleSize?: number
	children?: ReactNode
	className?: string
	focus?: boolean
}) => {
	const ref = useRef(null)
	const mouse = useMouseAndScroll(ref)

	return (
		<div
			className={cn(
				"group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-95",
				className,
			)}
			onClick={() => {
				if (!window) return
				window.open(links[0].href, "_blank")?.focus()
			}}
			onKeyDown={() => {}}
			ref={ref}
		>
			<div
				className={cn(
					"-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
					mouse.elX === null || mouse.elY === null ? "opacity-0" : "opacity-100",
				)}
				style={{
					maskImage: `radial-gradient(${circleSize / 2}px circle at center, white, transparent)`,
					width: `${circleSize}px`,
					height: `${circleSize}px`,
					left: `${mouse.elX}px`,
					top: `${mouse.elY}px`,
					background: "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
				}}
			/>
			<div className="absolute inset-px rounded-[19px] bg-neutral-900/80" />
			{children && (
				<div className="gird relative h-40 place-content-center overflow-hidden rounded-[15px] border-neutral-950 bg-black/50 brightness-50 group-hover:brightness-75 duration-200">
					{children}
				</div>
			)}

			<div className="relative px-4 pt-4 pb-2 pointer-events-none">
				{withArrow && (
					<div className="absolute flex top-2 right-2 z-10 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
						{links.map(link => (
							<ClientIconLink key={link.href} icon={link.icon} name="github" to={link.href} />
						))}
					</div>
				)}
				<h3
					className={cn("font-semibold text-lg text-neutral-300", focus && "text-purple-400")}
					style={{
						textShadow: focus ? "3px 1px 6px #7A69F9" : "3px 1px 6px #000000",
					}}
				>
					{title}
				</h3>
				<div className="flex flex-wrap gap-3 mt-2 tracking-tight text-secondary">
					{tags?.map(tag => (
						<p key={tag} className="font-mono text-xs font-thin brightness-50">
							{tag}
						</p>
					))}
				</div>
				<p className="mt-2 text-neutral-400">{description}</p>
			</div>
		</div>
	)
}
