import React, { useRef, useState, useEffect, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  style = {},
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('translate3d(0px, 0px, 0px)');
  const [transitionStyle, setTransitionStyle] = useState<string>(inactiveTransition);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const withinX = mouseX >= rect.left - padding && mouseX <= rect.right + padding;
    const withinY = mouseY >= rect.top - padding && mouseY <= rect.bottom + padding;

    if (withinX && withinY) {
      const offsetX = (mouseX - centerX) / strength;
      const offsetY = (mouseY - centerY) / strength;
      setTransitionStyle(activeTransition);
      setTransformStyle(`translate3d(${offsetX}px, ${offsetY}px, 0px)`);
    } else {
      setTransitionStyle(inactiveTransition);
      setTransformStyle('translate3d(0px, 0px, 0px)');
    }
  }, [padding, strength, activeTransition, inactiveTransition]);

  const handleMouseLeave = useCallback(() => {
    setTransitionStyle(inactiveTransition);
    setTransformStyle('translate3d(0px, 0px, 0px)');
  }, [inactiveTransition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: transformStyle,
        transition: transitionStyle,
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
