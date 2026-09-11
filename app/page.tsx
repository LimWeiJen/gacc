import Image from "next/image";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Link from 'next/link';
import HeroSlider from "../components/HeroSlider";
import HeroPhoto1 from "@/public/images/home/group photo 1.webp"
import HeroPhoto2 from "@/public/images/home/IMG_3101.webp"
import HeroPhoto3 from "@/public/images/home/DSC03322.webp"
import HeroPhoto4 from "@/public/images/home/IMG_3164.webp"
import IntroPhoto from '@/public/images/home/the grand asian chess challenge.webp'

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh]">
        <HeroSlider images={[HeroPhoto1, HeroPhoto2, HeroPhoto3, HeroPhoto4]} />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none animate-swipe-up pt-48 md:pt-24">
          <div className="relative inline-block text-center">
            <span className="font-slogan text-white absolute z-10 drop-shadow-md whitespace-nowrap text-[min(5vw,3rem)] -top-[min(4vw,3rem)] -right-[min(8vw,6rem)]">
              Mortal minds, divine strategy
            </span>
            <h1 className="font-main-title text-white font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-[min(12vw,8rem)] leading-none">
              28<sup className="pr-2 relative text-[min(6vw,3.75rem)] -top-[min(4vw,2.5rem)]">TH</sup> GACC
            </h1>
          </div>
          <p className="font-subtitle text-white text-xl md:text-2xl mt-4 font-bold drop-shadow-md tracking-wider">
            from 8 May 2027 to 13 May 2027
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-24 px-6 md:px-12 flex flex-col items-center bg-black">
        <h2 className="font-main-title text-gold font-bold text-3xl sm:text-4xl md:text-6xl mb-12 tracking-wider drop-shadow-[0_0_15px_rgba(238,177,66,0.3)] text-center">
          28TH GACC EVENTS
        </h2>
        
        <Link href="/registration" className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold px-12 py-3 rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mb-20 inline-block">
          REGISTER NOW!
        </Link>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
          <Link href="/events" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.5rem)] aspect-[4/5] hover:scale-105 transition-transform duration-300">
            <ImagePlaceholder text="Classical Open Poster" className="w-full h-full rounded-xl overflow-hidden border-2 border-blue-900 bg-blue-950/50" />
          </Link>
          <Link href="/events" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.5rem)] aspect-[4/5] hover:scale-105 transition-transform duration-300">
            <ImagePlaceholder text="Rapid Open Poster" className="w-full h-full rounded-xl overflow-hidden border-2 border-blue-900 bg-blue-950/50" />
          </Link>
          <Link href="/events" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.5rem)] aspect-[4/5] hover:scale-105 transition-transform duration-300">
            <ImagePlaceholder text="Blitz Poster" className="w-full h-full rounded-xl overflow-hidden border-2 border-blue-900 bg-blue-950/50" />
          </Link>
          <Link href="/events" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.5rem)] aspect-[4/5] hover:scale-105 transition-transform duration-300">
            <ImagePlaceholder text="Rapid Team Poster" className="w-full h-full rounded-xl overflow-hidden border-2 border-blue-900 bg-blue-950/50" />
          </Link>
          <Link href="/events" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.5rem)] aspect-[4/5] hover:scale-105 transition-transform duration-300">
            <ImagePlaceholder text="Rapid Age Group Poster" className="w-full h-full rounded-xl overflow-hidden border-2 border-blue-900 bg-blue-950/50" />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative w-full py-24 px-6 md:px-24 flex items-center justify-center min-h-[60vh]">
        <Image src={IntroPhoto} alt="Background Image (Chess players in hall)" className="absolute inset-0 w-full h-full opacity-30 border-none !p-0 object-cover" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
          <div className="w-full md:w-1/3 flex justify-center shrink-0">
            <ImagePlaceholder text="28th GACC Logo" className="w-64 h-80 rotate-[-15deg] border-gold text-gold" />
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <h3 className="font-main-title font-bold text-gold text-3xl md:text-4xl tracking-wide leading-tight">
              THE GRAND ASIAN CHESS CHALLENGE (GACC)
            </h3>
            <div className="font-content text-gray-200 text-sm md:text-lg text-justify space-y-4">
              <p>
                returns for its 28th edition, marking another chapter in its longstanding legacy as one of Asia's most prestigious student-organized chess tournaments. Hosted by the Second Residential College of Universiti Malaya, GACC brings together talented young players from across the region, fostering a vibrant community where passion, intellect, and competitive spirit converge over the chessboard.
              </p>
              <p>
                This year's theme, "<span className="text-gold font-bold">The Greek's Gift</span>," takes inspiration from one of chess's most iconic attacking motifs—a daring bishop sacrifice on h7 or h2 that can unlock a devastating assault on the opposing king. More than just a tactical combination, the Greek Gift embodies the courage to sacrifice, the vision to see beyond the immediate position, and the confidence to seize an opportunity when it arises.
              </p>
              <p>
                Just as every successful sacrifice requires calculation, precision, and foresight, GACC challenges its participants to think boldly, play fearlessly, and uncover the winning move hidden within every position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-24 px-6 md:px-24 flex items-center justify-center bg-black">
        <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-5xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8970370612983!2d101.65441927529379!3d3.1219267968535918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb47024217187%3A0x1e85ebc65d47d641!2sUniversiti%20Malaya!5e0!3m2!1sen!2smy!4v1788961956630!5m2!1sen!2smy" 
            className="w-full aspect-square max-w-[400px] rounded-lg border-2 border-gold/50 shadow-[0_0_15px_rgba(238,177,66,0.2)]" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Interactive Map to Universiti Malaya"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-white font-content text-xl md:text-2xl">
            <p>Universiti Malaya,</p>
            <p>
              50603 Kuala Lumpur,<br />
              Wilayah Persekutuan Kuala Lumpur
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
