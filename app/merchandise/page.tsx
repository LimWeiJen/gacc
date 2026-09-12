import Image from "next/image";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import { FaExternalLinkAlt } from 'react-icons/fa';
import MerchandiseImage from '@/public/images/merchandise/3dd3d5de0f41064ad4d4607d0dd5a82e.webp'

export default function Merchandise() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={MerchandiseImage} alt="Merchandise Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-swipe-up">
          <h1 className="font-main-title font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-[min(8vw,4.5rem)] leading-none text-center">
            MERCHANDISE
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 px-6 md:px-24 flex flex-col items-center">
        {/* Pre-order Button */}
        <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-3 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mb-20">
          PRE-ORDER NOW!
        </button>

        {/* Product Types */}
        <h2 className="font-main-title text-gold text-3xl md:text-5xl font-bold mb-12 tracking-wider shadow-gold drop-shadow-lg">PRODUCT TYPES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-24">
          <ImagePlaceholder text="CAP (RM 15)" className="w-full aspect-square" />
          <ImagePlaceholder text="NOTEBOOK (RM 15)" className="w-full aspect-square" />
          <ImagePlaceholder text="TOTEBAG (RM 10)" className="w-full aspect-square" />
          <ImagePlaceholder text="BLIND BOX KEYCHAIN (RM 10)" className="w-full aspect-square" />
          <ImagePlaceholder text="VARSITY JACKET (RM 80)" className="w-full aspect-square" />
          <ImagePlaceholder text="T-SHIRT (RM 25)" className="w-full aspect-square" />
        </div>

        {/* Bundle Sales */}
        <h2 className="font-main-title text-gold text-3xl md:text-5xl font-bold mb-12 tracking-wider shadow-gold drop-shadow-lg">BUNDLE SALES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mb-24">
          <ImagePlaceholder text="Bundle RM95" className="w-full aspect-[3/4]" />
          <ImagePlaceholder text="Bundle RM105" className="w-full aspect-[3/4]" />
          <ImagePlaceholder text="Bundle RM45" className="w-full aspect-[3/4]" />
          <ImagePlaceholder text="Bundle RM125" className="w-full aspect-[3/4]" />
        </div>

        {/* Catalogue */}
        <h2 className="font-main-title text-gold text-3xl md:text-5xl font-bold mb-12 tracking-wider shadow-gold drop-shadow-lg">CATALOGUE</h2>
        
        <div className="w-full h-[90vh] max-w-3xl flex justify-center mb-12 aspect-[1/1.4] relative group rounded-xl overflow-hidden border-2 border-white/20">
          <iframe 
            src="/pdf/sample-local-pdf.pdf#toolbar=0" 
            className="w-full h-full bg-white/5"
            title="Sponsorship Proposal PDF" 
          />
          <a 
            href="/pdf/sample-local-pdf.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            title="Open Full Screen"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </section>
    </div>
  );
}
