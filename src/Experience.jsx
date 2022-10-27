import React from "react";

export default function Experience() {
  return (
    <>
      <mesh position-x={2} scale={1.5} rotation-y={Math.PI * 0.25}>
        {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
        <boxGeometry />
        <meshBasicMaterial color="black" wireframe />
      </mesh>
    </>
  );
}
