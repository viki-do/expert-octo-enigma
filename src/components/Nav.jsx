import { useEffect, useState, useRef, useCallback } from 'react';
import { leftLinks, rightLinks } from '../utils/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hamburger from '/assets/icons/hamburger.svg';
import TopBanner from './TopBanner';
import Hero from './Hero';
import { topDropdownLinks, useCases } from '../utils/index'; // Importáljuk a topDropdownLinks adatokat

const Nav = ({ setShowAnimatedText }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [isTop, setIsTop] = useState(true);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isUseCasesHovered, setIsUseCasesHovered] = useState(false);
  const [isBlueDivHovered, setIsBlueDivHovered] = useState(false);

  const useCasesRef = useRef(null);
  const scrollThreshold = 300;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const animatedTextElement = document.getElementById("animatedText");

   
    if (currentScrollY <= scrollThreshold) {
      setIsTop(true);
      setShowNav(true);
      setHasScrolledDown(false);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        setHideTimeout(null);
      }
    } else {
      setIsTop(false);
      if (currentScrollY > lastScrollY) {
        setHasScrolledDown(true);
        setShowNav(false);
      } else if (hasScrolledDown) {
        setShowNav(true);
      }
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, hasScrolledDown, setShowAnimatedText, hideTimeout]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [handleScroll, hideTimeout]);

  const handleMouseEnterNav = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
  };

  const handleMouseLeaveNav = () => {
    if (!isTop && !hasScrolledDown) {
      const timeoutId = setTimeout(() => setShowNav(false), 3000);
      setHideTimeout(timeoutId);
    }
  };

  const handleUseCasesMouseEnter = () => {
    setIsUseCasesHovered(true);
    setIsBlueDivHovered(true);
  };

  const handleUseCasesMouseLeave = () => {
    setIsUseCasesHovered(false);
    setIsBlueDivHovered(false);
  };

  const handleBlueDivMouseEnter = () => {
    setIsBlueDivHovered(true);
  };

  const handleBlueDivMouseLeave = () => {
    setIsBlueDivHovered(false);
  };

  const shouldShowBlueDiv = isUseCasesHovered || isBlueDivHovered;

  return (
    <div>
      <TopBanner />
      <nav
        onMouseEnter={handleMouseEnterNav}
        onMouseLeave={handleMouseLeaveNav}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'} flex justify-between items-center p-4 md:px-36 md:py-10 text-white ${isTop ? 'bg-black' : 'bg-[#0a0a0a]'} lg:px-32 lg:py-10 ${isTop ? 'dotted-underline' : ''} border-dark-gray`}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-4">
          <a href="#" className="font-bold text-3xl lg:text-lg text-white" aria-label="Home">
            Surge<sup>AI</sup>
          </a>

          <div className="hidden md:flex left-links gap-4 text-sm">
            {leftLinks.map((link) => (
              <div
                key={link.href}
                className="nav-item py-8"
                onMouseEnter={link.label === "Use Cases" ? handleUseCasesMouseEnter : null}
                onMouseLeave={link.label === "Use Cases" ? handleUseCasesMouseLeave : null}
                ref={link.label === "Use Cases" ? useCasesRef : null}
              >
                <a href={link.href} className="nav-link" aria-label={link.label}>
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="right-links flex items-center gap-6">
          <div className="hidden md:block">
            {rightLinks
              .filter(link => link.label !== "Get Started")
              .map((link) => (
                <a key={link.href} href={link.href} className="text-dark-gray text-sm nav-link" aria-label={link.label}>
                  {link.label}
                </a>
              ))}
            <a
              href="getStarted"
              className="relative inline-flex items-center px-4 py-2 ml-4 rounded-full bg-transparent border border-dark-gray transition-all duration-500 hover:bg-purple2 hover:border-transparent hover:text-white text-sm"
              aria-label="Get Started"
            >
              Get Started
              <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-purple2 transition-all duration-500 hover:bg-white hover:text-purple2">
                <span className="flex items-center justify-center h-full w-full">
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
                </span>
              </span>
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <img src={hamburger} alt="hamburger menu" height={25} width={25} className="cursor-pointer" aria-label="Toggle navigation menu" />
          </div>
        </div>
      </nav>

      {shouldShowBlueDiv && useCasesRef.current && (
        <div
          className="fixed bg-purple3 text-white rounded-bottom"
          style={{
            top: useCasesRef.current.getBoundingClientRect().bottom + window.scrollY -2,
            left: useCasesRef.current.getBoundingClientRect().left + window.scrollX,
            zIndex: 100,
            height: 'auto', 
          }}
          onMouseEnter={handleBlueDivMouseEnter}
          onMouseLeave={handleBlueDivMouseLeave}
          role="tooltip"
        >
          <div className='h-full w-full flex flex-col '>
            <div className="flex flex-row h-44 p-5 gap-4">
              {topDropdownLinks.map((item) => (
                <div
                key={item.id}
                className="bg-dropdown-purple w-48 flex flex-col justify-center items-center h-full text-center rounded-lg hover:bg-[#382349] hover:cursor-pointer"
              >
                <div className='flex flex-col justify-center items-center'>
                  <div className="w-7 h-7 flex justify-center items-center">
                    <img src={item.icon} alt={`${item.title} icon`} />
                  </div>
                  <p className='pt-3 pb-1'>{item.title}</p>
                  <p className="text-purple-text text-xs">{item.description}</p>
                </div>
              </div>
              
              ))}
            </div>
            <div className="flex-1 w-full rounded-bottom px-5 ">
              <hr className="border-dropdown-purple rounded-bottom" />
              <div className="flex pb-4">
                <div className="w-8/12 flex flex-col">
                  <div className="flex justify-between text-xs pt-4 pb-4">
                    <p className='text-right-side-color'>Latest case study</p>
                    <p className="text-purple2">Read more</p>
                  </div>
                  <div className="h-full w-98 pb-4 relative overflow-hidden rounded-md">
                  <img
                    src="/assets/images/anthropic-cover.webp"
                    alt="antrhropic cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                </div>
                <div className="w-px bg-dropdown-purple mx-4" style={{ height: 'auto', minHeight: 'calc(100% - 2rem)', flexShrink: 0 }}></div>
                <div className="w-4/12 flex flex-col items-start text-right-side-color text-xs">
                  <div className="squared-underline">
                    <p className="pt-4 pb-2">Other Use cases</p>
                  </div>
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center squared-underline pt-1">
                      <img src={useCase.imgSrc} alt={useCase.alt} className="w-10 h-auto pl-1" />
                      <p className='hover:text-white hover:cursor-pointer'>{useCase.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Hero />
    </div>
  );
};

export default Nav;