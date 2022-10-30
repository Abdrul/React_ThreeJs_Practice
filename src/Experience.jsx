import React, { useRef } from "react";
import "./Experience.css";
import { useFrame } from "@react-three/fiber";
import CustomObject from "./CustomObject";
import * as THREE from "three";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
import Cube from "./Cube";
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

  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000",
    visible: true,
    clickMe: button(() => console.log("ok")),
    choice: { options: ["a", "b", "c"] },
  });

  const { scale } = useControls("cube", {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });

  // useFrame((state, delta) => {
  //   const angle = state.clock.elapsedTime;
  //   state.camera.position.x = Math.sin(angle) * 8;
  //   state.camera.position.z = Math.cos(angle) * 8;
  //   state.camera.lookAt(0, 0, 0);
  //   cubeRef.current.rotation.y += delta;
  // });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <TransformControls object={cubeRef} /> */}

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        scale={1.5}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
      >
        <mesh
          position={[position.x, position.y, 0]}
          ref={sphereRef}
          visible={visible}
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
            occlude={[sphereRef]}
          >
            <h1>Salut</h1>
          </Html>
        </mesh>
      </PivotControls>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>

      {/* <Float speed={5} floatIntensity={10}>
        <Text fontSize={1} color="salmon" position-y={2} textAlign="center">
          I love you
        </Text>
      </Float> */}

      <Cube scale={scale} />

      {/* <CustomObject /> */}
    </>
  );
}
