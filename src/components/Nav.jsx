import React from 'react';
import { leftLinks } from '../constants/index'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hamburger from '/assets/icons/hamburger.svg';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-8 md:px-36 md:py-10 text-white bg-black lg:px-32 lg:py-4 border-b dotted-underline border-dark-gray"> 
      <div className="flex items-center gap-4">
        <a href="#" className="font-bold text-3xl lg:text-lg text-white">
          Surge<sup>AI</sup>
        </a>
        <div className="hidden md:flex left-links gap-4 text-sm"> 
          {leftLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="right-links flex items-center gap-6"> 
        <div className="hidden md:block"> 
          <a href="login" className="text-dark-gray text-sm nav-link">Login</a> 
          <a 
            href="getStarted" 
            className="relative inline-flex items-center px-4 py-2 ml-4 rounded-full text-white bg-transparent border border-dark-gray transition-all duration-500 hover:bg-purple hover:border-transparent hover:text-white text-sm"
          >
            Get Started
            <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-purple text-white transition-all duration-500 hover:bg-white hover:text-purple">
              <span className="flex items-center justify-center h-full w-full">
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
              </span>
            </span>
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <img src={hamburger} alt="hamburger" height={24} width={24} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
