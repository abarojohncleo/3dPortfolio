import React, { useEffect, useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

const Sky = ({isRotating,...prompt}) => {
  const sky = useGLTF(skyScene);

  const skyRef = useRef();

  useFrame((_,delta) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.10 * delta
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky