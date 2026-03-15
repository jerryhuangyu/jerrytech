"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import SplitType from "split-type"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const CJK_CHARACTER_REGEX = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g
const LONG_LATIN_TEXT_THRESHOLD = 220
const WORD_STAGGER = 0.05
const WORD_DURATION = 0.3
const CHAR_STAGGER = 0.018
const CHAR_DURATION = 0.18

type WordsAnimateProps = {
  texts: string[]
}

const resolveSplitMode = (text: string) => {
  const cjkCharacters = text.match(CJK_CHARACTER_REGEX)?.length ?? 0
  const cjkRatio = cjkCharacters / Math.max(text.length, 1)

  // Long Latin paragraphs generate too many animated nodes when split by chars.
  if (cjkRatio < 0.2 && text.length > LONG_LATIN_TEXT_THRESHOLD) {
    return "words"
  }

  return "chars"
}

const ScrollTypingWords = ({ texts }: WordsAnimateProps) => {
  const container = useRef<HTMLDivElement>(null)
  const textSignature = texts.join("\u0000")

  useGSAP(
    () => {
      if (!container.current) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const paragraphs = gsap.utils.toArray<HTMLParagraphElement>("p", container.current)
      const splitInstances: SplitType[] = []
      const paragraphAnimations = paragraphs.map(paragraph => {
        const splitMode = resolveSplitMode(paragraph.textContent ?? "")
        const splitText = new SplitType(paragraph, {
          types: splitMode,
          tagName: "span",
        })
        const targets = (splitMode === "words" ? splitText.words : splitText.chars) ?? []

        splitInstances.push(splitText)

        return {
          splitMode,
          targets,
        }
      })

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

      paragraphAnimations.forEach(({ splitMode, targets }, index) => {
        if (targets.length === 0) return

        gsap.set(targets, { opacity: 0.18 })

        timeline.to(
          targets,
          {
            opacity: 1,
            duration: splitMode === "words" ? WORD_DURATION : CHAR_DURATION,
            stagger: splitMode === "words" ? WORD_STAGGER : CHAR_STAGGER,
          },
          index === 0 ? 0 : ">",
        )
      })

      return () => {
        splitInstances.forEach(splitText => {
          splitText.revert()
        })
      }
    },
    {
      scope: container,
      dependencies: [textSignature],
      revertOnUpdate: true,
    },
  )

  return (
    <div ref={container} className="space-y-6">
      {texts.map((t, idx) => (
        <p key={idx} className="wrap-break-word">
          {t}
        </p>
      ))}
    </div>
  )
}
export default ScrollTypingWords
