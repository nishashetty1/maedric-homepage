import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * @param {Object} props - Component props
 * @param {'h1'|'h2'|'h3'|'h4'|'subheading'|'header-text'|'body-large'|'body-light'|'body'|'cta'|'body-small'} props.as - HTML element or text style to render
 * @param {'center'|'left'|'right'} props.align - Text alignment
 * @param {React.ReactNode} props.children - Heading content
 * @param {string} props.className - Additional classes
 * @param {'primary'|'accent'|'light'|'white'|string} props.color - Text color (predefined or custom)
 * @returns {JSX.Element} Styled heading component
 */
export default function Heading({
  as = 'h2',
  align = 'center',
  color = 'primary',
  children,
  className = '',
  ...rest
}) {
  // Parse custom text size from className if present
  const hasCustomTextSize = className.includes('!text-[');

  const elementStyles = {
    // Header H1 - Quiche Medium 40px
    h1: 'font-sans font-medium text-[32px] leading-[36px] sm:text-[36px] sm:leading-[40px] md:text-[40px] md:leading-[44px]',

    // Heading H2 - Quiche Regular 36px
    h2: 'font-sans font-normal text-[26px] leading-[32px] sm:text-[32px] sm:leading-[36px] md:text-[36px] md:leading-[40px]',

    // Subheading H3 - Quiche Regular 24px
    h3: 'font-sans font-normal text-[20px] leading-[24px] sm:text-[22px] sm:leading-[26px] md:text-[24px] md:leading-[28px]',

    // Heading H4 - Figtree Regular 20px
    h4: 'font-body font-normal text-[16px] leading-[20px] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]',

    // Subheading Text - Figtree Medium 18px
    'subheading': 'font-body font-medium text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[22px]',

    // Header Text - Figtree Medium 18px
    'header-text': 'font-body font-medium text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[22px]',

    // Body Text Large - Figtree Regular 20px
    'body-large': 'font-body font-normal text-[16px] leading-[20px] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]',

    // Body Text Light - Figtree Light 20px
    'body-light': hasCustomTextSize ? 'font-body font-light' : 'font-body font-light text-[16px] leading-[20px] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]',

    // Body Text Normal - Figtree Regular 16px
    'body': 'font-body font-normal text-[14px] leading-[18px] sm:text-[14px] sm:leading-[18px] md:text-[16px] md:leading-[20px]',

    // CTA Text - Figtree Semibold 16px
    'cta': 'font-body font-semibold text-[14px] leading-[18px] sm:text-[14px] sm:leading-[18px] md:text-[16px] md:leading-[20px]',
    
    // Body Text Small - Figtree Light 12px
    'body-small': 'font-body font-light text-[10px] leading-[14px] sm:text-[11px] sm:leading-[15px] md:text-[12px] md:leading-[16px]',
  };

  // Color variations
  const colorStyles = {
    primary: 'text-[var(--primary)]',
    accent: 'text-[var(--accent)]',
    light: 'text-[var(--default)]',
    white: 'text-white',
    // Any custom color will be applied directly through className
  };

  // Text alignment styles
  const alignmentStyles = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
    justify: 'text-justify'
  };

  // Get the alignment class
  const alignClass = alignmentStyles[align] || alignmentStyles.center;

  // Get the typography style for the element
  const elementClass = elementStyles[as] || elementStyles.h2;

  // Get the color class if it's a predefined color
  const colorClass = colorStyles[color] || '';

  // Add spacing that scales with heading size
  const spacingClass = 'mb-3 sm:mb-4 md:mb-5';

  // Determine which HTML element to render based on the 'as' prop
  let Component = as;

  // For custom text styles that aren't HTML elements, use appropriate tags
  if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as)) {
    Component = as === 'subheading' ? 'h5' :
      as === 'header-text' ? 'h6' : 'p';
  }

  // Custom color passed directly
  const customColorStyle = !colorStyles[color] && color ? { color } : {};

  return (
    <Component
      className={twMerge(elementClass, colorClass, alignClass, spacingClass, className)}
      style={customColorStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}