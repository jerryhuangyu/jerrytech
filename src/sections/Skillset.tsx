import SectionTitle from "@/src/components/SectionTitle";
import { useTranslations } from "next-intl";
import DndSkills from "../components/dnd/DndSkills";

const Skillset = () => {
  const t = useTranslations("Index");
  return (
    <div className="section-wrap">
      <SectionTitle title={t("sectionTitle.skillset")} />
      <DndSkills />
    </div>
  );
};
export default Skillset;
