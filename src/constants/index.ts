import blog from "@/public/icons//blog.svg"
import github from "@/public/icons//github.svg"
import gmail from "@/public/icons//gmail.svg"
import ig from "@/public/icons//ig.svg"
import linkedin from "@/public/icons//linkedin.svg"
import {
  BITBUCKET_SVG,
  CSS_SVG,
  CYPRESS_DARK_SVG,
  CYPRESS_SVG,
  DNDKIT_PNG,
  DRIVER_SVG,
  DRONE_CI_PNG,
  EXPO_PNG,
  EXPRESS_PNG,
  FIREBASE_SVG,
  FRAMER_DARK_SVG,
  FRAMER_SVG,
  GITHUB_DARK_SVG,
  GITHUB_SVG,
  GIT_SVG,
  HTML_SVG,
  I18NEXT,
  JIRA_DARK_SVG,
  JIRA_SVG,
  JS_SVG,
  KONVA_PNG,
  MUI_SVG,
  MYSQL_SVG,
  NEOVIM_SVG,
  NEXTJS_DARK_SVG,
  NEXTJS_SVG,
  NEXT_INTL_PNG,
  POSTGRESQL_SVG,
  POSTMAN_SVG,
  REACT_HOOK_FORM_PNG,
  REACT_QUERY,
  REACT_SVG,
  REDUX_SVG,
  RSBUILD_PNG,
  SQLITE_PNG,
  SUPABASE_SVG,
  TAILWINDCSS_SVG,
  THREE_DARK_SVG,
  THREE_SVG,
  TS_SVG,
  VIM_SVG,
  VITEST_SVG,
  VITE_SVG,
  ZUSTAND_PNG,
} from "@/public/icons/tech"
import type { BasicLink } from "@/types"

export const techSkills = [
  { id: "react", label: "React", icon: REACT_SVG, dark: false },
  { id: "react-dark", label: "React", icon: REACT_SVG, dark: true },

  { id: "next", label: "Next.js", icon: NEXTJS_SVG, dark: false },
  { id: "next-dark", label: "Next.js", icon: NEXTJS_DARK_SVG, dark: true },

  { id: "react-native", label: "React Native", icon: REACT_SVG, dark: false },
  { id: "react-native-dark", label: "React Native", icon: REACT_SVG, dark: true },

  { id: "expo", label: "Expo", icon: EXPO_PNG, dark: false },
  { id: "expo-dark", label: "Expo", icon: EXPO_PNG, dark: true },

  { id: "vite", label: "Vite", icon: VITE_SVG, dark: false },
  { id: "vite-dark", label: "Vite", icon: VITE_SVG, dark: true },

  { id: "rsbuild", label: "Rsbuild", icon: RSBUILD_PNG, dark: false },
  { id: "rsbuild-dark", label: "Rsbuild", icon: RSBUILD_PNG, dark: true },

  { id: "cypress", label: "Cypress", icon: CYPRESS_SVG, dark: false },
  { id: "cypress-dark", label: "Cypress", icon: CYPRESS_DARK_SVG, dark: true },

  { id: "vitest", label: "Vitest", icon: VITEST_SVG, dark: false },
  { id: "vitest-dark", label: "Vitest", icon: VITEST_SVG, dark: true },

  { id: "zustand", label: "Zustand", icon: ZUSTAND_PNG, dark: false },
  { id: "zustand-dark", label: "Zustand", icon: ZUSTAND_PNG, dark: true },

  { id: "react-query", label: "TanStack-Query", icon: REACT_QUERY, dark: false },
  { id: "react-query-dark", label: "TanStack-Query", icon: REACT_QUERY, dark: true },

  { id: "react-hook-form", label: "React-Hook-Form", icon: REACT_HOOK_FORM_PNG, dark: false },
  { id: "react-hook-form-dark", label: "React-Hook-Form", icon: REACT_HOOK_FORM_PNG, dark: true },

  { id: "redux", label: "Redux", icon: REDUX_SVG, dark: false },
  { id: "redux-dark", label: "Redux", icon: REDUX_SVG, dark: true },

  { id: "rtk-query", label: "RTK Query", icon: REDUX_SVG, dark: false },
  { id: "rtk-query-dark", label: "RTK Query", icon: REDUX_SVG, dark: true },
  // { id: "valtio", label: "Valtio", icon: "" },

  { id: "javascript", label: "JavaScript", icon: JS_SVG, dark: false },
  { id: "javascript-dark", label: "JavaScript", icon: JS_SVG, dark: true },

  { id: "typescript", label: "TypeScript", icon: TS_SVG, dark: false },
  { id: "typescript-dark", label: "TypeScript", icon: TS_SVG, dark: true },

  { id: "html", label: "HTML", icon: HTML_SVG, dark: false },
  { id: "html-dark", label: "HTML", icon: HTML_SVG, dark: true },

  { id: "css", label: "CSS", icon: CSS_SVG, dark: false },
  { id: "css-dark", label: "CSS", icon: CSS_SVG, dark: true },

  { id: "tailwind-css", label: "Tailwind CSS", icon: TAILWINDCSS_SVG, dark: false },
  { id: "tailwind-css-dark", label: "Tailwind CSS", icon: TAILWINDCSS_SVG, dark: true },

  { id: "material-ui", label: "Material-UI", icon: MUI_SVG, dark: false },
  { id: "material-ui-dark", label: "Material-UI", icon: MUI_SVG, dark: true },
  // { id: "styled-components", label: "Styled-Components", icon: "" },

  { id: "framer-motion", label: "Framer-Motion", icon: FRAMER_SVG, dark: false },
  { id: "framer-motion-dark", label: "Framer-Motion", icon: FRAMER_DARK_SVG, dark: true },

  { id: "konva", label: "Konva.js", icon: KONVA_PNG, dark: false },
  { id: "konva-dark", label: "Konva.js", icon: KONVA_PNG, dark: true },

  { id: "three", label: "Three.js", icon: THREE_SVG, dark: false },
  { id: "three-dark", label: "Three.js", icon: THREE_DARK_SVG, dark: true },

  { id: "dnd-kit", label: "Dnd kit", icon: DNDKIT_PNG, dark: false },
  { id: "dnd-kit-dark", label: "Dnd kit", icon: DNDKIT_PNG, dark: true },

  { id: "driver", label: "Driver.js", icon: DRIVER_SVG, dark: false },
  { id: "driver-dark", label: "Driver.js", icon: DRIVER_SVG, dark: true },

  { id: "i18next", label: "i18next", icon: I18NEXT, dark: false },
  { id: "i18next-dark", label: "i18next", icon: I18NEXT, dark: true },

  { id: "next-intl", label: "Next-Intl", icon: NEXT_INTL_PNG, dark: false },
  { id: "next-intl-dark", label: "Next-Intl", icon: NEXT_INTL_PNG, dark: true },

  { id: "git", label: "Git", icon: GIT_SVG, dark: false },
  { id: "git-dark", label: "Git", icon: GIT_SVG, dark: true },

  { id: "github", label: "Github", icon: GITHUB_SVG, dark: false },
  { id: "github-dark", label: "Github", icon: GITHUB_DARK_SVG, dark: true },
  
  { id: "bitbucket", label: "Bitbucket", icon: BITBUCKET_SVG, dark: false },
  { id: "bitbucket-dark", label: "Bitbucket", icon: BITBUCKET_SVG, dark: true },

  { id: "jira", label: "Jira", icon: JIRA_SVG, dark: false },
  { id: "jira-dark", label: "Jira", icon: JIRA_DARK_SVG, dark: true },

  { id: "drone-ci", label: "DroneCI", icon: DRONE_CI_PNG, dark: false },
  { id: "drone-ci-dark", label: "DroneCI", icon: DRONE_CI_PNG, dark: true },

  { id: "postman", label: "Postman", icon: POSTMAN_SVG, dark: false },
  { id: "postman-dark", label: "Postman", icon: POSTMAN_SVG, dark: true },

  { id: "express", label: "Express.js", icon: EXPRESS_PNG, dark: false },
  { id: "express-dark", label: "Express.js", icon: EXPRESS_PNG, dark: true },

  { id: "sqlite", label: "SQLite", icon: SQLITE_PNG, dark: false },
  { id: "sqlite-dark", label: "SQLite", icon: SQLITE_PNG, dark: true },

  { id: "mysql", label: "MySQL", icon: MYSQL_SVG, dark: false },
  { id: "mysql-dark", label: "MySQL", icon: MYSQL_SVG, dark: true },

  { id: "postgresql", label: "PostgreSQL", icon: POSTGRESQL_SVG, dark: false },
  { id: "postgresql-dark", label: "PostgreSQL", icon: POSTGRESQL_SVG, dark: true },

  { id: "firebase", label: "Firebase", icon: FIREBASE_SVG, dark: false },
  { id: "firebase-dark", label: "Firebase", icon: FIREBASE_SVG, dark: true },

  { id: "supabase", label: "Supabase", icon: SUPABASE_SVG, dark: false },
  { id: "supabase-dark", label: "Supabase", icon: SUPABASE_SVG, dark: true },

  { id: "vim", label: "Vim", icon: VIM_SVG, dark: false },
  { id: "vim-dark", label: "Vim", icon: VIM_SVG, dark: true },

  { id: "neovim", label: "Neovim", icon: NEOVIM_SVG, dark: false },
  { id: "neovim-dark", label: "Neovim", icon: NEOVIM_SVG, dark: true },
]

export const SocialMediaLinks: BasicLink[] = [
  {
    name: "linkedin",
    icon: linkedin,
    to: "https://www.linkedin.com/in/jerryhuangyu/",
  },
  {
    name: "mail",
    icon: gmail,
    to: "mailto:jerryhuang19628@gmail.com",
  },
  {
    name: "instagram",
    icon: ig,
    to: "https://www.instagram.com/boyu4082/",
  },
  {
    name: "github",
    icon: github,
    to: "https://github.com/jerryhuangyu",
  },
  {
    name: "tech-blog",
    icon: blog,
    to: "https://huang-yu.vercel.app/blog",
  },
]

// "zhetea": {
//   "name": "ZhèTEA",
//   "skills": {
//     "1": "React-Native",
//     "2": "Expo",
//     "3": "TypeScript"
//   },
//   "demo": "https://large-type.com/#Wait%20for%20it%2C%20almost%20done.",
//   "source": "https://github.com/jerryhuangyu/zhetea",
//   "description": "Wait for it, almost done ...",
//   "projectImage": "/projects/waitforit.webp"
// }

// "zhetea": {
// 	"name": "ZhèTEA",
// 	"skills": {
// 		"1": "React-Native",
// 		"2": "Expo",
// 		"3": "TypeScript"
// 	},
// 	"demo": "https://large-type.com/#Wait%20for%20it%2C%20almost%20done.",
// 	"source": "https://github.com/jerryhuangyu/zhetea",
// 	"description": "加緊趕工中 ...",
// 	"projectImage": "/projects/waitforit.webp"
// }
