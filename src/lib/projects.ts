import type messages from "@/messages/en.json"

type IntlMessages = typeof messages
type ProjectsMap = IntlMessages["Index"]["projects"]
type ProjectValue = ProjectsMap[keyof ProjectsMap]

export type ProjectItem = {
  slug: string
  name: string
  description: string
  demo: string
  source: string
  projectImage: string
  skills: string[]
}

const normalizeProject = (slug: string, project: ProjectValue): ProjectItem => {
  return {
    slug,
    name: project.name,
    description: project.description,
    demo: project.demo,
    source: project.source,
    projectImage: project.projectImage,
    skills: Object.values(project.skills),
  }
}

export const mapProjects = (projects: ProjectsMap): ProjectItem[] => {
  return Object.entries(projects).map(([slug, project]) =>
    normalizeProject(slug, project as ProjectValue),
  )
}

export const findProject = (
  projects: ProjectsMap,
  slug: string,
): ProjectItem | null => {
  const project = projects[slug as keyof ProjectsMap]
  if (!project) {
    return null
  }

  return normalizeProject(slug, project)
}
