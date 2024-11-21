import React, { useState } from "react";
import "./WhatWeOffer.css";
import prevarrow from '../../images/arrow-prev.png';
import nextarrow from '../../images/arrow-next.png';
import Production from "./Slides/Production";
import Creative from "./Slides/Creative";
import Developer from "./Slides/Developer";
import Media from "./Slides/Media";
import Research from "./Slides/Research";

//slides to go through filled with components
const slides = [
    { id: 1, tag: "Production", content: <Production /> },
    { id: 2, tag: "Research", content: <Research /> },
    { id: 3, tag: "Creative", content: <Creative /> },
    { id: 4, tag: "Development", content: <Developer /> },
    { id: 5, tag: "Media", content: <Media /> }
];

const WhatWeOffer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedTag, setSelectedTag] = useState("Production");

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        const index = slides.findIndex(slide => slide.tag === tag);
        if (index !== -1) {
            setCurrentIndex(index);
        }
    };

    return (
      <div className={`slider-container ${selectedTag.toLowerCase()}-active`}>
          <div className="offer">
              <h2 className="section-title">WHAT WE OFFER</h2>

              {/* Tag Buttons */}
              <div className="tag-container">
                  {slides.map(slide => {
                      const tagColors = {
                          Production: "#FFB23E",
                          Research: "#FE4D55",
                          Creative: "#AB9BFD",
                          Development: "#5303D8",
                          Media: "#000000"
                      };
  
                      return (
                          <button 
                              key={slide.id}
                              className={`tag ${selectedTag === slide.tag ? 'active' : ''}`}
                              onClick={() => handleTagClick(slide.tag)}
                              style={{ 
                                backgroundColor: tagColors[slide.tag],
                                borderRadius: '0px'
                              }}
                          >
                              {slide.tag}
                          </button>
                      );
                  })}
              </div>
          </div>
  
          {/* Slider */}
          <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                  <div key={slide.id} className="slide">
                      {slide.content}
                  </div>
              ))}
          </div>
      </div>
  );
  
};

export default WhatWeOffer;
