"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Dropdown content for menu items
  const dropdowns = {
    "Gemstones": ["Featured", "Ruby", "Sapphire", "Emerald", "Diamond"],
    "Jewellery": ["Featured", "Rings", "Earring", "Necklaces", "Bracelets", "Brooches"],
  };

  // Track screen size and scroll position
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1050);
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const LINKS = [
    { label: "Home", href: "/" },
    { label: "Gemstones", href: "/gemstones", hasDropdown: true },
    { label: "Jewellery", href: "/jewellery", hasDropdown: true },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  // Only apply the scrolled effect if we're on a large screen
  const shouldApplyScrollEffect = isLargeScreen && isScrolled;

  return (
    <>
      {/* WRAPPER - Hidden on small devices (< 768px) */}
      <header className={`
        fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out
        ${shouldApplyScrollEffect ? 'shadow-lg' : ''}
        hidden md:block
      `}>
        {/* TOP BAR - Only shown when not scrolled or on smaller screens */}
        <div className={`
            w-full text-[var(--secondary)] bg-[var(--primary)] opacity-80
            border-b-[0.2px] border-[var(--default-border)]
            transition-all duration-500 ease-in-out
            ${shouldApplyScrollEffect ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-80'}
        `}>
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            {/* Left section - empty for spacing */}
            <div className="w-1/3 justify-start">
              {/* Empty for spacing */}
            </div>

            {/* Center logo section */}
            <div className="flex justify-center w-1/3">
              <Link href="/" className="text-center">
                <h1 className="font-[Cinzel] font-extralight text-5xl tracking-wider">
                  MAEDRIC
                </h1>
                <p className="font-[Cinzel] text-[18px] uppercase tracking-widest">
                  Gemstones & Jewellery
                </p>
              </Link>
            </div>

            {/* Right section - icons */}
            <div className="flex justify-end w-1/3">
              <div className="flex items-center space-x-4">
                {/* Search */}
                <button aria-label="Search" className="transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/search.svg" alt="Search" width={18} height={18} />
                </button>

                {/* WishList */}
                <button aria-label="Wishlist" className="relative transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/heart.svg" alt="Wishlist" width={18} height={18} />
                </button>

                {/* Account */}
                <button aria-label="Account" className="transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/account.svg" alt="Account" width={18} height={18} />
                </button>

                {/* Cart */}
                <button aria-label="Cart" className="relative transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/cart.svg" alt="Cart" width={18} height={18} />
                  <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-[var(--primary)] rounded-full text-[10px] font-bold px-1">
                    1
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NAV LINKS ROW (sticky) */}
        <div className={`
          bg-[var(--primary)] opacity-80 transition-all duration-500 ease-in-out
          ${shouldApplyScrollEffect ? 'py-5' : 'py-3'}
        `}>
          <div className={`container mx-auto px-4 flex transition-all duration-500 ease-in-out 
            ${shouldApplyScrollEffect ? 'justify-between items-center' : 'justify-center'}`}>

            {/* Logo - Only visible when scrolled on large screens */}
            {shouldApplyScrollEffect && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link href="/" className="block">
                  <h1 className="font-[Cinzel] font-extralight text-3xl tracking-wider text-[var(--secondary)]">
                    MAEDRIC
                  </h1>
                  <p className="font-[Cinzel] text-xs uppercase tracking-widest text-[var(--secondary)] mt-1">
                    Gemstones & Jewellery
                  </p>
                </Link>
              </motion.div>
            )}

            <nav className={`font-[Figtree] text-sm font-medium text-[var(--secondary)] ${shouldApplyScrollEffect ? 'flex-grow-0' : ''}`}>
              <div className="flex items-center space-x-6">
                {LINKS.map((link) => (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className="font-[Figtree] text-[16px] hover:text-[var(--accent)] transition-all duration-300 py-2 block"
                    >
                      {link.label}
                    </Link>

                    {/* Desktop dropdown menus */}
                    {link.hasDropdown && dropdowns[link.label] && (
                      <div className="
                        absolute left-0 top-full pt-2
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-300 ease-in-out z-50
                      ">
                        <div className="bg-[var(--primary)] shadow-md py-2 px-4 w-48">
                          {dropdowns[link.label].map((item) => (
                            <Link
                              key={item}
                              href={`/${item.toLowerCase()}`}
                              className="block py-2 hover:text-[var(--accent)] transition-all duration-300"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <Link
                  href="/contact"
                  className="
                    bg-[var(--accent)] text-[var(--primary)]
                    px-4 py-1 text-sm font-[Figtree] font-medium
                    hover:opacity-90 transition-all duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </div>
            </nav>

            {/* Icons - Only visible when scrolled on large screens */}
            {shouldApplyScrollEffect && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center space-x-4"
              >
                <button aria-label="Search" className="transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/search.svg" alt="Search" width={18} height={18} />
                </button>
                <button aria-label="Wishlist" className="relative transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/heart.svg" alt="Wishlist" width={18} height={18} />
                </button>
                <button aria-label="Account" className="transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/account.svg" alt="Account" width={18} height={18} />
                </button>
                <button aria-label="Cart" className="relative transition-transform duration-300 hover:scale-110">
                  <Image src="/icons/cart.svg" alt="Cart" width={18} height={18} />
                  <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-[var(--primary)] rounded-full text-[10px] font-bold px-1">
                    1
                  </span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header - Only visible on medium screens and up */}
      <div className={`w-full transition-all duration-500 ease-in-out hidden md:block 
        ${shouldApplyScrollEffect ? 'h-24' : 'h-[160px]'}`}>
      </div>
    </>
  );
}