"use client"

import Image from "next/image"
import { Suspense, lazy } from "react"
import { useIsMobile } from "../hooks/device"

const HeroModel = lazy(() => import("@/src/components/canvas/Model"))

const HeroImage = () => {
  const { isDesktop } = useIsMobile()
  return (
    <div className="relative flex h-full w-full justify-center">
      <Image
        priority
        quality={isDesktop() ? 100 : 4}
        alt="Jerry Huang Yu"
        src="/author.png"
        width={3000}
        height={462}
        style={{ objectFit: "cover", width: "auto", height: "100%" }}
      />
    </div>
  )
}

const HeroAsset = () => {
  return (
    <Suspense fallback={<HeroImage />}>
      <HeroModel />
    </Suspense>
  )
}

export default HeroAsset
