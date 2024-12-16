import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScaleAndSecuritySlider } from '../utils';

const CompanySlider = () => {
  const sliderRef = useRef(null);
  const [repeatedLogos, setRepeatedLogos] = useState([]);

  useEffect(() => {
    const calculateRepetitions = () => {
      const containerWidth = window.innerWidth;
      const logoWidth = 100;
      const singleSetWidth = ScaleAndSecuritySlider.length * logoWidth;
      const repetitionsNeeded = Math.ceil(containerWidth / singleSetWidth) + 1; 

      const newLogos = Array(repetitionsNeeded).fill(ScaleAndSecuritySlider).flat();
      setRepeatedLogos(newLogos);
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);

    return () => {
      window.removeEventListener('resize', calculateRepetitions);
    };
  }, []);

  useEffect(() => {
    const container = sliderRef.current;
    const totalWidth = container.scrollWidth;


    gsap.to(container, {
      x: `-${totalWidth / 2}`,
      duration: 25,
      repeat: -1,
      ease: 'linear',
    });
  }, [repeatedLogos]);

  return (
    <div className="relative overflow-hidden w-full h-[60px] bg-transparent">
      <div ref={sliderRef} className="flex w-max">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mr-8">
            <img
              src={logo.logo}
              alt={`Logo ${index}`}
              className="h-[35px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;
