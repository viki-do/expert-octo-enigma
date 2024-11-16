import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const AnimatedText = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("textElement");
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Define the start and full visibility positions based on scrolling direction
        const startFadePosition = windowHeight; // Fully visible at bottom
        const fullVisibilityPosition = windowHeight / 2; // Midpoint of the viewport

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          // Calculate opacity based on the element's distance to the full visibility position
          const newOpacity = Math.max(
            0,
            Math.min(1, (startFadePosition - rect.top) / (startFadePosition - fullVisibilityPosition))
          );
          setOpacity(newOpacity);
        } else {
          setOpacity(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundGradient = () => {
    const initialColor = "#000000";
    const targetColor = "#18012d";
    return `linear-gradient(180deg, ${initialColor}, ${targetColor})`;
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-start pt-48"
      style={{
        background: getBackgroundGradient(),
      }}
    >
      <motion.div
        id="textElement"
        className="pt-20 text-center text-baby-pink2 opacity-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity: opacity,
        }}
      >
        <p className="mb-2 text-xl lg:text-3xl">Surge AI's human data powers frontier models</p>
        <div className="pb-96">
          <p className="text-lg lg:text-xl">from OpenAI, Anthropic, Google, Meta, xAI,</p>
          <p className="text-lg lg:text-xl">Mistral, and more.</p>
        </div>
      </motion.div>
      <Cards/>
    </motion.div>

  );
};

export default AnimatedText;
