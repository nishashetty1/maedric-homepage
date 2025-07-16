"use client";

import React from "react";
import Heading from "../ui/Heading";
import { JewelleryTypeBox } from "../ui/JewelleryTypeBox";

const JewelleryType = () => {
  // Jewellery type data with images and links
  const jewelleryTypes = [
    {
      id: 1,
      title: "Ring",
      defaultImage: "/images/jewellery-type/ring.jpg",
      hoverImage: "/images/jewellery-type/ring2.png",
      link: "/jewellery/ring",
    },
    {
      id: 2,
      title: "Earrings",
      defaultImage: "/images/jewellery-type/earrings.jpg",
      hoverImage: "/images/jewellery-type/earrings.jpg",
      link: "/jewellery/earrings",
    },
    {
      id: 3,
      title: "Necklace",
      defaultImage: "/images/jewellery-type/necklace.jpg",
      hoverImage: "/images/jewellery-type/necklace.jpg",
      link: "/jewellery/necklace",
    },
    {
      id: 4,
      title: "Bracelet",
      defaultImage: "/images/jewellery-type/bracelet.jpg",
      hoverImage: "/images/jewellery-type/bracelet.jpg",
      link: "/jewellery/bracelet",
    },
    {
      id: 5,
      title: "Brooch",
      defaultImage: "/images/jewellery-type/brooch.jpg",
      hoverImage: "/images/jewellery-type/brooch.jpg",
      link: "/jewellery/brooch",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto pt-10">
      <div className="container mx-auto px-8">
        {/* Section Heading */}
        <div className="mb-8 md:mb-12">
          <Heading as="h2" align="left" color="primary" className="mb-8">
            Shop By Jewellery Type
          </Heading>
        </div>

        {/* Jewellery Type Grid - Responsive Layout */}
        <div className="flex flex-col items-center">
          {/* Desktop & Tablet: All items in a single row */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 lg:gap-8 w-full max-w-[1400px]">
            {jewelleryTypes.map((item) => (
              <div key={item.id} className="flex justify-center">
                <JewelleryTypeBox
                  title={item.title}
                  defaultImage={item.defaultImage}
                  hoverImage={item.hoverImage}
                  link={item.link}
                />
              </div>
            ))}
          </div>

          {/* Mobile: 3 items in first row, 2 in second row */}
          <div className="md:hidden w-full">
            {/* First row - 3 items */}
            <div className="grid grid-cols-3 gap-2 xs:gap-3 mb-4 xs:mb-6 w-full">
              {jewelleryTypes.slice(0, 3).map((item) => (
                <div key={item.id} className="flex justify-center">
                  <JewelleryTypeBox
                    title={item.title}
                    defaultImage={item.defaultImage}
                    hoverImage={item.hoverImage}
                    link={item.link}
                  />
                </div>
              ))}
            </div>

            {/* Second row - 2 items (centered) */}
            <div className="flex justify-center gap-2 xs:gap-3 w-full">
              {jewelleryTypes.slice(3).map((item) => (
                <div key={item.id} className="w-1/3">
                  <JewelleryTypeBox
                    title={item.title}
                    defaultImage={item.defaultImage}
                    hoverImage={item.hoverImage}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelleryType;
