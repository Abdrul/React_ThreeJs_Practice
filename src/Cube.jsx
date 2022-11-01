import React from "react";

export default function Cube({ cubeRef }) {
  return (
    <>
      <mesh position-x={-2} scale={1.5} ref={cubeRef} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
}
