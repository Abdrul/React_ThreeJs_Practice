import React, { useRef } from "react";
import "./Experience.css";
import CustomObject from "./CustomObject";
import * as THREE from "three";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
import Cube from "./Cube";
import { useFrame } from "@react-three/fiber";

import {
  OrbitControls,
  AccumulativeShadows,
  ContactShadows,
  RandomizedLight,
  useHelper,
  BakeShadows,
  softShadows,
} from "@react-three/drei";

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// });

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const directionLightRef = useRef();

  useHelper(directionLightRef, THREE.DirectionalLightHelper, 1);

  // const { position, color, visible } = useControls("sphere", {
  //   position: {
  //     value: { x: -2, y: 0 },
  //     step: 0.01,
  //     joystick: "invertY",
  //   },
  //   color: "#ff0000",
  //   visible: true,
  //   clickMe: button(() => console.log("ok")),
  //   choice: { options: ["a", "b", "c"] },
  // });

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#000000",
    opacity: { value: 0.5, min: 0, max: 1 },
    blur: { value: 1, min: 0, max: 10 },
  });

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    cubeRef.current.rotation.y += delta;
    // cubeRef.current.position.x = -2 + Math.sin(angle);
  });

  return (
    <>
      <Perf position="top-left" />
      <color args={["ivory"]} attach="background" />
      <BakeShadows />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      <ContactShadows
        position={[0, -0.99, 0]}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      />

      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        ref={directionLightRef}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
      />
      <ambientLight intensity={0.5} />

      {/* <TransformControls object={cubeRef} /> */}

      {/* <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        scale={1.5}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
      > */}
      <mesh position-x={2} ref={sphereRef} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
        {/* <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
          occlude={[sphereRef]}
        >
          <h1>Salut</h1>
        </Html> */}
      </mesh>
      {/* </PivotControls> */}

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      {/* <Float speed={5} floatIntensity={10}>
        <Text fontSize={1} color="salmon" position-y={2} textAlign="center">
          I love you
        </Text>
      </Float> */}

      <Cube cubeRef={cubeRef} />

      {/* <CustomObject /> */}
    </>
  );
}
