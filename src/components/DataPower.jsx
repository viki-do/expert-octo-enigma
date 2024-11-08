import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const DataPower = () => {
  const dataPowerRef = useRef(null);

  useEffect(() => {
    // Animation for the DataPower component to fade and rise into view
    gsap.fromTo(
      dataPowerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: dataPowerRef.current,
          start: "top 90%", // Adjust start position as needed
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={dataPowerRef} className="data-power-container text-white">
      DataPower
    </div>
  );
};

export default DataPower;