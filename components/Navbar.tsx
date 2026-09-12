"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '@/public/images/home/GACC logo.webp'
import SearchModal from './SearchModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="w-full bg-black py-4 px-6 md:px-12 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity z-50">
          {/* Logo Placeholder */}
          <div className="w-10 h-12 flex items-center justify-center rounded-sm">
            <Image src={Logo} alt="GACC Logo" />
          </div>
          <span className="font-button text-white font-bold uppercase text-sm md:text-2xl">
            28th Grand Asian Chess Challenge (GACC)
          </span>
        </Link>

        <div className="flex items-center gap-4 z-50">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-white text-2xl md:text-4xl hover:text-gold transition-colors"
          >
            <FaSearch />
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl md:hidden hover:text-gold transition-colors ml-2"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop Bottom Transparent Nav Links */}
      <nav className={`hidden md:flex absolute top-full left-0 w-full py-4 px-6 md:px-12 flex-wrap items-center justify-center gap-8 lg:gap-12 z-40 text-lg transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <Link href="/" className="text-white hover:text-gold font-subtitle">Home</Link>
        <Link href="/background" className="text-white hover:text-gold font-subtitle">Background</Link>
        <Link href="/events" className="text-white hover:text-gold font-subtitle">Events</Link>
        <Link href="/schedule" className="text-white hover:text-gold font-subtitle">Schedule</Link>
        <Link href="/registration" className="text-white hover:text-gold font-subtitle">Registration</Link>
        <Link href="/pairings-results" className="text-white hover:text-gold font-subtitle">Pairings/Results</Link>
        <Link href="/accommodation" className="text-white hover:text-gold font-subtitle">Accommodation</Link>
        <Link href="/merchandise" className="text-white hover:text-gold font-subtitle">Merchandise</Link>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 text-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Home</Link>
        <Link href="/background" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Background</Link>
        <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Events</Link>
        <Link href="/schedule" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Schedule</Link>
        <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Registration</Link>
        <Link href="/pairings-results" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Pairings/Results</Link>
        <Link href="/accommodation" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Accommodation</Link>
        <Link href="/merchandise" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold font-subtitle">Merchandise</Link>
      </div>
    </header>
    <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
