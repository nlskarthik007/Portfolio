import React from 'react';
import {
  Cpu,
  Bot,
  Layers,
  Eye,
  Radio,
  Activity,
  Terminal,
  ShieldCheck,
  Zap,
  Workflow,
} from 'lucide-react';

interface TechPreviewCard {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  metricLabel: string;
  metricValue: string;
  visualType: 'radar' | 'waveform' | 'code' | 'nodes' | 'chip' | 'telemetry';
}

const ROW_1_CARDS: TechPreviewCard[] = [
  {
    id: 'card-1',
    category: 'ROBOTICS & AUTONOMY',
    categoryColor: '#00D26A',
    title: 'Autonomous Buggy Navigation',
    description: 'ROS 2 node architecture with live LIDAR spatial fusion and trajectory re-merging.',
    icon: <Bot className="w-5 h-5 text-emerald-400" />,
    tags: ['ROS 2', 'Python', 'LIDAR', 'OpenCV'],
    metricLabel: 'Obstacle Latency',
    metricValue: '< 18ms',
    visualType: 'radar',
  },
  {
    id: 'card-2',
    category: 'TINYML & EDGE AI',
    categoryColor: '#EE4C2C',
    title: 'EDITH Edge Voice Activator',
    description: 'Offline quantized depthwise CNN keyword spotting directly on ESP32 microcontrollers.',
    icon: <Cpu className="w-5 h-5 text-rose-400" />,
    tags: ['ESP32', 'TFLM', 'C/C++', 'I2S Mic'],
    metricLabel: 'Model Footprint',
    metricValue: '48 KB INT8',
    visualType: 'waveform',
  },
  {
    id: 'card-3',
    category: 'FULL-STACK LAB SYSTEM',
    categoryColor: '#646CFF',
    title: 'Innovation Center Platform',
    description: 'Lab management ecosystem automating hardware requisitions with RBAC governance.',
    icon: <Layers className="w-5 h-5 text-indigo-400" />,
    tags: ['React 19', 'tRPC', 'Drizzle ORM', 'PostgreSQL'],
    metricLabel: 'Type Safety',
    metricValue: '100% End-to-End',
    visualType: 'code',
  },
  {
    id: 'card-4',
    category: 'COMPUTER VISION',
    categoryColor: '#3178C6',
    title: 'Hand Sign & Gesture Tracking',
    description: 'Real-time spatial hand coordinate mapping translating gestures into software controls.',
    icon: <Eye className="w-5 h-5 text-sky-400" />,
    tags: ['Python', 'OpenCV', 'NumPy', 'MediaPipe'],
    metricLabel: 'Tracking Frame Rate',
    metricValue: '60+ FPS',
    visualType: 'nodes',
  },
  {
    id: 'card-5',
    category: 'EMBEDDED HARDWARE',
    categoryColor: '#00979D',
    title: 'Smart Hazard & RFID Security',
    description: 'Arduino Mega system with EEPROM-backed RFID access and multi-sensor hazard alerts.',
    icon: <Radio className="w-5 h-5 text-teal-400" />,
    tags: ['Arduino', 'C++', 'MFRC522', 'I2C/SPI'],
    metricLabel: 'Sensors Fused',
    metricValue: '5 Hazards',
    visualType: 'chip',
  },
  {
    id: 'card-6',
    category: 'NEURAL NETWORKS',
    categoryColor: '#FF6F00',
    title: 'Deep Learning Model Quantization',
    description: 'Post-training INT8 quantization compressing heavy PyTorch models for edge microchips.',
    icon: <Activity className="w-5 h-5 text-amber-400" />,
    tags: ['PyTorch', 'TensorFlow', 'scikit-learn'],
    metricLabel: 'Inference Speedup',
    metricValue: '4.2x Faster',
    visualType: 'telemetry',
  },
];

const ROW_2_CARDS: TechPreviewCard[] = [
  {
    id: 'card-7',
    category: 'COMPUTER VISION & AUTONOMY',
    categoryColor: '#5C3EE8',
    title: 'HSV Color Masking & Lane Follow',
    description: 'Adaptive color thresholding for live lane maintenance fused with collision logic.',
    icon: <Eye className="w-5 h-5 text-purple-400" />,
    tags: ['OpenCV', 'HSV Filtering', 'Python'],
    metricLabel: 'Confidence Score',
    metricValue: '99.1%',
    visualType: 'nodes',
  },
  {
    id: 'card-8',
    category: 'AUDIO SIGNAL PROCESSING',
    categoryColor: '#E95420',
    title: 'Real-Time MFCC Spectrograms',
    description: 'Continuous digital audio extraction pipeline converting I2S mic streams into spectral frames.',
    icon: <Activity className="w-5 h-5 text-orange-400" />,
    tags: ['C++', 'MFCC', 'DSP', 'ESP32'],
    metricLabel: 'Sampling Rate',
    metricValue: '16 kHz 16-bit',
    visualType: 'waveform',
  },
  {
    id: 'card-9',
    category: 'BACKEND ARCHITECTURE',
    categoryColor: '#339933',
    title: 'Automated RBAC Governance',
    description: 'High-security role-based access control tracking member approvals and hardware lifecycles.',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    tags: ['Node.js', 'RBAC', 'PostgreSQL', 'JWT'],
    metricLabel: 'Access Latency',
    metricValue: '< 12ms',
    visualType: 'code',
  },
  {
    id: 'card-10',
    category: 'ROBOTIC TELEMETRY',
    categoryColor: '#2496ED',
    title: 'LIDAR Point Cloud Spatial SLAM',
    description: '360° laser range scanning for dynamic map generation and active obstacle clearance.',
    icon: <Bot className="w-5 h-5 text-cyan-400" />,
    tags: ['LIDAR', 'ROS 2 Nav2', 'Costmaps'],
    metricLabel: 'Scanning Range',
    metricValue: '12m 360°',
    visualType: 'radar',
  },
  {
    id: 'card-11',
    category: 'AGENTIC PROTOCOLS',
    categoryColor: '#7F52FF',
    title: 'Model Context Protocol (MCP)',
    description: 'Building autonomous developer tools and AI agent integrations across standard protocols.',
    icon: <Workflow className="w-5 h-5 text-violet-400" />,
    tags: ['MCP', 'TypeScript', 'JSON-RPC', 'AI Agents'],
    metricLabel: 'Tool Protocol',
    metricValue: 'v1.0 Native',
    visualType: 'chip',
  },
  {
    id: 'card-12',
    category: 'DEVOPS & WORKFLOWS',
    categoryColor: '#FCC624',
    title: 'Linux (Ubuntu) & Docker Ecosystem',
    description: 'Reproducible containerized environments for robotics builds, AI training, and web services.',
    icon: <Terminal className="w-5 h-5 text-yellow-400" />,
    tags: ['Docker', 'Ubuntu Linux', 'Git/GitHub'],
    metricLabel: 'Build Pipeline',
    metricValue: '100% Automated',
    visualType: 'telemetry',
  },
];

// Doubled lists for seamless 50% translation looping
const row1Items = [...ROW_1_CARDS, ...ROW_1_CARDS];
const row2Items = [...ROW_2_CARDS, ...ROW_2_CARDS];

const CardVisual: React.FC<{ type: TechPreviewCard['visualType']; color: string }> = ({
  type,
  color,
}) => {
  if (type === 'radar') {
    return (
      <div className="relative w-full h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-emerald-500/20 animate-ping" />
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-emerald-500/30" />
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-500/40" />
        </div>
        <div className="absolute top-1.5 sm:top-2 left-2 sm:left-3 text-[9px] sm:text-[10px] font-mono text-emerald-400">
          SCAN: 360&deg; ACTIVE
        </div>
        <div className="absolute bottom-1 sm:bottom-1.5 right-2 sm:right-3 text-[9px] sm:text-[10px] font-mono text-white/50">
          LIDAR 10Hz
        </div>
      </div>
    );
  }

  if (type === 'waveform') {
    return (
      <div className="relative w-full h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl bg-black/40 border border-white/5 overflow-hidden p-1.5 sm:p-2 flex flex-col justify-end">
        <div className="flex items-end gap-0.5 sm:gap-1 h-7 sm:h-10 w-full justify-between px-1">
          {[40, 65, 30, 85, 95, 45, 70, 90, 60, 100, 75, 40, 80, 50, 90, 65, 35].map(
            (val, idx) => (
              <div
                key={idx}
                style={{
                  height: `${val}%`,
                  backgroundColor: color,
                  opacity: 0.7 + (idx % 3) * 0.15,
                }}
                className="w-0.5 sm:w-1 rounded-full transition-all duration-300"
              />
            )
          )}
        </div>
        <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-white/50 mt-0.5 sm:mt-1">
          <span>MFCC SPECTRUM</span>
          <span className="text-rose-400">EDGE INFERENCE</span>
        </div>
      </div>
    );
  }

  if (type === 'code') {
    return (
      <div className="relative w-full h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl bg-black/40 border border-white/5 p-1.5 sm:p-2 font-mono text-[9px] sm:text-[11px] text-[#D7E2EA]/80 flex flex-col justify-center">
        <div className="text-indigo-300 flex items-center gap-1">
          <span className="text-white/40">&gt;</span> tRPC.inventory.requisition
        </div>
        <div className="text-white/50 text-[8px] sm:text-[10px] truncate">
          const [data] = await db.select().from(rbac)
        </div>
      </div>
    );
  }

  if (type === 'nodes') {
    return (
      <div className="relative w-full h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl bg-black/40 border border-white/5 p-1.5 sm:p-2 flex items-center justify-between px-3 sm:px-4">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-sky-400 animate-pulse" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-400/40 via-purple-500/40 to-sky-400/40 mx-1.5 sm:mx-2" />
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple-400" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-400/40 via-sky-400/40 to-purple-400/40 mx-1.5 sm:mx-2" />
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-sky-400" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl bg-black/40 border border-white/5 p-1.5 sm:p-2 flex items-center justify-around">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-bounce" />
        <span className="text-[9px] sm:text-[11px] font-mono text-white/80">INT8 QUANTIZED</span>
      </div>
      <div className="text-[8px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-500/30">
        MEMORY SAFE
      </div>
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#0C0C0C] pt-14 sm:pt-28 md:pt-40 pb-8 sm:pb-12 overflow-hidden"
    >
      <div className="flex flex-col gap-3 sm:gap-4 w-full">
        {/* Row 1 - Moves RIGHT with 0% CPU via GPU CSS keyframe */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-right flex gap-3 sm:gap-4 pr-3 sm:pr-4">
            {row1Items.map((item, index) => (
              <div
                key={`row1-${item.id}-${index}`}
                className="w-[285px] xs:w-[320px] sm:w-[360px] md:w-[420px] min-w-[285px] xs:min-w-[320px] sm:min-w-[360px] md:min-w-[420px] h-[215px] xs:h-[230px] sm:h-[250px] md:h-[270px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#111622] border border-[#1E293B]/80 p-3.5 sm:p-5 flex flex-col justify-between shadow-xl flex-shrink-0 group hover:border-purple-500/50 transition-colors"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span
                      style={{ color: item.categoryColor }}
                      className="text-[9px] sm:text-[11px] font-mono uppercase tracking-widest font-semibold"
                    >
                      {item.category}
                    </span>
                    <div className="p-1 sm:p-1.5 rounded-lg bg-white/5 border border-white/10">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-tight group-hover:text-purple-300 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#D7E2EA]/70 line-clamp-2 mt-0.5 sm:mt-1 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Visual Telemetry */}
                <CardVisual type={item.visualType} color={item.categoryColor} />

                {/* Footer Tags & Metric */}
                <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/5 text-[10px] sm:text-[11px]">
                  <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                    {item.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 sm:px-2 rounded bg-white/5 text-[#D7E2EA]/80 font-mono text-[9px] sm:text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-right flex-shrink-0 font-mono text-purple-300 font-semibold text-[10px] sm:text-xs">
                    {item.metricValue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves LEFT with 0% CPU via GPU CSS keyframe */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left flex gap-3 sm:gap-4 pr-3 sm:pr-4">
            {row2Items.map((item, index) => (
              <div
                key={`row2-${item.id}-${index}`}
                className="w-[285px] xs:w-[320px] sm:w-[360px] md:w-[420px] min-w-[285px] xs:min-w-[320px] sm:min-w-[360px] md:min-w-[420px] h-[215px] xs:h-[230px] sm:h-[250px] md:h-[270px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#111622] border border-[#1E293B]/80 p-3.5 sm:p-5 flex flex-col justify-between shadow-xl flex-shrink-0 group hover:border-purple-500/50 transition-colors"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span
                      style={{ color: item.categoryColor }}
                      className="text-[9px] sm:text-[11px] font-mono uppercase tracking-widest font-semibold"
                    >
                      {item.category}
                    </span>
                    <div className="p-1 sm:p-1.5 rounded-lg bg-white/5 border border-white/10">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-tight group-hover:text-purple-300 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#D7E2EA]/70 line-clamp-2 mt-0.5 sm:mt-1 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Visual Telemetry */}
                <CardVisual type={item.visualType} color={item.categoryColor} />

                {/* Footer Tags & Metric */}
                <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/5 text-[10px] sm:text-[11px]">
                  <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                    {item.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 sm:px-2 rounded bg-white/5 text-[#D7E2EA]/80 font-mono text-[9px] sm:text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-right flex-shrink-0 font-mono text-purple-300 font-semibold text-[10px] sm:text-xs">
                    {item.metricValue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
