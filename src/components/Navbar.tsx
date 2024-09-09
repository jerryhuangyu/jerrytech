'use client';

import NavbarBtn from '@/src/components/NavbarBtn';
import { HOME_SECTIONS } from '@/types';
import React, { useEffect } from 'react';
import { updateStateFromURL } from '../store';

type NavbarProps = {
  buttons: {
    title: string;
    to: string;
    sectionKey: HOME_SECTIONS;
    icon: React.ReactNode;
  }[];
};

const Navbar = ({ buttons }: NavbarProps) => {
  useEffect(() => {
    const handlePopState = () => {
      updateStateFromURL();
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [updateStateFromURL]);

  return (
    <div className="fixed top-8 z-50 grid grid-cols-2 gap-[0.5px] rounded-2xl bg-zinc-800/70 bg-clip-padding px-3 py-[6px] backdrop-blur sm:h-12 sm:grid-cols-4 sm:gap-1">
      {buttons.map((btn) => (
        <NavbarBtn
          key={btn.title}
          to={btn.to}
          name={btn.title}
          sectionKey={btn.sectionKey}
          icon={btn.icon}
        />
      ))}
    </div>
  );
};
export default Navbar;
