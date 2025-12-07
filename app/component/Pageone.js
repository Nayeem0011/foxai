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

const logos = [zoom, facebook, stripe, google, lightbox, red1, red];

const Pageone = () => {

  return (
    <section className="relative w-full h-screen bg-[#030110] overflow-hidden">
     <div className="w-[70%] mx-auto overflow-hidden py-6">

      <div
        className="flex gap-[77px] items-center whitespace-nowrap"
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
            className=""
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Pageone;