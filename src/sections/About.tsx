import { useTranslations } from "next-intl"
import ScrollTypingWords from "@/src/components/ScrollTypingWords"
import SectionTitle from "@/src/components/SectionTitle"

const About = () => {
  const t = useTranslations("Index")
  return (
    <div className="section-wrap">
      <SectionTitle title={t("sectionTitle.about")} />
      <div className="text font-light text-secondary dark:text-secondary-dark brightness-110 xl:text-[17px]">
        <ScrollTypingWords texts={[t("about"), t("about2")]} />
      </div>
    </div>
  )
}
export default About
