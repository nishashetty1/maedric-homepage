"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";

const ConsultationForm = ({ type }) => {
    const [activeOccasionBtn, setActiveOccasionBtn] = useState(null);
    const [activeJewelryBtn, setActiveJewelryBtn] = useState(null);

    // Replace single value with min and max for range
    const [rangeValues, setRangeValues] = useState({
        Bridal: { min: 10, max: 15 },  // Default values (middle of range)
        Boutique: { min: 10, max: 15 },
        Gemstone: { min: 25, max: 35 }
    });

    // Initialize form data state
    const [formData, setFormData] = useState({
        name: "",
        contactMethod: "Voice Call - Afternoon",
        timing: "4-6 Months",
        occasion: "",
        occasionCustom: "",
        gemstonesInvolved: "Yes, Maedric provides them",
        designProcess: "Maedric takes the lead",
        details: "",
        subscribe: false
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Combine all form data including button selections
        const submissionData = {
            ...formData,
            occasionButton: activeOccasionBtn,
            jewelryButton: activeJewelryBtn,
            budgetRangeMin: rangeValues[type].min + "k",
            budgetRangeMax: rangeValues[type].max + "k"
        };

        console.log("Form data:", submissionData);
        alert("Form submitted successfully! We'll contact you soon.");
    };

    // Different field configurations based on form type
    const occasionOptions = {
        Bridal: [
            { label: "Proposal", value: "proposal" },
            { label: "Wedding", value: "wedding" },
            { label: "Other", value: "other", hasInput: true }
        ],
        Boutique: [
            { label: "Anniversary", value: "anniversary", isDropdown: true },
            { label: "Birthday", value: "birthday" },
            { label: "Celebration", value: "celebration" }
        ],
        Gemstone: [
            { label: "Investment", value: "investment" },
            { label: "Collection", value: "collection" },
            { label: "Jewellery Setting", value: "jewellery" }
        ]
    };

    const jewelryOptions = {
        Bridal: [
            { label: "Proposal Ring", value: "proposal-ring" },
            { label: "Wedding Rings(Bands)", value: "wedding-rings" }
        ],
        Boutique: [
            { label: "Ring", value: "ring" },
            { label: "Earrings", value: "earrings" },
            { label: "Pendant/Necklace", value: "pendant" },
            { label: "Bracelet", value: "bracelet" },
            { label: "Brooch", value: "brooch" },
            { label: "Other", value: "other" }
        ],
        Gemstone: [
            { label: "Sapphire", value: "sapphire" },
            { label: "Ruby", value: "ruby" },
            { label: "Diamond", value: "diamond" },
            { label: "Emerald", value: "emerald" },
            { label: "Other", value: "other" }
        ]
    };

    // Form field text variations by type
    const formText = {
        timingQuestion: {
            Bridal: "When would you love to have your piece completed?",
            Boutique: "When do you want your creation by?",
            Gemstone: "How much time can we use to find what you need?"
        },
        occasionQuestion: {
            Bridal: "What's the occasion for your bridal jewellery?",
            Boutique: "What is the occasion?",
            Gemstone: "What is the purpose of your gemstone purchase?"
        },
        budgetRange: {
            Bridal: { min: 10, max: 20 },
            Boutique: { min: 10, max: 20 },
            Gemstone: { min: 20, max: 50 }
        },
        textareaQuestion: {
            Bridal: "Tell us more about the jewellery you are looking for!",
            Boutique: "Tell us about the story behind your future heirloom!",
            Gemstone: "Tell us more about what you're looking for in a gemstone"
        }
    };

    // Handle range slider changes
    const handleRangeChange = (value, handle) => {
        setRangeValues(prev => ({
            ...prev,
            [type]: {
                ...prev[type],
                [handle]: parseInt(value)
            }
        }));
    };

    // Image based on type
    const imageSrc = type === "Bridal"
        ? "/images/consultation/bridal.jpg"
        : type === "Boutique"
            ? "/images/consultation/boutique.jpg"
            : "/images/consultation/gemstone.jpg";

    // Track the current slider being dragged
    const [draggedSlider, setDraggedSlider] = useState(null);

    // Handle mouse events for sliders
    const handleMouseDown = (slider) => {
        setDraggedSlider(slider);
    };

    useEffect(() => {
        const handleMouseUp = () => {
            setDraggedSlider(null);
        };

        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, []);

    return (
        <div className="flex flex-col-reverse md:flex-row items-start gap-8 w-full max-w-[1400px] mx-auto">
            <div className="md:w-1/2 w-full">
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label className="block">
                            <Heading
                                as="subheading"
                                align="left"
                                color="var(--consultationForm)"
                            >
                                How would you like to be addressed?
                            </Heading>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="your name here"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full text-[var(--primary)] border-b-[3px] border-[var(--consultationForm)] pb-2 outline-none focus:border-[var(--consultationForm)] transition-colors"
                        />
                    </div>

                    {/* Contact Method */}
                    <div>
                        <label className="block"><Heading
                            as="subheading"
                            align="left"
                            color="var(--consultationForm)"
                        >
                            How may we reach out to you?
                        </Heading></label>
                        <div className="relative">
                            <select
                                name="contactMethod"
                                value={formData.contactMethod}
                                onChange={handleInputChange}
                                className="w-full text-[var(--consultationForm)] border-b-[3px] border-[var(--consultationForm)] pb-2 outline-none appearance-none focus:border-[var(--consultationForm)] bg-transparent pr-8 transition-colors"
                            >
                                <option>Voice Call - Afternoon</option>
                                <option>Voice Call - Morning</option>
                                <option>Email</option>
                                <option>WhatsApp</option>
                            </select>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                <Image
                                    src="/icons/arrowdown.svg"
                                    width={18}
                                    height={18}
                                    alt="Down"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Timing */}
                    <div>
                        <label className="block">
                            <Heading
                                as="subheading"
                                align="left"
                                color="var(--consultationForm)"
                            >
                                {formText.timingQuestion[type]}
                            </Heading>
                        </label>
                        <div className="relative">
                            <select
                                name="timing"
                                value={formData.timing}
                                onChange={handleInputChange}
                                className="w-full text-[var(--consultationForm)] border-b border-[var(--consultationFormBorder)] pb-2 outline-none appearance-none focus:border-[var(--consultationFormHover)] bg-transparent pr-8 transition-colors"
                            >
                                <option>4-6 Months</option>
                                <option>2-3 Months</option>
                                <option>1 Month</option>
                                <option>ASAP</option>
                            </select>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                <Image
                                    src="/icons/arrowdown.svg"
                                    width={18}
                                    height={18}
                                    alt="Down"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                        <label className="block">
                            <Heading
                                as="subheading"
                                align="left"
                                color="var(--consultationForm)"
                            >
                                What budget range are you considering?
                            </Heading>
                        </label>
                        <div className="flex flex-col mt-2">
                            <div className="relative h-12 w-full flex items-center">
                                {/* Min Value Button */}
                                <span
                                    className="inline-block z-20 mr-3 px-2 py-1 text-sm border border-[var(--consultationFormBorder)] bg-transparent text-[var(--consultationForm)]"
                                >
                                    ${rangeValues[type].min}k
                                </span>

                                {/* Slider Container */}
                                <div className="relative flex-1 h-8">
                                    {/* Track */}
                                    <div className="absolute rounded-full h-[8px] bg-[var(--consultationFormHover)] left-0 right-0 top-1/2 -translate-y-1/2"></div>

                                    {/* Selected Range */}
                                    <div
                                        className="absolute h-[8px] bg-[var(--consultationForm)] top-1/2 -translate-y-1/2"
                                        style={{
                                            left: `${((rangeValues[type].min - formText.budgetRange[type].min) /
                                                (formText.budgetRange[type].max - formText.budgetRange[type].min)) * 100}%`,
                                            right: `${100 - ((rangeValues[type].max - formText.budgetRange[type].min) /
                                                (formText.budgetRange[type].max - formText.budgetRange[type].min)) * 100}%`
                                        }}
                                    ></div>

                                    {/* Min Handle */}
                                    <div
                                        className={`absolute w-[16px] h-[16px] rounded-full bg-[var(--consultationForm)] top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10 ${draggedSlider === 'min' ? 'ring-2 ring-offset-2 ring-[var(--consultationFormHover)]' : ''
                                            }`}
                                        style={{
                                            left: `${((rangeValues[type].min - formText.budgetRange[type].min) /
                                                (formText.budgetRange[type].max - formText.budgetRange[type].min)) * 100}%`
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            setDraggedSlider('min');

                                            const sliderTrack = document.querySelector('.slider-track');
                                            const trackRect = sliderTrack.getBoundingClientRect();
                                            const rangeSize = formText.budgetRange[type].max - formText.budgetRange[type].min;

                                            const handleMouseMove = (moveEvent) => {
                                                const x = Math.max(0, Math.min(moveEvent.clientX - trackRect.left, trackRect.width));
                                                const percentage = x / trackRect.width;
                                                const newValue = Math.round(formText.budgetRange[type].min + (percentage * rangeSize));
                                                // Make sure min doesn't exceed max - 1
                                                const cappedValue = Math.min(newValue, rangeValues[type].max - 1);
                                                handleRangeChange(cappedValue, 'min');
                                            };

                                            const handleMouseUp = () => {
                                                document.removeEventListener('mousemove', handleMouseMove);
                                                document.removeEventListener('mouseup', handleMouseUp);
                                                setDraggedSlider(null);
                                            };

                                            document.addEventListener('mousemove', handleMouseMove);
                                            document.addEventListener('mouseup', handleMouseUp);
                                        }}
                                        onTouchStart={(e) => {
                                            e.preventDefault();
                                            setDraggedSlider('min');

                                            const sliderTrack = document.querySelector('.slider-track');
                                            const trackRect = sliderTrack.getBoundingClientRect();
                                            const rangeSize = formText.budgetRange[type].max - formText.budgetRange[type].min;

                                            const handleTouchMove = (moveEvent) => {
                                                const touch = moveEvent.touches[0];
                                                const x = Math.max(0, Math.min(touch.clientX - trackRect.left, trackRect.width));
                                                const percentage = x / trackRect.width;
                                                const newValue = Math.round(formText.budgetRange[type].min + (percentage * rangeSize));
                                                // Make sure min doesn't exceed max - 1
                                                const cappedValue = Math.min(newValue, rangeValues[type].max - 1);
                                                handleRangeChange(cappedValue, 'min');
                                            };

                                            const handleTouchEnd = () => {
                                                document.removeEventListener('touchmove', handleTouchMove);
                                                document.removeEventListener('touchend', handleTouchEnd);
                                                setDraggedSlider(null);
                                            };

                                            document.addEventListener('touchmove', handleTouchMove);
                                            document.addEventListener('touchend', handleTouchEnd);
                                        }}
                                    ></div>

                                    {/* Max Handle */}
                                    <div
                                        className={`absolute w-[16px] h-[16px] rounded-full bg-[var(--consultationForm)] top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10 ${draggedSlider === 'max' ? 'ring-2 ring-offset-2 ring-[var(--consultationFormHover)]' : ''
                                            }`}
                                        style={{
                                            left: `${((rangeValues[type].max - formText.budgetRange[type].min) /
                                                (formText.budgetRange[type].max - formText.budgetRange[type].min)) * 100}%`
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            setDraggedSlider('max');

                                            const sliderTrack = document.querySelector('.slider-track');
                                            const trackRect = sliderTrack.getBoundingClientRect();
                                            const rangeSize = formText.budgetRange[type].max - formText.budgetRange[type].min;

                                            const handleMouseMove = (moveEvent) => {
                                                const x = Math.max(0, Math.min(moveEvent.clientX - trackRect.left, trackRect.width));
                                                const percentage = x / trackRect.width;
                                                const newValue = Math.round(formText.budgetRange[type].min + (percentage * rangeSize));
                                                // Make sure max doesn't go below min + 1
                                                const cappedValue = Math.max(newValue, rangeValues[type].min + 1);
                                                handleRangeChange(cappedValue, 'max');
                                            };

                                            const handleMouseUp = () => {
                                                document.removeEventListener('mousemove', handleMouseMove);
                                                document.removeEventListener('mouseup', handleMouseUp);
                                                setDraggedSlider(null);
                                            };

                                            document.addEventListener('mousemove', handleMouseMove);
                                            document.addEventListener('mouseup', handleMouseUp);
                                        }}
                                        onTouchStart={(e) => {
                                            e.preventDefault();
                                            setDraggedSlider('max');

                                            const sliderTrack = document.querySelector('.slider-track');
                                            const trackRect = sliderTrack.getBoundingClientRect();
                                            const rangeSize = formText.budgetRange[type].max - formText.budgetRange[type].min;

                                            const handleTouchMove = (moveEvent) => {
                                                const touch = moveEvent.touches[0];
                                                const x = Math.max(0, Math.min(touch.clientX - trackRect.left, trackRect.width));
                                                const percentage = x / trackRect.width;
                                                const newValue = Math.round(formText.budgetRange[type].min + (percentage * rangeSize));
                                                // Make sure max doesn't go below min + 1
                                                const cappedValue = Math.max(newValue, rangeValues[type].min + 1);
                                                handleRangeChange(cappedValue, 'max');
                                            };

                                            const handleTouchEnd = () => {
                                                document.removeEventListener('touchmove', handleTouchMove);
                                                document.removeEventListener('touchend', handleTouchEnd);
                                                setDraggedSlider(null);
                                            };

                                            document.addEventListener('touchmove', handleTouchMove);
                                            document.addEventListener('touchend', handleTouchEnd);
                                        }}
                                    ></div>

                                    {/* Clickable Area for better UX */}
                                    <div
                                        className="absolute h-full w-full left-0 top-0 cursor-pointer slider-track"
                                        onClick={(e) => {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            const x = e.clientX - rect.left;
                                            const percent = Math.min(Math.max(0, x / rect.width), 1);
                                            const range = formText.budgetRange[type].max - formText.budgetRange[type].min;
                                            const value = Math.round(formText.budgetRange[type].min + range * percent);

                                            // Determine which handle to move (closest)
                                            const minDistance = Math.abs(value - rangeValues[type].min);
                                            const maxDistance = Math.abs(value - rangeValues[type].max);

                                            if (minDistance <= maxDistance) {
                                                handleRangeChange(value, 'min');
                                            } else {
                                                handleRangeChange(value, 'max');
                                            }
                                        }}
                                    ></div>
                                </div>

                                {/* Max Value Button */}
                                <span
                                    className="inline-block z-20 ml-3 px-2 py-1 text-sm border border-[var(--consultationFormBorder)] bg-transparent text-[var(--consultationForm)]"
                                >
                                    ${rangeValues[type].max}k
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Occasion */}
                    <div>
                        <label className="block">
                            <Heading
                                as="subheading"
                                align="left"
                                color="var(--consultationForm)"
                            >
                                {formText.occasionQuestion[type]}
                            </Heading>
                        </label>

                        {type === "Bridal" ? (
                            <div className="flex flex-wrap gap-3 mt-2">
                                {occasionOptions[type].map((option) => (
                                    <div key={option.value} className="flex items-center">
                                        {option.hasInput ? (
                                            <div className="flex items-center">
                                                <span className="mr-2 text-[var(--consultationForm)]">
                                                    {option.label}:
                                                </span>
                                                <input
                                                    name="occasionCustom"
                                                    type="text"
                                                    value={formData.occasionCustom}
                                                    onChange={handleInputChange}
                                                    placeholder="Any special celebration?"
                                                    className="border-b border-[var(--consultationFormBorder)] outline-none w-48 focus:border-[var(--consultationFormBorder)]"
                                                />
                                            </div>
                                        ) : (
                                            <Button
                                                variant="consultation"
                                                active={activeOccasionBtn === option.value}
                                                type="button"
                                                onClick={() => setActiveOccasionBtn(activeOccasionBtn === option.value ? null : option.value)}
                                            >
                                                {option.label}
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : type === "Boutique" ? (
                            <div className="relative">
                                <select
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleInputChange}
                                        className="w-full text-[var(--consultationForm)] border-b border-[var(--consultationFormBorder)] pb-2 outline-none appearance-none focus:border-[var(--consultationFormBorder)] bg-transparent pr-8 transition-colors"
                                >
                                    <option>Anniversary</option>
                                    <option>Birthday</option>
                                    <option>Celebration</option>
                                </select>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <Image
                                            src="/icons/arrowdown.svg"
                                            width={18}
                                            height={18}
                                            alt="Down"
                                        />
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-3 mt-2">
                                {occasionOptions[type].map((option) => (
                                    <Button
                                        key={option.value}
                                        variant="consultation"
                                        type="button"
                                        active={activeOccasionBtn === option.value}
                                        onClick={() => setActiveOccasionBtn(activeOccasionBtn === option.value ? null : option.value)}
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Jewelry Type */}
                    <div>
                        <label className="block">
                            <Heading
                                as="subheading"
                                align="left"
                                color="var(--consultationForm)"
                            >
                                Which type of jewellery do you want to get customised?
                            </Heading>
                        </label>
                        {type === "Bridal" ? (
                            <div className="flex gap-3 mt-2 w-full">
                                {jewelryOptions[type].map((option) => (
                                    <Button
                                        key={option.value}
                                        variant="consultation"
                                        type="button"
                                        active={activeJewelryBtn === option.value}
                                        onClick={() => setActiveJewelryBtn(activeJewelryBtn === option.value ? null : option.value)}
                                        className="w-full text-center"
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-3 mt-2">
                                {jewelryOptions[type].map((option) => (
                                    <Button
                                        key={option.value}
                                        variant="consultation"
                                        type="button"
                                        active={activeJewelryBtn === option.value}
                                        onClick={() => setActiveJewelryBtn(activeJewelryBtn === option.value ? null : option.value)}
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Gemstone-specific question */}
                    {type === "Gemstone" && (
                        <div>
                            <label className="block text-[var(--primary)] mb-2">
                                <Heading
                                    as="subheading"
                                    align="left"
                                    color="var(--consultationForm)"
                                >
                                    Are there any gemstones involved?
                                </Heading>
                            </label>
                            <div className="relative">
                                <select
                                    name="gemstonesInvolved"
                                    value={formData.gemstonesInvolved}
                                    onChange={handleInputChange}
                                    className="w-full text-[var(--consultationForm)] border-b border-[var(--consultationFormBorder)] pb-2 outline-none appearance-none focus:border-[var(--consultationFormBorder)] bg-transparent pr-8 transition-colors"
                                >
                                    <option>Yes, Maedric provides them</option>
                                    <option>No, I have my own</option>
                                    <option>I need guidance</option>
                                </select>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <Image
                                        src="/icons/arrowdown.svg"
                                        width={18}
                                        height={18}
                                        alt="Down"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Design Process */}
                    <div>
                        <label className="block text-[var(--primary)] mb-2">
                            <Heading
                                as="subheading"
                                align="left"
                                color="var(--consultationForm)"
                            >
                                How would you like the design process to go?
                            </Heading>
                        </label>
                        <div className="relative">
                            <select
                                name="designProcess"
                                value={formData.designProcess}
                                onChange={handleInputChange}
                                className="w-full text-[var(--consultationForm)] border-b border-[var(--consultationFormBorder)] pb-2 outline-none appearance-none focus:border-[var(--consultationFormBorder)] bg-transparent pr-8 transition-colors"
                            >
                                <option>Maedric takes the lead</option>
                                <option>I have specific ideas</option>
                                <option>Collaborative approach</option>
                            </select>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                <Image
                                    src="/icons/arrowdown.svg"
                                    width={18}
                                    height={18}
                                    alt="Down"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Details / Story */}
                    <div>
                        <label className="block text-[var(--primary)] mb-2">
                            <Heading
                                as="subheading"
                                align="left"
                                color="var(--consultationForm)"
                            >
                                {formText.textareaQuestion[type]}
                            </Heading>
                        </label>
                        <textarea
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                            className="w-full border border-[var(--consultationFormBorder)] p-4 min-h-[100px] outline-none focus:border-[var(--consultationFormBorder)] transition-colors"
                            placeholder="Any additional details like shared stories for us to consider?"
                        ></textarea>
                    </div>

                    {/* Subscribe */}
                    <div className="flex items-center">
                        <input
                            name="subscribe"
                            type="checkbox"
                            id="subscribe"
                            checked={formData.subscribe}
                            onChange={handleInputChange}
                            className="h-4 w-4 border-[var(--consultationFormBorder)] focus:ring-0"
                        />
                        <label htmlFor="subscribe" className="ml-2 text-sm text-[var(--primary)]">
                            Subscribe and Be first to know about our latest creations and curated gemstones.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                        variant="filled"
                        fullWidth
                        className="bg-[#051E33] border-[#051E33] hover:bg-[#051E33cc] transition-colors"
                        type="submit"
                    >
                        Schedule An Appointment
                    </Button>
                </form>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 w-full">
                <div className="relative h-[300px] md:h-[600px] w-full">
                    <Image
                        src={imageSrc}
                        alt={`${type} jewellery consultation`}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default ConsultationForm;