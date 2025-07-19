"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Dropdown content for menu items
  const dropdowns = {
    "Gemstones": ["Featured", "Ruby", "Sapphire", "Emerald", "Diamond"],
    "Jewellery": ["Featured", "Rings", "Earring", "Necklaces", "Bracelets", "Brooches"],
  };

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
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

  return (
    <header className="relative z-50 shadow-md bg-[var(--primary)] opacity-80 hidden md:block">
      {/* TOP BAR */}
      <div className="w-full text-[var(--secondary)] border-b-[0.2px] border-[var(--default-border)]
          ">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Left section - empty for spacing */}
          <div className="w-1/3 justify-start">
            {/* Empty for spacing on desktop */}
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
              <button aria-label="Search">
                <Image src="/icons/search.svg" alt="Search" width={18} height={18} />
              </button>

              {/* WishList */}
              <button aria-label="Wishlist" className="relative">
                <Image src="/icons/heart.svg" alt="Wishlist" width={18} height={18} />
              </button>

              {/* Account */}
              <button aria-label="Account">
                <Image src="/icons/account.svg" alt="Account" width={18} height={18} />
              </button>

              {/* Cart */}
              <button aria-label="Cart" className="relative">
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
        sticky top-0 z-40 text-[var(--secondary)]
        transition-all duration-300
        ${isScrolled ? 'shadow-md' : ''}
      `}>
        <nav className="container mx-auto px-4 py-3 flex justify-center font-[Figtree] text-sm font-medium">
          <div className="flex items-center space-x-6">
            {LINKS.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="font-[Figtree] hover:text-[var(--accent)] transition py-2 block"
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
                          className="block py-2 hover:text-[var(--accent)] transition"
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
                hover:opacity-90 transition"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}