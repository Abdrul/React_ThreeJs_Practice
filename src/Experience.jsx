import React, { useRef } from "react";
import "./Experience.css";
import { useFrame } from "@react-three/fiber";
import CustomObject from "./CustomObject";
import * as THREE from "three";
import {
  MeshReflectorMaterial,
  MeshDistortMaterial,
  Float,
  Text,
  Html,
  OrbitControls,
  TransformControls,
  PivotControls,
} from "@react-three/drei";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group>
        <mesh ref={cubeRef} position-x={2} scale={1.5}>
          <planeGeometry args={[1, 1, 32, 32]} />
          <MeshDistortMaterial color="mediumpurple" distort={0.5} speed={5} />
        </mesh>
        <TransformControls object={cubeRef} />

        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          scale={1.5}
          axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        >
          <mesh position-x={-2} ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
              position={[1, 1, 0]}
              wrapperClass="label"
              center
              distanceFactor={8}
              occlude={[cubeRef, sphereRef]}
            >
              <h1>Salut</h1>
            </Html>
          </mesh>
        </PivotControls>
      </group>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.75}
          color="greenyellow"
        />
      </mesh>

      <Float speed={5} floatIntensity={10}>
        <Text fontSize={1} color="salmon" position-y={2} textAlign="center">
          I love you
        </Text>
      </Float>

      {/* <CustomObject /> */}
    </>
  );
}
