import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Desktop PC model: tall monitor + base, centered on X; Y shifts it down, Z sets depth.
const MODEL_CONFIG = {
  desktop: {
    scale: 0.75,
    position: [0, -3.25, -1.5],
    rotation: [-0.01, -0.2, -0.1],
    camera: { position: [20, 3, 5], fov: 25 },
  },
  mobile: {
    scale: 0.40,
    position: [1.5, -2.2, -0.4],
    rotation: [-0.01, -0.2, -0.1],
    camera: { position: [20, 2.5, 5], fov: 28 },
  },
};

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const { scale, position, rotation } = isMobile
    ? MODEL_CONFIG.mobile
    : MODEL_CONFIG.desktop;

  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const { camera } = isMobile ? MODEL_CONFIG.mobile : MODEL_CONFIG.desktop;

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={camera}
      gl={{ preserveDrawingBuffer: true }}
      className={
        isMobile ? "!absolute !inset-0 !h-full !w-full z-[1]" : undefined
      }
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
