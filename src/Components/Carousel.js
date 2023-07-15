import React, { useEffect } from 'react';
import './Carousel.css';

function SliderComponent() {
  useEffect(() => {
    const handlePrevClick = () => {
      const cardContainer = document.querySelector('.card-container');
      cardContainer.scrollBy({ left: -305, behavior: 'smooth' });
    };

    const handleNextClick = () => {
      const cardContainer = document.querySelector('.card-container');
      cardContainer.scrollBy({ left: 305, behavior: 'smooth' });
    };

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', handlePrevClick);
    nextBtn.addEventListener('click', handleNextClick);

    return () => {
      prevBtn.removeEventListener('click', handlePrevClick);
      nextBtn.removeEventListener('click', handleNextClick);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="card-container">
      <button className="prev-btn">&lt;</button>
        <div className="card">
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
          <img className="cardImg" src="https://i.postimg.cc/Gmh0JVZ4/The-Old-Guard.png" alt="The Old Guard" />
        </div>
        {/* Add more cards here if needed */}
        
        <button className="next-btn">&gt;</button>
      </div>

    </div>
  );
}

export default SliderComponent;
