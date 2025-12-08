"use client";

import Image from 'next/image';
import navbar_logo from './image/navbar_logo.svg';
import { useState } from 'react';
import { Menu, X } from "lucide-react"; // Hamburger + Close icon

const menuItems = ["About us", "Our Services", "Case Studies", "Industries"];

const NavBar = () => {

  const [active, setActive] = useState(0); // first item active
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inset-0 z-10 flex justify-center w-full">
      <nav className="bg-[#FFFFFF1A] backdrop-blur-[20px] flex items-center justify-between w-full max-w-[80%] py-3.5 px-5 rounded-[50px] absolute top-[46px] border border-[#FFFFFF1A]">

        {/* Logo */}
        <Image className="w-[116px]" src={navbar_logo} alt="loading ..."/>

        {/* Desktop Menu */}
        <ul className="text-[#B0ADBE] hidden md:flex items-center gap-4 transition-all duration-300">
          {menuItems.map((item, index) => {
            const isActive = active === index;

            return (
              <li
                key={index}
                onClick={() => setActive(index)}
                className={` font-normal text-[16px] leading-[120%] text-center cursor-pointer py-2.5 px-4 transition-all duration-300 rounded-full 
              ${isActive ? "bg-[#15081459] text-white py-2.5 px-4" : ""}
              hover:bg-[#15081459] hover:text-white hover:py-2.5 hover:px-4`}>
                {item}
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Button */}
        <div className="hidden md:block">
          <div className="bg-[#F94819] flex items-center gap-2.5 rounded-[50px] py-5 px-10 cursor-pointer hover:bg-[#812c12] transition-shadow duration-300">
            <button className="text-[#FFFFFF] font-normal text-[16px] leading-[120%] text-center cursor-pointer">
              Industries
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden block cursor-pointer"
          onClick={() => setOpen(true)}>
          <Menu size={28} className="text-white" />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-[#0F0F0F] shadow-xl z-50 transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}>

        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)}>
            <X size={28} className="text-white cursor-pointer" />
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
              className={`cursor-pointer py-2 rounded-lg transition-all duration-300 
                ${active === index ? "bg-[#15081459] px-3" : ""}
                hover:bg-[#15081459] px-3`}>
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Bottom Button */}
        <div className="px-6 mt-8">
          <button className="w-full bg-[#F94819] text-white py-3 rounded-full text-[16px] cursor-pointer">
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
  );
};

export default NavBar;

