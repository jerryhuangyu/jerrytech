"use client";

import { useSnapshot } from "valtio";
import { store } from "@/store";
import { Section } from "@/types";

type NavbarBtnProps = {
  to: string;
  name: string;
  icon: React.ReactNode;
};

const NavbarBtn = ({ to, name, icon }: NavbarBtnProps) => {
  const { toggleSection } = useSnapshot(store);
  const section = name === "Home" ? "" : name.toLowerCase();
  return (
    <a
      href={to}
      className={`my-[1.5px] flex cursor-pointer items-center gap-[6px] rounded-xl px-3 duration-300 ${toggleSection === section && "bg-zinc-600/60"}`}
      onClick={() => (store.toggleSection = section as Section)}
    >
      <div className="brightness-75">{icon}</div>
      <button className="select-none text-sm">{name}</button>
    </a>
  );
};
export default NavbarBtn;
