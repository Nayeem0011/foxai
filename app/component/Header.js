'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';
import Image from 'next/image';
import Glasseffect1 from './image/Glasseffect1.png';

const Header = () => {

  return (
    <div className="relative w-full overflow-hidden">

      {/* Background */}
      <Image className="h-full w-full object-cover absolute top-0 left-0 z-[-1]" src={Glasseffect1} alt="loading ..." />

      {/* Foreground Content */}
      <div className="relative z-30">
        <NavBar />
        <HeroPage />
      </div>

    </div>
  );
};

export default Header;
