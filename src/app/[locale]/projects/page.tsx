import github from "@/public/icons//github.svg"
import link from "@/public/icons//link.svg"
import SectionTitle from "@/src/components/SectionTitle"
import { CursorEffectCard } from "@/src/components/CursorEffectCard"
import { getAppMessages } from "@/src/i18n/server"
import { mapProjects } from "@/src/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { getLocale, getTranslations } from "next-intl/server"

export default async function Projects() {
  const locale = await getLocale()
  const t = await getTranslations("Index")
  const m = await getAppMessages()
  const projects = mapProjects(m.Index.projects)

  return (
    <div className="section-wrap mb-16 w-full">
      <SectionTitle title={t("sectionTitle.project")} />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text text-sm font-light text-secondary dark:text-secondary-dark md:text-base">
          {t("projectList.intro")}
        </p>
        <Link
          href={`/${locale}`}
          className="rounded border border-[#333333]/40 px-3 py-1.5 text-xs text-primary transition hover:border-[#333333] hover:bg-black/5 dark:text-primary-dark dark:hover:bg-white/5"
        >
          {t("projectList.backHome")}
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        {projects.map((project, index) => (
          <CursorEffectCard
            key={project.slug}
            title={project.name}
            tags={project.skills}
            description={project.description}
            links={[
              { href: project.demo, icon: link },
              ...(project.source !== "" ? [{ href: project.source, icon: github }] : []),
            ]}
            to={`/${locale}/projects/${project.slug}`}
            focus={index === 1}
            className="min-w-full flex-1 flex-col md:min-w-[40%] md:max-w-[49.6%]"
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
