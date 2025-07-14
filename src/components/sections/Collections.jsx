"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";

const CollectionCard = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={`/images/our-collections/oc${index}.png`} 
            alt={`Collection ${index}`}
            fill
            className="object-cover transition-transform duration-700 ease-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={`/images/our-collections/oc${index}hover.png`} 
            alt={`Collection ${index} hover`}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-2 xs:p-3 sm:p-4 w-full">
        <Link href={`/collections/${index}`} className="group flex items-center text-[var(--primary)] font-medium text-xs xs:text-sm sm:text-base">
          <span className="mr-1 sm:mr-2">Shop Collection</span>
          <motion.svg 
            width="14" 
            height="8" 
            viewBox="0 0 18 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.path 
              d="M1 6H17" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <motion.path 
              d="M12 1L17 6L12 11" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              animate={{ 
                d: isHovered 
                  ? "M12 1L17 6L12 11" 
                  : "M12 1L17 6L12 11" 
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </Link>
      </div>
    </div>
  );
};

const Collections = () => {
  return (
    <section className="w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-[1400px]">
      <div className="flex flex-wrap justify-between items-center mb-4 sm:mb-6">
        <Heading
            as="h2"
            align="center"
            color="primary"
            className="mb-8"
          >
            Our Collections
          </Heading>
        <div className="hidden md:block">
          <Link href="/collections" className="group inline-flex items-center text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors">
            <span className="mr-2">View All</span>
            <svg 
              width="18" 
              height="12" 
              viewBox="0 0 18 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M1 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 1L17 6L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Maintain consistent columns across breakpoints */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
          >
            <CollectionCard index={index} />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-6 text-right md:hidden">
        <Link href="/collections" className="group inline-flex items-center text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors">
          <span className="mr-2">View All</span>
          <svg 
            width="18" 
            height="12" 
            viewBox="0 0 18 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M1 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 1L17 6L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Collections;