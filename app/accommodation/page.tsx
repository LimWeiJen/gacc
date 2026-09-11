import Image from "next/image";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import AccommodationImage from '@/public/images/accommodation/88667f28f727c4c48201f1c3a9147bd0.webp'

export default function Accommodation() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={AccommodationImage} alt="Accommodation Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center pt-64 pb-12 md:pt-40 md:pb-0 text-center px-4 animate-swipe-up">
          <h1 className="font-main-title font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-[min(8vw,4.5rem)] leading-none text-center">
            ACCOMMODATION
          </h1>
          <h2 className="font-content text-white text-2xl font-bold mt-6 shadow-black drop-shadow-md">28th GACC Partner Hotels</h2>
          <p className="font-content text-white text-lg shadow-black drop-shadow-md mt-2">Enjoy a discount from our partner hotels!</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 px-6 md:px-24 flex flex-col items-center gap-24">
        
        {/* Hotel 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-5xl">
          <ImagePlaceholder text="Urban Living Residence Logo (UL)" className="w-full max-w-[300px] aspect-square shrink-0" />
          <div className="flex flex-col gap-6 items-start w-full md:max-w-md">
            <h3 className="font-main-title text-gold text-3xl font-bold tracking-wider">Urban Living Residence</h3>
            <a href="https://maps.app.goo.gl/TnKNVe8J1GEEfWedA" target="_blank" rel="noopener noreferrer" className="font-content text-white underline hover:text-gold transition-colors text-lg break-all">
              https://maps.app.goo.gl/TnKNVe8J1GEEfWedA
            </a>
            <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-12 py-3 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mt-2">
              BOOK NOW!
            </button>
            <p className="font-content text-white text-xl mt-2">
              Promo Code: <span className="font-bold">27th GACC 2026</span>
            </p>
          </div>
        </div>

        {/* Hotel 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-5xl">
          <ImagePlaceholder text="Cititel Mid Valley Logo" className="w-full max-w-[300px] aspect-square shrink-0 bg-white" />
          <div className="flex flex-col gap-6 items-start w-full md:max-w-md">
            <h3 className="font-main-title text-gold text-3xl font-bold tracking-wider">Cititel, Mid Valley</h3>
            <a href="https://maps.app.goo.gl/22P337Wf7pzKgiFv8" target="_blank" rel="noopener noreferrer" className="font-content text-white underline hover:text-gold transition-colors text-lg break-all">
              https://maps.app.goo.gl/22P337Wf7pzKgiFv8
            </a>
            <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-12 py-3 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mt-2">
              BOOK NOW!
            </button>
            <p className="font-content text-white text-xl mt-2">
              Promo Code: <span className="font-bold">GACC26</span>
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
