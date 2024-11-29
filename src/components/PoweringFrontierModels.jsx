import React, { useState } from "react";
import { frontierModelCards } from "../utils";

const PoweringFrontierModels = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Az állapot csak a szülő elemre vonatkozik
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Alapállapotba kerül
  };

  return (
    <div className="relative w-full bg-frontier-models pb-40 pt-140">
      <img
        src="/assets/images/frontier-model-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <p className="text-frontier-models-color text-4xl font-medium text-center translate-y-44 pb-96">
          Powering Frontier <br /> Models
        </p>
      </div>
      {frontierModelCards.map((card, index) => (
        <div
          key={card.id}
          className={`relative flex justify-center items-center w-[440px] h-[100px] lg:w-[900px] lg:h-[130px] m-auto hover:cursor-pointer mb-6
            lg:mt-[-50px] ${index === 0 ? "mt-0" : ""}
            transition-all duration-300 ${
              hoveredIndex === index ? "lg:shadow-xl translate-y-[-10px]" : "lg:shadow-md"
            }`} // Hover effect for lift
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient hover effect */}
          <div
            className={`absolute -inset-2 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 blur-md transition-opacity duration-300 ${
              hoveredIndex === index ? "lg:opacity-100 opacity-0" : "opacity-0"
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
              <div
                className="flex flex-col relative w-full z-10 pointer-events-none"
                style={{ pointerEvents: "none" }}
              >
                {/* ID display */}
                <p className="absolute top-1 right-2 lg:bottom-16 lg:right-4 text-right-side-color">
                  {String(card.id).padStart(3, "0")}
                </p>
                <div className="flex pl-4 lg:pl-10 lg:gap-12 pt-4">
                  {/* Logo */}
                  <img
                    src={card.logo}
                    alt=""
                    className={`h-8 lg:h-12 transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-60" : "opacity-100"
                    }`}
                  />
                  {/* Title */}
                  <p
                    className={`text-white pb-9 lg:pt-4 lg:text-md font-semibold transition-opacity duration-300 pr-16 pt-1 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    {card.title}
                  </p>
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
