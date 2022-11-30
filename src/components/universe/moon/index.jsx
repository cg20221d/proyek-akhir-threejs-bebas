import { useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";

const Moon = () => {
  const ref = useRef();
  const [incrementX, setIncrementX] = useState(true);
  const moonMap = useLoader(TextureLoader, "textures/moon.jpg");

  const position = [0, 0, -10];
  const radius = 0.75;
  const widthSegments = 64;
  const heightSegments = 64;

  useFrame(() => {
    if (ref.current.rotation.x >= 0.3) setIncrementX(false);
    else if (ref.current.rotation.x <= -0.3) setIncrementX(true);

    incrementX
      ? (ref.current.rotation.x += 0.005)
      : (ref.current.rotation.x -= 0.005);

    ref.current.rotation.y += 0.05;
  });

  return (
    <group ref={ref}>
      <mesh position={position}>
        <sphereGeometry args={[radius, widthSegments, heightSegments]} />
        <meshPhongMaterial map={moonMap} />
      </mesh>
    </group>
  );
};

export default Moon;
