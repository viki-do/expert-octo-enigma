import React from 'react';

const PoweringFrontierModels = () => {
  return (
    <div className="relative w-full h-screen bg-frontier-models">
      {/* Fullscreen Background Image */}
      <img
        src="/assets/images/frontier-model-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <p className="text-frontier-models-color text-4xl font-medium text-center translate-y-44 pb-10">
          Powering Frontier <br /> Models
        </p>
      </div>

      { /*Cards*/ }
      <div>
        
      </div>
    </div>
  );
};

export default PoweringFrontierModels;
