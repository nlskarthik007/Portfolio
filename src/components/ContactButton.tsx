import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href = '#contact',
  className = '',
}) => {
  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
    outline: '2px solid #FFFFFF',
    outlineOffset: '-3px',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      style={buttonStyle}
      whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-6 py-2.5 sm:px-9 sm:py-3.5 md:px-12 md:py-4 text-[11px] sm:text-sm md:text-base min-h-[44px] cursor-pointer select-none transition-all duration-200 shadow-lg ${className}`}
    >
      Contact Me
    </Component>
  );
};

export default ContactButton;
