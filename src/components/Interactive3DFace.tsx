import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Interactive3DFaceProps {
  className?: string;
}

export const Interactive3DFace: React.FC<Interactive3DFaceProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalized mouse coordinates from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural, fluid head tracking
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle and elegant 3D tilt (clamped to natural head movement angles)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // Dynamic specular lighting position tracking the cursor
  const shineX = useTransform(smoothX, [-0.5, 0.5], ['35%', '65%']);
  const shineY = useTransform(smoothY, [-0.5, 0.5], ['35%', '65%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates across viewport
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = touch.clientX / window.innerWidth - 0.5;
        const y = touch.clientY / window.innerHeight - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const handleReset = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    // Device orientation for mobile tilt if supported
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // gamma: left-to-right (-90 to 90), beta: front-to-back (-180 to 180)
        const x = Math.min(Math.max(e.gamma / 60, -0.5), 0.5);
        const y = Math.min(Math.max((e.beta - 45) / 60, -0.5), 0.5);
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleReset);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleReset);
    window.addEventListener('touchcancel', handleReset);

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleReset);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleReset);
      window.removeEventListener('touchcancel', handleReset);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative group flex flex-col items-center w-full"
      >
        {/* Soft Ambient Glow behind the head */}
        <div className="absolute inset-4 rounded-full bg-purple-600/20 blur-[50px] sm:blur-[65px] pointer-events-none group-hover:bg-purple-500/30 transition-all duration-700" />

        {/* 3D Neutral Character Bust Image - High-speed WebP with PNG fallback */}
        <div className="relative w-full flex justify-center">
          <picture className="w-full flex justify-center">
            <source srcSet="/surya_3d_face_neutral.webp" type="image/webp" />
            <img
              src="/surya_3d_face_neutral.png"
              alt="Surya - AI & Robotics Engineer"
              className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>

          {/* Interactive Dynamic Specular Light Glaze */}
          <motion.div
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 rounded-full"
            style={{
              background: useTransform(
                [shineX, shineY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)`
              ),
            }}
          />
        </div>

        {/* Clean Single Status Badge - Responsive & Touch Friendly */}
        <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 bg-[#0B0F19]/95 border border-purple-500/30 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono text-[#D7E2EA] whitespace-nowrap shadow-xl flex items-center gap-1.5 sm:gap-2 select-none pointer-events-none z-10 max-w-[90vw] truncate">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="truncate">GITAM &bull; Innovation Center Tech Member</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Interactive3DFace;
