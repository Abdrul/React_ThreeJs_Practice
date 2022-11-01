import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./App.css";
import * as THREE from "three";
import { Leva } from "leva";

function App() {
  return (
    <div className="App">
      {/* <Leva collapsed /> */}
      <Canvas
        // shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
