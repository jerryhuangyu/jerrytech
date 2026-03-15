import Image from "next/image"
import { useLocale, useMessages, useTranslations } from "next-intl"
import link from "@/public/icons//link.svg"
import SectionTitle from "@/src/components/SectionTitle"
import { CursorEffectCard } from "../components/CursorEffectCard"
import { mapProjects } from "../lib/projects"

type IntlMessages = typeof import("@/messages/en.json")

const Projects = () => {
  const locale = useLocale()
  const t = useTranslations("Index")
  const m = useMessages() as IntlMessages
  const projects = mapProjects(m.Index.projects)

  return (
    <div className="section-wrap mb-16">
      <SectionTitle title={t("sectionTitle.project")} />
      <div className="grid gap-3 md:grid-cols-2">
        {projects.map((project, index) => (
          <CursorEffectCard
            key={project.slug}
            title={project.name}
            tags={project.skills}
            description={project.description}
            links={[{ href: project.demo, icon: link }]}
            to={`/${locale}/projects/${project.slug}`}
            focus={index === 1}
          >
            <Image
              src={project.projectImage}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </CursorEffectCard>
        ))}
      </div>
    </div>
  )
}
export default Projects
