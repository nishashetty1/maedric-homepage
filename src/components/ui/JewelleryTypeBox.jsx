"use client";

import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

/**
 * Responsive JewelleryTypeBox component
 * - Adapts size based on screen width
 * - Maintains aspect ratio
 * - Properly scales images and text
 * - Smooth hover effects
 */
export const JewelleryTypeBox = ({
  title,
  defaultImage,
  hoverImage,
  link,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  // Handle mouse events for image
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Handle mouse events for title
  const handleTitleMouseEnter = () => setIsTitleHovered(true);
  const handleTitleMouseLeave = () => setIsTitleHovered(false);

  const boxContent = (
    <>
      {/* Box with image - Now fully responsive */}
      <div
        className={twMerge(
          "relative overflow-hidden aspect-square w-full max-w-[236px] bg-[#F6F6F6]",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Default image */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"
            }`}
        >
          <Image
            src={defaultImage}
            alt={title || "Jewellery item"}
            fill
            sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 236px"
            className="object-cover"
          />
        </div>

        {/* Hover image */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={hoverImage || defaultImage}
            alt={`${title || "Jewellery item"} - alternate view`}
            fill
            sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 236px"
            className="object-cover bg-[var(--primary-hover)]"
          />
        </div>
      </div>

      {/* Title below the box - Now responsive */}
      {title && (
        <div
          className="w-full mt-2 sm:mt-3 text-center"
          onMouseEnter={handleTitleMouseEnter}
          onMouseLeave={handleTitleMouseLeave}
        >
          <span
            className={`font-[Figtree] font-normal text-base sm:text-lg md:text-xl text-[var(--primary)] ${isTitleHovered
                ? "underline decoration-solid underline-offset-4"
                : ""
              }`}
          >
            {title}
          </span>
        </div>
      )}
    </>
  );

  // If link is provided, wrap in anchor tag
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