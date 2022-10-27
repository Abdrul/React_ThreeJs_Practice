import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
