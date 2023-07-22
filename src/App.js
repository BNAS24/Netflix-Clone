import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { Suspense, lazy } from 'react';
import './App.css';
import movieRows from "./Helpers/rows.js";

const SliderComponent = lazy(() => import('./Components/Carousel'));
const HeroImage = lazy(() => import('./Components/HeroImage'));
const NavBar = lazy(() => import('./Components/Nav-Bar'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <HeroImage />

        {movieRows.map((row, index) => (
          <SliderComponent
            key={index}
            images={row.images || []} // Make sure images is an array or provide a default empty array
            showFirstImageFunctionality={row.showFirstImageFunctionality}
            showLastImageFunctionality={row.showLastImageFunctionality}
            row={row}
          />
        ))}
      </Suspense>
    </>
  );
}

export default App;
