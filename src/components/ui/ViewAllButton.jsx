"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";
import { twMerge } from "tailwind-merge";

const ViewAllButton = ({ href = "/collections", text = "View All", className = "" }) => {
  return (
    <Link 
      href={href} 
      className={twMerge(
        "group inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--accent)]", 
        className
      )}
    >
      <Heading
        as="subheading"
        align="left"
        color="primary"
        className="text-[var(--primary)] font-medium !mb-0 relative"
      >
        <span className="relative inline-block">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </span>
      </Heading>
      <Image
        src="/icons/arrowright.svg"
        alt="Arrow Right Icon"
        width={10}
        height={8}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default ViewAllButton;