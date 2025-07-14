"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const [email, setEmail] = useState("");
    const year = new Date().getFullYear();

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add newsletter subscription logic here
        console.log("Subscribing email:", email);
        setEmail("");
        // You can add toast notification or other feedback here
    };

    // Footer links with nested items for desktop
    const footerLinks = {
        Explore: [
            { label: "Gemstones", href: "/gemstones" },
            { label: "Jewellery", href: "/jewellery" },
            { label: "Education", href: "/education" },
            { label: "Services", href: "/services" },
        ],
        Contact: [
            { label: "Contact Us", href: "/contact" },
            { label: "About Us", href: "/about" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
    };

    // Mobile navigation links
    const mobileLinks = [
        { label: "Home", href: "/" },
        { label: "Gemstones", href: "/gemstones", hasChevron: true },
        { label: "Jewellery", href: "/jewellery", hasChevron: true },
        { label: "Services", href: "/services" },
        { label: "Education", href: "/education" },
    ];

    // Mobile footer links
    const mobileFooterLinks = [
        { label: "About Us", href: "/about" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
    ];

    // Payment method images
    const paymentMethods = [
        { name: "Stripe", image: "/images/payments/stripe.jpg" },
        { name: "American Express", image: "/images/payments/amex.jpg" },
        { name: "Visa", image: "/images/payments/visa.jpg" },
        { name: "Mastercard", image: "/images/payments/mastercard.jpg" },
        { name: "JCB", image: "/images/payments/jcb.jpg" },
        { name: "Union Pay", image: "/images/payments/unionpay.jpg" },
        { name: "Atome", image: "/images/payments/atome.jpg" },
    ];

    return (
        <footer className="bg-[var(--primary)] text-[var(--secondary)]">
            {/* Desktop Footer */}
            <div className="hidden md:block pt-12 pb-4">
                <div className="container mx-auto px-4">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-12 gap-8 mb-12">
                        {/* Logo and About Section */}
                        <div className="col-span-4">
                            <Link href="/" className="inline-block mb-4">
                                <h1 className="font-[Quiche_Display] font-extralight text-4xl tracking-wider">
                                    MAEDRIC
                                </h1>
                                <p className="text-xs uppercase tracking-widest font-[Figtree]">
                                    Gemstones & Jewellery
                                </p>
                            </Link>
                            <p className="text-xs justify mb-6 opacity-80 max-w-md">
                                At Maedric, we aim to make the beauty of coloured gemstones more
                                accessible, inviting new collectors and jewellery lovers to
                                appreciate true quality and craftsmanship.
                            </p>
                        </div>

                        {/* Navigation Links - Explore */}
                        <div className="col-span-2 ml-auto">
                            <h3 className="text-base font-medium mb-4">Explore</h3>
                            <ul className="space-y-3">
                                {footerLinks.Explore.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs opacity-80 hover:opacity-100 flex items-center group"
                                        >
                                            <svg
                                                className="w-3 h-3 mr-2 transform transition-transform group-hover:translate-x-1"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L16 12L9 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Links */}
                        <div className="col-span-2">
                            <h3 className="text-base font-medium mb-4">Contact</h3>
                            <ul className="space-y-3">
                                {footerLinks.Contact.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs opacity-80 hover:opacity-100 flex items-center group"
                                        >
                                            <svg
                                                className="w-3 h-3 mr-2 transform transition-transform group-hover:translate-x-1"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L16 12L9 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="col-span-4">
                            <h3 className="text-base font-medium mb-4">NewsLetter</h3>
                            <p className="text-xs opacity-80 mb-4">
                                Be the first to discover new collections, stories, and exclusive offers.
                            </p>
                            <form onSubmit={handleSubscribe} className="space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="sarah@yahoomail.com"
                                    className="w-full px-4 py-2 bg-transparent border border-[var(--default-border)] focus:border-opacity-70 outline-none text-xs"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 justify-center border border-[var(--secondary)] border-opacity-40 px-4 py-2 w-36 hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-300 text-xs"
                                >
                                    <span className="mr-1">Subscribe</span>
                                    <Image
                                        src="/icons/arrowrightLight.svg"
                                        alt="Arrow Right"
                                        width={6}
                                        height={6}
                                        />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {paymentMethods.map((method) => (
                            <div
                                key={method.name}
                                className="bg-white rounded flex items-center justify-center h-6 w-10"
                            >
                                <div className="h-full w-full relative">
                                    <Image
                                        src={method.image}
                                        alt={method.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[var(--secondary)] opacity-20 mb-4"></div>

                    {/* Copyright and Social Media */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Language and Currency Selectors - Desktop Only */}
                        <div className="hidden md:flex space-x-4 mb-4">
                            {/* Language Selector */}
                            <div className="border border-[var(--default-border)] px-4 py-2 flex items-center justify-between w-20">
                                <div className="flex items-center">
                                    <Image src="/icons/globe.svg" alt="Language" width={20} height={20} />
                                </div>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-[var(--secondary)]"
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Currency Selector */}
                            <div className="border border-[var(--default-border)] px-4 py-2 flex items-center justify-between w-20">
                                <div className="flex items-center">
                                    <Image src="/icons/wallet.svg" alt="Currency" width={20} height={20} />
                                </div>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-[var(--secondary)]"
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-xs opacity-70 text-center w-full">
                            © {year} Maedric. All rights reserved. Crafted with care, inspired by legacy.
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-4">
                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--secondary)] opacity-70 hover:opacity-100 transition-opacity"
                            >
                                {/* Comment: Add Instagram icon image here */}
                                <div className="h-6 w-6 relative">
                                    <Image
                                        src="/icons/instagram.svg"
                                        alt="Instagram"
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--secondary)] opacity-70 hover:opacity-100 transition-opacity"
                            >
                                {/* Comment: Add TikTok icon image here */}
                                <div className="h-6 w-6 relative">
                                    <Image
                                        src="/icons/tiktok.svg"
                                        alt="TikTok"
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--secondary)] opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <div className="h-6 w-6 relative">
                                    <Image
                                        src="/icons/youtube.svg"
                                        alt="YouTube"
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Footer - Based on the provided image */}
            <div className="md:hidden pt-10 pb-6">
                <div className="px-6">
                    {/* Logo and About */}
                    <div className="mb-8">
                        <Link href="/" className="inline-block mb-4">
                            <h1 className="font-[Quiche_Display] font-extralight text-3xl tracking-wider">
                                MAEDRIC
                            </h1>
                            <p className="text-xs uppercase tracking-widest font-[Figtree]">
                                Gemstones & Jewellery
                            </p>
                        </Link>
                        <p className="text-sm leading-relaxed opacity-80">
                            At Maedric, we aim to make the beauty of coloured gemstones more
                            accessible, inviting new collectors and jewellery lovers to
                            appreciate true quality and craftsmanship.
                        </p>
                    </div>

                    {/* Newsletter - Mobile */}
                    <div className="mb-10">
                        <h3 className="text-base font-medium mb-2 relative">
                            NewsLetter
                            <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-[var(--secondary)] opacity-20"></div>
                        </h3>
                        <p className="text-sm opacity-80 mt-4 mb-4">
                            Be the first to discover new collections, stories, and exclusive offers.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="sarah@yahoomail.com"
                                className="w-full px-4 py-3 bg-transparent border border-[var(--default-border)] focus:border-opacity-70 outline-none text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full py-3 bg-[var(--secondary)] bg-opacity-20 hover:bg-opacity-30 text-[var(--primary)] transition-colors duration-300 text-sm flex items-center justify-center"
                            >
                                Subscribe
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2"
                                >
                                    <path
                                        d="M5 12H19M19 12L12 5M19 12L12 19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[var(--secondary)] opacity-20 mb-6"></div>

                    {/* Mobile Navigation Links */}
                    <nav className="mb-6">
                        <ul className="space-y-4">
                            {mobileLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center justify-between py-1 text-base"
                                    >
                                        {link.label}
                                        {link.hasChevron && (
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L16 12L9 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Button - Mobile */}
                    <Link
                        href="/contact"
                        className="block py-3 mb-10 w-full bg-[var(--accent)] text-[var(--primary)] text-center font-medium"
                    >
                        Contact
                    </Link>

                    {/* Social Media Links - Mobile */}
                    <div className="flex justify-center space-x-6 mb-6">
                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--secondary)] opacity-80"
                        >
                            <div className="h-6 w-6 relative">
                                <Image
                                    src="/icons/instagram.svg"
                                    alt="Instagram"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--secondary)] opacity-80"
                        >
                            <div className="h-6 w-6 relative">
                                <Image
                                    src="/icons/tiktok.svg"
                                    alt="TikTok"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--secondary)] opacity-80"
                        >
                            <div className="h-6 w-6 relative">
                                <Image
                                    src="/icons/youtube.svg"
                                    alt="YouTube"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </a>
                    </div>

                    {/* Mobile Footer Links */}
                    <div className="flex justify-center text-xs opacity-60 space-x-3 mb-6">
                        {mobileFooterLinks.map((link, index) => (
                            <div key={link.label} className="flex items-center">
                                {index > 0 && <span className="mx-2">|</span>}
                                <Link href={link.href}>{link.label}</Link>
                            </div>
                        ))}
                    </div>

                    {/* Payment Methods - Mobile */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {paymentMethods.map((method) => (
                            <div
                                key={method.name}
                                className="bg-white rounded flex items-center justify-center h-4 w-8"
                            >
                                <div className="h-full w-full relative">
                                    <Image
                                        src={method.image}
                                        alt={method.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Copyright - Mobile */}
                    <div className="text-center text-xs opacity-60">
                        © {year} Maedric. All rights reserved. Crafted with care, inspired by legacy.
                    </div>
                </div>
            </div>
        </footer>
    );
}