"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import fooder_logo from './image/Frame 2147223437.svg';
import footer_logo1 from './image/footer_logo1.svg';
import footer_logo2 from './image/footer_logo2.svg';
import footer_logo3 from './image/footer_logo3.svg';
import footer_logo4 from './image/footer_logo4.svg';

const logos = [footer_logo1, footer_logo2, footer_logo3, footer_logo4];

const footerMenus = [
  {
    title: "Company",
    items: ["About us", "Career", "Contact", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Resources",
    items: ["Blog & Insight", "Case Studies", "Tutorials"],
  },
  {
    title: "Generals",
    items: ["Homepage", "Testimonials", "Category"],
  },
];

const Footer = () => {

  return (
    <section className="bg-[#030110]">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-between py-14 sm:py-[60px] md:py-[70px] lg:py-[90px]">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <Image className="w-20 sm:w-[100px] md:w-[130px] lg:w-[150px]" src={fooder_logo} alt="loading ..." />
            <p className="text-[#9999A9] font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[150%] tracking-[0%]">
              Powered by Visionary Intelligence. Fully <br className='lg:block hidden' /> controlled artificial intelligence.
            </p>

            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 z-10">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 cursor-pointer"
                  src={logo}
                  alt={`footer logo ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 md:flex gap-6 sm:gap-[50px] md:gap-20 lg:gap-[100px] xl:gap-[130px] 2xl:gap-[188px] pt-8 sm:pt-14 md:pt-0 z-10">
            {footerMenus.map((menu, idx) => (
              <div key={idx}>
                <ul className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                  <p className="text-[#E7E8FC] font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] leading-[150%] tracking-[0%]">
                    {menu.title}
                  </p>

                  {menu.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#9999A9] font-normal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[150%] tracking-[0%] cursor-pointer hover:text-[#F94819] transition-all duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;