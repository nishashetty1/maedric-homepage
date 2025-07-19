import React from 'react';
import Button from '../ui/Button';
import WhatsappButton from '../ui/WhatsappButton';
import Heading from '../ui/Heading';

const Hero = () => {
    return (
        <section className="relative w-full h-screen max-h-[864px] min-h-[500px] overflow-hidden md:-mt-[215px] lg:-mt-[184px] ">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0 top-0 left-0 w-full h-full">
                {/* Video Background */}
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/video/HeroSection.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content Overlay - Desktop */}
            <div className="hidden md:flex absolute w-full h-full top-0 left-0 flex-col justify-end z-10">
                <div className="flex flex-col w-full max-w-[700px] px-8 pb-16 lg:pb-20 lg:pl-20">
                    
                    <Heading
                        as="header-text"
                        align="left"
                        className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-[var(--default)] mb-8"
                    >
                        Want one of your own?
                    </Heading>

                    <div className="mt-6">
                        <Button
                            variant="default"
                            className="w-full max-w-[382px] h-[48px] backdrop-blur-[100px] border border-[var(--default)]"
                        >
                            Explore Our Collections
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content Overlay - Mobile (Blue overlay at bottom with different text) */}
            <div className="md:hidden absolute w-full bottom-0 bg-[var(--primary)] bg-opacity-80 backdrop-blur-sm flex flex-col items-center text-center py-6 px-4 z-10">
                <p className="font-[Figtree] text-sm text-[var(--default)] leading-tight mb-4 max-w-[320px]">
                    Explore Exquisite Gemstones & Jewellery, Crafted To Empower & Elevate Your Legacy With Every Radiant Detail.
                </p>

                <div className="w-full max-w-[320px]">
                    <Button
                        variant="outlinedDark"
                        className="w-full h-[48px] bg-transparent border border-[var(--default)] backdrop-blur-sm py-3"
                    >
                        Explore All Collections
                    </Button>
                </div>
            </div>

            {/* WhatsappButton */}
            <div className="absolute bottom-4 right-4 z-20">
                <WhatsappButton />
            </div>
        </section>
    );
};

export default Hero;