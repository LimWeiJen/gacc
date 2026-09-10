"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Logo from '@/public/images/home/GACC logo.webp'
import SearchModal from './SearchModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full fixed z-50">
        {/* Top Black Bar */}
      <div className="w-full bg-black py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          {/* Logo Placeholder */}
          <div className="w-10 h-12 flex items-center justify-center rounded-sm">
            <Image src={Logo} alt="GACC Logo" />
          </div>
          <span className="font-button text-white font-bold uppercase text-sm md:text-2xl">
            28th Grand Asian Chess Challenge (GACC)
          </span>
        </Link>

        <button 
          onClick={() => setIsSearchOpen(true)}
          className="text-white text-4xl hover:text-gold transition-colors"
        >
          <FaSearch />
        </button>
      </div>

      {/* Bottom Transparent Nav Links */}
      <nav className={`absolute top-full left-0 w-full py-4 px-6 md:px-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12 z-50 text-lg transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <Link href="/" className="text-white hover:text-gold font-subtitle">
          Home
        </Link>
        <Link href="/background" className="text-white hover:text-gold font-subtitle">
          Background
        </Link>
        <Link href="/events" className="text-white hover:text-gold font-subtitle">
          Events
        </Link>
        <Link href="/schedule" className="text-white hover:text-gold font-subtitle">
          Schedule
        </Link>
        <Link href="/registration" className="text-white hover:text-gold font-subtitle">
          Registration
        </Link>
        <Link href="/pairings-results" className="text-white hover:text-gold font-subtitle">
          Pairings/Results
        </Link>
        <Link href="/accommodation" className="text-white hover:text-gold font-subtitle">
          Accommodation
        </Link>
        <Link href="/merchandise" className="text-white hover:text-gold font-subtitle">
          Merchandise
        </Link>
      </nav>
    </header>
    <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
