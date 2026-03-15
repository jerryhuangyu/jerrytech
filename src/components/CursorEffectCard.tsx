"use client"

import { useRouter } from "next/navigation"
import { type ReactNode, useRef } from "react"
import { FiExternalLink } from "react-icons/fi"
import useMouseAndScroll from "../hooks/mouse"
import { cn } from "../lib/class-name"

export const CursorEffectCard = ({
  title,
  tags,
  description,
  links,
  to,
  circleSize = 400,
  className,
  children,
  focus,
}: {
  title: string
  tags: string[]
  description: string
  links: {
    href: string
    icon: string
  }[]
  to?: string
  circleSize?: number
  children?: ReactNode
  className?: string
  focus?: boolean
}) => {
  const router = useRouter()
  const ref = useRef<HTMLButtonElement>(null)
  const mouse = useMouseAndScroll(ref)
  const canNavigate = Boolean(to || links[0]?.href)

  const openCard = () => {
    if (to) {
      router.push(to)
      return
    }

    const target = links[0]?.href
    if (!target) {
      return
    }

    window.open(target, "_blank", "noopener,noreferrer")?.focus()
  }

  return (
    <button
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-white/10 p-2 text-left transform-gpu transition-transform hover:scale-[1.01] active:scale-95",
        canNavigate && "cursor-pointer",
        className,
      )}
      onClick={openCard}
      role={canNavigate ? "link" : undefined}
      tabIndex={canNavigate ? 0 : -1}
      aria-label={title}
      ref={ref}
    >
      <div
        className={cn(
          "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elX === null || mouse.elY === null ? "opacity-0" : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${circleSize / 2}px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elX}px`,
          top: `${mouse.elY}px`,
          background: "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
        }}
      />
      <div className="absolute inset-px rounded-[19px] bg-neutral-100/80 dark:bg-neutral-900/80 border dark:border-0" />
      {children && (
        <div className="relative h-40 shrink-0 overflow-hidden rounded-[15px] border-neutral-950 bg-black/50 brightness-70 duration-200 group-hover:brightness-100">
          {children}
        </div>
      )}

      <div className="pointer-events-none relative flex flex-1 flex-col justify-start px-4 pt-4 pb-2">
        <div className="absolute flex top-5 right-5 z-10 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          {/* {links.map(link => (
            <ClientIconLink key={link.href} icon={link.icon} name={link.href} to={link.href} />
          ))} */}
          <FiExternalLink className="text-neutral-400 size-4.5" />
        </div>
        <h3
          className={cn(
            "font-semibold text-lg text-neutral-950 dark:text-neutral-300 text-shadow-sm",
            focus && "text-purple-400",
          )}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-3 mt-2 text-secondary dark:text-primary-dark">
          {tags?.map(tag => (
            <p key={tag} className="font-mono text-xs brightness-50">
              {tag}
            </p>
          ))}
        </div>
        <p className="mt-2 text-neutral-400">{description}</p>
      </div>
    </button>
  )
}
