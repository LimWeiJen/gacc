import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-12 flex flex-col md:flex-row items-center justify-between border-t border-white/10 bg-black mt-auto">
      <div className="text-white font-slogan text-3xl tracking-wider mb-4 md:mb-0">
        Mortal minds, divine strategy
      </div>
      
      <div className="flex items-center gap-6">
        <a href="https://www.facebook.com/GrandAsianChessChallenge" className="text-white text-2xl hover:text-gold transition-colors">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/gacc_official/" className="text-white text-2xl hover:text-gold transition-colors">
          <FaInstagram />
        </a>
        <a href="mailto:28thgacc.official@gmail.com" className="text-white text-2xl hover:text-gold transition-colors">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
