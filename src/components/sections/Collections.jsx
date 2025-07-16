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
      className="relative overflow-hidden"
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

      <div className="absolute bottom-0 left-0 p-2 xs:p-3 sm:p-4 w-full bg-transparent backdrop-blur-sm">
        <Link
          href="/collections"
          className="group inline-flex items-center gap-4"
        >
          <Heading
            as="subheading"
            align="left"
            color="primary"
            className="text-[var(--primary)] font-medium !mb-0"
          >
            Shop Collection
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
    </div>
  );
};

const Collections = () => {
  return (
    <section className="w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-[1400px]">
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
          <Link
            href="/collections"
            className="group inline-flex items-center gap-4"
          >
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
        <Link
          href="/collections"
          className="group inline-flex items-center gap-2 pr-2"
        >
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
            width={8}
            height={6}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default Collections;
