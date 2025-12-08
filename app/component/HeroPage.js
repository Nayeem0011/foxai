'use client';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import frame13 from './image/Frame13.png';

const HeroPage = () => {
  return (
    <section className="relative w-full h-[80vh] top-60">
      <div>
        <h1 className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_0%,#DBCACA_100%)] font-bold text-[61px] leading-[120%] text-center">
          Pioneering Intelligence Shaping <br className="hidden md:block"/> the Future with Vision
        </h1>
        <p className="text-[#ADADAD] font-normal text-[20px] leading-[150%] text-center pt-8">
          Al consulting redefined with best visionary intelligence. We craft tailored solutions to <br className="hidden md:block"/> supercharge your digital transformation.
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 pt-10">
        <button className="text-white bg-[#F94819] flex items-center gap-2.5 rounded-[122px] py-4 px-8 font-normal text-[16px] leading-[120%] text-center hover:bg-[#812c12] transition-shadow duration-300 cursor-pointer">
          Free Consultation
        </button>

        {/* Logo */}
        <Image className="" src={frame13} alt="loading ..." />

        <div className="flex gap-2">
          <p>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 14.237L13.3649 16.8458C14.1642 17.324 15.1424 16.6172 14.932 15.7233L13.7751 10.8174L17.6351 7.51216C18.3398 6.90932 17.9611 5.76599 17.0356 5.69324L11.9555 5.26709L9.96763 0.631427C9.61003 -0.210476 8.38997 -0.210476 8.03237 0.631427L6.04451 5.25669L0.964434 5.68284C0.038871 5.7556 -0.339768 6.89892 0.364921 7.50177L4.22494 10.807L3.06799 15.7129C2.85763 16.6068 3.83578 17.3136 4.63513 16.8355L9 14.237Z" fill="#FAD921" />
            </svg>
          </p>
          <p className="text-white font-normal text-[16px] leading-[120%]">
            4.5 Trustsct:ye
          </p>
        </div>
      </div>

      <p className="text-[#ADADAD] font-medium text-[20px] leading-[150%] text-center pt-48">Powered by</p>
    </section>
  );
};

export default HeroPage;