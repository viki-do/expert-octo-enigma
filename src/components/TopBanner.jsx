import React, { useState, useEffect, useRef } from 'react';


export const TopBanner = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);  
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const containerRef = useRef(null);
  const animationPlayState = useRef('running'); 


  const bannerText = 'Learn how Surge AI powers the world\'s leading LLMs';


  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;
        
        if (contentWidth > containerWidth) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const renderBannerContent = () => {
    const content = [];
    for (let i = 0; i < 6; i++) {
      content.push(
        <div
          key={i}
          className="flex items-center pr-8 lg:pr-12"
          onMouseEnter={() => setHoveredIndex(i)} 
          onMouseLeave={() => setHoveredIndex(null)} 
        >
          <p
            className={`text-md font-semibold pr-4 lg:pr-6 lg:text-sm transition-all duration-300 cursor-pointer ${
              hoveredIndex === i ? 'text-white' : 'text-baby-pink'
            }`}
          >
            {bannerText}
          </p>
          <img src="/assets/icons/thunder.svg" alt="thunder" />
        </div>
      );
    }
    return content;
  };

  useEffect(() => {
    if (isHovered) {
      setIsScrolling(false); 
      animationPlayState.current = 'paused'; 
    } else {
      setIsScrolling(true); 
      animationPlayState.current = 'running'; 
    }
  }, [isHovered]); 

  return (
    <div
      className="banner-wrapper bg-purple h-14 pt-4 lg:h-10 lg:pt-[10px] overflow-hidden" 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div
        className={`flex ${isScrolling && !isHovered ? 'animate-scroll' : ''} transition-all duration-500 ease-in-out`}
        style={{
          animationPlayState: animationPlayState.current,  
          whiteSpace: 'nowrap', 
        }}
      >
        <div className="flex items-center whitespace-nowrap content-strip">
          {renderBannerContent()}
        </div>
        <div className="flex items-center whitespace-nowrap content-strip">
          {renderBannerContent()}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
