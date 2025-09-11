import { useSyncExternalStore } from "react";

function getSnapshot() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getServerSnapshot() {
  return false;
}

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

export function usePrefersDarkMode() {
  return typeof window !== 'undefined'
    ? useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    : false;
}
