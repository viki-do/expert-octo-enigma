import React, { useState } from "react";
import { slides } from "../utils"; 

const BestInTheIndustry = () => {
  const [currentSlide, setCurrentSlide] = useState(2); 
  const [isHoveredPrev, setIsHoveredPrev] = useState(false); 
  const [isHoveredNext, setIsHoveredNext] = useState(false); 


  const getSlidePosition = (index) => {
    const relativeIndex = (index - currentSlide + slides.length) % slides.length;

    switch (relativeIndex) {
      case 0:
        return "z-30 scale-100 translate-y-0 opacity-100"; 
      case 1:
        return "z-20 scale-95 translate-y-6 opacity-80"; 
      case 2:
        return "z-10 scale-90 translate-y-12 opacity-60"; 
      default:
        return "z-0 scale-85 translate-y-18 opacity-40 hidden"; 
    }
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getVisibleThumbnails = () => {
    const thumbnails = [];
    
    const startIdx = (currentSlide - 2 + slides.length) % slides.length; 
    const endIdx = (currentSlide + 2) % slides.length; 

    if (startIdx <= endIdx) {
      for (let i = startIdx; i <= endIdx; i++) {
        thumbnails.push(i);
      }
    } else {
      for (let i = startIdx; i < slides.length; i++) {
        thumbnails.push(i);
      }
      for (let i = 0; i <= endIdx; i++) {
        thumbnails.push(i);
      }
    }

    return thumbnails;
  };

  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-medium text-dark-blue mb-8">
        Surge AI Powers <br />
        the Best in the Industry
      </h1>
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="relative h-[300px] px-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${getSlidePosition(index)}`}
              style={{ width: "90%" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-4 space-x-1 px-4">
          {getVisibleThumbnails().map((index) => (
            <button
              key={slides[index].id}
              onClick={() => setCurrentSlide(index)}
              className="w-24 h-14 rounded-md"
              style={{
                border: currentSlide === index ? "1px solid #890EFF" : "none", 
                boxShadow: currentSlide === index ? "0 0 0 3px #F2E5FF" : "none",
                transform: currentSlide === index ? "scale(1.1)" : "scale(1)", 
                transition: "transform 0.3s", 
              }}
            >
              <img
                src={slides[index].logo}
                alt={`${slides[index].title} logo`}
                className="w-full h-full object-cover p-1 rounded-lg"
              />
            </button>
          ))}
        </div>
        <div className="flex px-10 justify-center gap-3 items-center pt-5">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsHoveredPrev(true)}
            onMouseLeave={() => setIsHoveredPrev(false)}
            className="bg-white py-5 px-5 rounded-full border border-gray-200 focus:outline-none hover:bg-[#890EFF] hover:text-white"
          >
            {isHoveredPrev ? (
              <img src="/assets/icons/arrowLeftWhite.svg" alt="Left" />
            ) : (
              <img src="/assets/icons/arrowLeft.svg" alt="Left" />
            )}
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={() => setIsHoveredNext(true)}
            onMouseLeave={() => setIsHoveredNext(false)}
            className="bg-white py-5 px-5 rounded-full border border-gray-200 focus:outline-none hover:bg-[#890EFF] hover:text-white"
          >
            {isHoveredNext ? (
              <img src="/assets/icons/arrowRightWhite.svg" alt="Right" />
            ) : (
              <img src="/assets/icons/arrowRight.svg" alt="Right" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestInTheIndustry;
