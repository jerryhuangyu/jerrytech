import { proxy } from 'valtio';
import { HOME_SECTIONS } from '@/types';

const getInitialStateFromURL = () => {
  if (typeof window === 'undefined') {
    return { toggleSection: HOME_SECTIONS.NONE };
  }

  const url = new URL(window.location.href);
  const hash = decodeURIComponent(url.hash.substring(1));

  if (hash === '主頁' || hash === 'home') {
    return { toggleSection: HOME_SECTIONS.HOME };
  }

  if (hash === '關於' || hash === 'about') {
    return { toggleSection: HOME_SECTIONS.ABOUT };
  }

  if (hash === '經驗' || hash === 'experience') {
    return { toggleSection: HOME_SECTIONS.EXPERIENCE };
  }

  if (hash === '專案' || hash === 'project') {
    return { toggleSection: HOME_SECTIONS.PROJECT };
  }
};

type State = {
  toggleSection: HOME_SECTIONS;
};

const initialObj = {
  toggleSection: HOME_SECTIONS.NONE,
  ...getInitialStateFromURL()
};

export const store = proxy<State>(initialObj);

export const updateStateFromURL = () => {
  const urlToggleSection = getInitialStateFromURL()?.toggleSection;
  store.toggleSection = urlToggleSection ?? HOME_SECTIONS.NONE;
};
