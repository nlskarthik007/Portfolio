import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-text">
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  let charCounter = 0;
  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`relative leading-relaxed ${className}`}>
      {words.map((word, wordIndex) => {
        const characters = word.split('');
        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {characters.map((char) => {
              const currentIdx = charCounter++;
              const start = currentIdx / totalChars;
              const end = Math.min(1, start + 1 / totalChars);
              return (
                <Character
                  key={`char-${currentIdx}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="relative inline-block">
                <span className="opacity-0 select-none">&nbsp;</span>
                <motion.span
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [charCounter / totalChars, Math.min(1, (charCounter + 1) / totalChars)],
                      [0.2, 1]
                    ),
                  }}
                  className="absolute inset-0"
                >
                  &nbsp;
                </motion.span>
                {(() => {
                  charCounter++;
                  return null;
                })()}
              </span>
            )}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
