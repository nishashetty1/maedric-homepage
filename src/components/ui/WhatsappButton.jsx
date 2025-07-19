"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WhatsappButton = () => {
    const [visible, setVisible] = useState(false);

    // Show button after a delay
    useEffect(() => {
        const showTimer = setTimeout(() => {
            setVisible(true);
        }, 1500);

        return () => {
            clearTimeout(showTimer);
        };
    }, []);

    // WhatsApp click handler - opens WhatsApp with predefined message
    const handleWhatsAppClick = () => {
        // You can customize the phone number and pre-filled message
        const phoneNumber = '1234567890';
        const message = 'Hello! I\'m interested in your jewellery collection.';

        // Create the WhatsApp URL with phone number and encoded message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };

    // Don't render if not visible
    if (!visible) return null;

    return (
        <button
            onClick={handleWhatsAppClick}
            aria-label="Contact us on WhatsApp"
            className={`
                fixed 
                w-9
                h-9
                sm:w-12
                sm:h-12
                md:w-14
                md:h-14
                right-0 
                bottom-[25vh]
                z-[60]
                rounded-l-md
                border-b-[0.12px] 
                bg-[var(--primary,var(--primary))]
                shadow-[0px_0px_6px_0px_rgba(255,255,255,0.3)]
                backdrop-blur-[30px]
                flex 
                items-center 
                justify-center 
                transition-all
                duration-300
                hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.5)]
                overflow-hidden
                cursor-pointer
                group
            `}
        >
            {/* WhatsApp icon with refined animation */}
            <div className="relative">
                <div className="
                    transition-all 
                    duration-500 
                    ease-out
                    group-hover:scale-[1.15] 
                    group-hover:brightness-110
                    relative
                    after:content-['']
                    after:absolute
                    after:inset-0
                    after:bg-white/20
                    after:rounded-full
                    after:scale-0
                    after:opacity-0
                    group-hover:after:scale-[2]
                    group-hover:after:opacity-100
                    after:transition-all
                    after:duration-700
                    after:ease-out
                    after:-z-10
                    cursor-pointer
                ">
                    <Image
                        src="/icons/whatsapp.svg"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 relative z-10"
                    />
                </div>
            </div>
        </button>
    );
};

export default WhatsappButton;