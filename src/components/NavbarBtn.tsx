'use client';

import React from 'react';
import { useSnapshot } from 'valtio';
import { useRouter } from 'next/navigation';
import { store } from '@/src/store';
import { Section } from '@/types';

type NavbarBtnProps = {
  to: string;
  name: string;
  icon: React.ReactNode;
};

const NavbarBtn = ({ to, name, icon }: NavbarBtnProps) => {
  const { toggleSection } = useSnapshot(store);
  const section = name.toLowerCase();
  const router = useRouter();
  return (
    <span
      className={`my-[1.5px] flex cursor-pointer items-center justify-center gap-[6px] rounded-xl py-1 pl-2 pr-3 duration-300 ${toggleSection === section && 'bg-zinc-600/60'}`}
      onClick={() => {
        store.toggleSection = section as Section;
        router.push(to);
      }}
    >
      <div className="text-primary brightness-75">{icon}</div>
      <button className="select-none text-sm text-primary">{name}</button>
    </span>
  );
};
export default NavbarBtn;
