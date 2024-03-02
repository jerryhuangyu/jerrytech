'use client';

import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <span className="canvas-load"></span>
      <div className="h-[30px]"></div>
      <p
        style={{
          fontSize: 14,
          color: '#8497ad',
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
