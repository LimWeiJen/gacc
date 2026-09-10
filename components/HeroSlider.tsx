"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface HeroSliderProps {
  images: StaticImageData[];
}

export default function HeroSlider({ images }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (!images || images.length === 0) return null;

  // Clone first and last images for infinite loop effect
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const nextSlide = () => {
    if (currentIndex >= extendedImages.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (images.length <= 1) return;
    
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [currentIndex, images.length]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    } else if (currentIndex === extendedImages.length - 1) {
      setCurrentIndex(1);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0">
      <div 
        className="flex w-full h-full"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 1000ms ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Hero Image ${index}`}
            className="w-full h-full object-cover shrink-0 border-none !p-0 opacity-50"
            priority={index === 1}
            placeholder="blur"
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-4 cursor-pointer"
      >
        <FaChevronLeft className="text-4xl md:text-5xl" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-4 cursor-pointer"
      >
        <FaChevronRight className="text-4xl md:text-5xl" />
      </button>

      {/* Numbered Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, idx) => {
          let isActive = false;
          if (currentIndex === 0 && idx === images.length - 1) isActive = true;
          else if (currentIndex === extendedImages.length - 1 && idx === 0) isActive = true;
          else if (currentIndex - 1 === idx) isActive = true;

          return (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(idx + 1);
              }}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all shadow-md ${
                isActive ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
