import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';

function SliderComponent() {
  const wrapperRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowPrevButton(false);
        } else {
          setShowPrevButton(true);
        }
      },
      { threshold: 1 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowNextButton(false);
        } else {
          setShowNextButton(true);
        }
      },
      { threshold: 1 }
    );

    observer1.observe(firstItemRef.current);
    observer2.observe(lastItemRef.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const handlePrevClick = () => {
    wrapperRef.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const handleNextClick = () => {
    wrapperRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  const handleMouseOver = () => {
    wrapperRef.current.style.paddingRight = '20px';
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const lastItemRect = lastItemRef.current.getBoundingClientRect();
    const scrollAmount = lastItemRect.right - wrapperRect.right + 40;
    wrapperRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleMouseOut = () => {
    wrapperRef.current.style.paddingRight = '';
  };

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="card-container">
        <div className="card" id="first" ref={firstItemRef}>
          <img className="cardImg" src="https://i.postimg.cc/FzFhQ4j5/Black-Widow.jpg" alt="Black Widow" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/j2k6HRcR/Extraction-2.png" alt="Extraction 2" />
        </div>
        <div className="card">
          <img className="cardImg" src="https://i.postimg.cc/rsdRLxGL/Spider-Man-Into-The-Spider-Verse.png" alt="Spider Man Into The Spider Verse" />
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
        <div className="card" id="last" ref={lastItemRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img className="cardImg" src="https://i.postimg.cc/Gmh0JVZ4/The-Old-Guard.png" alt="The Old Guard" />
        </div>
      </div>
      {showPrevButton && <button className="prev-btn" onClick={handlePrevClick}></button>}
      {showNextButton && <button className="next-btn" onClick={handleNextClick}></button>}
    </div>
  );
}

export default SliderComponent;
