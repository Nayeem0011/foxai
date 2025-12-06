'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';
const Header = () => {

  return (
    <div className="relative w-full overflow-hidden customizecollro">
        <NavBar />
        <HeroPage />
    </div>
  );
};

export default Header;
