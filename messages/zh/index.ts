import about from "./about.json"
import experiences from "./experiences.json"
import hero from "./hero.json"
import projectDetail from "./project-detail.json"
import projectList from "./project-list.json"
import projects from "./projects.json"
import sectionTitle from "./section-title.json"

const messages = {
  Index: {
    sectionTitle,
    hero,
    ...about,
    experiences,
    projects,
    projectList,
    projectDetail,
  },
} as const

export default messages
