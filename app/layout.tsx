import type { Metadata } from "next";
import { Cinzel_Decorative, Be_Vietnam_Pro, Great_Vibes, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const beVietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "28th GACC",
  description: "28th Grand Asian Chess Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${cinzel.variable} ${beVietnam.variable} ${greatVibes.variable} ${jost.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Navbar />
        <main className="mt-20 flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
