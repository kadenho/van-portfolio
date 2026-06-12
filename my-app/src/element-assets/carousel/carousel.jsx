import { useState, useRef } from 'react';
import './carousel.css';

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const pendingRef = useRef(0);

  if (!Array.isArray(slides) || slides.length === 0) return null;

  const consumePending = () => {
    const p = pendingRef.current;
    if (p === 0) return 0;
    const dir = p > 0 ? 1 : -1;
    pendingRef.current -= dir;
    return dir;
  };

  const onTransitionEnd = (e) => {
    if (e.propertyName !== 'transform') return;
    const dir = consumePending();
    if (dir !== 0) {
      setIndex(i => Math.min(Math.max(i + dir, 0), slides.length - 1));
    } else {
      setTransitioning(false);
    }
  };

  const prev = () => {
    if (index === 0) return;
    if (!transitioning) {
      setTransitioning(true);
      setIndex(i => i - 1);
    } else {
      pendingRef.current -= 1;
    }
  };

  const next = () => {
    if (index === slides.length - 1) return;
    if (!transitioning) {
      setTransitioning(true);
      setIndex(i => i + 1);
    } else {
      pendingRef.current += 1;
    }
  };

  return (
    <div className="carousel-container">
      <button className="arrow left-arrow" onClick={prev} disabled={index === 0} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="arrow right-arrow" onClick={next} disabled={index === slides.length - 1} aria-label="Next slide">
        &#10095;
      </button>

      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={onTransitionEnd}
      >
        {slides.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img src={slide} alt={`Slide ${i}`} className="slide-image" />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => {
              pendingRef.current = 0;
              setTransitioning(true);
              setIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
