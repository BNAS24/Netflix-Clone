import React, { useRef } from 'react';
import './Carousel.css';

function SliderComponent() {
  const wrapperRef = useRef(null);

  const handlePrevClick = () => {
    wrapperRef.current.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  };

  const handleNextClick = () => {
    wrapperRef.current.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  };

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="card-container">
        <div className="card" id="first">
          <img className="cardImg" src="https://i.postimg.cc/FzFhQ4j5/Black-Widow.jpg" alt="Black Widow" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/j2k6HRcR/Extraction-2.png" alt="Extraction 2" />
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://i.postimg.cc/rsdRLxGL/Spider-Man-Into-The-Spider-Verse.png"
            alt="Spider Man Into The Spider Verse"
          />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/QtFcj2sP/John-Wick-3.jpg" alt="John Wick" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/qqnn32Nx/Hobbs-Shaw.png" alt="Hobbs and Shaw" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/W43k7BD3/Nobody.png" alt="Nobody" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/W43k7BD3/Nobody.png" alt="Nobody" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/W43k7BD3/Nobody.png" alt="Nobody" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/W43k7BD3/Nobody.png" alt="Nobody" />
        </div>
        <div className="card" id="last">
          <img className="cardImg" src="https://i.postimg.cc/Gmh0JVZ4/The-Old-Guard.png" alt="The Old Guard" />
        </div>
      </div>
      <button className="prev-btn" onClick={handlePrevClick}></button>
      <button className="next-btn" onClick={handleNextClick}></button>
    </div>
  );
}

export default SliderComponent;
