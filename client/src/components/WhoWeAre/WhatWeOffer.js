import React, {useState} from "react";
import "./WhatWeOffer.css";
import prevarrow from '../../images/arrow-prev.png';
import nextarrow from '../../images/arrow-next.png';
import ClientServices from "./Slides/ClientServices";
import Creative from "./Slides/Creative";
import Developer from "./Slides/Developer";
import Media from "./Slides/Media";
import Research from "./Slides/Research";

//slides to go through filled with components
const slides = [
    { id: 1, content: <ClientServices /> },
    { id: 2, content: <Research /> },
    { id: 3, content: <Creative /> },
    { id: 4, content: <Developer /> },
    { id: 5, content: <Media /> }
];

const WhatWeOffer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide">
              {slide.content}
            </div>
          ))}
        </div>
        <div className="controls">
          <span className="arrow-wwo prev" onClick={handlePrev}><img className="arrow-size" src={prevarrow} alt="Previous"/></span>
          <span className="arrow-wwo next" onClick={handleNext}><img className="arrow-size" src={nextarrow} alt="Next"/></span>
        </div>
      </div>
    )
};

export default WhatWeOffer;
