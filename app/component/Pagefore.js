'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import bgImage from './image/Group1000006009.png';

const Pageone = () => {

  return (
    <section className="relative w-full bg-[#030110] h-[480px]">

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
      <svg width="1149" height="881" viewBox="0 0 1149 881" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" filter="url(#filter0_f_714_285)">
          <ellipse cx="436.698" cy="440.131" rx="348.329" ry="74.3885" transform="rotate(-2.86909 436.698 440.131)" fill="#FB6B43" />
        </g>
        <defs>
          <filter id="filter0_f_714_285" x="-275.015" y="6.10352e-05" width="1423.43" height="880.262" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="181.9" result="effect1_foregroundBlur_714_285" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0">
        <Image src={bgImage} alt="loading ..." fill className="object-cover" priority />

        {/* Optional: overlay or content */}
        <div className="h-full w-full relative flex flex-col gap-8 pt-32">
          {/* Example content */}
          <h1 className="text-white font-semibold text-[48px] leading-[120%] text-center">
            Let&apos;s Build The future Together!
          </h1>
          <p className='text-[#FFFAF0] font-normal text-[18px] leading-[150%] tracking-[0%] text-center'>
            We help businesses and individuals leverage AI to drive growth, enhance <br className='lg:block hidden' /> efficiency, and foster innovation.
          </p>

          <div className='flex justify-center'>
            <button className='text-white bg-[#F94819] w-[242px] h-[47px] opacity-100 rounded-[80px] gap-2.5 py-3.5 px-6 font-normal text-[16px] leading-[120%] tracking-[0%] text-center cursor-pointer'>
              Contact us
            </button>
          </div>
        </div>
      </div>

    </section>

  );
};

export default Pageone;