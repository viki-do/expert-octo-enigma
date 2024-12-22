import React from 'react';

const Footer = () => {
  return (
    <div className="h-[2000px] bg-custom-gradient flex flex-col lg:px-28">
      <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center lg:pt-7 pt-20">
        <div className="flex lg:flex-row lg:items-center flex-col ">
          {/* Logo Section */}
          <div className="flex flex-row items-center justify-center pb-2">
            <img src="/assets/icons/thunder.svg" alt="logo" className="h-14 w-14" />
            <a href="#" className="font-bold text-3xl lg:text-lg text-[#FEFEFE]" aria-label="Home">
              Surge<sup className="align-super text-xxs">AI</sup>
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-0.5 h-5 bg-[#1A171D] my-4 mx-3 hidden md:block"></div>
          
          {/* Horizontal Placement for Text */}
          <p className="text-[#B5B4B6] text-xl lg:text-sm pb-10 lg:pb-0">Powering the world's LLMs</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-row lg:gap-3 gap-3">
          <div className="rounded-full lg:w-10 lg:h-10 h-14 w-14 flex items-center justify-center border-[1px] border-[#231C29]">
            <img src="/assets/icons/linkedIn.png" alt="linkedin-logo" className="lg:h-3 lg:w-3 h-5 w-5" />
          </div>
          <div className="rounded-full lg:w-10 lg:h-10 h-14 w-14 flex items-center justify-center border-[1px] border-[#231C29]">
            <img src="/assets/icons/github.svg" alt="github-logo" className="lg:h-3 lg:w-3 h-5 w-5" />
          </div>
          <div className="rounded-full lg:w-10 lg:h-10 h-14 w-14 flex items-center justify-center border-[1px] border-[#231C29]">
            <img src="/assets/icons/xSlider.png" alt="x-logo" className="lg:h-4 lg:w-3 h-6 w-4" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex h-[1px] bg-[#1A171D] my-12 lg:my-4"></div>
    </div>
  );
};

export default Footer;
