'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import image from './image/image.png';
import image1 from './image/image_1.png';
import image2 from './image/image_2.png';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const cards = [
  { img: image, title: 'Real State & Prop Tech' },
  { img: image1, title: 'Interior Design' },
  { img: image2, title: 'Gaming & Entertainment' },
];

const Pagetwo = () => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  // ⭐ Default horizontal center scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 400 * index, // Center card
        behavior: 'instant',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToCard = (i) => {
    const pos = i * 400; // card width + gap
    scrollRef.current?.scrollTo({ left: pos, behavior: 'smooth' });
  };

  const nextSlide = () => {
    const newIndex = (index + 1) % cards.length;
    setIndex(newIndex);
    scrollToCard(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (index - 1 + cards.length) % cards.length;
    setIndex(newIndex);
    scrollToCard(newIndex);
  };

  return (
    <div className="relative w-full bg-[#030110]">
      <section className="w-full bg-[#AF321033] backdrop-blur-[91.7px] py-[60px] sm:py-20 md:py-[100px] lg:py-[130px] xl:py-40 2xl:py-[190px] overflow-hidden rounded-[40px] relative">
        <div className='w-1/3 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 goadsgvedfevg h-1/3 -z-1'></div>
        <div className="max-w-[1500px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 md:gap-32 lg:gap-38 xl:gap-44 items-center">

          {/* HORIZONTAL SLIDER */}
          <div
            ref={scrollRef}
            className="flex gap-10 w-full overflow-hidden scrollbar-none snap-x snap-mandatory">
            {cards.map((card, i) => (
              <div
                key={i}
                className="border-2 border-[#A9999799] bg-[#FFFFFF4D] h-60 sm:h-[290px] md:h-[370px] lg:h-[444px] rounded-[20px] snap-center shrink-0 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[474px] h-[180px] sm:h-[220px] md:h-[300px] lg:h-[356px] object-cover rounded-[20px]"
                />
                <div className="font-instrument text-white h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-center font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] leading-[120%] text-center">
                  {card.title}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SECTION (Same as before) */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-8">
            <div className='order-2 lg:order-1 flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-8'>
              <h2 className="font-instrument text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_0%,#DBCACA_100%)] font-semibold text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[58px] leading-[112%] text-left">
                Industries we <br className='lg:block hidden' /> specialize In
              </h2>
              <p className="font-instrument text-white font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[150%] opacity-70">
                Al is reshaping industries worldwide, enabling <br className='lg:block hidden' /> businesses to optimize operations, enhance <br className='lg:block hidden' /> decision-making, and unlock new <br className='lg:block hidden' /> revenue streams.
              </p>
            </div>

            {/* Buttons */}
            <div className="order-1 lg:order-3 flex items-center gap-3 sm:gap-4 md:gap-6">
              <button
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-[#FF6433] flex items-center justify-center text-white text-xl cursor-pointer hover:bg-[#812c12] transition-all duration-300"
              >
                <MdOutlineArrowBackIos className='h-3 sm:h-4 md:h-5 lg:h-6 w-3 sm:w-4 md:w-5 lg:w-6' />
              </button>

              <div className="flex items-center gap-2">
                {cards.map((_, i) => (
                  <span
                    key={i}
                    className={`rounded-full transition-all ${index === i
                      ? 'w-6 h-2 bg-[#FA4C1D]'
                      : 'w-2 h-2 bg-white/40'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-[#FF6433] flex items-center justify-center text-white text-xl cursor-pointer hover:bg-[#812c12] transition-all duration-300"
              >
                <MdOutlineArrowForwardIos className='h-3 sm:h-4 md:h-5 lg:h-6 w-3 sm:w-4 md:w-5 lg:w-6' />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
export default Pagetwo;


