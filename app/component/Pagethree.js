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
      <div className='w-full lg:w-[80%] flex items-center justify-between py-20 sm:py-[60px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]'>
        
        {/* Left Text Section */}
        <div className='flex flex-col gap-8 lg:w-1/2'>
          <h1 className='tradines font-semibold text-[48px] leading-[120%]'>
            Empowering Businesses <br className='lg:block hidden' /> and Individuals with AI <br className='lg:block hidden' /> Growth
          </h1>
          <p className='text-[#9999A9] font-normal text-[18px] leading-[150%]'>
            We help businesses and individuals leverage AI to drive <br className='lg:block hidden' /> growth, enhance efficiency, and foster innovation.
          </p>

          <button className="text-white bg-[#F94819] w-[191px] flex items-center gap-2.5 rounded-[122px] py-4 px-9 font-normal text-[16px] leading-[120%] text-center hover:bg-[#812c12] transition-shadow duration-300 cursor-pointer">
            Our Testimonial
          </button>
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
        
        <div className='grid grid-cols-2 gap-26'>

          {stats.map((stat, i) => (
            <div key={i} className="flex gap-5">
              {/* Rotated Line */}
              <div className="border-2 border-[#F94819] h-11 self-start"></div>

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                <h1 className="text-white font-medium text-[50px] leading-[120%] -mt-3">
                  {stat.value}
                </h1>
                <p className="text-[#9999A9] font-normal text-[18px] leading-[130%]">
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