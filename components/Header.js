import React from 'react';
import Logo from './Logo';
import SubscribeButton from './SubscribeButton';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <div className="flex items-center space-x-4">
        <SubscribeButton />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
