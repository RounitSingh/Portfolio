import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, useProgress } from "@react-three/drei";

import { technologies } from "../constants";

const MODEL_PATHS = ["./desktop_pc/scene.gltf", "./planet/scene.gltf"];

const ProgressReporter = ({ onProgress }) => {
  const { progress } = useProgress();

  useEffect(() => {
    onProgress(progress);
  }, [progress, onProgress]);

  return null;
};

const PreloadAssets = ({ onReady }) => {
  useGLTF(MODEL_PATHS[0]);
  useGLTF(MODEL_PATHS[1]);
  useTexture(technologies.map((tech) => tech.icon));

  useEffect(() => {
    onReady();
  }, [onReady]);

  return null;
};

const PreloadCanvas = ({ onReady, onProgress }) => (
  <Canvas
    frameloop='demand'
    style={{
      position: "fixed",
      width: 1,
      height: 1,
      opacity: 0,
      pointerEvents: "none",
      zIndex: -1,
    }}
  >
    <Suspense fallback={null}>
      <PreloadAssets onReady={onReady} />
      <ProgressReporter onProgress={onProgress} />
    </Suspense>
  </Canvas>
);

MODEL_PATHS.forEach((path) => useGLTF.preload(path));

export default PreloadCanvas;
