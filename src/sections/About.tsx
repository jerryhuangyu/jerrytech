import SectionTitle from "@/src/components/SectionTitle"
import { useTranslations } from "next-intl"
import ScrollTypingWords from "../components/ScrollTypingWords"

const About = () => {
	const t = useTranslations("Index")
	return (
		<div className="section-wrap">
			<SectionTitle title={t("sectionTitle.about")} />
			<div className="text font-light text-secondary brightness-110 xl:text-[17px]">
				<ScrollTypingWords text={t("about")} />
			</div>
		</div>
	)
}
export default About
