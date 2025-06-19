import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/90 to-transparent">
      <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
      <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
        Sign In
      </button>
    </header>
  );
};

export default Header;
