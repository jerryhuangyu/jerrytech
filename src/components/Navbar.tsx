"use client"

import NavbarBtn from "@/src/components/NavbarBtn"
import type { HOME_SECTIONS } from "@/types"
import React, { useEffect } from "react"
import { cn } from "../lib/class-name"
import { updateStateFromURL } from "../store"

type NavbarProps = {
  buttons: {
    title: string
    to: string
    sectionKey: HOME_SECTIONS
    icon: React.ReactNode
  }[]
}

const Navbar = ({ buttons }: NavbarProps) => {
  useEffect(() => {
    const handlePopState = () => {
      updateStateFromURL()
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [updateStateFromURL])

  return (
    <div
      className={cn(
        "fixed top-8 z-50 grid grid-cols-2 sm:grid-cols-5",
        "gap-[0.5px] sm:gap-1 px-3 py-[6px]",
        "rounded-2xl bg-zinc-200/70 dark:bg-zinc-800/70 bg-clip-padding",
        "backdrop-blur sm:h-12",
      )}
    >
      {buttons.map(btn => (
        <NavbarBtn key={btn.title} to={btn.to} name={btn.title} sectionKey={btn.sectionKey} icon={btn.icon} />
      ))}
    </div>
  )
}
export default Navbar
