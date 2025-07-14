"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const Banner = () => {
    return (
        <div className="w-full">
            {/* Desktop version - Background image with overlay */}
            <div className="hidden md:block relative w-full">
                <div
                    className="relative w-full bg-[var(--primary)] opacity-90 py-16 px-8"
                    style={{
                        backgroundImage: 'url("/images/banner.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        <Heading
                            as="h1"
                            align="center"
                            color="background"
                            className="mb-8"
                        >
                            Looking for something truly one-of-a-kind?
                        </Heading>
                        <p className="text-white text-center text-xl mb-10">
                            Let us source rare gemstones or craft<br />bespoke pieces tailored just for you.
                        </p>
                        <div className="flex justify-center gap-6">
                            <Button
                                variant="cta"
                                className="backdrop-blur-none"
                            >
                                Request A Quote!
                            </Button>

                            <Button
                                variant="cta"
                                className="backdrop-blur-none"
                            >
                                Discover Our Legacy!
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version - Image visible */}
            <div className="md:hidden bg-[var(--primary)]">
                <div className="pt-10 px-6">
                    <Heading
                        as="h2"
                        align="center"
                        color="light"
                        className="mb-8"
                    >
                        Looking for something truly one-of-a-kind?
                    </Heading>
                    <p className="text-white text-center mb-8">
                        Let us source rare gemstones or craft<br />bespoke pieces tailored just for you.
                    </p>
                </div>

                <div className="relative w-full h-72 mb-8">
                    <Image
                        src="/images/banner.jpg"
                        alt="Jewellery crafting"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-4 px-6 pb-10">
                    <button className="border border-white text-white py-3 hover:bg-white hover:text-[var(--primary)] transition-colors">
                        Request A Quote!
                    </button>
                    <button className="border border-white text-white py-3 hover:bg-white hover:text-[var(--primary)] transition-colors">
                        Discover Our Legacy!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;