import React from "react";

export default function Cube({ cubeRef }) {
  return (
    <>
      <mesh position-x={-2} scale={1.5} ref={cubeRef} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="mediumpurple" distort={0.5} speed={5} />
      </mesh>
    </>
  );
}
