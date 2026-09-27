import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import Interactive3DFace from './Interactive3DFace';
import { Github, Linkedin, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 w-full"
        >
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
            <button
              onClick={() => scrollTo('about')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 p-1"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 p-1"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 p-1"
            >
              Projects
            </button>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6">
            <a
              href="https://github.com/nlskarthik007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-[#D7E2EA]/80 hover:text-white transition-colors p-1"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nlskarthik007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#D7E2EA]/80 hover:text-white transition-colors p-1"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <button
              onClick={() => {
                if (onContactClick) {
                  onContactClick();
                } else {
                  scrollTo('contact');
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-0 py-1 px-1.5 ml-1"
            >
              Contact
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* Massive Hero Heading */}
      <div className="w-full overflow-hidden z-10 flex flex-col items-center justify-center pt-2 sm:pt-0">
        <FadeIn delay={0.15} y={40} className="w-full flex flex-col items-center px-2">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-[#D7E2EA]/80 mb-1.5 sm:mb-2 shadow-sm">
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
            <span>AI &middot; Robotics &middot; Full-Stack</span>
          </div>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11.2vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[17vw] select-none pointer-events-none">
            Hi, i&apos;m surya
          </h1>
        </FadeIn>
      </div>

      {/* Hero 3D Interactive Face with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] xs:w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] top-[48%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={120}
            strength={3.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <Interactive3DFace className="w-full" />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2.5 sm:gap-0 pb-4 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 z-20 relative w-full">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            style={{ fontSize: 'clamp(0.72rem, 1.25vw, 1.35rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[240px] md:max-w-[320px] text-center sm:text-left"
          >
            a computer science engineer driven by building intelligent edge systems, autonomous robotics, and scalable full-stack platforms
          </p>
        </FadeIn>

        {/* Right contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            onClick={onContactClick}
            href={onContactClick ? undefined : '#contact'}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
