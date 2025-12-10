"use client";

import Image from 'next/image';
import navbar_logo from './image/navbar_logo.svg';
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react"; // Hamburger + Close icon

const menuItems = ["About us", "Our Services", "Case Studies", "Industries"];

const NavBar = () => {

  const [active, setActive] = useState(0); // first item active
  const [open, setOpen] = useState(false);

  // Scroll state
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll Detect Function
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down → navbar hide
      setShowNav(false);
    } else {
      // scrolling up → navbar show
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div>
      <div className="relative inset-0 z-60 flex justify-center w-full">
        <div className={`fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-700
        ${showNav ? "translate-y-0" : "-translate-y-[150px]"}`}>
          <nav className="bg-[#FFFFFF1A] backdrop-blur-[20px] flex items-center justify-between w-full max-w-[80%] py-3.5 px-5 rounded-[50px] absolute top-8 md:top-9 lg:top-11 border border-[#FFFFFF1A]">

            {/* Logo */}
            <Image className="w-20 md:w-[100px] lg:w-[116px]" src={navbar_logo} alt="loading ..." />

            {/* Desktop Menu */}
            <ul className="text-[#B0ADBE] hidden md:flex items-center gap-4 transition-all duration-300">
              {menuItems.map((item, index) => {
                const isActive = active === index;

                return (
                  <li
                    key={index}
                    onClick={() => setActive(index)}
                    className={`font-instrument font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[120%] text-center cursor-pointer py-0 px-0 lg:py-2.5 lg:px-4 transition-all duration-300 rounded-full 
              ${isActive ? "bg-[#15081459] text-white py-2.5 px-4" : ""}
              hover:bg-[#15081459] hover:text-white hover:py-2.5 hover:px-4`}>
                    {item}
                  </li>
                );
              })}
            </ul>

            {/* Desktop Right Button */}
            <div className="hidden md:block">
              <div className="bg-[#F94819] flex items-center gap-2.5 rounded-[50px] py-2.5 px-5 lg:py-5 lg:px-10 cursor-pointer hover:bg-[#812c12] transition-all duration-300">
                <button className="font-instrument text-[#FFFFFF] font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[120%] text-center cursor-pointer">
                  Industries
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden block cursor-pointer"
              onClick={() => setOpen(true)}>
              <Menu size={26} className="text-white" />
            </button>
          </nav>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-[260px] bg-[#0F0F0F] shadow-xl z-50 transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}>

          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)}>
              <X size={26} className="text-white cursor-pointer" />
            </button>
          </div>

          {/* Slide Menu Items */}
          <ul className="flex flex-col gap-6 px-6 mt-4 text-white text-[18px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(index);
                  setOpen(false);
                }}
                className={`font-instrument font-normal cursor-pointer py-2 rounded-lg transition-all duration-300 
                ${active === index ? "bg-[#15081459] px-3" : ""}
                hover:bg-[#15081459] px-3`}>
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Bottom Button */}
          <div className="px-6 mt-8">
            <button className="font-instrument font-normal w-full bg-[#F94819] text-white py-3 rounded-full text-[16px] cursor-pointer hover:bg-[#812c12] transition-all duration-300">
              Industries
            </button>
          </div>
        </div>

        {/* Background Blur when menu open */}
        {open && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default NavBar;

