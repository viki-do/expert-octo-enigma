import { useState } from 'react';
import TopBanner from './TopBanner';
import { div } from 'framer-motion/client';

const NewsAndUpdate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { img: '/assets/images/surgeXopenAiCard.png', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/surgeXanthropic.jpeg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/randomMeme.png', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/carrot.jpg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/dalle3.jpeg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/rlhf.jpeg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/illustratedGuide.jpg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/introductionToReinforcement.jpg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/blogRecap.jpg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
    { img: '/assets/images/openAivsGoogle.jpg', text: "How Surge AI's Built OpenAI's GSM8K Dataset of 8,500 Math Problems" },
  ];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className="bg-[#ECECEC]  pt-20 flex flex-col pl-5 lg:pl-32 lg:pb-28 ">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-14">
          {/* Cím rész */}
          <div>
            <p className="text-[#8E94A0] text-xl pb-3 lg:text-md">Surge AI blog</p>
            <p className="text-4xl font-semibold text-[#2F2F2F] lg:text-5xl">News and Updates</p>
          </div>

          {/* Gombok nagy kijelzőre igazítva */}
          <div className="hidden lg:flex space-x-1 self-center pt-12 pr-64">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`h-14 w-14 rounded-full transition-all border-[1px] border-[#D4D4D4] hover:bg-[#8200FF] hover:text-white ${
                currentIndex === 0 && "opacity-50 pointer-events-none"
              }`}
            >
              &#8249;
            </button>

            <button
              className="h-14 w-14 rounded-full border-[1px] border-[#D4D4D4] text-[#8200FF] hover:bg-[#8200FF] hover:text-white transition-all"
            >
              &#x25A0;&#x25A0;
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              className={`h-14 w-14 rounded-full transition-all border-[1px] border-[#D4D4D4] hover:bg-[#8200FF] hover:text-white ${
                currentIndex === cards.length - 1 && "opacity-50 pointer-events-none"
              }`}
            >
              &#8250;
            </button>
          </div>
        </div>
      
        {/* Kártyák */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 lg:w-[340px] gap-6 lg:gap-5"
            style={{
              transform: `translateX(-${currentIndex * 90}%)`,
              paddingLeft: "2px",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg hover:cursor-pointer"
                style={{
                  flexBasis: "85%",
                  minWidth: "85%",
                }}
              >
                {/* Kép konténer */}
                <div className=" overflow-hidden rounded-xl h-36 w-[256px] lg:w-40 lg:h-[92px] lg:overflow-hidden">
                  <img
                    src={card.img}
                    alt=""
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <p className="text-xl font-semibold pt-36 pr-2 lg:pt-20 lg:text-base hover:text-[#8200FF]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gombok kis kijelzőre középre igazítva */}
        <div className="flex lg:hidden justify-center space-x-4 mt-5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`h-14 w-14 rounded-full transition-all border-[1px] border-[#D4D4D4] bg-gray-200 hover:bg-[#8200FF] hover:text-white ${
              currentIndex === 0 && "opacity-50 pointer-events-none"
            }`}
          >
            &#8249;
          </button>

          <button className="h-14 w-14 rounded-full border-[1px] border-[#D4D4D4] text-[#8200FF] hover:bg-[#8200FF] hover:text-white transition-all">
            &#x25A0;&#x25A0;
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className={`h-14 w-14 rounded-full transition-all bg-gray-200 border-[1px] border-[#D4D4D4] hover:bg-[#8200FF] hover:text-white ${
              currentIndex === cards.length - 1 && "opacity-50 pointer-events-none"
            }`}
          >
            &#8250;
          </button>
        </div>
      </div>
      <TopBanner />
    </div>
  );
};

export default NewsAndUpdate;
