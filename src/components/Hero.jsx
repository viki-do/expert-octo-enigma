import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeroComponent = () => {
  const heroRef = useRef(null);     // Hero elem
  const textRef = useRef(null);     // Szöveg animáció elem

  useEffect(() => {
    // Háttér szín átmenet a görgetéskor
    gsap.to(heroRef.current, {
      backgroundColor: "#000",            // Fekete háttérszín
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",                 // Amikor a hero elem teteje eléri a viewport tetejét
        end: "bottom 50%",                // Amikor a hero elem alja a viewport közepére ér
        scrub: true,                      // Folyamatos átmenet a görgetés szerint
      },
    });

    // Szöveg megjelenítése további görgetésre
    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",                   // Amikor a szöveg elem belép az alsó 80%-os zónába
      toggleActions: "play none none none",
      onEnter: () => gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ),
    });
  }, []);

  return (
    <div
      ref={heroRef}
      style={{
        height: "150vh",                  // A hero elem nagyobb magasságot kap, hogy legyen elég hely a görgetéshez
        backgroundColor: "#fff",          // Kezdő háttér fehér
        position: "relative",
      }}
    >
      <div className="bg-black flex flex-col items-center justify-center pt-16">
      <div className="relative w-full h-72 overflow-hidden"> 
        <video
          src="/assets/videos/flow.mp4"
          alt="flow-video"
          autoPlay
          loop
          muted
          className="absolute top-1/2 left-1/2 w-auto h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 scale-125 lg:scale-100" // 125% méret
        />
      </div>
      <div className="text-center"><p>Surge AI Powers the
      World's Leading LLMs</p></div>
    </div>
      
      {/* Szöveg, amely később jelenik meg */}
      <div
        ref={textRef}
        style={{
          position: "absolute",
          bottom: "20%",
          width: "100%",
          textAlign: "center",
          color: "#fff",
          opacity: 0,                    // Kezdetben láthatatlan
        }}
      >
        <h2>Ez a szöveg görgetésre jelenik meg!</h2>
      </div>
    </div>
  );
};

export default HeroComponent;

