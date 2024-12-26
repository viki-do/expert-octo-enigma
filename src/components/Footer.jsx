import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    setIsFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="bg-custom-gradient flex flex-col lg:h-[900px] lg:px-28">
      <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center lg:pt-7 pt-20">
        <div className="flex lg:flex-row lg:items-center flex-col">
          <div className="flex flex-row items-center justify-center pb-2">
            <img src="/assets/icons/thunder.svg" alt="logo" className="h-14 w-14" />
            <a href="#" className="font-bold text-3xl lg:text-lg text-[#FEFEFE]" aria-label="Home">
              Surge<sup className="align-super text-xxs">AI</sup>
            </a>
          </div>
          <div className="w-0.5 h-5 bg-[#1A171D] my-4 mx-3 hidden md:block"></div>
          <p className="text-[#B5B4B6] text-xl lg:text-sm pb-10 lg:pb-0">
            Powering the world's LLMs
          </p>
        </div>
        <div className="flex flex-row lg:gap-3 gap-3">
          <div className="rounded-full lg:w-10 lg:h-10 h-14 w-14 flex items-center justify-center border-[1px] border-[#231C29] cursor-pointer hover:bg-[#8200FF]">
            <img src="/assets/icons/linkedIn.png" alt="linkedin-logo" className="lg:h-3 lg:w-3 h-5 w-5" />
          </div>
          <div className="rounded-full lg:w-10 lg:h-10 h-14 w-14 flex items-center justify-center border-[1px] border-[#231C29] cursor-pointer hover:bg-[#8200FF]">
            <img src="/assets/icons/github.svg" alt="github-logo" className="lg:h-3 lg:w-3 h-5 w-5" />
          </div>
          <div className="rounded-full lg:w-10 lg:h-10 h-14 w-14 flex items-center justify-center border-[1px] border-[#231C29] cursor-pointer hover:bg-[#8200FF]">
            <img src="/assets/icons/xSlider.png" alt="x-logo" className="lg:h-4 lg:w-3 h-6 w-4" />
          </div>
        </div>
      </div>

      <div className="flex h-[1px] bg-[#1A171D] my-12 lg:my-4"></div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-5/12 lg:pt-20">
          <h2 className="px-10 text-center text-3xl lg:text-4xl font-medium text-white pb-10 lg:text-left lg:px-0">
            Welcome to <br /> the world's largest RLHF platform
          </h2>
          <div className="flex justify-center lg:justify-start flex-col items-center lg:items-start">
            <a
              href="getStarted"
              className="inline-flex items-center px-4 py-2 rounded-full bg-transparent transition-all duration-500 hover:bg-[#8200FF] hover:border-transparent text-white text-2xl border lg:text-md border-[#2D1E3B] mb-14"
              aria-label="Get Started"
            >
              Get Started
              <span className="ml-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#8200FF] transition-all duration-500 hover:text-[#8200FF] lg:w-9 lg:h-9">
                <span className="flex items-center justify-center h-full w-full">
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff' }} />
                </span>
              </span>
            </a>
            <p className="text-white text-3xl pb-5 lg:text-md">Subscribe</p>
            <p className="text-[#8B8294] text-lg lg:text-sm">The latest in AI, language, and RLHF</p>
          </div>
          <div className="flex justify-between px-5 mt-7 h-24 lg:px-0 lg:mt-3 lg:h-[76px]">
            <div className="flex flex-col">
              <p
                className={`pb-3 lg:pb-4 ${
                  isFocused ? 'text-white text-lg pt-0' : 'text-[#8B8294] text-lg pt-10'
                } hover:text-white lg:text-sm`}
                onClick={handleFocusInput}
              >
                Enter your email
              </p>
              <input
                ref={inputRef}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-transparent border-none outline-none caret-white placeholder-[#8B8294] ${
                  email || isFocused
                    ? 'text-lg lg:text-base placeholder:text-lg placeholder:lg:text-base'
                    : 'text-base placeholder:text-base'
                } text-white`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                  if (!email) {
                    setIsFocused(false);
                  }
                }}
              />
            </div>
            <div className="flex flex-col pt-10">
              <p className={`${isFocused ? 'text-white' : 'text-[#8B8294]'} text-lg lg:text-sm`}>Subscribe</p>
            </div>
          </div>

          <div
            className={`flex ${
              isFocused ? 'h-[2px] bg-white' : 'h-[1px] bg-[#694BC3]'
            } transition-all duration-300 mx-5 lg:mx-0`}
          ></div>
        </div>

        <FooterLinks />
          
      </div>
    </div>
  );
};

export default Footer;
