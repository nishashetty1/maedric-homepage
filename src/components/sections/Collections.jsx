"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import ViewAllButton from "../ui/ViewAllButton";

const CollectionCard = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {/* Default image */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            opacity: isHovered ? 0 : 1,
            transform: `scale(${isHovered ? 1.05 : 1})`,
          }}
        >
          <Image
            src={`/images/our-collections/oc${index}.png`}
            alt={`Collection ${index}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Hover image */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `scale(${isHovered ? 1 : 1.05})`,
          }}
        >
          <Image
            src={`/images/our-collections/oc${index}hover.png`}
            alt={`Collection ${index} hover`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-2 xs:p-3 sm:p-4 w-full bg-transparent backdrop-blur-sm hover:backdrop-blur-lg">
        <ViewAllButton href="/collections" text="Shop Collection" />
      </div>
    </div>
  );
};

const Collections = () => {
  return (
    <section className="w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-[1100px]">
      <div className="flex flex-wrap justify-between items-center md:mb-4">
        <div className="w-full md:w-auto text-center md:text-left">
          <Heading
            as="h2"
            align="left"
            color="primary"
            className="mb-8 md:mb-0 text-center"
          >
            Our Collections
          </Heading>
        </div>

        <div className="hidden md:block">
          <ViewAllButton href="/collections" />
        </div>
      </div>

      {/* Maintain consistent columns across breakpoints */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 px-1">
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <CollectionCard index={index} />
          </motion.div>
        ))}
      </div>

      <div className="mt-3 sm:mt-4 text-right md:hidden">
        <ViewAllButton
          href="/collections"
          className="pr-2"
        />
      </div>
    </section>
  );
};

export default Collections;