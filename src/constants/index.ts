import blog from "@/public/icons//blog.svg"
import github from "@/public/icons//github.svg"
import gmail from "@/public/icons//gmail.svg"
import ig from "@/public/icons//ig.svg"
import linkedin from "@/public/icons//linkedin.svg"
import {
	BITBUCKET_SVG,
	CSS_SVG,
	CYPRESS_SVG,
	DNDKIT_PNG,
	DRIVER_SVG,
	DRONE_CI_PNG,
	EXPO_PNG,
	EXPRESS_PNG,
	FIREBASE_SVG,
	FRAMER_SVG,
	GITHUB_SVG,
	GIT_SVG,
	HTML_SVG,
	I18NEXT,
	JIRA_SVG,
	JS_SVG,
	KONVA_PNG,
	MUI_SVG,
	MYSQL_SVG,
	NEOVIM_SVG,
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
	THREE_SVG,
	TS_SVG,
	VIM_SVG,
	VITEST_SVG,
	VITE_SVG,
	ZUSTAND_PNG,
} from "@/public/icons/tech"
import type { BasicLink } from "@/types"

export const techSkills = [
	{ id: "react", label: "React", icon: REACT_SVG },
	{ id: "next", label: "Next.js", icon: NEXTJS_SVG },
	{ id: "react-native", label: "React Native", icon: REACT_SVG },
	{ id: "expo", label: "Expo", icon: EXPO_PNG },

	{ id: "vite", label: "Vite", icon: VITE_SVG },
	{ id: "rsbuild", label: "Rsbuild", icon: RSBUILD_PNG },

	{ id: "cypress", label: "Cypress", icon: CYPRESS_SVG },
	{ id: "vitest", label: "Vitest", icon: VITEST_SVG },

	{ id: "zustand", label: "Zustand", icon: ZUSTAND_PNG },
	{ id: "react-query", label: "TanStack-Query", icon: REACT_QUERY },
	{ id: "react-hook-form", label: "React-Hook-Form", icon: REACT_HOOK_FORM_PNG },
	{ id: "redux", label: "Redux", icon: REDUX_SVG },
	{ id: "rtk-query", label: "RTK Query", icon: REDUX_SVG },
	// { id: "valtio", label: "Valtio", icon: "" },

	{ id: "javascript", label: "JavaScript", icon: JS_SVG },
	{ id: "typescript", label: "TypeScript", icon: TS_SVG },
	{ id: "html", label: "HTML", icon: HTML_SVG },
	{ id: "css", label: "CSS", icon: CSS_SVG },

	{ id: "tailwind-css", label: "Tailwind CSS", icon: TAILWINDCSS_SVG },
	// { id: "styled-components", label: "Styled-Components", icon: "" },
	{ id: "material-ui", label: "Material-UI", icon: MUI_SVG },

	{ id: "framer-motion", label: "Framer-Motion", icon: FRAMER_SVG },
	{ id: "konva", label: "Konva.js", icon: KONVA_PNG },
	{ id: "three", label: "Three.js", icon: THREE_SVG },
	{ id: "dnd-kit", label: "Dnd kit", icon: DNDKIT_PNG },
	{ id: "driver", label: "Driver.js", icon: DRIVER_SVG },

	{ id: "i18next", label: "i18next", icon: I18NEXT },
	{ id: "next-intl", label: "Next-Intl", icon: NEXT_INTL_PNG },

	{ id: "git", label: "Git", icon: GIT_SVG },
	{ id: "github", label: "Github", icon: GITHUB_SVG },
	{ id: "bitbucket", label: "Bitbucket", icon: BITBUCKET_SVG },
	{ id: "jira", label: "Jira", icon: JIRA_SVG },
	{ id: "drone-ci", label: "DroneCI", icon: DRONE_CI_PNG },

	{ id: "postman", label: "Postman", icon: POSTMAN_SVG },
	{ id: "express", label: "Express.js", icon: EXPRESS_PNG },
	{ id: "sqlite", label: "SQLite", icon: SQLITE_PNG },
	{ id: "mysql", label: "MySQL", icon: MYSQL_SVG },
	{ id: "postgresql", label: "PostgreSQL", icon: POSTGRESQL_SVG },
	{ id: "firebase", label: "Firebase", icon: FIREBASE_SVG },
	{ id: "supabase", label: "Supabase", icon: SUPABASE_SVG },

	{ id: "vim", label: "Vim", icon: VIM_SVG },
	{ id: "neovim", label: "Neovim", icon: NEOVIM_SVG },
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
		to: "https://jerrytech-blog.vercel.app",
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
