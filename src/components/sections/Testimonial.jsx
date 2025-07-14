"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialSlide from '../ui/TestimonialSlide';
import Heading from '../ui/Heading';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonial = {
    name: "Ivan Teo",
    location: "Singapore",
    quote: "I am beyond grateful to Maedric for helping me create the perfect engagement ring. With his/their expert guidance on diamond selection and design, we crafted a ring that my girlfriend absolutely adores. The craftsmanship and attention to detail were impeccable, and it was clear that Maedric genuinely cares about delivering the best. My fiancé hasn't stopped admiring the ring since I proposed, and I couldn't be happier with the final result. If you're looking for a beautiful, custom-made ring with exceptional service, I highly recommend Maedric.",
    images: [
      "/images/testimonials/testimonial1.png",
      "/images/testimonials/testimonial2.png"
    ]
  };

  // For desktop view - 3 different slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block w-full py-16 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[var(--foreground)]">

        </h2>
        <Heading
          as="h1"
          align="center"
          color="primary"
          className="mb-8"
        >
          Client Testimonials
        </Heading>
        <p className="text-center mt-4 mb-12 text-gray-600">
          Real stories from those who wear Maedric with pride.
        </p>

        <div className="relative max-w-[1200px] mx-auto px-14">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
            aria-label="Previous testimonial"
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
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
            aria-label="Next testimonial"
          >
            <Image
              src="/icons/arrowright.svg"
              width={18}
              height={18}
              alt="Next"
            />
          </button>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full aspect-square md:aspect-[4/3]"
                >
                  {/* Slide 0: Combined view */}
                  {currentSlide === 0 && (
                    <div className="p-4 relative h-full">
                      {/* Main image*/}
                      <div className="relative w-[400px] h-full shadow-xl">
                        <Image
                          src={testimonial.images[0]}
                          alt="Client testimonial"
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </div>

                      {/* Overlay image - positioned absolutely */}
                      <div className="absolute -right-0 top-40 w-40 h-40">
                        <Image
                          src={testimonial.images[1]}
                          alt="Ring close-up"
                          layout="fill"
                          objectFit="cover"
                          priority     
                        />
                      </div>
                    </div>
                  )}

                  {/* Slide 1: First image only */}
                  {currentSlide === 1 && (
                    <div className="p-4 relative h-full">
                      <div className="relative w-[full] h-full">
                        <Image
                          src={testimonial.images[0]}
                          alt="Client testimonial"
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                    </div>
                  )}

                  {/* Slide 2: Second image only */}
                  {currentSlide === 2 && (
                    <div className="p-4 relative h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={testimonial.images[1]}
                          alt="Ring close-up"
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full lg:w-1/2">
              <blockquote className="text-lg text-[var(--foreground)]">
                <Heading
                  as="body"
                  align="justify"
                  color="primary"
                  className="mb-8"
                >
                  "{testimonial.quote}"
                </Heading>
                <footer className="font-semibold text-right text-xl">
                  {testimonial.name} <span className="font-normal">, {testimonial.location}</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full bg-[var(--primary)] py-10">
        <TestimonialSlide
          testimonial={testimonial}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          isMobile={true}
        />
      </div>
    </>
  );
};

export default Testimonial;