import React, { useEffect, useRef } from 'react';
import './Carousel.css';

function SliderComponent() {
  const cardContainerRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const lastItemRef = useRef(null);
  const firstItemRef = useRef(null);

  useEffect(() => {
    const handlePrevClick = () => {
      cardContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const handleNextClick = () => {
      cardContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const observer1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const prevBtn = prevBtnRef.current;
          if (prevBtn) {
            prevBtn.style.display = 'none';
          }
        } else {
          const prevBtn = prevBtnRef.current;
          if (prevBtn) {
            prevBtn.style.display = 'flex';
          }
        }
      },
      { threshold: 1 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextBtn = nextBtnRef.current;
          if (nextBtn) {
            nextBtn.style.display = 'none';
          }
        } else {
          const nextBtn = nextBtnRef.current;
          if (nextBtn) {
            nextBtn.style.display = 'flex';
          }
        }
      },
      { threshold: 1 }
    );

    observer1.observe(firstItemRef.current);
    observer2.observe(lastItemRef.current);

    const handleMouseOver = () => {
      cardContainerRef.current.style.paddingRight = '20px';
      const wrapperRect = cardContainerRef.current.getBoundingClientRect();
      const lastItemRect = lastItemRef.current.getBoundingClientRect();
      const scrollAmount = lastItemRect.right - wrapperRect.right + 2;
      cardContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    const handleMouseOut = () => {
      cardContainerRef.current.style.paddingRight = '';
    };

    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const lastItem = lastItemRef.current;

    if (prevBtn) {
      prevBtn.addEventListener('click', handlePrevClick);
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', handleNextClick);
    }
    if (lastItem) {
      lastItem.addEventListener('mouseover', handleMouseOver);
      lastItem.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (prevBtn) {
        prevBtn.removeEventListener('click', handlePrevClick);
      }
      if (nextBtn) {
        nextBtn.removeEventListener('click', handleNextClick);
      }
      if (lastItem) {
        lastItem.removeEventListener('mouseover', handleMouseOver);
        lastItem.removeEventListener('mouseout', handleMouseOut);
      }
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="card-container" id="1" ref={cardContainerRef}>
        <div className="card" id="first" ref={firstItemRef}>
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
        <div className="card" id="last" ref={lastItemRef}>
          <img className="cardImg" src="https://i.postimg.cc/Gmh0JVZ4/The-Old-Guard.png" alt="The Old Guard" />
        </div>
        {/* Add more cards here if needed */}
      </div>
      <button className="prev-btn" ref={prevBtnRef}></button>
      <button className="next-btn" ref={nextBtnRef}></button>
    </div>
  );
}

export default SliderComponent;
