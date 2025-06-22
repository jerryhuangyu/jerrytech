import SectionTitle from "@/src/components/SectionTitle"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"

const DndSkills = dynamic(() => import("../components/dnd/DndSkills"), {
  ssr: false,
})

const Skillset = () => {
  const t = useTranslations("Index")
  return (
    <div className="section-wrap">
      <SectionTitle title={t("sectionTitle.skillset")} />
      <DndSkills />
    </div>
  )
}
export default Skillset
