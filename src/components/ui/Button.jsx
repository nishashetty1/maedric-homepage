"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Button component with different variants
 * @param {Object} props - Component props
 * @param {'default' | 'filled' | 'outlined' | 'outlinedLight' | 'outlinedDark' | 'cta' | 'tab' | 'consultation'} props.variant - Button variant
 * @param {boolean} props.active - Whether the button is active (applicable for tab and consultation variants)
 * @param {boolean} props.fullWidth - Whether the button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional classes
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props.rest - Other button attributes
 */
export default function Button({
  variant = 'default',
  active = false,
  fullWidth = false,
  children,
  className = '',
  ...rest
}) {
  // Base styles shared by all button variants - includes backdrop-filter and gap
  const baseClasses = 'flex items-center justify-center text-center transition-all backdrop-blur-[100px] gap-[10px] whitespace-nowrap cursor-pointer';

  const variantClasses = {
    // Default variant (transparent with border)
    default: 'border border-[var(--default)] text-[var(--default)] hover:bg-[var(--primary)] py-4 px-[105px]',

    // Filled variant (primary color background)
    filled: 'border border-[var(--primary)] bg-[var(--primary)] text-[var(--default)] py-4 px-[105px]',

    // Outlined variant (transparent with primary color border)
    outlined: 'border border-[var(--primary)] bg-[var(--default)-05] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--default)] py-4 px-[105px]',

    // OutlinedDark variant (for dark backgrounds)
    outlinedDark: 'border border-[var(--default)] bg-[var(--default)-05] text-[var(--default)] hover:bg-[var(--default-05)] py-4 px-[105px]',

    // CTA variant (with arrow)
    cta: 'border border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] py-4 px-[105px]',

    // Tab button variant
    tab: active
      ? 'w-[360px] bg-[var(--primary)] text-[var(--default)] py-1 px-10'
      : 'w-[360px] border-[3px] border-[var(--default)] bg-transparent text-[var(--primary)] py-1 px-10',

    // Consultation form button variant
    consultation: active
      ? 'border border-[1px] border-solid border-[var(--consultationForm)] text-[var(--consultationForm)] bg-[var(--consultationFormHover)] font-bold py-[10px] px-2 gap-[8px]'
      : 'border border-[0.5px] border-solid border-opacity-30 border-[var(--consultationFormBorder)] text-[var(--consultationForm)] hover:bg-[var(--consultationFormHover)] hover:border-[var(--consultationForm)] hover:border-[1px] hover:border-solid hover:font-bold py-[10px] px-2 gap-[8px]'
  };

  // Width classes based on props and responsive design
  // Default button width: 382px on desktop, 312px on mobile
  // Use min-width to ensure button doesn't shrink smaller than these widths
  const widthClasses = fullWidth
    ? 'w-full'
    : variant === 'default' || variant === 'filled'
      ? 'w-[382px] min-w-[382px] sm:w-[312px] sm:min-w-[312px]'  // Default to 382px, 312px on small screens
      : variant === 'outlined' || variant === 'outlinedLight' || variant === 'outlinedDark' || variant === 'cta'
        ? 'w-[240px]'
        : variant === 'tab'
          ? 'w-[110px] lg:w-[600px]'
          : variant === 'consultation'
            ? 'w-[119px]'
            : '';

  // Height classes based on variant
  // Default and filled buttons have a fixed height of 48px
  const heightClasses = variant === 'tab'
    ? 'h-[36px]'
    : variant === 'consultation'
      ? 'h-[30px]'
      : 'h-[48px]';

  // Check if it's a CTA button that needs arrow
  const isCTA = false;

  return (
    <button
      className={twMerge(
        baseClasses,
        variantClasses[variant],
        widthClasses,
        heightClasses,
        className
      )}
      {...rest}
    >
      {children}
      {isCTA && (
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform rotate-90 ml-2"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke={variant === 'outlinedDark' ? 'var(--default)' : 'var(--primary)'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}