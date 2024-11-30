import React from 'react';
import { logoSlider1, logoSlider2, logoSlider3, logoSlider4 } from '../utils';

// Reusable LogoSlider Component
const LogoSlider = ({ logos, animationClass }) => {
  return (
    <div className="flex overflow-hidden relative lg:pb-2 pb-3">
      <div className={`flex ${animationClass} w-[200%]`}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-1">
            <div className="border-[1px] border-[#DDDEE2] flex items-center rounded-full">
              <div className="lg:px-2 lg:py-1 py-2 px-2">
                <img src={logo.image} alt={`Logo ${index}`} className="lg:h-14 h-10 overflow-hidden" />
              </div>
              <p className="lg:text-xl text-lg font-medium lg:font-semibold whitespace-nowrap pr-6">{logo.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrustedByLeadingCompanies = () => {
  const sliders = [
    { logos: logoSlider1, animationClass: 'animate-scrollSeamless' },
    { logos: logoSlider2, animationClass: 'animate-scrollSeamlessReverse' },
    { logos: logoSlider3, animationClass: 'animate-scrollSeamless' },
    { logos: logoSlider4, animationClass: 'animate-scrollSeamlessReverse' },
  ];

  return (
    <div className="flex bg-[#F6F6F6] flex-col pb-20 lg:pb-28">
      <div className="px-10 pt-24 pb-10 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Header */}
        <p className="text-4xl font-semibold text-center leading-snug lg:text-start lg:pl-52">
          Trusted by
          <span className="lg:block"> leading companies</span>
        </p>
        <p className="text-xl font-medium text-center leading-snug lg:text-sm lg:font-semibold lg:pl-52 pt-10 lg:pt-24">
          Meet our customers
        </p>
      </div>
      {sliders.map((slider, index) => (
        <LogoSlider key={index} logos={slider.logos} animationClass={slider.animationClass} />
      ))}
    </div>
  );
};

export default TrustedByLeadingCompanies;