'use client';

import Image from 'next/image';
import { lazy, useState, useTransition } from 'react';
import { useIsMobile } from '../hooks/device';

const HeroModel = lazy(() => import('@/src/components/canvas/Model'));

const HeroAsset = () => {
  const [, startTransition] = useTransition();
  const [load, setLoad] = useState(false);
  const { isDesktop } = useIsMobile();

  const handleImageClicked = () => {
    startTransition(() => setLoad(true));
  };

  const HeroImageBtn = () => (
    <div
      className="relative flex h-full w-full justify-center"
      onClick={handleImageClicked}
    >
      <Image
        priority
        quality={isDesktop() ? 100 : 4}
        alt="Jerry Huang Yu"
        src="/author.png"
        width={3000}
        height={462}
        style={{ objectFit: 'cover', width: 'auto', height: '100%' }}
      />
    </div>
  );
  return <>{load ? <HeroModel /> : <HeroImageBtn />}</>;
};
export default HeroAsset;
