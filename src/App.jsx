import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./App.css";
import * as THREE from "three";

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [7, 5, 9],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
