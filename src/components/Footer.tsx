import React from 'react';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 md:px-10 text-[#D7E2EA] z-20">
      <FadeIn delay={0.1} y={20}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-purple-400 font-mono">
                Open to High-Impact Opportunities
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">
              NULU LIKITH SURYA KARTHIK
            </h4>
            <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/70 max-w-md mx-auto md:mx-0">
              Computer Science Engineer @ GITAM University &bull; Tech Member @ Innovation Center. Architecting AI systems, robotics, and full-stack software.
            </p>
            <p className="text-[11px] sm:text-xs font-mono text-[#D7E2EA]/50 mt-2 flex items-center justify-center md:justify-start gap-1.5 flex-wrap">
              <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
              <span>Hyderabad, India &bull; +91-9014918875</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <ContactButton onClick={onContactClick} />
            <button
              onClick={scrollToTop}
              className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white active:scale-95 transition-all border border-white/20 hover:border-white/40 rounded-full px-5 py-2.5 sm:py-3 min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Back to Top &uarr;
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left text-[11px] sm:text-xs text-[#D7E2EA]/60">
          <p>&copy; {new Date().getFullYear()} NULU LIKITH SURYA KARTHIK. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/nlskarthik007"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 px-1.5"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/nlskarthik007"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 px-1.5"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:likithskarthik@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 px-1.5"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="tel:+919014918875"
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 px-1.5"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
