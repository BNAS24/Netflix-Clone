import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';

function SliderComponent(props) {
  const { images, showFirstImageFunctionality, showLastImageFunctionality, row } = props;
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

    const firstItem = firstItemRef.current;
    const lastItem = lastItemRef.current;

    if (firstItem) {
      observer1.observe(firstItem);
    }

    if (lastItem) {
      observer2.observe(lastItem);
    }

    return () => {
      if (firstItem) {
        observer1.unobserve(firstItem);
      }

      if (lastItem) {
        observer2.unobserve(lastItem);
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
    const scrollAmount = lastItemRect.right - wrapperRect.right + 48;
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
      <div className='title-wrapper'>
        <div className='title'><p className='movie-title'>{row.title}</p></div>
      </div>
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
      {showPrevButton && <button type='button' aria-label='button' className="prev-btn" onClick={handlePrevClick}></button>}
      {showNextButton && <button type='button' aria-label='button' className="next-btn" onClick={handleNextClick}></button>}
    </div>
  );
}

export default SliderComponent;
