import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Logo from '@/public/images/home/GACC logo.webp'

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
      {/* Top Black Bar */}
      <div className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
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
    </header>
  );
};

export default Navbar;
