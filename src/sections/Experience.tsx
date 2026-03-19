import ExperienceDetail from "@/src/components/ExperienceDetail"
import SectionTitle from "@/src/components/SectionTitle"
import { useAppMessages } from "@/src/i18n/client"
import SpringFromLeft from "@/src/components/motions/SpringFromLeft"
import { useTranslations } from "next-intl"

const Experience = () => {
	const t = useTranslations("Index")
	const m = useAppMessages()
	const experiences = Object.values(m.Index.experiences)

	return (
		<div className="section-wrap mb-4">
			<SectionTitle title={t("sectionTitle.experience")} />
			<div className="flex flex-col gap-8">
				{experiences.map(experience => (
					<SpringFromLeft key={experience.title}>
						<ExperienceDetail
							timestamp={experience.timestamp}
							title={experience.title}
							detail={experience.detail}
							skills={Object.values(experience.skills)}
						/>
					</SpringFromLeft>
				))}
			</div>
		</div>
	)
}
export default Experience
