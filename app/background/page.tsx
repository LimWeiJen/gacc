import Image from "next/image";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import { FaMoneyBillWave, FaGift, FaBullhorn, FaExternalLinkAlt } from 'react-icons/fa';
import { TbHeartHandshake } from "react-icons/tb";
import BackgroundHeroImage from '@/public/images/background/4e8ae4c4a160fae1538300c9de17cce4.webp'
import ObjectivesImage from '@/public/images/background/f98df3f28484a023ebc448d38bdcccc7.webp'
import ObjectivesImage2 from '@/public/images/background/5e9f9c915800a11ace58c834a6fe5726.webp'
import OrganizingCommitteeImage from '@/public/images/background/62ec41a0ade64b981ba113b2052f358e.webp'
import ObjectivesImage4 from '@/public/images/background/7ee7a87b718d1763f2729079df70abc5.webp'
import SponsorshipImage from '@/public/images/background/e2cd12c499239655fb3bea8dc3c9a140.webp'
import ObjectivesImage3 from '@/public/images/background/4e8f88bd712f10311cb039dbf41b2106.webp'
import ObjectivesImage5 from '@/public/images/background/8251bd0e84476b5fcbd954bbbe5d237a.webp'
import Smoke from '@/public/images/background/7fbd839f58d367c0d719d57ea46990c4.webp'
import Logo from '@/public/images/home/GACC logo.webp'

export default function Background() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={BackgroundHeroImage} alt="Background Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-swipe-up">
          <h1 className="font-main-title text-gold font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-[min(8vw,4.5rem)] leading-none text-center">
            BACKGROUND
          </h1>
        </div>
      </section>

      {/* Content Section (Checkerboard Pattern) */}
      <section className="w-full py-24 px-6 md:px-24 flex flex-col items-center gap-16 md:gap-24">
        
        {/* Background Row 1: Universiti Malaya */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-white/20">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/2tlXQHKGmJc" 
                title="Universiti Malaya Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-sm md:text-base font-content text-gray-300 leading-relaxed space-y-4 flex flex-col items-center">
            <h3 className="font-main-title text-white text-2xl md:text-3xl font-bold text-center tracking-wide">Universiti Malaya</h3>
            <p className="text-center">
              Universiti Malaya (UM) is Malaysia's oldest and most prestigious public research university, located on a 922-acre campus in southwest Kuala Lumpur. It is widely recognized as the nation's premier institution for higher learning and research.
            </p>
          </div>
        </div>

        {/* Background Row 2: KK2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 w-full max-w-6xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-white/20">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/g51Me9y1bKA" 
                title="KK2 Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-sm md:text-base font-content text-gray-300 leading-relaxed space-y-4 flex flex-col items-center">
            <h3 className="font-main-title text-white text-2xl md:text-3xl font-bold text-center tracking-wide">
              TUANKU BAHIYAH<br/>RESIDENTIAL COLLEGE (KK2)
            </h3>
            <p className="text-center">
              Originally established in 1958 as the Second Residential College, it was renamed in 2006 to honor the University of Malaya's first female Chancellor, Tuanku Hajah Bahiyah. Known for its active student community, the college organizes numerous events ranging from the collegiate to the international level.
            </p>
          </div>
        </div>

        {/* Background Row 3: GACC */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src={Logo} alt="Logo" className="w-full max-w-xs aspect-square border-none !p-0 !bg-transparent" />
          </div>
          <div className="w-full md:w-1/2 text-sm md:text-base font-content text-gray-300 leading-relaxed space-y-4 flex flex-col items-center">
            <h3 className="font-main-title text-white text-2xl md:text-3xl font-bold text-center tracking-wide">
              Grand Asian Chess Challenge<br/>(GACC)
            </h3>
            <p className="text-center">
              Established in 1996, the Grand Asian Chess Challenge (GACC) has evolved from a regional varsity event into a prestigious international tournament. Its official logo features a sturdy Rook to symbolize the unshakeable solidarity of ASEAN nations, while the vibrant yellow, red, and blue colors reflect the enthusiasm, dynamism, and "iron spirit" of its participants. This combination of history and symbolism represents the event's enduring commitment to fostering positive behavior and leadership through chess.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Banner Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={ObjectivesImage} alt="Objectives Banner Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="font-main-title text-gold text-5xl md:text-7xl font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            OBJECTIVES
          </h2>
        </div>
      </section>

      {/* Objectives Content */}
      {/* OBJECTIVES Content Section */}
      <section className="w-full flex flex-col scale-80 -my-20">
        {/* Objective Row 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 flex">
            <Image src={ObjectivesImage4} alt="Objective 1 Image" className="w-full h-64 md:h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-black">
            <p className="font-content text-gold font-bold text-lg md:text-4xl leading-relaxed text-center">
              To encourage chess as a hobby among students from primary schools to universities and colleges, especially students from Universiti Malaya.
            </p>
          </div>
        </div>

        {/* Objective Row 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse w-full">
          <div className="w-full md:w-1/2 flex">
            <Image src={ObjectivesImage2} alt="Objective 2 Image" className="w-full h-64 md:h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-black">
            <p className="font-content text-gold font-bold text-lg md:text-4xl leading-relaxed text-center">
              To provide a platform for undergraduates from Malaysia and abroad, as well as school students from different states, to interact, connect, and foster closer relationships.
            </p>
          </div>
        </div>

        {/* Objective Row 3: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 flex">
            <Image src={ObjectivesImage5} alt="Objective 3 Image" className="w-full h-64 md:h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-black">
            <p className="font-content text-gold font-bold text-lg md:text-4xl leading-relaxed text-center">
              To promote the unique culture and heritage in Malaysia to the international participants, as well as those of each state or ethnic group to other locals.
            </p>
          </div>
        </div>

        {/* Objective Row 4: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse w-full">
          <div className="w-full md:w-1/2 flex">
            <Image src={ObjectivesImage3} alt="Objective 4 Image" className="w-full h-64 md:h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-black">
            <p className="font-content text-gold font-bold text-lg md:text-4xl leading-relaxed text-center">
              To expose and train the committee members to organize and manage an internationally recognized project in a professional manner.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Banner Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={SponsorshipImage} alt="Sponsorship Banner Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-swipe-up">
          <h2 className="font-main-title text-gold font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-[min(8vw,4.5rem)] leading-none text-center">
            SPONSORSHIP
          </h2>
        </div>
      </section>

      {/* SPONSORSHIP Content Section */}
      <section className="w-full py-16 px-6 md:px-24 flex flex-col items-center bg-[url('/path/to/texture')] bg-cover">
        <h2 className="font-bold text-center text-gold text-2xl md:text-2xl tracking-wide leading-tight mb-10">TYPES OF SPONSORSHIP</h2>
        <div className="flex flex-wrap justify-center items-start gap-12 mb-12 w-full max-w-6xl">
          <div className="flex flex-col items-center gap-4 max-w-[250px]">
            <div className="w-32 h-32 rounded-4xl bg-gold flex items-center justify-center text-black text-8xl shadow-[0_0_15px_rgba(238,177,66,0.5)]">
              <FaMoneyBillWave />
            </div>
            <span className="font-content text-sm md:text-base text-center font-bold tracking-wide">
              Monetary Sponsorship
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 max-w-[300px]">
            <div className="w-32 h-32 rounded-4xl bg-gold flex items-center justify-center text-gray-800 text-8xl shadow-[0_0_15px_rgba(238,177,66,0.5)]">
              <TbHeartHandshake />
            </div>
            <span className="font-content text-sm md:text-base text-center font-bold tracking-wide">
              In Kind Sponsorship<br/>
              <span className="text-sm font-normal text-gold-light mt-2 block leading-relaxed">
                Personal care products, Food & Drinks, Gift cards, Electronic devices, Vouchers. 
              </span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 max-w-[250px]">
            <div className="w-32 h-32 rounded-4xl bg-gold flex items-center justify-center text-black text-8xl shadow-[0_0_15px_rgba(238,177,66,0.5)]">
              <FaBullhorn />
            </div>
            <span className="font-content text-sm md:text-base text-center font-bold tracking-wide">
              Advertisement
            </span>
          </div>
        </div>
        
        <h2 className="font-bold text-center text-gold text-2xl md:text-2xl tracking-wide leading-tight">OUR SPONSORSHIP PROPOSAL</h2>
        <div className="w-full h-[90vh] max-w-2xl border-2 border-white/20 rounded-xl overflow-hidden mt-8 shadow-2xl aspect-[1/1.4] relative group">
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

        <div className="flex flex-col items-center gap-2 mt-12">
          <h2 className="font-bold text-center text-gold text-2xl md:text-2xl tracking-wide leading-tight">CONTACT INFORMATION</h2>
          <p className="font-content text-gray-300 text-sm md:text-base text-center leading-loose">
            John Doe (Director of Sponsorship) - 012-3456789<br/>
            Jane Doe (Vice Director of Sponsorship) - 012-3456789<br/>
            Email: sponsorship.gacc@gmail.com
          </p>
        </div>
      </section>

      {/* Organizing Committee Banner Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={OrganizingCommitteeImage} alt="Organizing Committee Banner Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-70 object-cover" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="font-main-title text-gold text-5xl md:text-7xl font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] leading-tight">
            ORGANIZING<br/>COMMITTEE
          </h2>
        </div>
      </section>

      {/* ORGANIZING COMMITTEE Content Section */}
      <section className="relative w-full py-24 px-6 md:px-24 flex flex-col items-center">
        <Image src={Smoke} alt="Organizing Committee Banner Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" />
        <div className="w-full max-w-5xl flex flex-col items-center gap-8">
          <div className="flex justify-center w-full relative">
            <span className="absolute left-0 top-[20%] -translate-y-1/2 font-main-title text-9xl md:text-9xl opacity-50 blur-[5px]">XX</span>
            <div className="flex flex-col items-center gap-4">
              <ImagePlaceholder text="HIGHCOM Photo" className="w-full max-w-md h-64 object-cover" />
              <h4 className="font-main-title text-gold text-2xl md:text-3xl tracking-wider text-center">HIGHCOM</h4>
              <p className="font-content text-sm md:text-base text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name 1</span><br/>
                <span className="text-white">Member Name 2</span>
              </p>
            </div>
            <span className="absolute right-0 top-[60%] -translate-y-1/2 font-main-title text-9xl md:text-9xl opacity-50 blur-[5px]">VIII</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 w-full mt-12">
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Marketing & Sponsorship Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center leading-tight mt-2">MARKETING &<br/>SPONSORSHIP</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Tournament Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center mt-2">TOURNAMENT</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Public Relations Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center leading-tight mt-2">PUBLIC<br/>RELATIONS</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Creative & Design Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center leading-tight mt-2">CREATIVE &<br/>DESIGN</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Multitech Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center mt-2">MULTITECH</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Logistics Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center mt-2">LOGISTICS</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Protocol Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center mt-2">PROTOCOL</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ImagePlaceholder text="Delegation Photo" className="w-full h-48 object-cover" />
              <h4 className="font-main-title text-gold text-lg tracking-wider text-center mt-2">DELEGATION</h4>
              <p className="font-content text-xs text-center leading-relaxed">
                <span className="text-gold font-bold">HOD Name</span><br/>
                <span className="text-white">Member Name</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
