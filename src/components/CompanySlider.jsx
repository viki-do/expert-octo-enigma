import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { logos } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const CompanySlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Fade-out animation for the CompanySlider on scroll
    gsap.to(sliderRef.current, {
      opacity: 0, // Fade to invisible
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top center", // Adjust this position based on when you'd like the fade to start
        end: "bottom top", // Adjust to control when it's fully faded out
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={sliderRef} className="relative overflow-hidden w-full h-[60px] bg-black shadow-lg">
      <div className="flex animate-scroll sm:animate-[scroll_25s_linear_infinite] lg:animate-[scroll_25s_linear_infinite]">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mr-8">
            <img
              src={logo.logo}
              alt={`Logo ${index}`}
              className="h-[40px] object-contain" 
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="flex-shrink-0 mr-8">
            <img
              src={logo.logo}
              alt={`Logo ${index}`}
              className="h-[40px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;
