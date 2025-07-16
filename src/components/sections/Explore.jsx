"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const Explore = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-8 lg:gap-10 px-6 md:px-8 lg:px-10 max-w-[1400px] mx-auto my-10">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 relative h-[250px] md:h-[400px] mb-6 md:mb-0 bg-[var(--secondary)] overflow-hidden">
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
            <Heading
              as="h2"
              align="left"
              color="primary"
              className="text-[var(--primary)] font-normal !mb-0"
            >
              Jewel Boutique.
            </Heading>

            <Heading
              as="h2"
              align="left"
              color="primary"
              className="text-[var(--primary)] font-normal !mb-0"
            >
              Lives Beyond Trends.
            </Heading>
          </div>
          <div className="mt-auto">
            <Button variant="outlined">Explore Jewellery</Button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 relative h-[250px] md:h-[400px] bg-[var(--secondary)] overflow-hidden">
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
            <Heading
              as="h2"
              align="left"
              color="primary"
              className="text-[var(--primary)] font-normal !mb-0"
            >
              Rare Gems.
            </Heading>

            <Heading
              as="h2"
              align="left"
              color="primary"
              className="text-[var(--primary)] font-normal !mb-0"
            >
              Remarkable Stories.
            </Heading>
          </div>
          <div className="mt-auto">
            <Button variant="outlined">Explore Gemstones</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
