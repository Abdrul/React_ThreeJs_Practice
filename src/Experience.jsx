import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject";
import * as THREE from "three";

extend({ OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();
  const cubeRef = useRef();

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;

    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;

    // state.camera.lookAt(0, 0, 0);

    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group>
        <mesh
          ref={cubeRef}
          position-x={2}
          scale={1.5}
          rotation-y={Math.PI * 0.25}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
      </mesh>

      <CustomObject />
    </>
  );
}
