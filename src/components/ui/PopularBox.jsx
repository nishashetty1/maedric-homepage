"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Heading from './Heading';

const PopularBox = ({ id, image, category, name, isFavorite = false }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="relative group">
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
        />

        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/60 flex items-center justify-center z-10 transition-all hover:bg-white cursor-pointer"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Image
            src={favorite ? '/icons/heartdarkfilled.svg' : '/icons/heartdark.svg'}
            width={20}
            height={20}
            alt="Heart icon"
          />
        </button>
      </div>

      <div className="mt-3">
        <Heading
          as="body"
          align="left"
          color="var(--consultationForm)"
          className="!mb-0"
        >
          {category}
        </Heading>

        <Heading
          as="body-large"
          align="left"
          color="var(--primary)"
          className="mt-1"
        >
          {name}
        </Heading>
      </div>
    </div>
  );
};

export default PopularBox;