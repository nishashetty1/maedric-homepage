"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Dropdown content for menu items
  const dropdowns = {
    "Gemstones": ["Featured", "Ruby", "Sapphire", "Emerald", "Diamond"],
    "Jewellery": ["Featured", "Rings", "Earring", "Necklaces", "Bracelets", "Brooches"],
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Toggle dropdown on mobile
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const LINKS = [
    { label: "Home", href: "/" },
    { label: "Gemstones", href: "/gemstones", hasDropdown: true },
    { label: "Jewellery", href: "/jewellery", hasDropdown: true },
    { label: "Services", href: "/services" },
    { label: "Education", href: "/education" },
  ];

  return (
    <>
      {/* WRAPPER */}
      <header className="relative z-50 shadow-md bg-[var(--primary)] opacity-80">
        {/* TOP BAR */}
        <div className="
            w-full text-[var(--secondary)]
            border-b-[0.2px] border-[var(--default-border)]
            ">
          <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
            {/* Logo - left on mobile, centered on desktop */}
            <div className="flex md:w-1/3 md:justify-start">
              {/* Empty for spacing on desktop */}
            </div>

            {/* Logo - left on mobile, centered on desktop */}
            <div className="flex justify-start md:justify-center w-full md:w-1/3">
              <Link href="/" className="text-left md:text-center">
                <h1 className="font-[Quiche_Display] font-extralight text-3xl md:text-4xl tracking-wider">
                  MAEDRIC
                </h1>
                <p className="text-[10px] md:texl-xl uppercase tracking-widest font-[Figtree]">
                  Gemstones & Jewellery
                </p>
              </Link>
            </div>

            {/* icons + hamburger */}
            <div className="flex justify-end w-auto md:w-1/3">
              {/* desktop: show all icons */}
              <div className="hidden md:flex items-center space-x-4">
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

              {/* mobile: show wishlist, cart, hamburger */}
              <div className="md:hidden flex items-center space-x-4">
                <button aria-label="Wishlist" className="relative">
                  <Image src="/icons/heart.svg" alt="Wishlist" width={18} height={18} style={{ maxWidth: 'none' }}/>
                </button>
                <button aria-label="Cart" className="relative">
                  <Image src="/icons/cart.svg" alt="Cart" width={18} height={18} style={{ maxWidth: 'none' }}/>
                  <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-[var(--primary)] rounded-full text-[10px] font-bold px-1">
                    1
                  </span>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NAV LINKS ROW (sticky) */}
        <div className={`
    hidden md:block
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
                    className="hover:text-[var(--accent)] transition py-2 block"
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

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
              fixed inset-0 z-[100]
              bg-[var(--primary)] text-[var(--secondary)]
              flex flex-col
            "
            ref={menuRef}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <motion.button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                whileTap={{ scale: 0.9 }}
              >
                <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
              </motion.button>
            </div>

            {/* Search input */}
            <div className="px-6 mb-6">
              <div className="
                  border border-white/40 rounded
                  flex items-center px-3
                ">
                <input
                  placeholder="Search"
                  className="flex-grow bg-transparent py-2 text-sm outline-none"
                />
                <button>
                  <Image src="/icons/search.svg" alt="Search" width={18} height={18} />
                </button>
              </div>
            </div>

            {/* Mobile navigation links */}
            <div className="flex-1 px-6">
              <nav>
                <ul className="space-y-4">
                  {LINKS.map((link) => (
                    <li key={link.label}>
                      {link.hasDropdown ? (
                        <div>
                          <motion.div
                            className="flex justify-between items-center py-2"
                            onClick={() => toggleDropdown(link.label)}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>{link.label}</span>
                            <motion.svg
                              animate={{ rotate: activeDropdown === link.label ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </motion.svg>
                          </motion.div>

                          {/* Mobile dropdown content */}
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="pl-4 space-y-2 overflow-hidden"
                              >
                                {dropdowns[link.label]?.map((item) => (
                                  <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                  >
                                    <Link
                                      href={`/${item.toLowerCase()}`}
                                      className="block py-1 text-white/80 hover:text-white"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {item}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.div whileTap={{ scale: 0.98 }}>
                          <Link
                            href={link.href}
                            className="block py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact button */}
            <div className="px-6 mb-6">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="
                    block bg-[var(--accent)] text-[var(--primary)]
                    text-center py-3 rounded font-medium
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* User links */}
            <div className="px-6 mb-6">
              <div className="space-y-4">
                <motion.button
                  className="flex items-center space-x-2 py-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <Image src="/icons/account.svg" alt="Account" width={18} height={18} />
                  <span>Login</span>
                </motion.button>
                <motion.button
                  className="flex items-center space-x-2 py-2 relative"
                  whileTap={{ scale: 0.98 }}
                >
                  <Image src="/icons/heart.svg" alt="Wishlist" width={18} height={18} />
                  <span className="absolute top-0 left-3 bg-[var(--accent)] text-[var(--primary)] rounded-full text-[10px] font-bold px-1">
                    1
                  </span>
                  <span>WishList</span>
                </motion.button>
              </div>
            </div>

            {/* Border separator */}
            <div className="border-t border-white/20 mx-6"></div>

            {/* Social links */}
            <div className="px-6 py-6 flex justify-center space-x-6">
              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="TikTok"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src="/icons/tiktok.svg" alt="TikTok" width={20} height={20} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="YouTube"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src="/icons/youtube.svg" alt="YouTube" width={20} height={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}