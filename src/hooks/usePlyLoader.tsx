import { useLoader } from "@react-three/fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import { BufferGeometry } from "three"; // Import BufferGeometry from three.js

export const usePlyLoader = (modelPath: string): BufferGeometry => {
  const geometry = useLoader(PLYLoader, modelPath) as BufferGeometry;
  return geometry;
};
