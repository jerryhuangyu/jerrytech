import github from "@/public/icons//github.svg"
import link from "@/public/icons//link.svg"
import SectionTitle from "@/src/components/SectionTitle"
import { useMessages, useTranslations } from "next-intl"
import { CursorEffectCard } from "../components/CursorEffectCard"
type IntlMessages = typeof import("@/messages/en.json")

const Projects = () => {
	const t = useTranslations("Index")
	const m = useMessages() as IntlMessages
	const projects = Object.values(m.Index.projects)

	return (
		<div className="section-wrap mb-16">
			<SectionTitle title={t("sectionTitle.project")} />
			<div className="flex flex-wrap gap-3">
				{projects.map((project, index) => (
					<CursorEffectCard
						key={`project-${index}`}
						title={project.name}
						tags={Object.values(project.skills)}
						description={project.description}
						links={[
							{ href: project.demo, icon: link },
							{ href: project.source, icon: github },
						]}
						withArrow
						focus={index === 1}
						className="min-w-full flex-1 flex-col md:min-w-[40%] md:max-w-[49.6%]"
					>
						<img
							src={project.projectImage}
							loading="lazy"
							alt={project.name}
							className="w-full h-full object-cover"
						/>
					</CursorEffectCard>
				))}
			</div>
		</div>
	)
}
export default Projects
