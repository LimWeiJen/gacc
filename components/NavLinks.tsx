import Link from 'next/link';

export default function NavLinks() {
  return (
    <nav className="relative z-20 w-full pt-28 pb-4 px-6 md:px-12 flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-lg">
      <Link href="/" className="text-white underline hover:text-gold font-subtitle">
        Home
      </Link>
      <Link href="/background" className="text-white underline hover:text-gold font-subtitle">
        Background
      </Link>
      <Link href="/events" className="text-white underline hover:text-gold font-subtitle">
        Events
      </Link>
      <Link href="/schedule" className="text-white underline hover:text-gold font-subtitle">
        Schedule
      </Link>
      <Link href="/registration" className="text-white underline hover:text-gold font-subtitle">
        Registration
      </Link>
      <Link href="/pairings-results" className="text-white underline hover:text-gold font-subtitle">
        Pairings/Results
      </Link>
      <Link href="/accommodation" className="text-white underline hover:text-gold font-subtitle">
        Accommodation
      </Link>
      <Link href="/merchandise" className="text-white underline hover:text-gold font-subtitle">
        Merchandise
      </Link>
    </nav>
  );
}
