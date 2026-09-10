import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Logo from '@/public/images/home/GACC logo.webp'

const Navbar = () => {
  return (
    <header className="w-full relative z-50">
      {/* Top Black Bar */}
      <div className="w-full bg-black py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo Placeholder */}
          <div className="w-10 h-12 flex items-center justify-center rounded-sm">
            <Image src={Logo} alt="" />
          </div>
          <span className="font-button text-white font-bold uppercase text-sm md:text-2xl">
            28th Grand Asian Chess Challenge (GACC)
          </span>
        </div>

        <button className="text-white text-4xl hover:text-gold transition-colors">
          <FaSearch />
        </button>
      </div>

      {/* Bottom Transparent Nav Links */}
      <nav className="absolute top-full left-0 w-full py-4 px-6 md:px-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12 z-50 text-lg">
        <Link href="/" className="text-white underline hover:text-gold font-subtitle">
          Home
        </Link>
        <Link href="/background" className="text-white underline hover:text-gold font-subtitle">
          Background
        </Link>
        <Link href="/events" className="text-white underline hover:text-gold font-subtitle">
          Events
        </Link>
        <Link href="/schedule" className="text-white underline hover:text-gold font-subtitle">
          Schedule
        </Link>
        <Link href="/registration" className="text-white underline hover:text-gold font-subtitle">
          Registration
        </Link>
        <Link href="/pairings-results" className="text-white underline hover:text-gold font-subtitle">
          Pairings/Results
        </Link>
        <Link href="/accommodation" className="text-white underline hover:text-gold font-subtitle">
          Accommodation
        </Link>
        <Link href="/merchandise" className="text-white underline hover:text-gold font-subtitle">
          Merchandise
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
