import React, { useState } from 'react';
import { imageUrls } from '../utils';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-1 p-4 px-2 lg:px-24 pb-20">
      {imageUrls.map((imageUrl, index) => (
        <Card key={index} imageUrl={imageUrl} index={index} />
      ))}
    </div>
  );
};

const Card = ({ imageUrl, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
      className="group m-3 cursor-pointer"
    >
      <motion.div
        style={{
          transform: `rotateY(${(mousePosition.x - 0.5) * 15}deg) rotateX(${(mousePosition.y - 0.5) * -15}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="w-full h-full rounded-3xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-custom-purple"
      >
        <img
          src={imageUrl}
          alt={`image-${index + 1}`}
          className="w-full h-auto object-cover scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default Cards;
