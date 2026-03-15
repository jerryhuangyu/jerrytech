type Locale = "zh" | "en"
type TemplateKind = "work" | "side"

type SectionDefinition = {
  id: string
  title: Record<Locale, string>
  placeholder: Record<Locale, string>
}

type SectionContent = Record<string, Partial<Record<Locale, Partial<Record<string, string>>>>>

export type ProjectSection = {
  id: string
  title: string
  content: string
  isPlaceholder: boolean
}

const projectTemplateKind: Record<string, TemplateKind> = {
  // Future work projects can be mapped here:
  // "some-work-project-slug": "work",
}

const sideSectionDefinitions: SectionDefinition[] = [
  {
    id: "motivation",
    title: { zh: "起點與動機", en: "Motivation" },
    placeholder: {
      zh: "[待補充] 為什麼會開始這個 side project？",
      en: "[TODO] Why did I start this side project?",
    },
  },
  {
    id: "target-user",
    title: { zh: "目標使用者與情境", en: "Target User & Context" },
    placeholder: {
      zh: "[待補充] 這個專案是為誰設計、在哪種情境下使用？",
      en: "[TODO] Who is this for and in which usage context?",
    },
  },
  {
    id: "mvp-scope",
    title: { zh: "MVP 範圍", en: "MVP Scope" },
    placeholder: {
      zh: "[待補充] 第一版我刻意只做了哪些功能？",
      en: "[TODO] What did I intentionally include in the first MVP?",
    },
  },
  {
    id: "key-features",
    title: { zh: "核心功能亮點", en: "Key Features" },
    placeholder: {
      zh: "[待補充] 最值得展示的 2-3 個功能是什麼？",
      en: "[TODO] Which 2-3 features are most worth highlighting?",
    },
  },
  {
    id: "technical-decisions",
    title: { zh: "技術決策與取捨", en: "Technical Decisions & Trade-offs" },
    placeholder: {
      zh: "[待補充] 選型、架構與主要 trade-off 為何？",
      en: "[TODO] What were the key tech choices and trade-offs?",
    },
  },
  {
    id: "challenges",
    title: { zh: "挑戰與解法", en: "Challenges & Solutions" },
    placeholder: {
      zh: "[待補充] 開發過程中遇到最難的問題與解法。",
      en: "[TODO] What were the hardest problems and how were they solved?",
    },
  },
  {
    id: "learning",
    title: { zh: "學到的事", en: "What I Learned" },
    placeholder: {
      zh: "[待補充] 這個 side project 帶來哪些技術或產品思維成長？",
      en: "[TODO] What technical or product lessons did I gain?",
    },
  },
  {
    id: "next-step",
    title: { zh: "下一步規劃", en: "Next Iteration" },
    placeholder: {
      zh: "[待補充] 下一版最優先想補的內容是什麼？",
      en: "[TODO] What is the highest-priority next improvement?",
    },
  },
]

const workSectionDefinitions: SectionDefinition[] = [
  {
    id: "business-problem",
    title: { zh: "業務問題與目標", en: "Business Problem & Goal" },
    placeholder: {
      zh: "[待補充] 這個工作專案解決了什麼業務問題？",
      en: "[TODO] What business problem did this work project solve?",
    },
  },
  {
    id: "ownership",
    title: { zh: "職責與 Ownership", en: "Ownership" },
    placeholder: {
      zh: "[待補充] 我實際負責哪些模組與決策？",
      en: "[TODO] Which modules and decisions did I personally own?",
    },
  },
  {
    id: "impact",
    title: { zh: "成果與影響", en: "Impact" },
    placeholder: {
      zh: "[待補充] 可量化的成果數據。",
      en: "[TODO] What measurable impact was delivered?",
    },
  },
]

const sectionContent: SectionContent = {
  // Future per-project content:
  // "portfolio": {
  //   zh: { motivation: "..." },
  //   en: { motivation: "..." }
  // }
}

const normalizeLocale = (locale: string): Locale => {
  return locale === "zh" ? "zh" : "en"
}

export const getProjectTemplateKind = (slug: string): TemplateKind => {
  return projectTemplateKind[slug] ?? "side"
}

export const getProjectSections = (args: {
  slug: string
  locale: string
  kind: TemplateKind
}): ProjectSection[] => {
  const locale = normalizeLocale(args.locale)
  const contentByLocale = sectionContent[args.slug]?.[locale] ?? {}
  const definitions =
    args.kind === "work" ? workSectionDefinitions : sideSectionDefinitions

  return definitions.map(definition => {
    const content = contentByLocale[definition.id]

    if (!content) {
      return {
        id: definition.id,
        title: definition.title[locale],
        content: definition.placeholder[locale],
        isPlaceholder: true,
      }
    }

    return {
      id: definition.id,
      title: definition.title[locale],
      content,
      isPlaceholder: false,
    }
  })
}
