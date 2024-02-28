import gmail from '@/images/gmail.svg';
import github from '@/images/github.svg';
import ig from '@/images/ig.svg';
import linkedin from '@/images/linkedin.svg';
import { Card, BasicLink } from '@/types';

export const about =
  '一位居住在台灣的開發人員，擁有開發網頁、AVMR、機器人、點雲應用的經驗。目前使用 React 作為網頁開發的主要技術，近期亦嘗試使用 Next.js 進行開發。喜歡探索不同的程式語言和框架，具備在有限時間內學習並應用的能力，快速適應新的任務和需求。碩班進入精於延展實境應用的實驗室因此接觸不同類型的應用開發，愛上了將想法轉換成實際產品的過程，成為我決心從事軟體開發職業的契機，因此透過自律、堅持和實踐，為成為全端工程師的目標準備。';

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
    skills: ['React', 'Tailwindcss', 'Express', 'Finnhub-API', 'Driver.js'],
    demo: 'https://stockinsight.vercel.app',
    source: 'https://github.com/jerryhuangyu/StockAnalyze/',
    description: '追蹤您的投資組合，可視化交易紀錄',
    projectImage: '/projects/sinsight_preview.webp'
  },
  {
    name: 'Tshirt Maker',
    skills: ['React', 'Framer-Motion', 'Express', 'OpenAI-API', 'Three.js'],
    demo: 'https://tshirtmaker.vercel.app/',
    source: 'https://github.com/jerryhuangyu/TShirtCustomApp',
    description: '',
    projectImage: '/projects/tshirtmaker_preview.webp'
  },
  {
    name: 'NOXGYM',
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://noxgym.vercel.app/',
    source: 'https://github.com/jerryhuangyu/FitnessWebPage',
    description: '',
    projectImage: '/projects/noxgym_preview.webp'
  },
  {
    name: 'Ubike Clone',
    skills: ['React', 'Axios', 'Ant-Design', 'YouBike-API'],
    demo: 'https://you-bike-clone.vercel.app/',
    source: 'https://github.com/jerryhuangyu/YouBikeClone',
    description: '',
    projectImage: '/projects/youbike_preview.webp'
  },
  {
    name: 'ZhèTEA',
    skills: ['React-Native', 'React', 'TypeScript', 'Framer Motion'],
    demo: 'https://large-type.com/#Wait%20for%20it%2C%20almost%20done.',
    source: 'https://github.com/jerryhuangyu/zhetea',
    description: '加緊趕工中 ...',
    projectImage: '/projects/waitforit.webp'
  }
];
