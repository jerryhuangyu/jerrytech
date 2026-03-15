"use client"

import { useEffect, useRef } from "react"
import { usePrefersDarkMode } from "@/src/hooks/dark-mode"

const FONT_SIZE = 14
const FRAME_INTERVAL_MS = 60
const CHARACTERS = "01{}[]<>/*#=+-;:.abcdefghijklmnopqrstuvwxyz"

type HeroMatrixBackgroundProps = {
  density?: number
}

const HeroMatrixBackground = ({ density = 1 }: HeroMatrixBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersDarkMode = usePrefersDarkMode()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const normalizedDensity = Math.max(density, 0.1)
    const columnGap = FONT_SIZE / normalizedDensity
    const rowStep = FONT_SIZE / normalizedDensity

    let frameId = 0
    let lastFrameTime = 0
    let viewportWidth = 0
    let viewportHeight = 0
    let drops: number[] = []

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const { width, height } = parent.getBoundingClientRect()
      const pixelRatio = window.devicePixelRatio || 1

      viewportWidth = Math.max(Math.floor(width), 1)
      viewportHeight = Math.max(Math.floor(height), 1)

      canvas.width = Math.max(Math.floor(width * pixelRatio), 1)
      canvas.height = Math.max(Math.floor(height * pixelRatio), 1)
      canvas.style.width = `${viewportWidth}px`
      canvas.style.height = `${viewportHeight}px`

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const columns = Math.max(Math.floor(viewportWidth / columnGap), 1)
      const maxDrop = Math.max(Math.floor(viewportHeight / rowStep), 1)
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * maxDrop))
    }

    const drawFrame = () => {
      context.fillStyle = prefersDarkMode ? "rgba(0, 0, 0, 0.16)" : "rgba(255, 255, 255, 0.06)"
      context.fillRect(0, 0, viewportWidth, viewportHeight)
      context.font = `${FONT_SIZE}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

      for (let index = 0; index < drops.length; index++) {
        const x = index * columnGap
        const y = drops[index] * rowStep
        const currentChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]

        context.fillStyle = prefersDarkMode ? "rgba(255, 255, 255, 0.18)" : "rgba(17, 24, 39, 0.16)"
        context.fillText(currentChar, x, y)

        if (drops[index] > 1) {
          const trailChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
          context.fillStyle = prefersDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(17, 24, 39, 0.08)"
          context.fillText(trailChar, x, (drops[index] - 1) * rowStep)
        }

        if (y > viewportHeight && Math.random() > 0.97) {
          drops[index] = 0
          continue
        }

        drops[index] += 1
      }
    }

    const animate = (time: number) => {
      if (time - lastFrameTime >= FRAME_INTERVAL_MS) {
        drawFrame()
        lastFrameTime = time
      }

      frameId = window.requestAnimationFrame(animate)
    }

    resize()
    drawFrame()

    if (!motionQuery.matches) {
      frameId = window.requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
    }
  }, [density, prefersDarkMode])

  return (
    <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80" />
  )
}

export default HeroMatrixBackground
