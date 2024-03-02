import gmail from '@/public/icons//gmail.svg';
import github from '@/public/icons//github.svg';
import ig from '@/public/icons//ig.svg';
import linkedin from '@/public/icons//linkedin.svg';
import { Card, BasicLink } from '@/types';

export const skills = [
  'React',
  'Next.js',
  'React Native',

  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',

  'Tailwindcss',
  'Styled-Components',
  'Framer-Motion',
  'Three.js',
  'Driver.js',
  'i18n',

  'Redux',
  'RTK Query',
  'Valtio',

  'Git',
  'Github',
  'Postman',

  'Express.js',
  'MySQL',
  'Firebase',
  'Supabase'
];

export const experiences = [
  {
    timestamp: 'Nov 2023 - Feb 2024',
    title: 'Republic of China Army - 步槍兵',
    detail:
      '透過四個月的部隊養成，訓練成為合格的步槍兵。其中參與機械訓練、射擊訓練、震撼教育、刺槍術、手榴彈投擲。',
    skills: ['清槍開始清槍蹲下', '站哨', '放行', '為陸軍當家']
  },
  {
    timestamp: 'May 2022 - Jul 2023',
    title: 'XRLab (NCKU) - 混合實境人機協作系統',
    detail:
      '致力於開發人機協作交互的解決方案，該專案開發全向輪的移動平台及混合實境的協作介面，以提升營建行業中人機的交互性能。其中參與 PID 控制、正反向運動學計算、2D 導航、ROS 通訊架構、MR 交互功能的開發。',
    skills: ['ROS', 'MRTK', 'HoloLens 2', 'Unity']
  },
  {
    timestamp: 'Jan 2022 - Jan 2023',
    title: 'XRLab (NCKU) - 智慧安全偵測進階系統',
    detail:
      '與監造團隊合作開發從掃描至報告生成的解決方案，利用現地點雲與 BIM 資訊進行疊合、提取，並針對法規進⾏檢核，提供使⽤者開⼝防護改善報告書。其中參與點雲資料清洗與提取、特徵值辨識、法規檢核、用戶介面的開發。',
    skills: ['BIM', 'PCL', 'CloudCompare', 'BLK2GO', 'Unity']
  }
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
