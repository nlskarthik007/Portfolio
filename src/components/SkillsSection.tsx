import React from 'react';
import FadeIn from './FadeIn';

interface SkillBadge {
  name: string;
  bgColor: string;
  textColor?: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: SkillBadge[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI and Data Science',
    skills: [
      {
        name: 'PYTHON',
        bgColor: '#2B5B84',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.914 0C5.82 0 6.195 2.64 6.195 2.64l.008 2.738h5.813v.824H3.86S0 5.757 0 11.874c0 6.115 3.375 5.91 3.375 5.91h2.016v-2.82s-.11-3.376 3.315-3.376h5.688s3.197.054 3.197-3.14V3.14S18.064 0 11.914 0zm-3.23 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" fill="#3776AB"/>
            <path d="M12.086 24c6.094 0 5.72-2.64 5.72-2.64l-.008-2.738h-5.813v-.824h8.156S24 18.243 24 12.126c0-6.115-3.375-5.91-3.375-5.91h-2.016v2.82s.11 3.376-3.315 3.376H9.606s-3.197-.054-3.197 3.14v5.304S5.936 24 12.086 24zm3.23-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" fill="#FFD43B"/>
          </svg>
        ),
      },
      {
        name: 'PYTORCH',
        bgColor: '#EE4C2C',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M13.6 0a9.6 9.6 0 0 0-4.8 1.3 9.6 9.6 0 0 0-3.5 3.5c-.3.5 0 1 .5 1.2.5.3 1 .1 1.3-.3a7.8 7.8 0 0 1 2.8-2.8c2.8-1.6 6.3-.7 7.9 2.1s.7 6.3-2.1 7.9c-2.4 1.4-5.4.8-7.1-1.2l2.3-2.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3.8 3.8c-.4.4-.4 1 0 1.4l3.8 3.8c.4.4 1 .4 1.4 0s.4-1 0-1.4l-2.1-2.1a9.6 9.6 0 0 0 8.8 1.4 9.6 9.6 0 0 0 5.7-5.7c1.6-4.5-.4-9.5-4.8-11.1-.8-.3-1.6-.4-2.5-.4zm3.8 4.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z" />
          </svg>
        ),
      },
      {
        name: 'TENSORFLOW',
        bgColor: '#FF6F00',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 0L1.7 5.9v12.2l4.3-2.5V8.4l6-3.4 6 3.4v7.2l4.3 2.5V5.9L12 0zm-1.7 10.7l-4.3 2.5v4.9l4.3 2.5v-9.9zm3.4 0v9.9l4.3-2.5v-4.9l-4.3-2.5z" />
          </svg>
        ),
      },
      {
        name: 'SCIKIT-LEARN',
        bgColor: '#F7931E',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 0 0-9 9c0 4.1 2.8 7.6 6.6 8.6l1.2-3.8c-2.3-.6-4-2.6-4-4.8 0-2.8 2.3-5 5-5 .4 0 .7 0 1.1.1l1.3-3.7A9 9 0 0 0 12 3zm4.5 2.2l-1.3 3.7c1.9 1 3.2 2.9 3.2 5.1 0 1.5-.6 2.8-1.6 3.8l2.7 2.7c1.8-1.7 2.9-4 2.9-6.5 0-3.8-2.4-7-5.9-8.8zM12 8a4 4 0 0 0-4 4c0 1.9 1.3 3.5 3.1 3.9l.9-2.9c-.6-.2-1-.7-1-1.3 0-.8.7-1.5 1.5-1.5.2 0 .4 0 .6.1l.9-2.8A4 4 0 0 0 12 8z" />
          </svg>
        ),
      },
      {
        name: 'PANDAS',
        bgColor: '#150458',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <rect x="2" y="4" width="4" height="16" rx="1" fill="#FF4A00" />
            <rect x="8" y="1" width="4" height="22" rx="1" fill="#150458" stroke="white" strokeWidth="0.5" />
            <rect x="14" y="6" width="4" height="14" rx="1" fill="#E70488" />
            <rect x="20" y="9" width="3" height="10" rx="1" fill="#FFD43B" />
          </svg>
        ),
      },
      {
        name: 'NUMPY',
        bgColor: '#013243',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 1L2 6.5v11L12 23l10-5.5v-11L12 1zm0 2.2l7.8 4.3L12 11.8 4.2 7.5 12 3.2zm-8 6l7 3.9v7.7l-7-3.9V9.2zm16 7.7l-7 3.9V13l7-3.9v7.8z" />
          </svg>
        ),
      },
      {
        name: 'OPENCV',
        bgColor: '#5C3EE8',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4.5" fill="#EE2C2C" />
            <circle cx="7" cy="16" r="4.5" fill="#00D26A" />
            <circle cx="17" cy="16" r="4.5" fill="#0075FF" />
            <circle cx="12" cy="7" r="2" fill="#5C3EE8" />
            <circle cx="7" cy="16" r="2" fill="#5C3EE8" />
            <circle cx="17" cy="16" r="2" fill="#5C3EE8" />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'Frontend and Mobile',
    skills: [
      {
        name: 'JAVASCRIPT',
        bgColor: '#F7DF1E',
        textColor: '#000000',
        icon: (
          <span className="font-black bg-black text-[#F7DF1E] text-[10px] px-1 rounded-sm leading-none flex items-center justify-center h-4 w-4">
            JS
          </span>
        ),
      },
      {
        name: 'TYPESCRIPT',
        bgColor: '#3178C6',
        icon: (
          <span className="font-black bg-white text-[#3178C6] text-[10px] px-0.5 rounded-sm leading-none flex items-center justify-center h-4 w-4">
            TS
          </span>
        ),
      },
      {
        name: 'REACT',
        bgColor: '#20232A',
        icon: (
          <svg className="w-4 h-4 text-[#61DAFB] fill-none stroke-current" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g strokeWidth="1">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        name: 'VITE',
        bgColor: '#646CFF',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M23.2 3.8l-10 18.5a1 1 0 0 1-1.8 0L.8 3.8A1 1 0 0 1 1.7 2.4l11.5 2.1 9.2-2.1a1 1 0 0 1 .8 1.4z" />
          </svg>
        ),
      },
      {
        name: 'FLUTTER',
        bgColor: '#02569B',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M14.3 0L4.5 9.8l3.1 3.1 12.9-12.9H14.3zm0 13.9L8.4 19.8l4.2 4.2h6.2l-7.3-7.3 2.8-2.8z" />
          </svg>
        ),
      },
      {
        name: 'KOTLIN',
        bgColor: '#7F52FF',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M24 24H0V0h24L12 12z" />
          </svg>
        ),
      },
      {
        name: 'HTML5',
        bgColor: '#E34F26',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M2.3 0l1.8 20.7L12 24l7.9-3.3L21.7 0H2.3zm15.8 5.7h-9.9l.2 2.7h9.5l-.8 8.6L12 18.3l-5.1-1.3-.3-3.6h2.7l.2 1.7 2.5.7 2.5-.7.3-3H6.5L5.7 3.1h12.8l-.4 2.6z" />
          </svg>
        ),
      },
      {
        name: 'CSS3',
        bgColor: '#1572B6',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M2.3 0l1.8 20.7L12 24l7.9-3.3L21.7 0H2.3zm15.8 5.7H6.3l.2 2.7h9.3l-.7 7.7-3.1.9-3.1-.9-.2-2h-2.7l.4 3.7L12 18.9l5.6-1.5.7-7.7.2-2.7.2-1.3z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'Backend and Databases',
    skills: [
      {
        name: 'NODE.JS',
        bgColor: '#339933',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.3L4.1 8.8v8.8L12 22.1l7.9-4.5V8.8L12 4.3z" />
          </svg>
        ),
      },
      {
        name: 'EXPRESS.JS',
        bgColor: '#303030',
        icon: (
          <span className="font-serif italic font-bold text-white text-xs tracking-tighter">
            ex
          </span>
        ),
      },
      {
        name: 'POSTGRESQL',
        bgColor: '#336791',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 3.8 2.1 7.1 5.2 8.8.2-.4.4-.8.7-1.2-1.5-1.1-2.4-2.8-2.4-4.8 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.9-.9 3.6-2.3 4.7.3.4.6.8.8 1.3 3.1-1.7 5.2-5 5.2-8.8 0-5.5-4.5-10-10-10zm0 7c-1.7 0-3 1.3-3 3 0 1.2.7 2.3 1.8 2.8-.2-.7-.3-1.4-.3-2.1 0-1.7 1.3-3 3-3 .7 0 1.4.2 2.1.5-.5-1.1-1.6-1.2-3.6-1.2z" />
          </svg>
        ),
      },
      {
        name: 'MONGODB',
        bgColor: '#47A248',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 0s-5.8 4.7-5.8 12.3c0 5.4 3.7 9.4 5.8 11.7 2.1-2.3 5.8-6.3 5.8-11.7C17.8 4.7 12 0 12 0zm.4 20.3v-6.5c1.4-.3 2.4-1.6 2.4-3.1 0-.9-.4-1.7-1-2.3v-.8c1.3.8 2.2 2.2 2.2 3.8 0 2.2-1.6 4-3.6 4.3v4.6z" />
          </svg>
        ),
      },
      {
        name: 'SUPABASE',
        bgColor: '#3ECF8E',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M13.4 24c-.6 0-1.2-.4-1.4-1l-3.3-8.8H1.6C.6 14.2 0 13.4 0 12.4c0-.7.3-1.3.8-1.8L13 .5c.6-.6 1.5-.7 2.3-.3.8.4 1.2 1.2 1.2 2.1v7.6h7.1c1 0 1.9.8 2.1 1.8.2 1-.3 2-1.2 2.5L14.7 23.4c-.4.4-.9.6-1.3.6z" />
          </svg>
        ),
      },
      {
        name: 'FIREBASE',
        bgColor: '#FFCA28',
        textColor: '#000000',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M3.9 18.5L6.5 2.1c.1-.5.7-.7 1.1-.4l3.7 6.9-7.4 9.9zm16.2 0L17.7 5.8c-.1-.5-.8-.7-1.1-.3l-3.3 3.3 6.8 9.7zm-9.3-8.2l-2.4-4.5c-.2-.4-.8-.4-1 0L1.1 18.3l9.7 5.4c.7.4 1.7.4 2.4 0l9.7-5.4-12.1-8z" fill="#FFA000" />
            <path d="M10.8 10.3l-2.4-4.5c-.2-.4-.8-.4-1 0L1.1 18.3 12 24.4l-1.2-14.1z" fill="#F57C00" />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'Embedded and Robotics',
    skills: [
      {
        name: 'C',
        bgColor: '#00599C',
        icon: (
          <span className="font-mono font-bold text-white text-xs border border-white/40 rounded px-1">
            C
          </span>
        ),
      },
      {
        name: 'C++',
        bgColor: '#00599C',
        icon: (
          <span className="font-mono font-bold text-white text-xs border border-white/40 rounded px-1">
            C++
          </span>
        ),
      },
      {
        name: 'ARDUINO',
        bgColor: '#00979D',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M7 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c2.2 0 4.1-1.2 5-3 .9 1.8 2.8 3 5 3 3.3 0 6-2.7 6-6s-2.7-6-6-6c-2.2 0-4.1 1.2-5 3-.9-1.8-2.8-3-5-3zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm10 0c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zM5 11h4v2H5v-2zm10 0h1.5V9.5h1V11H19v1h-1.5v1.5h-1V12H15v-1z" />
          </svg>
        ),
      },
      {
        name: 'ESP32',
        bgColor: '#E7352C',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="white" />
            <path d="M12 1v2M12 21v2M1 12h2M21 12h2" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'ROS 2',
        bgColor: '#22314E',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <circle cx="5" cy="5" r="2.5" />
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="19" cy="5" r="2.5" />
            <circle cx="5" cy="12" r="2.5" />
            <circle cx="12" cy="12" r="2.5" />
            <circle cx="19" cy="12" r="2.5" />
            <circle cx="5" cy="19" r="2.5" />
            <circle cx="12" cy="19" r="2.5" />
            <circle cx="19" cy="19" r="2.5" />
          </svg>
        ),
      },
      {
        name: 'MATLAB',
        bgColor: '#E16737',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 3.5c1.9 1.4 3.7 3.5 4.5 5.5-1.5.3-3.4.1-5.3-.4-.5-.1-1-.3-1.5-.5 1-1.8 1.8-3.4 2.3-4.6zm-4.7 1.9c.5.2 1 .3 1.5.5-1 2.2-2.1 4.5-3.5 6.4C5.5 12.3 5.4 9.8 6.5 8c.5-.8 1.1-1.3 1.8-.6zm-.8 9.5c1.2-1.6 2.2-3.6 3.1-5.5 1.7.5 3.5.7 4.9.4-.6 1.8-1.8 3.5-3.5 4.6-1.5 1-3.2 1.1-4.5.5z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'DevOps and Core Tools',
    skills: [
      {
        name: 'JAVA',
        bgColor: '#E76F00',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M9 19c3.5.4 6.7-.4 8.7-2.1-2.2-.2-4.1-.7-5.5-1.6-1.8 1.2-2.6 2.3-3.2 3.7zm-2.8-4.4c.5-1.3 1.8-2.6 3.9-3.7-2.7.2-4.8.9-6.1 2.1 1 1 1.7 1.4 2.2 1.6zm6.3-5.2c1.7 1 3.8 1.4 6.2 1.2-1.7-.8-3.2-2.2-4.4-4-1.2 1.4-1.8 2.2-1.8 2.8zm5.9 8.2c-.3.1-.7.2-1 .2 1.4-.4 2.5-1.1 3.2-2.1-.6.7-1.3 1.4-2.2 1.9z" />
          </svg>
        ),
      },
      {
        name: 'DOCKER',
        bgColor: '#2496ED',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M13 3h3v3h-3V3zm-4 0h3v3H9V3zm-4 4h3v3H5V7zm4 0h3v3H9V7zm4 0h3v3h-3V7zm4 0h3v3h-3V7zm-8 4h3v3H9v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zM1 12.8c0 5 4 8.7 9.8 8.7 7.2 0 11.8-4.5 12.7-10.2H.5c.1.5.3 1 .5 1.5z" />
          </svg>
        ),
      },
      {
        name: 'UBUNTU',
        bgColor: '#E95420',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="4" r="1.8" />
            <circle cx="5" cy="16" r="1.8" />
            <circle cx="19" cy="16" r="1.8" />
          </svg>
        ),
      },
      {
        name: 'LINUX',
        bgColor: '#FCC624',
        textColor: '#000000',
        icon: (
          <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
            <path d="M12 2c-3.3 0-5 2.5-5 5.5 0 1.2.3 2.5.8 3.5-.7.8-1.8 2.2-1.8 4 0 2.8 1.8 5 4 5 .5 0 1.1-.1 1.6-.4.4.2.9.4 1.4.4.5 0 1-.2 1.4-.4.5.3 1.1.4 1.6.4 2.2 0 4-2.2 4-5 0-1.8-1.1-3.2-1.8-4 .5-1 .8-2.3.8-3.5C17 4.5 15.3 2 12 2z" />
          </svg>
        ),
      },
      {
        name: 'GIT',
        bgColor: '#F05032',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M23.6 10.9L13.1.4a2.2 2.2 0 0 0-3.1 0L7.9 2.5l3.9 3.9a2.6 2.6 0 0 1 3.3 3.3l3.8 3.8a2.6 2.6 0 1 1-1.6 1.5l-3.5-3.5v5.7a2.6 2.6 0 1 1-2.2 0V9.8a2.6 2.6 0 0 1-1.4-3.4L6.3 2.5.4 8.4a2.2 2.2 0 0 0 0 3.1l10.5 10.5c.9.9 2.3.9 3.1 0l9.6-9.6a2.2 2.2 0 0 0 0-3.1z" />
          </svg>
        ),
      },
      {
        name: 'GITHUB',
        bgColor: '#181717',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12c0-6.6-5.4-12-12-12z" />
          </svg>
        ),
      },
      {
        name: 'RAILWAY',
        bgColor: '#131415',
        icon: (
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M2.5 19h19v2.5h-19V19zm19-14h-19V2.5h19V5zm-15 4.5h11v5h-11v-5z" />
          </svg>
        ),
      },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 z-0 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-18 md:mb-24">
            <h2
              style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
              className="hero-heading font-black uppercase tracking-tight leading-none mb-3 sm:mb-4 select-none"
            >
              Technical Skills
            </h2>
            <p className="text-[#D7E2EA]/70 font-light text-xs sm:text-base md:text-lg max-w-xl mx-auto px-2">
              A comprehensive toolkit spanning AI, full-stack systems, robotics, and cloud engineering.
            </p>
          </div>
        </FadeIn>

        {/* Technical Skills Table matching the provided image */}
        <FadeIn delay={0.15} y={30}>
          <div className="w-full rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#1E293B]/80 bg-[#0B0F19]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
            {SKILL_CATEGORIES.map((categoryGroup, index) => (
              <div
                key={categoryGroup.category}
                className={`flex flex-col md:flex-row items-stretch transition-colors hover:bg-white/[0.015] ${
                  index < SKILL_CATEGORIES.length - 1
                    ? 'border-b border-[#1E293B]/80'
                    : ''
                }`}
              >
                {/* Category label column */}
                <div className="w-full md:w-64 lg:w-72 flex-shrink-0 px-4 py-3 sm:px-6 sm:py-4 md:py-6 md:px-8 border-b md:border-b-0 md:border-r border-[#1E293B]/80 flex items-center bg-[#0D1322]/80 md:bg-transparent">
                  <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">
                    {categoryGroup.category}
                  </h3>
                </div>

                {/* Skills badges column */}
                <div className="flex-1 px-3.5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 items-center">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        backgroundColor: skill.bgColor,
                        color: skill.textColor || '#FFFFFF',
                      }}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-md font-bold text-[10px] xs:text-[11px] sm:text-xs md:text-sm tracking-wider uppercase select-none transition-all duration-200 active:scale-95 hover:scale-105 hover:shadow-lg shadow-sm cursor-default"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center scale-90 sm:scale-100">
                        {skill.icon}
                      </span>
                      <span className="whitespace-nowrap font-bold">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SkillsSection;
