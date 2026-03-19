import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import github from "@/public/icons//github.svg"
import link from "@/public/icons//link.svg"
import IconLink from "@/src/components/icons/IconLink"
import SectionTitle from "@/src/components/SectionTitle"
import { getAppMessages } from "@/src/i18n/server"
import { getProjectSections, getProjectTemplateKind } from "@/src/lib/project-section-templates"
import { findProject, mapProjects } from "@/src/lib/projects"

type ProjectDetailsProps = {
  params: Promise<{ locale: string; name: string }>
}

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const { locale, name } = await params
  const t = await getTranslations("Index")
  const m = await getAppMessages()
  const project = findProject(m.Index.projects, name)

  if (!project) {
    notFound()
  }

  const templateKind = getProjectTemplateKind(name)
  const detailNarrative = getProjectSections({
    slug: name,
    kind: templateKind,
    projectDetail: m.Index.projectDetail,
  })

  const relatedProjects = mapProjects(m.Index.projects)
    .filter(item => item.slug !== name)
    .slice(0, 3)

  return (
    <div className="section-wrap mb-16 w-full">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SectionTitle title={t("sectionTitle.project")} />
        <Link
          href={`/${locale}/projects`}
          className="rounded border border-[#333333]/40 px-3 py-1.5 text-xs text-primary transition hover:border-[#333333] hover:bg-black/5 dark:text-primary-dark dark:hover:bg-white/5"
        >
          {t("projectDetail.backToList")}
        </Link>
      </div>

      <article className="relative overflow-hidden rounded-[20px] border-[1.5px] border-[#333333] bg-linear-to-br from-[#efefef] to-[#e9e9e9] p-2 dark:from-[#202020] dark:to-[#151515]">
        <div className="grid gap-4 rounded-[15px] border border-[#333333]/60 bg-white/80 p-4 dark:bg-stone-950/80 md:grid-cols-[1.2fr_1fr] md:p-5">
          <div className="relative min-h-72 overflow-hidden rounded-xl border border-[#333333]/50">
            <Image
              src={project.projectImage}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-primary dark:text-primary-dark md:text-3xl">{project.name}</h1>
              <p className="mt-3 text font-light text-secondary dark:text-secondary-dark">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 text-secondary dark:text-primary-dark">
              {project.skills.map(skill => (
                <span key={skill} className="rounded border border-[#333333]/30 px-2 py-1 font-mono text-xs">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <IconLink icon={link} name="demo" to={project.demo} />
              {project.source && <IconLink icon={github} name="github" to={project.source} />}
            </div>
          </div>
        </div>
      </article>

      <section className="mt-8">
        <h2 className="mb-2 text-xl font-medium text-primary dark:text-primary-dark">{detailNarrative.title}</h2>
        <p className="mb-4 text-xs font-light text-secondary dark:text-secondary-dark">
          {detailNarrative.description}
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {detailNarrative.sections.map(section => (
            <article
              key={section.id}
              className="rounded-2xl border border-[#333333]/40 bg-linear-to-br from-[#f5f5f5] to-[#efefef] p-4 dark:from-[#202020] dark:to-[#151515]"
            >
              <h3 className="text-sm font-semibold text-primary dark:text-primary-dark">{section.title}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  section.isPlaceholder
                    ? "italic text-secondary/80 dark:text-secondary-dark/80"
                    : "text-secondary dark:text-secondary-dark"
                }`}
              >
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-medium text-primary dark:text-primary-dark">
          {t("projectDetail.moreProjects")}
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {relatedProjects.map(item => (
            <Link
              key={item.slug}
              href={`/${locale}/projects/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#333333]/40 bg-linear-to-br from-[#f5f5f5] to-[#efefef] p-2 transition hover:border-[#333333] dark:from-[#202020] dark:to-[#151515]"
            >
              <div className="relative h-28 overflow-hidden rounded-[10px] border border-[#333333]/50">
                <Image
                  src={item.projectImage}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 p-2">
                <h3 className="line-clamp-1 text-sm font-semibold text-primary dark:text-primary-dark">{item.name}</h3>
                <p className="line-clamp-2 text-xs text-secondary dark:text-secondary-dark">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <Link
          href={`/${locale}`}
          className="text-sm text-secondary underline underline-offset-4 transition hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
        >
          {t("projectDetail.backHome")}
        </Link>
      </section>
    </div>
  )
}

export default ProjectDetails
