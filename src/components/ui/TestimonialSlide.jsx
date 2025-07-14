"use client"

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlide = ({ testimonial, currentSlide, nextSlide, prevSlide }) => {
  return (
    <div className="w-full max-w-[400px] mx-auto relative px-10">
      <h2 className="text-3xl font-serif text-center text-white">
        Client Story
      </h2>
      
      <p className="text-center mt-2 mb-8 text-white/80 text-sm">
        Real stories from those who wear Maedric with pride.
      </p>
      
      {/* Navigation buttons positioned outside the content */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 opacity-80"
        aria-label="Previous image"
      >
        <Image 
          src="/icons/arrowleftLight.svg" 
          width={16} 
          height={16} 
          alt="Previous"
        />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 opacity-80"
        aria-label="Next image"
      >
        <Image 
          src="/icons/arrowrightLight.svg" 
          width={16} 
          height={16} 
          alt="Next"
        />
      </button>
      
      <div className="flex flex-col">
        <div className="relative w-full mx-auto aspect-square">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative"
            >
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
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="w-full mt-6 text-white">
          <blockquote className="text-sm">
            <p className="mb-4 text-justify">"{testimonial.quote}"</p>
            <footer className="font-semibold text-right text-base">
              {testimonial.name} <span className="font-normal">, {testimonial.location}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;