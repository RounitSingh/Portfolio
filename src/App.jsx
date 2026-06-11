import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Fab,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { resumeUrl } from "./constants";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className='relative z-0'>
          <Contact />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>

        <Fab
          href={resumeUrl}
          label='Resume'
          className='fixed bottom-8 right-8 z-50'
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
