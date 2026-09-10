import Image from "next/image";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import RegistrationImage from '@/public/images/registration/4e8ae4c4a160fae1538300c9de17cce4.webp'

export default function Registration() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={RegistrationImage} alt="Registration Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-40 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center pt-64 pb-12 md:pt-40 md:pb-0 animate-swipe-up">
          <h1 className="font-main-title text-gold text-5xl md:text-7xl font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            REGISTRATION
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-24 px-6 md:px-24 flex flex-col items-center gap-32">
        
        {/* Event 1 */}
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 1 - CLASSICAL OPEN</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">19 - 22 MAY 2026</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <ImagePlaceholder text="Classical Open Registration Fee Table" className="w-full max-w-md aspect-[4/5] object-contain border-none !bg-[#FDFBF7] !text-black" />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 text-white font-content pt-4">
              <div className="text-center md:text-left">
                <p className="font-bold text-lg mb-1 tracking-wider">APPLICATION CLOSING DATE :</p>
                <p className="text-gray-300">12 MAY 2026</p>
              </div>
              
              <div className="text-center md:text-left">
                <p className="font-bold text-lg mb-1 tracking-wider">Late Entry :</p>
                <p className="text-gray-300">150% of the relevant fees</p>
              </div>
              
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold text-sm md:text-base px-8 py-3 rounded-full tracking-wider transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mt-2">
                REGISTER NOW!
              </button>
              
              <div className="mt-8 text-center md:text-left space-y-2 max-w-sm text-gray-300">
                <p>There are <span className="font-bold text-white">FOUR</span> players from the same University?</p>
                <p>Fill in the <span className="font-bold text-white">Group Entry Form</span> above to enjoy our special discount!</p>
              </div>
              
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold text-sm md:text-base px-8 py-3 rounded-full tracking-wider transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)]">
                GROUP ENTRY FORM
              </button>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 2 - RAPID OPEN</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">23 MAY 2026</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <ImagePlaceholder text="Rapid Open Registration Fee Table" className="w-full max-w-md aspect-[4/5] object-contain border-none !bg-[#FDFBF7] !text-black" />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 text-white font-content pt-4">
              <div className="text-center md:text-left">
                <p className="font-bold text-lg mb-1 tracking-wider">APPLICATION CLOSING DATE :</p>
                <p className="text-gray-300">12 MAY 2026</p>
              </div>
              
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold text-sm md:text-base px-8 py-3 rounded-full tracking-wider transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mt-2">
                REGISTER NOW!
              </button>
            </div>
          </div>
        </div>

        {/* Event 3 */}
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 3 - BLITZ</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">24 MAY 2026</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <ImagePlaceholder text="Blitz Registration Fee Table" className="w-full max-w-md aspect-[4/5] object-contain border-none !bg-[#FDFBF7] !text-black" />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 text-white font-content pt-4">
              <div className="text-center md:text-left">
                <p className="font-bold text-lg mb-1 tracking-wider">APPLICATION CLOSING DATE :</p>
                <p className="text-gray-300">12 MAY 2026</p>
              </div>
              
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold text-sm md:text-base px-8 py-3 rounded-full tracking-wider transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mt-2">
                REGISTER NOW!
              </button>
            </div>
          </div>
        </div>

        {/* Event 4 */}
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 4 - RAPID TEAM</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">25 MAY 2026</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <ImagePlaceholder text="Rapid Team Registration Fee Table" className="w-full max-w-md aspect-[4/5] object-contain border-none !bg-[#FDFBF7] !text-black" />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 text-white font-content pt-4">
              <div className="text-center md:text-left">
                <p className="font-bold text-lg mb-1 tracking-wider">APPLICATION CLOSING DATE :</p>
                <p className="text-gray-300">12 MAY 2026</p>
              </div>
              
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold text-sm md:text-base px-8 py-3 rounded-full tracking-wider transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mt-2">
                REGISTER NOW!
              </button>
            </div>
          </div>
        </div>

        {/* Event 5 */}
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">EVENT 5 - RAPID AGE GROUP</h2>
            <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest">25 MAY 2026</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <ImagePlaceholder text="Event 5 Registration Fee Table" className="w-full max-w-md aspect-[4/5] object-contain border-none !bg-[#FDFBF7] !text-black" />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 text-white font-content pt-4">
              <div className="text-center md:text-left">
                <p className="font-bold text-lg mb-1 tracking-wider">APPLICATION CLOSING DATE :</p>
                <p className="text-gray-300">12 MAY 2026</p>
              </div>
              
              <button className="bg-gradient-to-r from-[#F9E29B] to-[#C9933B] hover:opacity-90 text-black font-button font-bold text-sm md:text-base px-8 py-3 rounded-full tracking-wider transition-all shadow-[0_4px_15px_rgba(238,177,66,0.4)] mt-2">
                REGISTER NOW!
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
