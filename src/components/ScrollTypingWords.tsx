"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import SplitType from "split-type"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

type WordsAnimateProps = {
  texts: string[]
}

const ScrollTypingWords = ({ texts }: WordsAnimateProps) => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!container.current) return

      const paragraphs = container.current.querySelectorAll("p")

      // 建立 timeline，逐段落執行
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
          markers: false,
        },
      })

      paragraphs.forEach(p => {
        const splitTypes = new SplitType(p, {
          types: ["chars"],
          tagName: "span",
        })

        // 每個段落依序加入 timeline
        timeline.from(splitTypes.chars, {
          opacity: 0.2,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        })
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className="space-y-6">
      {texts.map((t, idx) => (
        <p key={idx} className="break-all">
          {t}
        </p>
      ))}
    </div>
  )
}
export default ScrollTypingWords
