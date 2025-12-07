'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';
import HeroSvg from '../svg/HeroSvg';

const Header = () => {

  return (
    <div className="relative w-full overflow-hidden bg-[#D8765C]">

      {/* Background & Gradient (shared for both NavBar + Hero) */}

      {/* Foreground Content */}
      <div className="relative z-30">
        <NavBar />
        <HeroPage />
      </div>

    </div>
  );
};

export default Header;
