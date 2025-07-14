"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Explore = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-8 lg:gap-10 px-6 md:px-8 lg:px-10 max-w-[1400px] mx-auto my-12">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 relative h-[400px] mb-6 md:mb-0 bg-[var(--secondary)]">
        <Image
          src="/images/explore/ex1.png"
          alt="Jewellery bracelet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-start p-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--primary)] leading-tight mb-2">Jewel Boutique.</h2>
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--primary)] leading-tight mb-12 md:mb-16">Lives Beyond Trends.</h2>
          </div>
          <div className="mt-auto">
            <Button
              variant="outlined"
            >
              Explore Jewellery
            </Button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 relative h-[400px] bg-[var(--secondary)]">
        <Image
          src="/images/explore/ex2.png"
          alt="Arm with bracelet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-start p-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--primary)] leading-tight mb-2">Rare Gems.</h2>
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--primary)] leading-tight mb-12 md:mb-16">Remarkable Stories.</h2>
          </div>
          <div className="mt-auto">
            <Button
              variant="outlined"
            >
              Explore Gemstones
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;