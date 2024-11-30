// deprecated
// "use client"

// import github from "@/public/icons//github.svg"
// import link from "@/public/icons//link.svg"
// import ClientIconLink from "@/src/components/icons/ClientIconLink"
// import { usePreviewModal } from "@/src/hooks/modal"
// import type { Card } from "@/types"

// type ProjectCardPorps = {
// 	description: Card["description"]
// 	projectImage: Card["projectImage"]
// 	source: Card["source"]
// 	demo: Card["demo"]
// 	name: Card["name"]
// 	skills: Card["skills"]
// 	focus?: boolean
// }

// const ProjectCard = ({ description, projectImage, source, demo, name, skills, focus }: ProjectCardPorps) => {
// 	const { open: openPreviewModal } = usePreviewModal(description, projectImage)

// 	return (
// 		<div className="relative flex h-40 min-w-full flex-1 flex-col md:min-w-[40%] md:max-w-[49.6%]">
// 			{focus && (
// 				<div className="animate-tilt absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-40 blur" />
// 			)}
// 			<div
// 				className="relative flex flex-1 flex-col items-center justify-around rounded border-[1.5px] border-[#333333] bg-gradient-to-br from-[#202020] to-[#151515] px-5 pb-5 pt-10 duration-300 ease-in-out hover:border-purple-400 hover:border-opacity-60 hover:from-[#242424] hover:to-[#101010]"
// 				onClick={openPreviewModal}
// 				onKeyDown={() => {}}
// 			>
// 				<div className="absolute right-0 top-0 z-50 flex gap-3 p-5">
// 					<ClientIconLink icon={github} name="github" to={source} />
// 					<ClientIconLink icon={link} name="demo" to={demo} />
// 				</div>
// 				<h3
// 					className={`text-xl  ${focus ? "bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-bold text-transparent" : "font-light text-primary"}`}
// 				>
// 					{name}
// 				</h3>
// 				<div className="flex flex-wrap justify-center gap-3 tracking-tight text-secondary ">
// 					{skills.map(s => (
// 						<p key={s} className="font-mono text-xs font-thin brightness-75">
// 							{s}
// 						</p>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
// export default ProjectCard
