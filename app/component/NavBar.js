"use client";

import Image from 'next/image';
import navbar_logo from './image/navbar_logo.svg';
import { useState } from 'react';

const menuItems = ["About us", "Our Services", "Case Studies", "Industries"];

const NavBar = () => {

  const [active, setActive] = useState(0); // first item active

  return (
    <div className="relative inset-0 z-10 flex justify-center w-full">
      <nav className="bg-[#FFFFFF1A] flex items-center justify-between w-[1216px] h-[75px] py-3.5 px-5 rounded-[50px] absolute top-[46px] border border-[#FFFFFF1A]">

        {/* Logo */}
        <Image
          className='cursor-pointer'
          src={navbar_logo}
          alt="logo"
          width={100}
          height={29}
        />

        {/* Menu Items */}
        <ul className="text-[#B0ADBE] flex items-center gap-4 transition-all duration-300">
          {menuItems.map((item, index) => {
            const isActive = active === index;

            return (
              <li
                key={index}
                onClick={() => setActive(index)}
                className={`backdrop-blur-[20px] font-normal text-[16px] leading-[120%] text-center cursor-pointer py-2.5 px-4 transition-all duration-300 rounded-full 
              ${isActive ? "bg-[#15081459] text-white py-2.5 px-4" : ""}
              hover:bg-[#15081459] hover:text-white hover:py-2.5 hover:px-4`}>
                {item}
              </li>
            );
          })}
        </ul>

        {/* Auth Buttons */}
        <div className="">
          <div className="bg-[#F94819]  flex items-center gap-2.5 rounded-[50px] py-3.5 px-8 cursor-pointer transition-all duration-300">
            <button className="text-[#FFFFFF] font-normal text-[16px] leading-[120%] text-center cursor-pointer">
              Industries
            </button>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default NavBar;

