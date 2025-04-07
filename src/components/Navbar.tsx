'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Link href="/" className="text-white hover:text-orange-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
            About
          </Link>
          <Link href="/features" className="text-white hover:text-orange-400 transition-colors">
            Features
          </Link>
          <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">
            Contact
          </Link>
        </div>
        <button className="bg-transparent text-white px-6 py-2 rounded-full border border-orange-400 hover:bg-orange-400 transition-colors">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 