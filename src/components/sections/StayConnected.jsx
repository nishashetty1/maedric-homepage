"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StayConnected() {
  const [isMobile, setIsMobile] = useState(false);

  // Check window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-10 pb-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-[Quiche_Display] font-light text-[var(--primary)] mb-6 md:mb-8 lg:mb-12 tracking-wide">
          Stay Connected with{isMobile ? <br/> : " "}Maedric
        </h2>
      </div>

      {/* Desktop Layout - Full Width */}
      <div className="hidden md:block px-20">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 lg:gap-3 max-w-[1920px] mx-auto">
          {/* Row 1 */}
          <div className="relative h-64 lg:h-80 xl:h-96 overflow-hidden">
            <Image 
              src="/images/stay-connected/sc1.jpg" 
              alt="Maedric Jewellery Woman with Earrings" 
              fill
              sizes="25vw"
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
          <div className="relative h-64 lg:h-80 xl:h-96 overflow-hidden">
            <Image 
              src="/images/stay-connected/sc2.jpg" 
              alt="Maedric Jewellery Woman with Necklace" 
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
          <div className="relative h-64 lg:h-80 xl:h-96 overflow-hidden">
            <Image 
              src="/images/stay-connected/sc3.jpg" 
              alt="Maedric Gold Rings" 
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
          <div className="relative h-64 lg:h-80 xl:h-96 overflow-hidden">
            <Image 
              src="/images/stay-connected/sc4.jpg" 
              alt="Maedric Jewellery Chain Necklace" 
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>

          {/* Row 2 */}
          <div className="relative h-64 lg:h-80 xl:h-96 overflow-hidden">
            <Image 
              src="/images/stay-connected/sc3.jpg" 
              alt="Maedric Gold Rings" 
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
          <div className="relative h-64 lg:h-80 xl:h-96 overflow-hidden">
            <Image 
              src="/images/stay-connected/sc4.jpg" 
              alt="Maedric Jewellery Chain Necklace" 
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
          <div className="col-span-2 h-64 lg:h-80 xl:h-96 bg-[var(--primary)] flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-xl lg:text-2xl font-light mb-3">Follow Us</p>
              <Link 
                href="https://instagram.com/maedric" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-block text-[var(--accent)] text-2xl lg:text-3xl font-medium transition-opacity"
              >
                <span className="relative inline-block">
                  @Maedric
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--accent)] origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout*/}
      <div className="md:hidden container mx-auto px-4">
        <div className="grid grid-cols-2 gap-1">
          {/* Top Row */}
          <div className="relative aspect-square overflow-hidden">
            <Image 
              src="/images/stay-connected/sc1.jpg" 
              alt="Maedric Jewellery Woman with Earrings" 
              fill
              sizes="50vw"
              priority
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image 
              src="/images/stay-connected/sc4.jpg" 
              alt="Maedric Jewellery Chain Necklace" 
              fill
              sizes="50vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>

          {/* Bottom Row */}
          <div className="relative aspect-square overflow-hidden">
            <Image 
              src="/images/stay-connected/sc3.jpg" 
              alt="Maedric Gold Rings" 
              fill
              sizes="50vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image 
              src="/images/stay-connected/sc2.jpg" 
              alt="Maedric Jewellery Woman with Necklace" 
              fill
              sizes="50vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div>
          </div>
        </div>

        {/* Mobile Follow Us Section */}
        <div className="mt-1 bg-[var(--primary)] py-12 px-4 text-center">
          <p className="text-white text-lg mb-3 font-light tracking-wide">Follow Us</p>
          <Link 
            href="https://instagram.com/maedric" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-block text-[var(--accent)] text-2xl font-medium"
          >
            <span className="relative inline-block">
              @Maedric
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--accent)] origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}