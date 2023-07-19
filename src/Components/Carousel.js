import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';

function SliderComponent({ images, showFirstImageFunctionality, showLastImageFunctionality }) {
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

    if (firstItemRef.current) {
      observer1.observe(firstItemRef.current);
    }

    if (lastItemRef.current) {
      observer2.observe(lastItemRef.current);
    }

    return () => {
      if (firstItemRef.current) {
        observer1.unobserve(firstItemRef.current);
      }

      if (lastItemRef.current) {
        observer2.unobserve(lastItemRef.current);
      }
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
    <div className='title'>Home</div>
      <div className="card-container">
        {showFirstImageFunctionality && (
          <div className="card" id="first" ref={firstItemRef}>
            <img className="cardImg" src={images[0].url} alt={images[0].alt} />
          </div>
        )}
        {images.slice(1, -1).map((image, index) => (
          <div className="card" key={index}>
            <img className="cardImg" src={image.url} alt={image.alt} />
          </div>
        ))}
        {showLastImageFunctionality && (
          <div className="card" id="last" ref={lastItemRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img className="cardImg" src={images[images.length - 1].url} alt={images[images.length - 1].alt} />
          </div>
        )}
      </div>
      {showPrevButton && <button className="prev-btn" onClick={handlePrevClick}></button>}
      {showNextButton && <button className="next-btn" onClick={handleNextClick}></button>}
    </div>
  );
}

export default SliderComponent;
