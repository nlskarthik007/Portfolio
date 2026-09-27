import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import {
  CheckCircle2,
  Cpu,
  Bot,
  Layers,
  Eye,
  Radio,
  Terminal,
  Activity,
  ShieldAlert,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  number: string;
  category: string;
  name: string;
  techStack: string[];
  keypoints: string[];
  status: string;
  icon: React.ReactNode;
  visualType: 'web' | 'tinyml' | 'robotics' | 'cv' | 'embedded';
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    category: 'Full-Stack Lab Ecosystem',
    name: 'Innovation Center Web',
    icon: <Layers className="w-6 h-6 text-indigo-400" />,
    techStack: ['TypeScript', 'React 19', 'Node.js', 'PostgreSQL', 'tRPC', 'Drizzle ORM'],
    status: 'Deployed & Operational',
    keypoints: [
      'Engineered a full-stack lab management ecosystem to streamline facility operations, automate hardware inventory requisitions, and showcase student engineering initiatives.',
      'Implemented an automated Role-Based Access Control (RBAC) workflow to securely govern member approvals, component tracking, and event lifecycles in real time.',
      'Achieved end-to-end type safety and high-performance data querying by architecting the backend with tRPC and Drizzle ORM.',
    ],
    visualType: 'web',
  },
  {
    id: 'project-2',
    number: '02',
    category: 'TinyML & Edge AI',
    name: 'EDITH (TinyML Voice Activator)',
    icon: <Cpu className="w-6 h-6 text-rose-400" />,
    techStack: ['C/C++', 'ESP32', 'TensorFlow Lite Micro', 'I2S Mic', 'Quantized CNN'],
    status: 'Benchmarked (98.6% Acc)',
    keypoints: [
      'Architected an offline, low-latency keyword spotting system deployed directly onto resource-constrained ESP32 hardware.',
      'Optimized and deployed a Quantized Depthwise Separable Convolutional Neural Network (CNN) to execute highly efficient edge inference within strict memory limits.',
      'Engineered a real-time audio processing pipeline using I2S digital microphones to continuously extract and process MFCC spectrograms.',
    ],
    visualType: 'tinyml',
  },
  {
    id: 'project-3',
    number: '03',
    category: 'Robotics & Autonomous Systems',
    name: 'Autonomous Buggy Navigation',
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    techStack: ['Python', 'ROS 2', 'OpenCV', 'LIDAR', 'Sensor Fusion'],
    status: 'Field Validated & Active',
    keypoints: [
      'Developed an autonomous robotic vehicle navigation pipeline utilizing ROS 2 node architecture.',
      'Integrated OpenCV for live HSV color masking and lane maintenance, fused with LIDAR sensor data for real-time spatial awareness.',
      'Engineered custom logic for active obstacle identification, dynamic avoidance, and smooth trajectory re-merging.',
    ],
    visualType: 'robotics',
  },
  {
    id: 'project-4',
    number: '04',
    category: 'Computer Vision & AI',
    name: 'Hand Sign Detection & Gesture Control',
    icon: <Eye className="w-6 h-6 text-sky-400" />,
    techStack: ['Python', 'OpenCV', 'NumPy', 'Gesture Tracking'],
    status: 'Production Ready (60+ FPS)',
    keypoints: [
      'Built a real-time computer vision application to accurately detect, track, and interpret live hand gestures with low latency.',
      'Processed live video feeds to map spatial hand coordinates, successfully translating physical gestures into dynamic, interactive software controls.',
      'Designed multi-point fingertip coordinate mapping to drive software interfaces and virtual controls in real time.',
    ],
    visualType: 'cv',
  },
  {
    id: 'project-5',
    number: '05',
    category: 'Embedded Systems & IoT Security',
    name: 'Smart Home Security Architecture',
    icon: <Radio className="w-6 h-6 text-teal-400" />,
    techStack: ['Arduino Mega', 'C++', 'MFRC522 RFID', 'Sensor Array'],
    status: 'Hardware Validated & Live',
    keypoints: [
      'Designed a comprehensive embedded security system utilizing an Arduino Mega microcontroller.',
      'Programmed EEPROM-backed MFRC522 RFID access control and integrated a multi-sensor hazard detection array (gas, flame, and flood sensors) with visual/audio alerting.',
      'Implemented non-volatile credential verification with sub-second authentication and fail-safe hazard triggers.',
    ],
    visualType: 'embedded',
  },
];

const ProjectPreviewVisual: React.FC<{ type: ProjectItem['visualType'] }> = ({ type }) => {
  if (type === 'web') {
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] rounded-2xl sm:rounded-3xl bg-[#090D16] border border-[#1E293B] p-3.5 sm:p-6 flex flex-col justify-between font-mono text-[10px] sm:text-xs">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] sm:text-[11px] text-white/50 ml-1 truncate max-w-[140px] sm:max-w-none">
              inventory.trpc.router.ts
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-[9px] sm:text-[10px] border border-emerald-500/30 flex-shrink-0">
            RBAC: VERIFIED
          </span>
        </div>

        <div className="space-y-1.5 text-[#D7E2EA]/90 my-2 text-[10px] sm:text-[11px] leading-relaxed overflow-x-hidden">
          <p className="text-purple-400 truncate">export const requisitionRouter = router(&#123;</p>
          <p className="pl-3 sm:pl-4 text-sky-300 truncate">
            requestHardware: protectedProcedure.input(...)
          </p>
          <p className="pl-6 sm:pl-8 text-white/70 truncate">itemId: z.string().uuid(),</p>
          <p className="pl-6 sm:pl-8 text-white/70 truncate">quantity: z.number().positive(),</p>
          <p className="pl-3 sm:pl-4 text-emerald-300 truncate">return await db.insert(auditLogs)...</p>
          <p className="text-purple-400">&#125;);</p>
        </div>

        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-[#D7E2EA]/60">
          <span className="flex items-center gap-1.5 text-indigo-300">
            <Terminal className="w-3.5 h-3.5" /> Type Safe End-to-End
          </span>
          <span className="text-white/40">tRPC &bull; Drizzle</span>
        </div>
      </div>
    );
  }

  if (type === 'tinyml') {
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] rounded-2xl sm:rounded-3xl bg-[#090D16] border border-[#1E293B] p-3.5 sm:p-6 flex flex-col justify-between font-mono text-[10px] sm:text-xs">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <span className="text-rose-400 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
            <Activity className="w-3.5 h-3.5" /> EDITH // TFLM ENGINE
          </span>
          <span className="text-emerald-400 text-[9px] sm:text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            ACTIVE INFERENCE
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-2 text-[10px] sm:text-[11px]">
          <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
            <div className="text-white/50 text-[9px] sm:text-[10px]">CHIP ARCH</div>
            <div className="text-white font-bold text-xs sm:text-sm mt-0.5 truncate">ESP32-WROOM</div>
            <div className="text-emerald-400 text-[9px] sm:text-[10px] mt-0.5">240 MHz Dual-Core</div>
          </div>
          <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
            <div className="text-white/50 text-[9px] sm:text-[10px]">INT8 WEIGHTS</div>
            <div className="text-white font-bold text-xs sm:text-sm mt-0.5 truncate">48 KB (INT8)</div>
            <div className="text-purple-300 text-[9px] sm:text-[10px] mt-0.5">Quantized CNN</div>
          </div>
        </div>

        {/* Audio Waveform visualization */}
        <div className="bg-black/50 p-2 sm:p-2.5 rounded-xl border border-white/5 flex flex-col gap-1">
          <div className="text-[9px] sm:text-[10px] text-white/50 flex justify-between">
            <span>I2S AUDIO STREAM</span>
            <span className="text-rose-400 font-bold">KEYWORD: 98.6%</span>
          </div>
          <div className="flex items-end gap-1 h-6 sm:h-8 justify-between">
            {[20, 45, 75, 30, 90, 100, 60, 40, 85, 95, 35, 70, 85, 50, 95, 60, 30, 75].map(
              (v, i) => (
                <div
                  key={i}
                  style={{ height: `${v}%` }}
                  className="w-1 bg-gradient-to-t from-rose-500 to-amber-400 rounded-full"
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'robotics') {
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] rounded-2xl sm:rounded-3xl bg-[#090D16] border border-[#1E293B] p-3.5 sm:p-6 flex flex-col justify-between font-mono text-[10px] sm:text-xs">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
            <Bot className="w-3.5 h-3.5" /> ROS 2 NAV2 // SLAM
          </span>
          <span className="text-cyan-400 text-[9px] sm:text-[10px] bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
            LIDAR 360&deg;
          </span>
        </div>

        {/* Mini Radar / Map visualization */}
        <div className="relative w-full h-24 sm:h-32 rounded-xl bg-black/60 border border-emerald-500/20 overflow-hidden flex items-center justify-center my-1.5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full border border-emerald-500/20" />
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-emerald-500/30 animate-pulse" />
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-emerald-500/40" />
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400" />
          </div>
          {/* Obstacle markers */}
          <div className="absolute top-3 right-6 sm:top-5 sm:right-8 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-10 w-2 h-2 rounded-full bg-amber-400" />
          <div className="absolute top-1.5 left-2 sm:top-2 sm:left-3 text-[9px] sm:text-[10px] text-emerald-400 font-mono">
            TRAJECTORY: CLEAR
          </div>
          <div className="absolute bottom-1.5 right-2 sm:bottom-2 sm:right-3 text-[9px] sm:text-[10px] text-white/50 font-mono">
            LANE: LOCKED
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#D7E2EA]/70">
          <span>LIDAR + OpenCV</span>
          <span className="text-emerald-400">Dynamic Avoidance</span>
        </div>
      </div>
    );
  }

  if (type === 'cv') {
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] rounded-2xl sm:rounded-3xl bg-[#090D16] border border-[#1E293B] p-3.5 sm:p-6 flex flex-col justify-between font-mono text-[10px] sm:text-xs">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <span className="text-sky-400 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
            <Eye className="w-3.5 h-3.5" /> OPENCV HAND TRACKER
          </span>
          <span className="text-emerald-400 text-[9px] sm:text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            60+ FPS
          </span>
        </div>

        <div className="relative w-full h-24 sm:h-32 rounded-xl bg-black/60 border border-sky-500/20 p-2.5 sm:p-3 flex flex-col justify-between my-1.5 overflow-hidden">
          <div className="flex justify-between text-[9px] sm:text-[10px] text-sky-300">
            <span>[X: 412, Y: 284, Z: -18]</span>
            <span className="text-emerald-400">PINCH_CLICK</span>
          </div>

          {/* Virtual Hand skeleton visualization */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5].map((finger) => (
              <div key={finger} className="flex flex-col items-center gap-0.5 sm:gap-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="w-0.5 h-4 sm:h-6 bg-sky-500/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </div>
            ))}
          </div>

          <div className="text-[9px] sm:text-[10px] text-white/50 text-right">
            21 Landmark Coordinates
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#D7E2EA]/70">
          <span>Latency: ~14ms</span>
          <span className="text-sky-300">Virtual Controller</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] rounded-2xl sm:rounded-3xl bg-[#090D16] border border-[#1E293B] p-3.5 sm:p-6 flex flex-col justify-between font-mono text-[10px] sm:text-xs">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <span className="text-teal-400 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
          <ShieldAlert className="w-3.5 h-3.5" /> ARDUINO MEGA // SECURITY
        </span>
        <span className="text-teal-300 text-[9px] sm:text-[10px] bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
          RFID EEPROM
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2 text-[10px] sm:text-[11px]">
        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
          <div className="text-white/50 text-[9px] sm:text-[10px]">HAZARDS</div>
          <div className="text-white font-bold text-xs sm:text-sm mt-0.5 truncate">Gas &bull; Flame &bull; Flood</div>
          <div className="text-emerald-400 text-[9px] sm:text-[10px] mt-0.5">Multi-Telemetry</div>
        </div>
        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
          <div className="text-white/50 text-[9px] sm:text-[10px]">AUTHENTICATION</div>
          <div className="text-white font-bold text-xs sm:text-sm mt-0.5 truncate">EEPROM RFID Key</div>
          <div className="text-teal-300 text-[9px] sm:text-[10px] mt-0.5">Non-Volatile</div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-[#D7E2EA]/70">
        <span>Fail-Safe Buzzer Alert</span>
        <span className="text-teal-400">Sub-second Latency</span>
      </div>
    </div>
  );
};

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale calculation for desktop sticky stacking
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative lg:sticky flex items-start justify-center mb-6 sm:mb-8 lg:mb-0 min-h-0 lg:min-h-[660px]"
      style={{
        top: `calc(${70 + index * 20}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-2xl sm:rounded-[36px] md:rounded-[50px] border border-[#D7E2EA]/60 sm:border-2 sm:border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-7 md:p-9 flex flex-col gap-4 sm:gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 w-full pb-3 sm:pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4.2rem)' }}
              className="font-black text-[#D7E2EA] leading-none tracking-tighter select-none"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs md:text-sm font-light uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                {project.icon}
                <span>{project.category}</span>
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-white tracking-wide mt-0.5 sm:mt-1">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider select-none shadow-[0_0_15px_rgba(16,185,129,0.15)] flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">{project.status}</span>
          </div>
        </div>

        {/* Tech Badges Row */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/50 mr-1">
            Tech Used:
          </span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#161D2B] border border-white/10 text-white font-mono text-[10px] sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom row: Two columns (Keypoints + Architecture/Visual Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left Column (Keypoints - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-4 pr-0 lg:pr-4">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-[#D7E2EA]/60">
              Key Engineering Highlights
            </h4>
            <div className="space-y-2.5 sm:space-y-3.5">
              {project.keypoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-purple-300">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
                  </div>
                  <p className="text-[11px] xs:text-xs sm:text-sm md:text-[0.92rem] text-[#D7E2EA]/90 font-light leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Architecture Visual - 5 cols) */}
          <div className="lg:col-span-5 flex items-center pt-2 lg:pt-0">
            <ProjectPreviewVisual type={project.visualType} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-6 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-20 sm:pb-36"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-18 md:mb-24">
            <h2
              style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight mb-3 sm:mb-4 select-none"
            >
              Projects
            </h2>
            <p className="text-[#D7E2EA]/70 font-light text-xs sm:text-base md:text-lg max-w-xl mx-auto px-2">
              Real-world engineering implementations across full-stack architectures, TinyML edge models, and autonomous robotics.
            </p>
          </div>
        </FadeIn>

        {/* Stacking Cards - Flows naturally on mobile, sticky on desktop */}
        <div className="relative flex flex-col w-full pb-8 sm:pb-16">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
