"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "@/components/ui/Heading";

const TestimonialSlide = ({
  testimonial,
  currentSlide,
  nextSlide,
  prevSlide,
}) => {
  return (
    <div className="w-full max-w-[400px] mx-auto relative px-10">
      {/* Navigation buttons positioned outside the main content */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-2/5 transform -translate-y-1/2 z-20 opacity-80"
        aria-label="Previous testimonial"
      >
        <Image
          src="/icons/arrowleftLight.svg"
          width={10}
          height={10}
          alt="Previous"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-2/5 transform -translate-y-1/2 z-20 opacity-80"
        aria-label="Next testimonial"
      >
        <Image
          src="/icons/arrowrightLight.svg"
          width={10}
          height={10}
          alt="Next"
        />
      </button>

      {/* AnimatePresence wrapper around the entire content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Heading as="h2" align="center" color="white" className="mb-8">
            Client Story
          </Heading>
          <Heading
            as="body-light"
            align="center"
            color="white"
            className="mb-8"
          >
            Real stories from those who wear Maedric with pride.
          </Heading>

          <div className="flex flex-col">
            <div className="relative w-full mx-auto aspect-square">
              {/* Mobile Slide 0: First image (testimonial1) */}
              {currentSlide === 0 && (
                <div className="relative w-full h-full">
                  <Image
                    src={testimonial.images[0]}
                    fill
                    className="object-contain"
                    alt="Client testimonial"
                  />
                </div>
              )}

              {/* Mobile Slide 1: Second image (testimonial2) */}
              {currentSlide === 1 && (
                <div className="relative w-full h-full">
                  <Image
                    src={testimonial.images[1]}
                    fill
                    className="object-cover"
                    alt="Ring close-up"
                  />
                </div>
              )}

              {/* Mobile Slide 2: Combined view (stacked) */}
              {currentSlide === 2 && (
                <div className="relative w-full h-full">
                  <Image
                    src={testimonial.images[0]}
                    fill
                    className="object-contain"
                    alt="Client testimonial"
                  />
                  <div className="absolute bottom-2 right-0 w-1/3 h-1/3 shadow-md">
                    <Image
                      src={testimonial.images[1]}
                      fill
                      className="object-cover"
                      alt="Ring close-up"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="w-full mt-6 text-white">
              <blockquote className="text-sm">
                <Heading
                  as="body-light"
                  align="justify"
                  color="white"
                  className="mb-4 !text-sm"
                >
                  "{testimonial.quote}"
                </Heading>

                <Heading as="h4" align="right" color="white" className="!mb-2">
                  {testimonial.name}, {testimonial.location}
                </Heading>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlide;
