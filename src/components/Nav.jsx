import { useEffect, useState, useRef } from 'react';
import { leftLinks, rightLinks } from '../utils/index'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hamburger from '/assets/icons/hamburger.svg';
import TopBanner from './TopBanner';
import Hero from './Hero';

const Nav = ({ setShowAnimatedText }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [isTop, setIsTop] = useState(true);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [showHero, setShowHero] = useState(true);

  // Track if the Use Cases link or blue div is hovered
  const [isUseCasesHovered, setIsUseCasesHovered] = useState(false);
  const [isBlueDivHovered, setIsBlueDivHovered] = useState(false);

  // Reference for "Use Cases" div to position blue div
  const useCasesRef = useRef(null);

  const scrollThreshold = 300;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const animatedTextElement = document.getElementById("animatedText");

      if (animatedTextElement) {
        const heroSection = document.getElementById("heroSection");
        const heroBottom = heroSection.getBoundingClientRect().bottom + window.scrollY;

        setShowAnimatedText(currentScrollY > heroBottom);

        const rect = animatedTextElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setShowHero(rect.bottom <= 0 || rect.top >= windowHeight);
      }

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
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [lastScrollY, hideTimeout, isTop, hasScrolledDown, setShowAnimatedText]);

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
    setIsBlueDivHovered(true); // Ensure blue div is hovered when Use Cases is hovered
  };

  const handleUseCasesMouseLeave = () => {
    setIsUseCasesHovered(false);
    setIsBlueDivHovered(false); // Ensure blue div stops being hovered when Use Cases is not hovered
  };

  const handleBlueDivMouseEnter = () => {
    setIsBlueDivHovered(true);
  };

  const handleBlueDivMouseLeave = () => {
    setIsBlueDivHovered(false);
  };

  // Determine if the blue div should be visible
  const shouldShowBlueDiv = isUseCasesHovered || isBlueDivHovered;

  return (
    <div>
      <TopBanner />
      <nav 
        onMouseEnter={handleMouseEnterNav}
        onMouseLeave={handleMouseLeaveNav}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        } flex justify-between items-center p-4 md:px-36 md:py-10 text-white ${
          isTop ? 'bg-black' : 'bg-[#0a0a0a]'
        } lg:px-32 lg:py-10 ${
          isTop ? 'dotted-underline' : ''
        } border-dark-gray`} 
      > 
        <div className="flex items-center gap-4">
          <a href="#" className="font-bold text-3xl lg:text-lg text-white">
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
                <a 
                  href={link.href} 
                  className="nav-link"
                >
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
                <a
                  key={link.href}
                  href={link.href}
                  className="text-dark-gray text-sm nav-link"
                >
                  {link.label}
                </a>
              ))}
            <a 
              href="getStarted" 
              className="relative inline-flex items-center px-4 py-2 ml-4 rounded-full text-white bg-transparent border border-dark-gray transition-all duration-500 hover:bg-purple2 hover:border-transparent hover:text-white text-sm"
              key="getStarted"
            >
              Get Started
              <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-purple2 text-white transition-all duration-500 hover:bg-white hover:text-purple2">
                <span className="flex items-center justify-center h-full w-full">
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
                </span>
              </span>
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <img src={hamburger} alt="hamburger" height={25} width={25} className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Display blue div based on the calculated visibility condition */}
      {shouldShowBlueDiv && useCasesRef.current && (
        <div 
          className="fixed bg-purple3 text-white p-64 rounded-bottom"
          style={{
            top: useCasesRef.current.getBoundingClientRect().bottom + window.scroll + 4,
            left: useCasesRef.current.getBoundingClientRect().left + window.scrollX,
            zIndex: 100, // Ensure it is not hidden behind other elements
          }}
          onMouseEnter={handleBlueDivMouseEnter}
          onMouseLeave={handleBlueDivMouseLeave}
        >
          Hello
        </div>
      )}

      <div className="bg-black flex items-center justify-center pt-20" id="heroSection">
        <div className="relative w-full h-72 overflow-hidden z-0">
          <video
            src="/assets/videos/flow.mp4"
            alt="flow-video"
            autoPlay
            loop
            muted
            className="absolute top-1/2 left-1/2 w-auto h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 scale-125 lg:scale-100"
          />
        </div>
      </div>
      
      {showHero && <Hero />}
    </div>
  );
};

export default Nav;

