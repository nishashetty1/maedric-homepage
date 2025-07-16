"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TabButtons from "../ui/TabButtons";
import Heading from "../ui/Heading";
import ConsultationForm from "../ui/ConsultationForm";

const JewelleryConsultation = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Set default tab
      if (mobile && !activeTab) {
        // For mobile: default to Bridal
        setActiveTab("Bridal");
      } else if (!mobile && activeTab === null) {
        // For desktop: default to no tab (aboutFounder)
        setActiveTab(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    // If already active and not mobile, deselect it to show the founder section
    if (activeTab === tabId && !isMobile) {
      setActiveTab(null);
    } else {
      setActiveTab(tabId);
    }

    // Scroll to form on mobile
    if (isMobile && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const tabTitle = {
    Bridal: "Let's Create The Perfect Wedding Piece Together",
    Boutique: "Make It Unique, Make It Yours",
    Gemstone: "Let's Find Your Perfect Gemstone",
  };

  // About Founder section
  const aboutFounder = (
    <div className="flex flex-col md:flex-row items-start gap-8 max-w-[1400px] mx-auto">
      <div className="md:w-1/2 space-y-5">
        <div className="space-y-3">
          <Heading as="h1" align="left" color="var(--consultationForm)">
            Hi There, Isaiah Here.
          </Heading>
          <Heading as="h1" align="left" color="var(--consultationForm)">
            I'm The Artisan Behind Your Story
          </Heading>
        </div>

        <p className="text-[var(--primary)] text-base leading-relaxed">
          I am the founder and the principal designer of Maedric, working
          closely with you from initial sketch to final polish to provide a
          refreshing perspective on quality, provenance, and pricing.
        </p>

        <p className="text-[var(--primary)] text-base leading-relaxed">
          I got into jewellery from the prospect of crafting personal belongings
          that represented me and my journey.
        </p>

        <p className="text-[var(--primary)] text-base leading-relaxed">
          The idea of owning a story set in rock and stone appealed to my
          senses, even if it was just a pendant resembling a baguette.
        </p>

        <p className="text-[var(--primary)] text-base leading-relaxed">
          For the past five years, following my graduation with a Diploma in
          Fine Jewellery Design from JDMIS, I established Maedric to expand the
          jewellery landscape of Singapore beyond gold and diamonds, and to set
          the standard for the coloured gemstone industry.
        </p>

        <p className="text-[var(--primary)] text-base leading-relaxed">
          Keen to see what we can accomplish together?
        </p>

        <p className="text-[var(--primary)] text-base leading-relaxed">
          Feel free to drop me a message or have a look at our latest creations.
          We would love to learn more about you.
        </p>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <div
          className="relative w-full max-w-[600px] mx-auto"
          style={{ height: "575px" }}
        >
          <Image
            src="/images/consultation/default.png"
            alt="Isaiah, founder of Maedric"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="py-12 w-full md:py-16 px-4 md:px-8 max-w-[1400px] mx-auto"
      ref={formRef}
    >
      <div className="text-center mb-8 md:mb-12 hidden md:block">
        <Heading as="h2" align="center" color="primary" className="mb-8">
          Let's Begin <span className="opacity-50">—</span> Your Jewellery, Your
          Way
        </Heading>
        <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto">
          Tell us a bit about your vision, and we'll guide you through each step
          to create something truly personal and timeless.
        </p>
      </div>

      {activeTab && (
        <Heading
          as="h2"
          align="center"
          className="mb-8 text-[var(--primary)] md:text-[var(--consultationForm)]"
        >
          {tabTitle[activeTab]}
        </Heading>
      )}

      <div className="flex align-center justify-center mb-12">
        <TabButtons
          tabs={[
            { id: "Bridal", label: "Bridal" },
            { id: "Boutique", label: "Boutique" },
            { id: "Gemstone", label: "Gemstone" },
          ]}
          activeTabId={activeTab}
          onTabChange={handleTabClick}
          className="w-full max-w-3xl"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab || "founder"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab ? (
            <ConsultationForm type={activeTab} />
          ) : !isMobile ? (
            aboutFounder
          ) : (
            <ConsultationForm type="Bridal" />
          )}
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        /* Custom Range Slider */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          background: #e5e7eb;
          height: 2px;
        }

        input[type="range"]::-moz-range-track {
          background: #e5e7eb;
          height: 2px;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          margin-top: -6px;
          background-color: var(--primary);
          height: 14px;
          width: 14px;
          border-radius: 50%;
        }

        input[type="range"]::-moz-range-thumb {
          border: none;
          background-color: var(--primary);
          height: 14px;
          width: 14px;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default JewelleryConsultation;
