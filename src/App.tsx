import { Canvas } from "@react-three/fiber";
import { usePlyLoader } from "./hooks/usePlyLoader";
// import { OrbitControls } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei';

const App = () => {
  const geometry = usePlyLoader("models/_gum.ply");


  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ fov: 75, position: [-10, 45, 20] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh geometry={geometry} /> 
        <OrbitControls dampingFactor={1}/>
      </Canvas>
    </div>
  );
};

export default App;
