import { lazy, Suspense, useCallback, useState } from "react";

import PreloadCanvas from "./components/PreloadCanvas";
import SplashLoader from "./components/SplashLoader";

const App = lazy(() => import("./App"));

const Bootstrap = () => {
  const [assetsReady, setAssetsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAssetsReady = useCallback(() => {
    setProgress(100);
    setAssetsReady(true);
  }, []);

  if (!assetsReady) {
    return (
      <>
        <SplashLoader progress={progress} />
        <PreloadCanvas onReady={handleAssetsReady} onProgress={setProgress} />
      </>
    );
  }

  return (
    <Suspense fallback={<SplashLoader progress={100} />}>
      <App />
    </Suspense>
  );
};

export default Bootstrap;
