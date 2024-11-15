import React, { useState } from 'react';
import { imageUrls } from '../utils';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 px-36">
      {imageUrls.map((imageUrl, index) => (
        <Card key={index} imageUrl={imageUrl} index={index} />
      ))}
    </div>
  );
};

const Card = ({ imageUrl, index }) => {
  // State to store mouse X and Y positions (default to 0.5, 0.5 which is the center of the card)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Event handler to update mouse position
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl transition-all cursor-pointer"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }} // Perspective distance for the 3D effect
    >
      <motion.div
        // Default state: no tilt when the mouse is not moving
        style={{
          transform: `rotateY(${(mousePosition.x - 0.5) * 15}deg) rotateX(${(mousePosition.y - 0.5) * -15}deg)`,
          transition: 'transform 0.1s ease-out', // Smooth transition for animation
        }} 
        className="w-full h-auto"
      >
        <img
          src={imageUrl}
          alt={`image-${index + 1}`}
          className="w-full h-auto object-cover transition-all rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Cards;
