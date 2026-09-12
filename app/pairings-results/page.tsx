import Image from "next/image";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import ResultImage from '@/public/images/result/26a676724740d530c33ab08a9d278f5a.webp'

export default function PairingsResults() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={ResultImage} alt="Background Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center pt-64 pb-12 md:pt-40 md:pb-0 animate-swipe-up">
          <h1 className="font-main-title text-gold font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-[min(8vw,4.5rem)] leading-none text-center">
            PAIRINGS & RESULTS
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 px-6 md:px-24 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 w-full max-w-5xl">
          
          {/* Left Column */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 1 - CLASSICAL OPEN</h3>
              <p className="font-button text-white text-lg font-bold mb-2">19 - 22 MAY 2026</p>
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)]">
                CHECK MY PAIRINGS
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 2 - RAPID OPEN</h3>
              <p className="font-button text-white text-lg font-bold mb-2">23 MAY 2026</p>
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)]">
                CHECK MY PAIRINGS
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 3 - BLITZ</h3>
              <p className="font-button text-white text-lg font-bold mb-2">24 MAY 2026</p>
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)]">
                CHECK MY PAIRINGS
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 4 - RAPID TEAM</h3>
              <p className="font-button text-white text-lg font-bold mb-2">25 MAY 2026</p>
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)]">
                CHECK MY PAIRINGS
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 5 - RAPID AGE GROUP</h3>
              <p className="font-button text-white text-lg font-bold mb-4">26 MAY 2026</p>
              
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] text-left sm:text-center">
                  CHECK MY PAIRINGS U8
                </button>
                <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] text-left sm:text-center">
                  CHECK MY PAIRINGS U10
                </button>
                <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] text-left sm:text-center">
                  CHECK MY PAIRINGS U12
                </button>
                <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] text-left sm:text-center">
                  CHECK MY PAIRINGS U14
                </button>
                <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] text-left sm:text-center">
                  CHECK MY PAIRINGS U18
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
