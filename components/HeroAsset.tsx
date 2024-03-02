'use client';

import Image from 'next/image';
import { lazy, useState, useTransition } from 'react';

const HeroModel = lazy(() => import('@/components/canvas/Model'));

const HeroAsset = () => {
  const [, startTransition] = useTransition();
  const [load, setLoad] = useState(false);

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
        quality={100}
        alt="Mountains"
        src="/author.png"
        width={0}
        height={0}
        style={{ objectFit: 'cover', width: 'auto', height: '100%' }}
        sizes={'100vh'}
      />
    </div>
  );
  return <>{load ? <HeroModel /> : <HeroImageBtn />}</>;
};
export default HeroAsset;
