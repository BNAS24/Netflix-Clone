import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { Suspense, lazy } from 'react';
import './App.css';

const SliderComponent = lazy(() => import('./Components/Carousel'));
const HeroImage = lazy(() => import('./Components/HeroImage'));
const NavBar = lazy(() => import('./Components/Nav-Bar'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <HeroImage />
        <SliderComponent />
        <SliderComponent />
        <SliderComponent />
        <SliderComponent />
        <SliderComponent />
      </Suspense>
    </>
  );
}

export default App;