import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CompanySlider from "./CompanySlider";
import DataPower from "./DataPower";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textContainerRef = useRef(null); // Text container element
  const sliderRef = useRef(null);        // CompanySlider container

  useEffect(() => {
    // Animate each <p> tag in the Hero text to fade in and rise on initial load
    gsap.fromTo(
      textContainerRef.current.children,
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Shared fade-out/fade-in effect for both Hero text and CompanySlider
    gsap.fromTo(
      [textContainerRef.current, sliderRef.current], // Target both elements together
      { opacity: 1 }, // Start fully visible
      {
        opacity: 0, // End fully invisible
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse", // Reverse effect on scroll back up
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-black relative overflow-hidden pb-0">
      <div className="bg-black flex items-center justify-center pt-32">
        <div className="relative w-full h-72 overflow-hidden z-0">
          <video
            src="/assets/videos/flow.mp4"
            alt="flow-video"
            autoPlay
            loop
            muted
            className="absolute top-1/2 left-1/2 w-auto h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 scale-125 lg:scale-100"
          />
        </div>
      </div>
      <div
        ref={textContainerRef}
        className="relative text-white flex flex-col items-center sm:items-center lg:items-start pt-[50px] pb-[20px] lg:pl-20 overflow-hidden"
      >
        <p className="px-14 text-3xl pb-5 lg:text-5xl text-center sm:text-left">
          Surge AI Powers the
        </p>
        <p className="px-10 text-6xl pb-0 lg:text-8xl text-center sm:text-left">
          World's Leading LLMs
        </p>
        <p className="px-10 text-dark-gray text-md lg:text-xs lg:font-semibold mt-10 text-center sm:text-left">
          Trusted by the world's top Enterprises, LLM Labs, Startups & Researchers
        </p>
      </div>

      {/* Company Slider */}
      <div ref={sliderRef}>
        <CompanySlider />
      </div>

      {/* DataPower Component */}
      <DataPower />
    </div>
  );
};

export default Hero;
