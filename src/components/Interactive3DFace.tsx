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

    const handleMouseLeave = () => {
      // Return smoothly to center
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
        <div className="absolute inset-4 rounded-full bg-purple-600/20 blur-[65px] pointer-events-none group-hover:bg-purple-500/30 transition-all duration-700" />

        {/* 3D Neutral Character Bust Image */}
        <div className="relative w-full flex justify-center">
          <motion.img
            src="/surya_3d_face_neutral.png"
            alt="Surya - AI & Robotics Engineer"
            className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)] select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
            loading="eager"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />

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

        {/* Clean Single Status Badge */}
        <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 bg-[#0B0F19]/95 border border-purple-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-mono text-[#D7E2EA] whitespace-nowrap shadow-xl flex items-center gap-2 select-none pointer-events-none z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>GITAM &bull; Innovation Center Tech Member</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Interactive3DFace;
