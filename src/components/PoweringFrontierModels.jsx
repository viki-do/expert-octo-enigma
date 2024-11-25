import React from 'react';

const PoweringFrontierModels = () => {
  return (
    <div className="relative w-full bg-frontier-models pb-40">
      <img
        src="/assets/images/frontier-model-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <p className="text-frontier-models-color text-4xl font-medium text-center translate-y-44 pb-96 pt-96">
          Powering Frontier <br /> Models
        </p>
      </div>
      <div className="relative flex justify-center items-center w-[440px] h-[100px] lg:w-[900px] lg:h-[150px] m-auto group hover:cursor-pointer">
        <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:group-hover:block hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1442] via-[#48196F] to-[#A028FE] rounded-xl p-[1px]">
          <div
            className="w-full h-full rounded-xl flex items-center"
            style={{
              background: "radial-gradient(circle, #3C125F 5%, #280D3E 95%)",
            }}
          >
            <div className="flex flex-col relative w-full">
              <p className="text-white absolute bottom-9 right-2">001</p>
              <div className="flex items-center justify-center space-x-3">
                <img src="/assets/icons/claude.png" alt="" className="h-7 lg:h-12" />
                <p className="text-white text-center">
                  Surge AI's RLHF platform for Anthropic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweringFrontierModels;
