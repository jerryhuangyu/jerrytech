'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';

const Model = () => {
  const model = useGLTF('/hrc/hrc_model.glb');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.7} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={model.scene}
        scale={8}
        position={[0, -1.6, 0]}
        rotation={[-0.03, -5, 0.1]}
      />
    </mesh>
  );
};

const ModelCanvas = () => (
  <Canvas
    className="z-20"
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.3}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Model />
    </Suspense>

    <Preload all />
  </Canvas>
);

const CubeLoader = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="loader"></div>;
  </div>
);

const HeroModel = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  });

  return <>{show ? <ModelCanvas /> : <CubeLoader />}</>;
};

export default HeroModel;
