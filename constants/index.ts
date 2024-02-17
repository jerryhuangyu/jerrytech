import gmail from "@/images/gmail.svg";
import github from "@/images/github.svg";
import ig from "@/images/ig.svg";
import linkedin from "@/images/linkedin.svg";
import { SocialMediaLink } from "@/types";

export const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwindcss",
  "Git",
  "Framer-Motion",
  "Supabase",
];

export const experiences = [
  {
    timestamp: "Sep 2023 - Present",
    title: "Viind GmbH - Fullstack Developer",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, nameligendi minus quisquam inventore voluptatibus, accusantium eiuslaborum eos eum doloribus, itaque in architecto. Facilis suscipitearum ab, repellat culpa voluptate dicta omnis voluptatum est deserunttemporibus at dolorem vel?",
    skills: ["Next.js", "React", "Redux"],
  },
  {
    timestamp: "Nov 2022 - Aug 2023",
    title: "Viind GmbH - Frontend Developer",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, nameligendi minus quisquam inventore voluptatibus, accusantium eiuslaborum eos eum doloribus, itaque in architecto. Facilis suscipitearum ab, repellat culpa voluptate dicta omnis voluptatum est deserunttemporibus at dolorem vel?",
    skills: ["Nuxt.js", "Vue", "Redux"],
  },
];

export const SocialMediaLinks: SocialMediaLink[] = [
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
];
