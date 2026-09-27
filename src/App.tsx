import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div
      style={{
        backgroundColor: '#0C0C0C',
        fontFamily: "'Kanit', sans-serif",
        overflowX: 'clip',
      }}
      className="w-full min-h-screen text-[#D7E2EA] bg-[#0C0C0C] relative selection:bg-purple-900 selection:text-white"
    >
      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={handleOpenContact} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={handleOpenContact} />

      {/* 4. TECHNICAL SKILLS SECTION (in place of services) */}
      <SkillsSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection />

      {/* FOOTER */}
      <Footer onContactClick={handleOpenContact} />

      {/* CONTACT MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default App;
