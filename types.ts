export type BasicLink = {
  name: string;
  icon: string;
  to: string;
};

export type Card = {
  name: string;
  skills: string[];
  demo: string;
  source: string;
};

export type Section = '' | 'home' | 'about' | 'experience' | 'project';
