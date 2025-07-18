"use client";

import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Heading from "./Heading";

export const JewelleryTypeBox = ({
  title,
  defaultImage,
  hoverImage,
  link,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse events for image
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const boxContent = (
    <>
      {/* Box with image */}
      <div
        className={twMerge(
          "relative overflow-hidden aspect-square w-full max-w-[236px] bg-[#F6F6F6] group",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Default image */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out transform scale-100"
          style={{
            opacity: isHovered ? 0 : 1,
            transform: `scale(${isHovered ? 1.05 : 1})`,
          }}
        >
          <Image
            src={defaultImage}
            alt={title || "Jewellery item"}
            fill
            sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 236px"
            className="object-cover"
            priority
          />
        </div>

        {/* Hover image */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out transform"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `scale(${isHovered ? 1 : 1.05})`,
          }}
        >
          <Image
            src={hoverImage || defaultImage}
            alt={`${title || "Jewellery item"} - alternate view`}
            fill
            sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 236px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Title below the box */}
      {title && (
        <div className="w-full mt-2 sm:mt-3 text-center">
          <Heading
            as="header-text"
            align="center"
            color="primary"
            className="!text-[14px] mb-8 hover:underline decoration-solid underline-offset-4"
          >
            {title}
          </Heading>
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        className="block no-underline w-full"
        aria-label={`View ${title || "jewellery item"}`}
      >
        {boxContent}
      </a>
    );
  }

  return <div className="w-full">{boxContent}</div>;
};

export default JewelleryTypeBox;