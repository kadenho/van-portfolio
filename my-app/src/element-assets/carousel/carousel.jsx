import { useState } from 'react';
import './carousel.css';

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(1);
  const [animated, setAnimated] = useState(true);

  if (!Array.isArray(slides) || slides.length === 0) return null;

  const loop = [slides[slides.length - 1], ...slides, slides[0]];

  const snapTo = (i) => {
    setAnimated(false);
    setIndex(i);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
  };

  const onTransitionEnd = () => {
    if (index === 0) snapTo(slides.length);
    else if (index === loop.length - 1) snapTo(1);
  };

  const prev = () => { setAnimated(true); setIndex(i => i - 1); };
  const next = () => { setAnimated(true); setIndex(i => i + 1); };

  const realIndex = (index - 1 + slides.length) % slides.length;

  return (
    <div className="carousel-container">
      <button className="arrow left-arrow" onClick={prev} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="arrow right-arrow" onClick={next} aria-label="Next slide">
        &#10095;
      </button>

      <div
        className="carousel-slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: animated ? undefined : 'none',
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {loop.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img src={slide} alt={`Slide ${i}`} className="slide-image" />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${realIndex === i ? 'active' : ''}`}
            onClick={() => { setAnimated(true); setIndex(i + 1); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
