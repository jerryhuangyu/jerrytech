import blog from "@/public/icons//blog.svg"
import github from "@/public/icons//github.svg"
import gmail from "@/public/icons//gmail.svg"
import ig from "@/public/icons//ig.svg"
import linkedin from "@/public/icons//linkedin.svg"
import {
	BITBUCKET_SVG,
	CSS_SVG,
	DNDKIT_PNG,
	DRIVER_SVG,
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
	POSTMAN_SVG,
	REACT_HOOK_FORM_PNG,
	REACT_QUERY,
	REACT_SVG,
	REDUX_SVG,
	SQLITE_PNG,
	SUPABASE_SVG,
	TAILWINDCSS_SVG,
	THREE_SVG,
	TS_SVG,
	VIM_SVG,
	ZUSTAND_PNG,
} from "@/public/icons/tech"
import type { BasicLink, Card } from "@/types"

export const techSkills = [
	{ id: "react", label: "React", icon: REACT_SVG },
	{ id: "next", label: "Next.js", icon: NEXTJS_SVG },
	{ id: "react-native", label: "React Native", icon: REACT_SVG },
	{ id: "expo", label: "Expo", icon: EXPO_PNG },

	{ id: "javascript", label: "JavaScript", icon: JS_SVG },
	{ id: "typescript", label: "TypeScript", icon: TS_SVG },
	{ id: "html", label: "HTML", icon: HTML_SVG },
	{ id: "css", label: "CSS", icon: CSS_SVG },

	{ id: "tailwind-css", label: "Tailwind CSS", icon: TAILWINDCSS_SVG },
	// { id: "styled-components", label: "Styled-Components", icon: "" },
	{ id: "material-ui", label: "Material-UI", icon: MUI_SVG },

	{ id: "framer-motion", label: "Framer-Motion", icon: FRAMER_SVG },
	{ id: "react-hook-form", label: "React-Hook-Form", icon: REACT_HOOK_FORM_PNG },
	{ id: "react-query", label: "TanStack-Query", icon: REACT_QUERY },
	{ id: "konva", label: "Konva.js", icon: KONVA_PNG },
	{ id: "three", label: "Three.js", icon: THREE_SVG },
	{ id: "dnd-kit", label: "Dnd kit", icon: DNDKIT_PNG },
	{ id: "driver", label: "Driver.js", icon: DRIVER_SVG },

	{ id: "i18next", label: "i18next", icon: I18NEXT },
	{ id: "next-intl", label: "Next-Intl", icon: NEXT_INTL_PNG },

	{ id: "redux", label: "Redux", icon: REDUX_SVG },
	{ id: "rtk-query", label: "RTK Query", icon: REDUX_SVG },
	// { id: "valtio", label: "Valtio", icon: "" },
	{ id: "zustand", label: "Zustand", icon: ZUSTAND_PNG },

	{ id: "git", label: "Git", icon: GIT_SVG },
	{ id: "github", label: "Github", icon: GITHUB_SVG },
	{ id: "bitbucket", label: "Bitbucket", icon: BITBUCKET_SVG },
	{ id: "jira", label: "Jira", icon: JIRA_SVG },

	{ id: "postman", label: "Postman", icon: POSTMAN_SVG },
	{ id: "express", label: "Express.js", icon: EXPRESS_PNG },
	{ id: "sqlite", label: "SQLite", icon: SQLITE_PNG },
	{ id: "mysql", label: "MySQL", icon: MYSQL_SVG },
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

export const projectCards: Card[] = [
	{
		name: "Portfolio",
		skills: ["Next.js", "Tailwindcss", "Three.js", "Valtio", "TypeScript"],
		demo: "https://jerrytech.vercel.app/",
		source: "https://github.com/jerryhuangyu/jerrytech",
		description: "瞭解我的小地方",
		projectImage: "/projects/home_preview.webp",
	},
	{
		name: "S-Insight",
		skills: ["React", "MySQL", "Express", "OAuth", "RTK Query"],
		demo: "https://stockinsight.vercel.app",
		source: "https://github.com/jerryhuangyu/StockAnalyze/",
		description: "追蹤您的投資組合，可視化交易紀錄",
		projectImage: "/projects/sinsight_preview.webp",
	},
	{
		name: "Tshirt Maker",
		skills: ["React", "Framer-Motion", "Third-party API", "Three.js"],
		demo: "https://tshirtmaker.vercel.app/",
		source: "https://github.com/jerryhuangyu/TShirtCustomApp",
		description: "釋放想像力，定義衣服的獨特風格",
		projectImage: "/projects/tshirtmaker_preview.webp",
	},
	{
		name: "NOXGYM",
		skills: ["React", "HTML", "CSS", "TypeScript"],
		demo: "https://noxgym.vercel.app/",
		source: "https://github.com/jerryhuangyu/FitnessWebPage",
		description: "健身革命新體驗，打造理想體態",
		projectImage: "/projects/noxgym_preview.webp",
	},
	{
		name: "Ubike Clone",
		skills: ["React", "Axios", "Ant-Design", "Third-party API"],
		demo: "https://you-bike-clone.vercel.app/",
		source: "https://github.com/jerryhuangyu/YouBikeClone",
		description: "借車不落人後，查詢即時 YouBike 借還站資訊",
		projectImage: "/projects/youbike_preview.webp",
	},
	{
		name: "ZhèTEA",
		skills: ["React-Native", "Expo", "TypeScript"],
		demo: "https://large-type.com/#Wait%20for%20it%2C%20almost%20done.",
		source: "https://github.com/jerryhuangyu/zhetea",
		description: "加緊趕工中 ...",
		projectImage: "/projects/waitforit.webp",
	},
]
