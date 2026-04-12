"use client";

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib';

function STLModel({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url)

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="royalblue" />
    </mesh>
  )
}

export default function STLviewer({url}: {url: string}) {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 100] }}>
        <Stage environment="city">
          <STLModel url={url} />
        </Stage>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
