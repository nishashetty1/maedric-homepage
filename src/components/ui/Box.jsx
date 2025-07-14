"use client";

import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Heading from "./Heading";
import Label from "./Label";

/**
 * Versatile Box component with multiple variants and hover effects
 *
 * @param {Object} props - Component props
 * @param {'type'|'collection'|'product'|'feature'|'category'|'jewellery'} props.variant - Box variant
 * @param {string} props.title - Box title
 * @param {string} props.subtitle - Optional subtitle
 * @param {string} props.defaultImage - Default image URL
 * @param {string} props.hoverImage - Image URL to show on hover
 * @param {string} props.link - Optional link for the box
 * @param {boolean} props.showLabel - Whether to show a label
 * @param {string} props.labelText - Text for the label, if shown
 * @param {'light'|'dark'} props.labelVariant - Label variant
 * @param {boolean} props.titleBelowBox - Whether to display title below the box (for jewellery type)
 * @param {string} props.className - Additional CSS classes
 */

export default function Box({
  variant = "type",
  title,
  subtitle,
  defaultImage,
  hoverImage,
  link,
  showLabel = false,
  labelText = "View Details",
  labelVariant = "dark",
  titleBelowBox = false,
  className = "",
  ...rest
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  // Base styles for the box
  const baseStyles = "relative overflow-hidden transition-all duration-300";

  // Variant-specific styles
  const variantStyles = {
    // Jewellery type box - square format
    type: "w-[236px] h-[236px] bg-[#F6F6F6]",

    // Jewellery type with title below (special variant)
    jewellery: "w-[236px] h-[236px] bg-[var(--jewellery-type)]",

    // Collection box - rectangular with more info
    collection: "w-[360px] h-[420px] bg-white",

    // Product box - product display with price
    product: "w-[280px] h-[360px] bg-white",

    // Feature box - highlight box with accent
    feature: "w-[400px] h-[300px] bg-[var(--accent-05)]",

    // Category box - for category navigation
    category: "w-[200px] h-[200px] bg-[#F6F6F6]",
  };

  // Content styles based on variant
  const contentStyles = {
    type: "absolute bottom-4 left-0 w-full text-center",
    jewellery: "absolute bottom-4 left-0 w-full text-center",
    collection: "absolute bottom-6 left-0 w-full text-center px-4",
    product: "absolute bottom-4 left-0 w-full px-3",
    feature: "absolute bottom-6 left-6 max-w-[80%]",
    category: "absolute bottom-3 left-0 w-full text-center",
  };

  // Handle mouse events
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Handle mouse events for title (when title is below box)
  const handleTitleMouseEnter = () => setIsTitleHovered(true);
  const handleTitleMouseLeave = () => setIsTitleHovered(false);

  // Get heading style based on variant
  const headingStyle = {
    type: "h4",
    jewellery: "h4",
    collection: "h3",
    product: "subheading",
    feature: "h3",
    category: "subheading",
  };

  // Render the inner content based on variant
  const renderContent = () => {
    // For jewellery variant with title below, don't render title inside the box
    if (variant === "jewellery" && titleBelowBox) {
      return null;
    }

    return (
      <div className={contentStyles[variant]}>
        <Heading
          as={headingStyle[variant]}
          color={variant === "feature" ? "light" : "primary"}
          align="left"
        >
          {title}
        </Heading>

        {subtitle && (
          <Heading
            as="body-small"
            color={variant === "feature" ? "light" : "primary"}
            align={variant === "feature" ? "left" : "center"}
            className="mt-1"
          >
            {subtitle}
          </Heading>
        )}
      </div>
    );
  };

  // The box content
  const BoxContent = () => (
    <div
      className={twMerge(
        baseStyles,
        variantStyles[variant === "jewellery" ? "jewellery" : variant],
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* Image with transition effect */}
      <div className="relative w-full h-full">
        {/* Default image */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={defaultImage}
            alt={title || "Jewellery item"}
            fill
            sizes={
              variant === "jewellery" || variant === "type"
                ? "236px"
                : "(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
            }
            className="object-cover"
          />
        </div>

        {/* Hover image */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={hoverImage || defaultImage} // Fallback to default if no hover image
            alt={`${title || "Jewellery item"} - alternate view`}
            fill
            sizes={
              variant === "jewellery" || variant === "type"
                ? "236px"
                : "(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
            }
            className="object-cover"
          />
        </div>
      </div>

      {/* Content overlay */}
      {renderContent()}

      {/* Optional label */}
      {showLabel && isHovered && !titleBelowBox && (
        <div className="absolute top-5 right-5 z-10">
          <Label variant={labelVariant}>{labelText}</Label>
        </div>
      )}
    </div>
  );

  // Title below box for jewellery variant
  const TitleBelowBox = () =>
    title && titleBelowBox ? (
      <div
        className="w-[236px] h-[20px] mt-3 text-center"
        onMouseEnter={handleTitleMouseEnter}
        onMouseLeave={handleTitleMouseLeave}
      >
        <span
          className={`font-[Figtree] font-normal text-[20px] leading-[20px] tracking-[0%] text-center align-middle text-[var(--Primary-Color,var(--primary))] ${
            isTitleHovered
              ? "underline decoration-solid underline-offset-[25%]"
              : ""
          }`}
        >
          {title}
        </span>
      </div>
    ) : null;

  // If link is provided, wrap in anchor tag
  if (link) {
    return (
      <div className="flex flex-col items-center">
        <a
          href={link}
          className="block no-underline"
          aria-label={`View ${title || "jewellery item"}`}
        >
          <BoxContent />
        </a>
        <TitleBelowBox />
      </div>
    );
  }

  // No link version
  return (
    <div className="flex flex-col items-center">
      <BoxContent />
      <TitleBelowBox />
    </div>
  );
}
