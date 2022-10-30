import React from "react";

export default function Cube({ scale }) {
  return (
    <>
      <mesh position-x={2} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="mediumpurple" distort={0.5} speed={5} />
      </mesh>
    </>
  );
}
