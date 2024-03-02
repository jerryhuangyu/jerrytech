'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';

type ModelProps = {
  path: string;
};

const Model = ({ path }: ModelProps) => {
  const model = path ? useGLTF(path) : useGLTF('/hrc/hrc_model.glb');
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

type ModelCanvasProps = {
  children: React.ReactNode;
};

const ModelCanvas = ({ children }: ModelCanvasProps) => (
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
      {children}
    </Suspense>

    <Preload all />
  </Canvas>
);

const HeroModel = () => {
  return (
    <ModelCanvas>
      <Model path="/hrc/hrc_model.glb" />
    </ModelCanvas>
  );
};

export default HeroModel;
