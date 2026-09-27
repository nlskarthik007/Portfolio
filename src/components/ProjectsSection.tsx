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
      <div className="w-full h-full min-h-[260px] md:min-h-[300px] rounded-3xl bg-[#090D16] border border-[#1E293B] p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] text-white/50 ml-2">inventory.trpc.router.ts</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-[10px] border border-emerald-500/30">
            RBAC: ADMIN_VERIFIED
          </span>
        </div>

        <div className="space-y-2 text-[#D7E2EA]/90 my-3 text-[11px] leading-relaxed">
          <p className="text-purple-400">export const requisitionRouter = router(&#123;</p>
          <p className="pl-4 text-sky-300">
            requestHardware: protectedProcedure.input(z.object(&#123;
          </p>
          <p className="pl-8 text-white/70">itemId: z.string().uuid(),</p>
          <p className="pl-8 text-white/70">quantity: z.number().positive(),</p>
          <p className="pl-4 text-sky-300">&#125;)).mutation(async (&#123; ctx, input &#125;) =&gt; &#123;</p>
          <p className="pl-8 text-emerald-300">return await db.insert(auditLogs)...</p>
          <p className="pl-4">&#125;)</p>
          <p className="text-purple-400">&#125;);</p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D7E2EA]/60">
          <span className="flex items-center gap-1.5 text-indigo-300">
            <Terminal className="w-3.5 h-3.5" /> End-to-End Type Safety
          </span>
          <span className="text-white/40">tRPC &bull; Drizzle ORM</span>
        </div>
      </div>
    );
  }

  if (type === 'tinyml') {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[300px] rounded-3xl bg-[#090D16] border border-[#1E293B] p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-rose-400 font-bold flex items-center gap-2">
            <Activity className="w-4 h-4" /> EDITH // TFLM ENGINE
          </span>
          <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            STATUS: ACTIVE INFERENCE
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-2 text-[11px]">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-white/50 text-[10px]">MICROCONTROLLER</div>
            <div className="text-white font-bold text-sm mt-0.5">ESP32-WROOM</div>
            <div className="text-emerald-400 text-[10px] mt-1">240 MHz Dual-Core</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-white/50 text-[10px]">MODEL FOOTPRINT</div>
            <div className="text-white font-bold text-sm mt-0.5">48 KB (INT8)</div>
            <div className="text-purple-300 text-[10px] mt-1">Quantized Depthwise CNN</div>
          </div>
        </div>

        {/* Audio Waveform visualization */}
        <div className="bg-black/50 p-2.5 rounded-xl border border-white/5 flex flex-col gap-1">
          <div className="text-[10px] text-white/50 flex justify-between">
            <span>I2S AUDIO STREAM (16kHz MFCC)</span>
            <span className="text-rose-400 font-bold">KEYWORD: 98.6%</span>
          </div>
          <div className="flex items-end gap-1 h-8 justify-between">
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
      <div className="w-full h-full min-h-[260px] md:min-h-[300px] rounded-3xl bg-[#090D16] border border-[#1E293B] p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-emerald-400 font-bold flex items-center gap-2">
            <Bot className="w-4 h-4" /> ROS 2 NAV2 // NODE GRAPH
          </span>
          <span className="text-cyan-400 text-[10px] bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
            LIDAR 360&deg; SLAM
          </span>
        </div>

        {/* Mini Radar / Map visualization */}
        <div className="relative w-full h-32 rounded-xl bg-black/60 border border-emerald-500/20 overflow-hidden flex items-center justify-center my-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-emerald-500/20" />
            <div className="w-16 h-16 rounded-full border border-emerald-500/30 animate-pulse" />
            <div className="w-8 h-8 rounded-full border border-emerald-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          {/* Obstacle markers */}
          <div className="absolute top-5 right-8 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <div className="absolute bottom-6 left-10 w-2 h-2 rounded-full bg-amber-400" />
          <div className="absolute top-2 left-3 text-[10px] text-emerald-400 font-mono">
            TRAJECTORY: CLEAR
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] text-white/50 font-mono">
            HSV LANE: LOCKED
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/70">
          <span>Sensor Fusion: LIDAR + OpenCV</span>
          <span className="text-emerald-400">Dynamic Obstacle Avoidance</span>
        </div>
      </div>
    );
  }

  if (type === 'cv') {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[300px] rounded-3xl bg-[#090D16] border border-[#1E293B] p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-sky-400 font-bold flex items-center gap-2">
            <Eye className="w-4 h-4" /> OPENCV SPATIAL HAND TRACKER
          </span>
          <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            60+ FPS REALTIME
          </span>
        </div>

        <div className="relative w-full h-32 rounded-xl bg-black/60 border border-sky-500/20 p-3 flex flex-col justify-between my-2 overflow-hidden">
          <div className="flex justify-between text-[10px] text-sky-300">
            <span>[X: 412, Y: 284, Z: -18]</span>
            <span className="text-emerald-400">GESTURE: PINCH_CLICK</span>
          </div>

          {/* Virtual Hand skeleton visualization */}
          <div className="flex items-center justify-center gap-3">
            {[1, 2, 3, 4, 5].map((finger) => (
              <div key={finger} className="flex flex-col items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="w-0.5 h-6 bg-sky-500/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </div>
            ))}
          </div>

          <div className="text-[10px] text-white/50 text-right">
            21 Landmark Coordinates Extracted
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/70">
          <span>Latency: ~14ms per frame</span>
          <span className="text-sky-300">Virtual Controller Mode</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[260px] md:min-h-[300px] rounded-3xl bg-[#090D16] border border-[#1E293B] p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="text-teal-400 font-bold flex items-center gap-2">
          <ShieldAlert className="w-4 h-4" /> ARDUINO MEGA // SECURITY BUS
        </span>
        <span className="text-teal-300 text-[10px] bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
          MFRC522 RFID EEPROM
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-2 text-[11px]">
        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
          <div className="text-white/50 text-[10px]">HAZARD SENSOR ARRAY</div>
          <div className="text-white font-bold text-sm mt-0.5">Gas &bull; Flame &bull; Flood</div>
          <div className="text-emerald-400 text-[10px] mt-1">Multi-Channel Telemetry</div>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
          <div className="text-white/50 text-[10px]">ACCESS LOGIC</div>
          <div className="text-white font-bold text-sm mt-0.5">EEPROM RFID Key</div>
          <div className="text-teal-300 text-[10px] mt-1">Non-Volatile Flash</div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D7E2EA]/70">
        <span>Fail-Safe Buzzer &amp; Visual Alert</span>
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

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[640px] md:min-h-[680px] flex items-start justify-center sticky"
      style={{
        top: `calc(${80 + index * 24}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-[32px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full pb-4 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}
              className="font-black text-[#D7E2EA] leading-none tracking-tighter select-none"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                {project.icon}
                <span>{project.category}</span>
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white tracking-wide mt-1">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-xs uppercase tracking-wider select-none shadow-[0_0_15px_rgba(16,185,129,0.15)] flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">{project.status}</span>
          </div>
        </div>

        {/* Tech Badges Row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/50 mr-1">
            Tech Used:
          </span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-[#161D2B] border border-white/10 text-white font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom row: Two columns (Keypoints + Architecture/Visual Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (Keypoints - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 pr-0 lg:pr-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#D7E2EA]/60">
              Key Engineering Highlights
            </h4>
            <div className="space-y-3.5">
              {project.keypoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-purple-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-[0.92rem] text-[#D7E2EA]/90 font-light leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Architecture Visual - 5 cols) */}
          <div className="lg:col-span-5 flex items-center">
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
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 pb-36"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4 select-none"
            >
              Projects
            </h2>
            <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Real-world engineering implementations across full-stack architectures, TinyML edge models, and autonomous robotics.
            </p>
          </div>
        </FadeIn>

        {/* Sticky Stacking Cards */}
        <div className="relative flex flex-col w-full pb-16">
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
