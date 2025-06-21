"use client"

import { store } from "@/src/store"
import type { HOME_SECTIONS } from "@/types"
import { useRouter } from "next/navigation"
import React from "react"
import { useSnapshot } from "valtio"

type NavbarBtnProps = {
  to: string
  name: string
  sectionKey: HOME_SECTIONS
  icon: React.ReactNode
}

const NavbarBtn = ({ to, name, sectionKey, icon }: NavbarBtnProps) => {
  const { toggleSection } = useSnapshot(store)
  const router = useRouter()

  const handleClick = () => {
    store.toggleSection = sectionKey
    router.push(to)
  }

  return (
    <span
      className={`my-[1.5px] flex cursor-pointer items-center justify-center gap-[6px] rounded-xl py-1 pl-2 pr-3 duration-300 ${toggleSection === sectionKey && "bg-zinc-600/60"}`}
      onClick={handleClick}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") handleClick()
      }}
    >
      <div className="text-primary brightness-75">{icon}</div>
      <button className="select-none text-sm text-primary">{name}</button>
    </span>
  )
}
export default NavbarBtn
