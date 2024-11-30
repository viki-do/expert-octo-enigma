import React, { useState, useEffect } from "react";
import { slides } from "../utils";

const BestInTheIndustry = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isHoveredThumbnails, setIsHoveredThumbnails] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(7);
      } else {
        setVisibleCount(5);
      }
    };

    window.addEventListener("resize", updateVisibleCount);
    updateVisibleCount();

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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
    for (let i = -Math.floor(visibleCount / 2); i <= Math.floor(visibleCount / 2); i++) {
      const index = (currentSlide + i + slides.length) % slides.length;
      thumbnails.push(index);
    }
    return thumbnails;
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center text-center">
      <img src="/assets/images/blur.jpg" alt="" />
      <h1 className="text-4xl font-semibold text-dark-blue mb-8">
        Surge AI Powers <br />
        the Best in the Industry
      </h1>

      <div className="relative w-full max-w-6xl overflow-hidden mx-auto">
        {/* Slider main container */}
        <div className="relative h-[270px] lg:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${getSlidePosition(
                index
              )}`}
              style={{ width: "90%" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div
          className="flex justify-center items-center w-full px-5 mt-6 relative"
          onMouseEnter={() => setIsHoveredThumbnails(true)}
          onMouseLeave={() => setIsHoveredThumbnails(false)}
        >
          {getVisibleThumbnails().map((index) => (
            <button
              key={slides[index].id}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-md transition-transform transform ${
                currentSlide === index
                  ? "border-[1px] border-[#890EFF] shadow-[0_0_0_3px_#F2E5FF]"
                  : ""
              }`}
              style={{ flex: "1", maxWidth: "150px" }}
            >
              <img
                src={slides[index].logo}
                alt={`${slides[index].title} logo`}
                className="w-full h-full object-cover p-1 rounded-lg"
              />
            </button>
          ))}

          {/* Left navigation (large screens) */}
          <div
            className={`absolute left-0 transform -translate-y-1/2 top-1/2 hidden lg:block ${
              isHoveredThumbnails || isHoveredPrev ? "block" : "hidden"
            }`}
          >
            <button
              onClick={handlePrev}
              onMouseEnter={() => setIsHoveredPrev(true)}
              onMouseLeave={() => setIsHoveredPrev(false)}
              className="bg-white py-5 px-5 lg:px-3 lg:py-3 rounded-full border border-gray-200 focus:outline-none hover:bg-[#890EFF] hover:text-white"
            >
              {isHoveredPrev ? (
                <img src="/assets/icons/arrowLeftWhite.svg" alt="Left" />
              ) : (
                <img src="/assets/icons/arrowLeft.svg" alt="Left" />
              )}
            </button>
          </div>

          {/* Right navigation (large screens) */}
          <div
            className={`absolute right-0 transform -translate-y-1/2 top-1/2 hidden lg:block ${
              isHoveredThumbnails || isHoveredNext ? "block" : "hidden"
            }`}
          >
            <button
              onClick={handleNext}
              onMouseEnter={() => setIsHoveredNext(true)}
              onMouseLeave={() => setIsHoveredNext(false)}
              className="bg-white py-5 px-5 lg:px-3 lg:py-3 rounded-full border border-gray-200 focus:outline-none hover:bg-[#890EFF] hover:text-white"
            >
              {isHoveredNext ? (
                <img src="/assets/icons/arrowRightWhite.svg" alt="Right" />
              ) : (
                <img src="/assets/icons/arrowRight.svg" alt="Right" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation for smaller screens */}
        <div className="flex lg:hidden justify-center gap-3 items-center mt-4">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsHoveredPrev(true)}
            onMouseLeave={() => setIsHoveredPrev(false)}
            className="bg-white py-5 px-5 rounded-full border border-gray-200 focus:outline-none hover:bg-[#890EFF] hover:text-white"
          >
            <img
              src={isHoveredPrev ? "/assets/icons/arrowLeftWhite.svg" : "/assets/icons/arrowLeft.svg"}
              alt="Left"
            />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={() => setIsHoveredNext(true)}
            onMouseLeave={() => setIsHoveredNext(false)}
            className="bg-white py-5 px-5 rounded-full border border-gray-200 focus:outline-none hover:bg-[#890EFF] hover:text-white"
          >
            <img
              src={isHoveredNext ? "/assets/icons/arrowRightWhite.svg" : "/assets/icons/arrowRight.svg"}
              alt="Right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestInTheIndustry;
