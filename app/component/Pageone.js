'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import zoom from './image/Zoom.svg';
import facebook from './image/Facebook.svg';
import stripe from './image/stripe.svg';
import google from './image/Google.svg';
import lightbox from './image/Lightbox.svg';
import red1 from './image/Red (1).svg';
import red from './image/Red.png';
import card_logo1 from './image/card_logo1.png'
import card_logo2 from './image/card_logo2.png'
import card_logo3 from './image/card_logo3.png'
import card_logo4 from './image/card_logo4.png'

const logos = [zoom, facebook, stripe, google, lightbox, red1, red];

const Pageone = () => {

  const items = [
    {
      id: 1,
      image: card_logo1,
      title: "Automation<br className='lg:block hidden'/> Machine Learning",
      description: "Talk With Us",
    },
    {
      id: 2,
      image: card_logo2,
      title: "Al-Powered<br className='lg:block hidden'/>  Chatbots",
      description: "Talk With Us",
    },
    {
      id: 3,
      image: card_logo3,
      title: "Data Analytics<br className='lg:block hidden'/>  Deep Insights",
      description: "Talk With Us",
    },
    {
      id: 4,
      image: card_logo4,
      title: "Al Strategy<br className='lg:block hidden'/> Pro Consulting",
      description: "Talk With Us",
    },
  ];

  return (
    <section className="relative w-full h-[80%] bg-[#030110] overflow-hidden">
      <div className="w-[80%] mx-auto overflow-hidden py-6">
        <div
          className="flex gap-8 md:gap-[60px] lg:gap-[77px] items-center whitespace-nowrap"
          style={{
            animation: "infinite-scroll 10s linear infinite",
          }}
        >
          {/* Logos repeated twice for seamless infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-4 md:h-[30px] lg:h-[38px]"
            />
          ))}
        </div>
        <div>

          <div id='About' className='pt-[60px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] 2xl:pt-[140px] px-6 sm:px-0 pb-[60px] sm:pb-20 md:pb-[100px] lg:pb-[130px] xl:pb-40 2xl:pb-[190px]'>
            <div className='container mx-auto'>

              {/* Title */}
              <h2 className='pageonetitle font-instrument text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] pb-6 sm:pb-8 md:pb-9 lg:pb-10 xl:pb-12 2xl:pb-16'>
                Pioneering AI consulting to drive innovation, <br className='lg:block hidden' /> efficiency, and growth for businesses.
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="">

                    {/* Card wrapper */}
                    <div className="cardwrapper rounded-[20px]! ">

                      {/* Top section */}
                      <div className="bg-[#030110] rounded-t-[20px] rounded-b-[10px]">
                        <div className="pageonetop relative rounded-t-[20px] rounded-b-[10px] px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-8 pt-3.5 sm:pt-[15px] md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-8 pb-8 sm:pb-9 md:pb-10 lg:pb-12 xl:pb-16 2xl:pb-[83px] flex justify-start gap-[13px] sm:gap-3.5 md:gap-[15px] lg:gap-4 xl:gap-5 2xl:gap-6 flex-col">

                          {/* Image now fully responsive + centered + fitted */}
                          <Image className="w-8 sm:w-9 md:w-10 lg:w-12 xl:w-16 2xl:w-[68px] shadow-[0px_25px_23px_0px_#00000040] rounded-4xl" src={item.image} alt="loading ..." />

                          {/* Title */}
                          <h2
                            className="pageoneh2title font-instrument text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />

                          {/* Glow Elements (unchanged) */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-1/2 absolute -right-[15%] -top-[16%]"
                            viewBox="0 0 380 340"
                            fill="none"
                          >
                            <g opacity="0.81" filter="url(#filter0_f_4_66)">
                              <ellipse cx="190" cy="170" rx="49" ry="29" fill="#FF6035" fill-opacity="0.81" />
                            </g>
                            <defs>
                              <filter
                                id="filter0_f_4_66"
                                x="0.600006"
                                y="0.600006"
                                width="378.8"
                                height="338.8"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="70.2" result="effect1_foregroundBlur_4_66" />
                              </filter>
                            </defs>
                          </svg>
                          <svg
                            className="w-1/2 absolute -right-[5%] -bottom-[28%]"
                            viewBox="0 0 282 286"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.6" filter="url(#filter0_f_4_74)">
                              <ellipse
                                cx="140.929"
                                cy="142.995"
                                rx="32.9794"
                                ry="61.5994"
                                transform="rotate(-42.6696 140.929 142.995)"
                                fill="#FF6941"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_f_4_74"
                                x="0.639496"
                                y="0.475586"
                                width="280.579"
                                height="285.038"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="46" result="effect1_foregroundBlur_4_74" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Bottom button */}
                      <div className="pageonebutton font-instrument text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-[11px] sm:py-3 md:py-[13px] lg:py-3.5 xl:py-[15px] 2xl:py-4">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Pageone;