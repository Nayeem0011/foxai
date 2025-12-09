'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: '1M+',
    description: 'Users benefiting from our AI-powered solutions',
  },
  {
    value: '80%',
    description: 'Faster decision-making with AI recommendations',
  },
  {
    value: '4.9/5',
    description: 'Average rating across all AI-driven applications',
  },
  {
    value: '99%',
    description: 'Uptime guarantee for seamless AI experience',
  },
];

const Pagethree = () => {

  return (
    <div className="relative w-full bg-[#030110] flex items-center justify-center">
      <div className='w-full lg:w-[80%] md:flex md:items-center md:justify-between py-20 sm:py-[60px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]'>

        {/* Left Text Section */}
        <div className='flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-8 lg:w-1/2 px-6 md:px-4 lg:px-0'>
          <h1 className='tradines font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] leading-[120%]'>
            Empowering Businesses <br className='lg:block hidden' /> and Individuals with AI <br className='lg:block hidden' /> Growth
          </h1>
          <p className='text-[#9999A9] font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[150%]'>
            We help businesses and individuals leverage AI to drive <br className='lg:block hidden' /> growth, enhance efficiency, and foster innovation.
          </p>

          <div className=''>
            <button className="text-white bg-[#F94819] flex items-center gap-2.5 rounded-[20px] py-2.5 px-5 sm:py-3 sm:px-7 md:py-3.5 md:px-8 lg:py-4 lg:px-9 font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[120%] text-center hover:bg-[#812c12] transition-all duration-300 cursor-pointer">
              Our Testimonial
            </button>
          </div>
        </div>

        <svg className='w-1/4 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 goadsgvedfevg h-1/4 z-10' viewBox="0 0 1138 1347" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_714_195)">
            <ellipse cx="754.492" cy="673.083" rx="225.699" ry="79.5208" transform="rotate(26.5939 754.492 673.083)" fill="#FF6035" />
          </g>
          <defs>
            <filter id="filter0_f_714_195" x="3.05176e-05" y="6.10352e-05" width="1508.98" height="1346.17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="274.761" result="effect1_foregroundBlur_714_195" />
            </filter>
          </defs>
        </svg>

        <div className='grid grid-cols-2 gap-10 sm:gap-14 md:gap-18 lg:gap-20 xl:gap-22 2xl:gap-26 pt-14 md:pt-0 px-6 md:px-4 lg:px-0'>
          {stats.map((stat, i) => (
            <div key={i} className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              {/* Rotated Line */}
              <div className="border md:border-2 border-[#F94819] h-6 sm:h-7 md:h-9 xl:h-11 self-start"></div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 md:gap-3">
                <h1 className="text-white font-medium text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[50px] leading-[120%] -mt-3">
                  {stat.value}
                </h1>
                <p className="text-[#9999A9] font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[130%]">
                  {stat.description.split(' ').map((word, idx) => (
                    <span key={idx}>
                      {word}{' '}
                      {word.includes('AI') && <br className="lg:block hidden" />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagethree;