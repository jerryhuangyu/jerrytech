import blog from '@/public/icons//blog.svg';
import github from '@/public/icons//github.svg';
import gmail from '@/public/icons//gmail.svg';
import ig from '@/public/icons//ig.svg';
import linkedin from '@/public/icons//linkedin.svg';
import { BasicLink, Card } from '@/types';

export const skills = [
  'React',
  'Next.js',
  'React Native',

  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',

  'Tailwind',
  'Styled-Components',
  'Material-UI',

  'Framer-Motion',
  'React-Hook-Form',
  'React-Query',
  'Konva.js',
  'Three.js',
  'Driver.js',

  'i18n',

  'Redux',
  'RTK Query',
  'Valtio',
  'Zustand',

  'Git',
  'Github',
  'Bitbucket',
  'Jira',
  'Postman',

  'Express.js',
  'SQLite',
  'MySQL',
  'Firebase',
  'Supabase'
];

export const SocialMediaLinks: BasicLink[] = [
  {
    name: 'linkedin',
    icon: linkedin,
    to: 'https://www.linkedin.com/in/jerryhuangyu/'
  },
  {
    name: 'mail',
    icon: gmail,
    to: 'mailto:jerryhuang19628@gmail.com'
  },
  {
    name: 'instagram',
    icon: ig,
    to: 'https://www.instagram.com/boyu4082/'
  },
  {
    name: 'github',
    icon: github,
    to: 'https://github.com/jerryhuangyu'
  },
  {
    name: 'tech-blog',
    icon: blog,
    to: 'https://jerrytech-blog.vercel.app'
  }
];

export const projectCards: Card[] = [
  {
    name: 'Portfolio',
    skills: ['Next.js', 'Tailwindcss', 'Three.js', 'Valtio', 'TypeScript'],
    demo: 'https://jerrytech.vercel.app/',
    source: 'https://github.com/jerryhuangyu/jerrytech',
    description: '瞭解我的小地方',
    projectImage: '/projects/home_preview.webp'
  },
  {
    name: 'S-Insight',
    skills: ['React', 'MySQL', 'Express', 'OAuth', 'RTK Query'],
    demo: 'https://stockinsight.vercel.app',
    source: 'https://github.com/jerryhuangyu/StockAnalyze/',
    description: '追蹤您的投資組合，可視化交易紀錄',
    projectImage: '/projects/sinsight_preview.webp'
  },
  {
    name: 'Tshirt Maker',
    skills: ['React', 'Framer-Motion', 'Third-party API', 'Three.js'],
    demo: 'https://tshirtmaker.vercel.app/',
    source: 'https://github.com/jerryhuangyu/TShirtCustomApp',
    description: '釋放想像力，定義衣服的獨特風格',
    projectImage: '/projects/tshirtmaker_preview.webp'
  },
  {
    name: 'NOXGYM',
    skills: ['React', 'HTML', 'CSS', 'TypeScript'],
    demo: 'https://noxgym.vercel.app/',
    source: 'https://github.com/jerryhuangyu/FitnessWebPage',
    description: '健身革命新體驗，打造理想體態',
    projectImage: '/projects/noxgym_preview.webp'
  },
  {
    name: 'Ubike Clone',
    skills: ['React', 'Axios', 'Ant-Design', 'Third-party API'],
    demo: 'https://you-bike-clone.vercel.app/',
    source: 'https://github.com/jerryhuangyu/YouBikeClone',
    description: '借車不落人後，查詢即時 YouBike 借還站資訊',
    projectImage: '/projects/youbike_preview.webp'
  },
  {
    name: 'ZhèTEA',
    skills: ['React-Native', 'Expo', 'TypeScript'],
    demo: 'https://large-type.com/#Wait%20for%20it%2C%20almost%20done.',
    source: 'https://github.com/jerryhuangyu/zhetea',
    description: '加緊趕工中 ...',
    projectImage: '/projects/waitforit.webp'
  }
];
