import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { GraduationCap, Briefcase, Cpu, Code2 } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative 3D Elements - Hidden on mobile (< md) to avoid obscuring text */}
      <div className="hidden md:block absolute top-[4%] left-[2%] md:left-[4%] z-0 pointer-events-none select-none opacity-40 hover:opacity-100 transition-opacity">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Sphere Decorative"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      <div className="hidden md:block absolute bottom-[8%] left-[4%] md:left-[10%] z-0 pointer-events-none select-none opacity-40 hover:opacity-100 transition-opacity">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Shape Decorative"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      <div className="hidden md:block absolute top-[4%] right-[2%] md:right-[4%] z-0 pointer-events-none select-none opacity-40 hover:opacity-100 transition-opacity">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Cube Decorative"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      <div className="hidden md:block absolute bottom-[8%] right-[4%] md:right-[10%] z-0 pointer-events-none select-none opacity-40 hover:opacity-100 transition-opacity">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decorative"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full px-2 sm:px-0">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6 sm:mb-10 md:mb-14 select-none"
          >
            About me
          </h2>
        </FadeIn>

        {/* Engineering Badges Pill Row */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-2xl px-2">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-[11px] sm:text-xs text-[#D7E2EA] text-center">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
              <span>B.Tech CSE &bull; GITAM University (2025&ndash;2029)</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-emerald-500/30 text-[11px] sm:text-xs text-emerald-300 text-center">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
              <span>Tech Member @ Innovation Center</span>
            </div>
          </div>
        </FadeIn>

        {/* Animated paragraph */}
        <div className="max-w-[620px] mx-auto text-center mb-10 sm:mb-14 md:mb-18 px-1">
          <AnimatedText
            text="I am Surya, a Computer Science engineer at GITAM University and Tech Member at the Innovation Center, driven by architecting intelligent edge AI, autonomous robotics, and robust full-stack platforms. From quantizing neural networks for resource-constrained microcontrollers to orchestrating ROS 2 navigation pipelines and building type-safe lab ecosystems, I engineer scalable, high-impact systems. Let's build the future together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg"
          />
        </div>

        {/* Core Pillars / Metrics */}
        <FadeIn delay={0.25} y={30} className="w-full max-w-3xl mb-10 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#111622]/80 border border-white/10 backdrop-blur-sm">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mb-2" />
              <div className="text-white font-bold text-xs sm:text-sm uppercase">TinyML & Edge AI</div>
              <div className="text-[#D7E2EA]/60 text-[11px] sm:text-xs font-light mt-1 leading-relaxed">
                ESP32, TFLM, INT8 depthwise CNNs, real-time MFCC audio DSP.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#111622]/80 border border-white/10 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mb-2" />
              <div className="text-white font-bold text-xs sm:text-sm uppercase">Robotics & Autonomy</div>
              <div className="text-[#D7E2EA]/60 text-[11px] sm:text-xs font-light mt-1 leading-relaxed">
                ROS 2 nodes, LIDAR point cloud SLAM, OpenCV HSV lane tracking.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#111622]/80 border border-white/10 backdrop-blur-sm">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 mb-2" />
              <div className="text-white font-bold text-xs sm:text-sm uppercase">Full-Stack Systems</div>
              <div className="text-[#D7E2EA]/60 text-[11px] sm:text-xs font-light mt-1 leading-relaxed">
                React 19, TypeScript, tRPC, PostgreSQL, Drizzle ORM, RBAC.
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact button */}
        <FadeIn delay={0.35} y={20}>
          <ContactButton
            onClick={onContactClick}
            href={onContactClick ? undefined : '#contact'}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
