import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { Suspense, lazy } from 'react';
import './App.css';

const SliderComponent = lazy(() => import('./Components/Carousel'));
const HeroImage = lazy(() => import('./Components/HeroImage'));
const NavBar = lazy(() => import('./Components/Nav-Bar'));

function App() {
  const movieRows = [
    {
      title: 'Action & Adventure',
      images: [
        { url: 'https://i.postimg.cc/FzFhQ4j5/Black-Widow.jpg', alt: 'Movie 1' },
        { url: 'https://i.postimg.cc/j2k6HRcR/Extraction-2.png', alt: 'Movie 2' },
        { url: 'https://i.postimg.cc/Gmh0JVZ4/The-Old-Guard.png', alt: 'Movie 3' },
        { url: 'https://i.postimg.cc/rsdRLxGL/Spider-Man-Into-The-Spider-Verse.png', alt: 'Movie 4' },
        { url: '/John Wick 3.jpg', alt: 'Movie 5' },
        { url: 'https://i.postimg.cc/GpthYTSX/The-Gentlemen.jpg', alt: 'Movie 6' },
        { url: 'https://i.postimg.cc/cHTmzjcx/The-Suicide-Squad.jpg', alt: 'Movie 7' },
        { url: 'https://i.postimg.cc/dQNJSWHW/MV5-BYz-M0-Yj-Jl-MWEt-ZTg0-MS00-Nj-M4-LWJk-MDkt-N2-Vm-ZGU2-Zj-Q1-Yj-I2-Xk-Ey-Xk-Fqc-Gde-QXVy-ODk4-OTc3-MTY-V1-FMjpg-UX1000.jpg', alt: 'Movie 8' },
        // Add more images for the first row
      ],
      showFirstImageFunctionality: true,
      showLastImageFunctionality: true,
    },
    {
      images: [
        { url: 'https://i.postimg.cc/3J0vx0zZ/A-Quiet-Place-Part-ll.png', alt: 'Movie 9' },
        { url: 'https://i.postimg.cc/CKjFPkdm/Joker.png', alt: 'Movie 10' },
        { url: 'https://i.postimg.cc/43ZC3MNQ/The-Invisible-Man.png', alt: 'Movie 11' },
        { url: 'https://i.postimg.cc/0yCv7x4B/The-Call.png', alt: 'Movie 12' },
        { url: 'https://i.postimg.cc/D0h5QVHx/The-Night-Clerk.png', alt: 'Movie 13' },
        { url: 'https://i.postimg.cc/kXMMwTr4/Parasite.png', alt: 'Movie 14' },
        { url: 'https://i.postimg.cc/0jgWjK9K/The-Rhythm-Section.png', alt: 'Movie 15' },
        { url: 'https://i.postimg.cc/26wtcFvd/MV5-BMGUw-Zjli-MTAt-Nz-Ax-Zi00-MWNi-LWE2-Nzgt-ZGUx-MGQx-Zjhh-NDRi-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-U1-Nz-U3-Mz-E-V1-UY1200-CR90-0-6.jpg', alt: 'Movie 16' },
        // Add more images for the second row
      ],
      showFirstImageFunctionality: true,
      showLastImageFunctionality: true,
    },
    {
      images: [
        { url: 'https://i.postimg.cc/pLsY6G1L/West-Side-Story.jpg', alt: 'Movie 17' },
        { url: 'https://i.postimg.cc/GmfzpgPS/Emma.png', alt: 'Movie 18' },
        { url: 'https://i.postimg.cc/y80WJk04/Portrait-of-Lady-on-Fire.png', alt: 'Movie 19' },
        { url: 'https://i.postimg.cc/hvxh9jNd/Happiest-Season.png', alt: 'Movie 20' },
        { url: 'https://i.postimg.cc/kgD3ZZXj/The-Sun-Is-Also-A-Star.png', alt: 'Movie 21' },
        { url: 'https://i.postimg.cc/Y96JYBbS/Cyrano.png', alt: 'Movie 22' },
        { url: 'https://i.postimg.cc/zfWMY1mk/To-All-The-Boys-Always-and-Forever.jpg', alt: 'Movie 23' },
        { url: 'https://i.postimg.cc/25K4G19c/The-Last-Letter-From-Your-Lover.png', alt: 'Movie 24' },
        // Add more images for the second row
      ],
      showFirstImageFunctionality: true,
      showLastImageFunctionality: true,
    },
    {
      images: [
        { url: 'https://i.postimg.cc/C5ZrJy4D/Borat.png', alt: 'Movie 25' },
        { url: 'https://i.postimg.cc/2jBP4v9t/Dont-Look-Up.png', alt: 'Movie 26' },
        { url: 'https://i.postimg.cc/BZxmSCVJ/Spencer-Confidential.png', alt: 'Movie 27' },
        { url: 'https://i.postimg.cc/mDkLcvm9/Coming-2-America.png', alt: 'Movie 28' },
        { url: 'https://i.postimg.cc/SQzXD9GM/Goodboys.png', alt: 'Movie 29' },
        { url: 'https://i.postimg.cc/bvWyt6WF/Long-Shot.png', alt: 'Movie 30' },
        { url: 'https://i.postimg.cc/43T8f06Q/MV5-BMj-Ez-Mjcx-Nj-A2-Nl5-BMl5-Ban-Bn-Xk-Ft-ZTgw-Mj-Ax-MDM2-Nz-M-V1.jpgg', alt: 'Movie 31' },
        { url: 'https://i.postimg.cc/Fsk512LM/MV5-BYz-Rj-Yz-A5-NTQt-OTE3-MC00-OTYz-LWEz-ODIt-Mz-Qx-YWE1-NDJk-MDA0-Xk-Ey-Xk-Fqc-Gde-QXVy-MTkx-Nj-Uy-NQ-V1.jpg', alt: 'Movie 32' },
        // Add more images for the second row
      ],
      showFirstImageFunctionality: true,
      showLastImageFunctionality: true,
    },
    {
      images: [
        { url: 'https://i.postimg.cc/6pDZ4k8g/The-Vast-Night.png', alt: 'Movie 33' },
        { url: 'https://i.postimg.cc/x1XqNSh2/The-Green-Knight.png', alt: 'Movie 34' },
        { url: 'https://i.postimg.cc/TPpRHqfv/The-Kid-Who-Would-Be-King.png', alt: 'Movie 35' },
        { url: 'https://i.postimg.cc/VN8N5bcx/The-Midnight-Sky.png', alt: 'Movie 36' },
        { url: 'https://i.postimg.cc/wvW44Pc9/The-Lighthouse.png', alt: 'Movie 37' },
        { url: 'https://i.postimg.cc/Y2dj8x58/Onward.png', alt: 'Movie 38' },
        { url: 'https://i.postimg.cc/3NWkTysP/The-Shape-of-Water.png', alt: 'Movie 39' },
        { url: 'https://i.postimg.cc/W39Mgq04/MV5-BN2-Nh-MWM0-OGMt-OWIw-MS00-OGM1-LWJl-N2-Yt-Mzc4-N2-Uy-OTg5-MDlk-Xk-Ey-Xk-Fqc-Gde-QXVy-Njkw-Mz-Aw-Mj-Q-V1.jpg', alt: 'Movie 40' },
        // Add more images for the second row
      ],
      showFirstImageFunctionality: true,
      showLastImageFunctionality: true,
    },
    // Add more rows
  ];

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
          />
        ))}
      </Suspense>
    </>
  );
}

export default App;
