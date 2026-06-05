import { useState } from 'react';
import './carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    // If we are at the first slide, wrap around to the last slide
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    // If we are at the last slide, wrap around to the first slide
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      {/* Left Navigation Arrow */}
      <button className="arrow left-arrow" onClick={prevSlide} aria-label="Previous slide">
        &#10094;
      </button>

      {/* Right Navigation Arrow */}
      <button className="arrow right-arrow" onClick={nextSlide} aria-label="Next slide">
        &#10095;
      </button>

      {/* Slides Wrapper */}
      <div className="carousel-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>

      {/* Bottom Indicator Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;