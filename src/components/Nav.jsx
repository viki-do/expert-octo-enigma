import { useEffect, useState } from 'react';
import { leftLinks } from '../constants/index'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hamburger from '/assets/icons/hamburger.svg';
import TopBanner from './TopBanner';

const Nav = () => {
  const [showNav, setShowNav] = useState(true); // Nav visibility state
  const [lastScrollY, setLastScrollY] = useState(window.scrollY); // Store last scroll position
  const [hideTimeout, setHideTimeout] = useState(null); // Timeout for hiding nav
  const [isHovering, setIsHovering] = useState(false); // Whether the mouse is hovering over the nav
  const [isTop, setIsTop] = useState(true); // Track if we are at the top of the page
  const [hasScrolledDown, setHasScrolledDown] = useState(false); // Track if we have scrolled down

  const scrollThreshold = 300; // Threshold for hero section or general scroll threshold

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If we're at the top of the page
      if (currentScrollY <= scrollThreshold) {
        setIsTop(true);
        setShowNav(true);
        setHasScrolledDown(false); // Reset the scrolled down state
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          setHideTimeout(null);
        }
      } else {
        setIsTop(false); // We're no longer at the top
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setHasScrolledDown(true); // Set that we have scrolled down
          setShowNav(false); // Hide navbar
        } else {
          // Scrolling up
          if (hasScrolledDown) {
            setShowNav(true); // Show navbar only after we have scrolled down at least once
          }
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
  }, [lastScrollY, hideTimeout, isHovering, isTop, hasScrolledDown]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (hideTimeout) {
      clearTimeout(hideTimeout); // Don't hide nav when mouse enters
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isTop && !hasScrolledDown) { // Only set the timeout if we're not at the top and haven't scrolled
      const timeoutId = setTimeout(() => setShowNav(false), 3000);
      setHideTimeout(timeoutId);
    }
  };

  return (
    <div>
      <TopBanner />
      <nav 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        } flex justify-between items-center p-4 md:px-36 md:py-10 text-white ${
          isTop ? 'bg-black' : 'bg-[#0a0a0a]'
        } lg:px-32 lg:py-4 ${
          isTop ? 'dotted-underline' : ''
        } border-dark-gray`} 
      > 
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
   </div> 
  );
};

export default Nav;
