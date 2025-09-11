'use client'

import dynamic from 'next/dynamic'

const HeroAsset = dynamic(() => import('./HeroAsset'), {
  ssr: false,
})

export default HeroAsset