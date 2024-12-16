import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CompanySlider from "./CompanySlider";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textContainerRef = useRef(null);  // Reference to the Hero text
  const sliderRef = useRef(null);         // Reference to the CompanySlider
  const animatedTextRef = useRef(null);   // Reference to the AnimatedText

  useEffect(() => {
    // Animation for Hero text and CompanySlider fade-in and fade-out
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

    gsap.fromTo(
      [textContainerRef.current, sliderRef.current],
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse",
          onLeave: () => gsap.to(animatedTextRef.current, { opacity: 1, y: 0, duration: 1 }),
          onEnterBack: () => gsap.to(animatedTextRef.current, { opacity: 0, y: 20, duration: 1 }),
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-black relative overflow-hidden pb-0">
      <div className="bg-black flex items-center justify-center pt-20" id="heroSection">
        <div className="relative w-full h-[calc(40vh-80px)] overflow-hidden z-0">
          <video
            src="/assets/videos/flow.mp4"
            alt="Flow video showcasing SurgeAI features"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div
        ref={textContainerRef}
        className="relative text-white flex flex-col items-center sm:items-center lg:items-start pt-[50px] pb-[20px] lg:pl-20 overflow-hidden"
      >
        <p className="px-14 text-3xl pb-5 lg:text-5xl text-center sm:text-left lg:pb-0">
          Surge AI Powers the
        </p>
        <p className="px-10 text-6xl lg:text-8xl text-center sm:text-left">
          World's Leading LLMs
        </p>
        <p className="px-10 text-dark-gray text-md lg:text-xs lg:font-semibold mt-10 text-center sm:text-left lg:mt-7">
          Trusted by the world's top Enterprises, LLM Labs, Startups & Researchers
        </p>
      </div>

      {/* Company Slider */}
      <div ref={sliderRef}>
        <CompanySlider />
      </div>
    </div>
  );
};

export default Hero;
