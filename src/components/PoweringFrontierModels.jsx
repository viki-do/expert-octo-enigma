import React, { useState } from "react";
import { frontierModelCards } from "../utils";

const PoweringFrontierModels = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set hovered index only on the current card
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hover state
  };

  return (
    <div className="relative w-full bg-frontier-models pb-20">
      <img
        src="/assets/images/frontier-model-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full"
      />
      <div className="relative z-10 flex flex-col justify-center items-center pt-24 lg:pt-40">
        <p className="text-frontier-models-color lg:text-5xl lg:font-semibold text-4xl font-medium text-center lg:translate-y-36 pb-52 lg:pb-56">
          Powering Frontier <br /> Models
        </p>
      </div>
      {frontierModelCards.map((card, index) => (
        <div
          key={card.id}
          className={`relative flex justify-center items-center w-[440px] h-[95px] lg:w-[900px] lg:h-[130px] m-auto hover:cursor-pointer mb-3
            ${index === 0 ? "mt-0" : "lg:mt-[-50px]"}
            transition-all duration-300 
            ${
              hoveredIndex === index
                ? "lg:shadow-xl lg:translate-y-[-9px]" 
                : "lg:shadow-md"
            }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient hover effect */}
          <div
            className={`absolute -inset-2 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 blur-md transition-opacity duration-300 
              ${
                hoveredIndex === index
                  ? "lg:opacity-100 opacity-0"
                  : "opacity-0"
              }`}
          ></div>

          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D1442] via-[#48196F] to-[#A028FE] rounded-xl p-[1px]">
            <div
              className="w-full h-full rounded-xl flex items-center"
              style={{
                background: "radial-gradient(circle, #3C125F 5%, #280D3E 95%)",
              }}
            >
              {/* Content inside the card */}
              <div className="flex flex-col relative w-full z-10 pointer-events-none">
                {/* ID display */}
                <p className="absolute top-1 right-2 lg:bottom-16 lg:right-4 text-right-side-color">
                  {String(card.id).padStart(3, "0")}
                </p>
                <div className="flex pl-4 lg:pl-10 gap-4 lg:gap-12 pt-6">
                  {/* Logo */}
                  <img
                    src={card.logo}
                    alt=""
                    className={`h-7 lg:h-12 transition-opacity duration-300 
                      ${
                        hoveredIndex === index && window.innerWidth >= 1024
                          ? "opacity-60" 
                          : "opacity-100" 
                      }`}
                  />
                  {/* Title */}
                  <div className="pb-3 lg:pb-6">
                  <p
                    className={`text-white items-center pb-4 lg:pt-4 lg:text-md font-semibold transition-opacity duration-300 pr-16 pt-1 leading-tight
                      ${
                        hoveredIndex === index && window.innerWidth >= 1024
                          ? "opacity-100" 
                          : "opacity-60" 
                      }`}
                  >
                    {card.title}
                  </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoweringFrontierModels;
