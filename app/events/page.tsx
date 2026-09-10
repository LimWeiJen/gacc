import ImagePlaceholder from "../../components/ImagePlaceholder";
import { FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";
import BackgroundHeroImage from '@/public/images/background/4e8ae4c4a160fae1538300c9de17cce4.webp'

export default function Events() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={BackgroundHeroImage} alt="Background Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center pt-64 pb-12 md:pt-40 md:pb-0 animate-swipe-up">
          <h1 className="font-main-title text-gold text-8xl md:text-12xl font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            EVENTS
          </h1>
        </div>
      </section>

      {/* Events Grid */}
      <section className="w-full py-16 px-6 md:px-24 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full max-w-6xl">
          {/* Event 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 1 - CLASSICAL OPEN</h3>
                <p className="font-button text-white text-lg font-bold">19 - 22 MAY 2026</p>
              </div>
              <a href="#" className="bg-[#f2b05c] p-2 rounded-full text-white hover:bg-white hover:text-[#f2b05c] transition-colors">
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>
            <ImagePlaceholder text="Classical Open Poster (RM 10,000++)" className="w-full aspect-[4/5] mt-4" />
          </div>

          {/* Event 2 */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 2 - RAPID OPEN</h3>
                <p className="font-button text-white text-lg font-bold">23 MAY 2026</p>
              </div>
              <a href="#" className="bg-[#f2b05c] p-2 rounded-full text-white hover:bg-white hover:text-[#f2b05c] transition-colors">
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>
            <ImagePlaceholder text="Rapid Open Poster" className="w-full aspect-[4/5] mt-4" />
          </div>

          {/* Event 3 */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 3 - BLITZ</h3>
                <p className="font-button text-white text-lg font-bold">24 MAY 2026</p>
              </div>
              <a href="#" className="bg-[#f2b05c] p-2 rounded-full text-white hover:bg-white hover:text-[#f2b05c] transition-colors">
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>
            <ImagePlaceholder text="Blitz Poster" className="w-full aspect-[4/5] mt-4" />
          </div>

          {/* Event 4 */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 4 - RAPID TEAM</h3>
                <p className="font-button text-white text-lg font-bold">25 MAY 2026</p>
              </div>
              <a href="#" className="bg-[#f2b05c] p-2 rounded-full text-white hover:bg-white hover:text-[#f2b05c] transition-colors">
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>
            <ImagePlaceholder text="Rapid Team Poster" className="w-full aspect-[4/5] mt-4" />
          </div>

          {/* Event 5 */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="font-main-title text-gold text-2xl font-bold uppercase tracking-wider">EVENT 5 - RAPID AGE GROUP</h3>
                <p className="font-button text-white text-lg font-bold">25 MAY 2026</p>
              </div>
              <a href="#" className="bg-[#f2b05c] p-2 rounded-full text-white hover:bg-white hover:text-[#f2b05c] transition-colors">
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>
            <ImagePlaceholder text="Event 5 Poster" className="w-full aspect-[4/5] mt-4" />
          </div>
        </div>
      </section>
    </div>
  );
}
