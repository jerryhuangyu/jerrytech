"use client"

import { store } from "@/src/store"
import type { HOME_SECTIONS } from "@/types"
import { useRouter } from "next/navigation"
import React from "react"
import { useSnapshot } from "valtio"
import { cn } from "../lib/class-name"

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
    <button
      className={cn(
        "flex items-center justify-center",
        "my-[1.5px] py-1 pl-2 pr-3 gap-[6px]",
        "rounded-xl",
        "cursor-pointer duration-300",
        "text-primary dark:text-primary-dark",
        toggleSection === sectionKey && "bg-purple-400/60 dark:bg-zinc-600/60",
      )}
      onClick={handleClick}
    >
      <span className="brightness-75">{icon}</span>
      <span className="select-none text-sm">{name}</span>
    </button>
  )
}
export default NavbarBtn
