"use client"

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PopularBox from '../ui/PopularBox';
import Heading from '../ui/Heading';
import Link from 'next/link';

const Popular = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Restructured products for tablet view - 2 cards per slide
  const products = [
    // First slide - 2 cards for tablet, 4 for desktop
    [
      {
        id: 1,
        image: '/images/popular/1.png',
        category: 'Rings',
        name: '18k WG Yellow Sapphire Ring',
        isFavorite: false,
      },
      {
        id: 2,
        image: '/images/popular/2.png',
        category: 'Rings',
        name: '18k WG Hot Pink Ruby Ring',
        isFavorite: false,
      },
      {
        id: 3,
        image: '/images/popular/3.png',
        category: 'Rings',
        name: '18k White Gold Diamond Ring',
        isFavorite: false,
        hideOnTablet: true,
      },
      {
        id: 4,
        image: '/images/popular/4.png',
        category: 'Rings',
        name: '18k WG Pink Ruby Ring',
        isFavorite: false,
        hideOnTablet: true,
      },
    ],
    // Second slide - next 2 cards for tablet, repeat for desktop
    [
      {
        id: 5,
        image: '/images/popular/3.png',
        category: 'Rings',
        name: '18k White Gold Diamond Ring',
        isFavorite: false,
      },
      {
        id: 6,
        image: '/images/popular/4.png',
        category: 'Rings',
        name: '18k WG Pink Ruby Ring',
        isFavorite: false,
      },
      {
        id: 7,
        image: '/images/popular/1.png',
        category: 'Rings',
        name: '18k WG Yellow Sapphire Ring',
        isFavorite: false,
        hideOnTablet: true,
      },
      {
        id: 8,
        image: '/images/popular/2.png',
        category: 'Rings',
        name: '18k WG Hot Pink Ruby Ring',
        isFavorite: false,
        hideOnTablet: true,
      },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="w-full py-12 max-w-[1100px] mx-auto hidden md:block">
      <Heading
        as="h2"
        align="center"
        color="primary"
        className="mb-8"
      >
        Popular Jewellery
      </Heading>

      <Heading
        as="body-light"
        align="center"
        color="primary"
        className="mt-4 mb-12 max-w-4xl mx-auto"
      >
        Discover what everyone&apos;s loving right now — our most popular pieces, handpicked based on what&apos;s
        trending with Maedric customers this season.
      </Heading>

      <div className="flex justify-end mb-4 px-4">

        <Link href="/collections" className="group inline-flex items-center gap-4">
            <Heading
              as="subheading"
              align="left"
              color="primary"
              className="text-[var(--primary)] font-medium !mb-0"
            >
              View All
            </Heading>
            <Image
              src="/icons/arrowright.svg"
              alt="Arrow Right Icon"
              width={10}
              height={8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
      </div>

      <div className="relative px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            ref={sliderRef}
            initial={{ opacity: 0.3, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.3, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5
            }}
            className="w-full"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {products[currentSlide].map((product) => (
                <div
                  key={product.id}
                  className={product.hideOnTablet ? "hidden lg:block" : "block"}
                >
                  <PopularBox
                    id={product.id}
                    image={product.image}
                    category={product.category}
                    name={product.name}
                    isFavorite={product.isFavorite}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          aria-label="Previous slide"
        >
          <Image
            src="/icons/arrowleft.svg"
            width={18}
            height={18}
            alt="Previous"
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer "
          aria-label="Next slide"
        >
          <Image
            src="/icons/arrowright.svg"
            width={18}
            height={18}
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
};

export default Popular;