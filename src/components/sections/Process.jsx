"use client";

import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Heading from "../ui/Heading";

const Process = ({ className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);
    const containerRef = useRef(null);

    // Process steps data
    const processSteps = [
        {
            number: "1",
            title: "Meet & Greet",
            content: "We begin with a warm conversation over coffee or tea to learn about you, your story, and what you envision for your piece. We'll discuss your preferences, budget, and materials."
        },
        {
            number: "2",
            title: "Sketch and Prototyping",
            content: "Before our design consultation, you may bring a written description, a sketch, or an image. We will start with rough sketches to establish a design, followed by refinement through your feedback."
        },
        {
            number: "3",
            title: "Brass Tacks and Deposit",
            content: "We will create an overview of timing milestones for your piece's timely arrival. Depending on complexity, a deposit of 50%—70% is required to commence the 3d modelling process."
        },
        {
            number: "4",
            title: "Refinement & Approval",
            content: "During the refinement process, you will routinely receive 3d renders and a realistic resin model of your design to confirm fit and sizing as we refine your piece."
        },
        {
            number: "5",
            title: "Creation & Polishing",
            content: "The creation process lasts over 4 to 8 weeks, with regular updates like process photos included. Note that complex designs may take longer."
        },
        {
            number: "6",
            title: "Completion & Delivery",
            content: "Maedric will deliver your bespoke piece with care, along with instructions on how to care for your piece and any certification if applicable."
        }
    ];

    useEffect(() => {
        const checkScreenSize = () => {
            setShowArrows(window.innerWidth < 768);
        };

        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Navigation functions
    const goToPrevious = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, processSteps.length - 1));
    };

    // Effect to scroll when index changes on mobile
    useEffect(() => {
        if (showArrows && containerRef.current) {
            const boxes = containerRef.current.querySelectorAll('.process-box');
            if (boxes[currentIndex]) {
                boxes[currentIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [currentIndex, showArrows]);

    return (
        <div className={twMerge("w-full max-w-[1200px] mx-auto px-4 py-12 sm:py-16", className)}>
            {/* Title and subtitle */}
            <div className="text-center mb-8 sm:mb-12">
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--primary)]"
                    style={{ fontFamily: "Figtree, sans-serif" }}
                >
                    
                </h2>
                <Heading
                            as="h1"
                            align="center"
                            color="primary"
                            className="mb-8"
                        >
                            From Desire to Design, Promise to Product
                        </Heading>
                <p
                    className="text-sm sm:text-base md:text-lg text-[var(--primary)] mx-auto text-justify"
                    style={{ fontFamily: "Figtree, sans-serif" }}
                >
                    At Maedric, each piece begins with your story. To ensure a truly personal and seamless experience, we guide you through a refined process from interest to delivery.
                </p>
            </div>

            {/* Process steps container */}
            <div className="relative">
                {/* Mobile left arrow */}
                {showArrows && currentIndex > 0 && (
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 flex items-center justify-center"
                        onClick={goToPrevious}
                        aria-label="Previous step"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#051E33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}

                {/* Process boxes - Desktop grid or Mobile carousel */}
                <div
                    ref={containerRef}
                    className={twMerge(
                        "w-full",
                        showArrows
                            ? "flex overflow-x-scroll gap-10 pb-4 snap-x snap-mandatory scrollbar-hide"
                            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    )}
                >
                    {processSteps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`${showArrows ? 'snap-center process-box min-w-[322px]' : ''}`}
                        >
                            {/* Individual Process Box */}
                            <div className="border border-[var(--primary)] w-full max-w-[410px] h-[162px] flex px-6">
                                {/* Number Container */}
                                <div className="flex items-center justify-center">
                                    <div className="flex-shrink-0 w-[26px] sm:w-[30px] h-[76px] flex items-center justify-center">
                                        <span
                                            className="text-[48px] sm:text-[76px] font-[400] leading-[76px] text-center text-[var(--primary)]"
                                            style={{ fontFamily: "Proxima Nova, sans-serif" }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="flex flex-col ml-4 sm:ml-6 mt-4">
                                    {/* Title */}
                                    <h3
                                        className="text-center text-[16px] sm:text-[18px] font-medium leading-[16px] mb-6 text-[var(--primary)]"
                                        style={{ fontFamily: "Figtree, sans-serif" }}
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-center text-[12px] leading-[20px] font-light font-weight-300 text-[var(--primary)]"
                                        style={{ fontFamily: "Figtree, sans-serif" }}
                                    >
                                        {step.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile right arrow */}
                {showArrows && currentIndex < processSteps.length - 1 && (
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 flex items-center justify-center"
                        onClick={goToNext}
                        aria-label="Next step"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="#051E33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Process;