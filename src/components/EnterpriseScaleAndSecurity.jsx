import React from 'react';
import { enterpriseScaleAndSecurity } from '../utils';
import CompanySlider2 from './CompanySlider2';

const EnterpriseScaleAndSecurity = () => {
  return (
    <div className='flex flex-col bg-[#18002D] text-center pt-20 lg:pt-32 lg:pb-10 pb-16'>
      <p className='text-3xl font-semibold pb-10 text-white lg:text-2xl lg:pb-20'>
        <span className='block sm:inline'>Enterprise Scale</span>
        <span className='block sm:inline'> and Security</span>
      </p>
      <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-2 lg:px-36 lg:pb-24'>
        {enterpriseScaleAndSecurity.map((item, index) => (
          <div
            key={index}
            className='relative px-14 lg:px-0 pb-5 lg:pb-0 mx-10 lg:mx-0'
          >
            {index === 1 && (
              <>
                <div className='absolute top-0 left-0 h-full lg:h-[85%] w-[1px] bg-gradient-to-b from-transparent via-[#746681] to-transparent hidden lg:block'></div>
                <div className='absolute top-0 right-0 h-full lg:h-[85%] w-[1px] bg-gradient-to-b from-transparent via-[#746681] to-transparent hidden lg:block'></div>
              </>
            )}
            {index === 2 && (
              <>
                <div className='absolute top-0 right-0 h-full lg:h-[85%] w-[1px] bg-gradient-to-b from-transparent via-[#746681] to-transparent hidden lg:block'></div>
              </>
            )}
            <img src={item.image} alt={item.alt} className='mx-auto mb-4 mt-4 h-16' />
            <div className='text-white text-center pb-4'>
              <h3 className='text-xl font-semibold pb-4 lg:text-md'>{item.title}</h3>
              <p className='text-lg lg:px-3 text-[#746681] lg:text-base'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <CompanySlider2 />
    </div>
  );
};

export default EnterpriseScaleAndSecurity;
