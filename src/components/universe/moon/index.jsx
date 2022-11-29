import { useEffect, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const Moon = () => {
  const moonMap = useLoader(TextureLoader, "textures/moon.jpg");

  const [rotation, setRotation] = useState([0, 0, 0]);
  const position = [0, 0, -10];
  const radius = 0.75;
  const widthSegments = 64;
  const heightSegments = 64;

  useEffect(() => {
    let [x, y, z] = rotation;

    setInterval(() => {
      x += 0.0005;
      z += 0.0005;
      setRotation([x, y, z]);
    }, 100);
  }, []);

  return (
    <group rotation={rotation}>
      <mesh position={position}>
        <sphereGeometry args={[radius, widthSegments, heightSegments]} />
        <meshPhongMaterial map={moonMap} />
      </mesh>
    </group>
  );
};

export default Moon;
