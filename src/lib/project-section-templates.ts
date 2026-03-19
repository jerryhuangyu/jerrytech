import type { AppMessages } from "@/src/i18n/types"

type ProjectDetailMessages = AppMessages["Index"]["projectDetail"]

type TemplateKind = keyof ProjectDetailMessages["narrative"]
const sideSectionIds = [
  "motivation",
  "target-user",
  "mvp-scope",
  "key-features",
  "technical-decisions",
  "challenges",
  "learning",
  "next-step",
] as const

const workSectionIds = ["business-problem", "ownership", "impact"] as const

type SideSectionId = (typeof sideSectionIds)[number]
type WorkSectionId = (typeof workSectionIds)[number]
type SectionId = SideSectionId | WorkSectionId

type SectionDefinition = {
  title: string
  placeholder: string
}

type SectionContent = Partial<Record<SectionId, string>>

export type ProjectSection = {
  id: string
  title: string
  content: string
  isPlaceholder: boolean
}

export type ProjectNarrative = {
  title: string
  description: string
  sections: ProjectSection[]
}

const allSectionIds = new Set<SectionId>([...sideSectionIds, ...workSectionIds])

const projectTemplateKind: Record<string, TemplateKind> = {
  // Future work projects can be mapped here:
  // "some-work-project-slug": "work",
}

export const getProjectTemplateKind = (slug: string): TemplateKind => {
  return projectTemplateKind[slug] ?? "side"
}

export const getProjectSections = (args: {
  slug: string
  kind: TemplateKind
  projectDetail: ProjectDetailMessages
}): ProjectNarrative => {
  const contentBySlug = (args.projectDetail.content[args.slug as keyof typeof args.projectDetail.content] ??
    {}) as SectionContent

  for (const key of Object.keys(contentBySlug)) {
    if (!allSectionIds.has(key as SectionId)) {
      throw new Error(`Unknown project detail section key: ${key}`)
    }
  }

  if (args.kind === "side") {
    return buildProjectNarrative({
      title: args.projectDetail.narrative.side.title,
      description: args.projectDetail.narrative.side.description,
      sectionIds: sideSectionIds,
      definitions: args.projectDetail.narrative.side.sections,
      contentBySlug: contentBySlug as Partial<Record<SideSectionId, string>>,
    })
  }

  return buildProjectNarrative({
    title: args.projectDetail.narrative.work.title,
    description: args.projectDetail.narrative.work.description,
    sectionIds: workSectionIds,
    definitions: args.projectDetail.narrative.work.sections,
    contentBySlug: contentBySlug as Partial<Record<WorkSectionId, string>>,
  })
}

const buildProjectNarrative = <Id extends SectionId>(args: {
  title: string
  description: string
  sectionIds: readonly Id[]
  definitions: Record<Id, SectionDefinition>
  contentBySlug: Partial<Record<Id, string>>
}): ProjectNarrative => {
  return {
    title: args.title,
    description: args.description,
    sections: args.sectionIds.map(id => {
      const definition = args.definitions[id]
      const content = args.contentBySlug[id]

      return {
        id,
        title: definition.title,
        content: content ?? definition.placeholder,
        isPlaceholder: !content,
      }
    }),
  }
}
