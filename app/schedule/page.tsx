import Image from "next/image";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import ScheduleImage from '@/public/images/schedule/beb99ab6843a4d7c2d4b3bab27857a6b.webp'

export default function Schedule() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] md:h-[50vh] flex flex-col items-center justify-center">
        <Image src={ScheduleImage} alt="Schedule Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-90 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center pt-16 animate-swipe-up">
          <h1 className="font-main-title text-gold text-5xl md:text-7xl font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            SCHEDULE
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-24 px-6 md:px-24 flex flex-col items-center gap-24">
        
        {/* Event 1 */}
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 1 - CLASSICAL OPEN</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">19 - 22 MAY 2026</p>
          </div>
          <ImagePlaceholder text="Event 1 Schedule Details" className="w-full h-auto aspect-[3/4] md:aspect-square object-contain border-none !bg-white/10" />
        </div>

        {/* Event 2 */}
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 2 - RAPID OPEN</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">23 MAY 2026</p>
          </div>
          <ImagePlaceholder text="Event 2 Schedule Details" className="w-full h-auto aspect-[4/3] md:aspect-[3/2] object-contain border-none !bg-white/10" />
        </div>

        {/* Event 3 */}
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 3 - BLITZ</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">24 MAY 2026</p>
          </div>
          <ImagePlaceholder text="Event 3 Schedule Details" className="w-full h-auto aspect-[4/3] md:aspect-[3/2] object-contain border-none !bg-white/10" />
        </div>

        {/* Event 4 */}
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 4 - RAPID TEAM</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">25 MAY 2026</p>
          </div>
          <ImagePlaceholder text="Event 4 Schedule Details" className="w-full h-auto aspect-[4/3] md:aspect-[3/2] object-contain border-none !bg-white/10" />
        </div>

        {/* Event 5 */}
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 5 - RAPID AGE GROUP</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">25 MAY 2026</p>
          </div>
          <ImagePlaceholder text="Event 5 Schedule Details" className="w-full h-auto aspect-[4/3] md:aspect-[3/2] object-contain border-none !bg-white/10" />
        </div>

      </section>
    </div>
  );
}
