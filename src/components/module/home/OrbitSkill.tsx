"use client";


import { Cover } from "@/components/ui/cover";
import React, { useEffect, useState, memo } from "react";

type IconType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "node"
  | "tailwind"
  | "nextjs"
  | "typescript"
  | "wix"
  | "express"
  | "mongodb"
  | "postgresql"
  | "prisma"
  | "firebase"
  | "figma"
 

type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26" />
      </svg>
    ),
    color: '#E34F26'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6" />
      </svg>
    ),
    color: '#1572B6'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330" />
      </svg>
    ),
    color: '#F7DF1E'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933" />
      </svg>
    ),
    color: '#339933'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4" />
      </svg>
    ),
    color: '#06B6D4'
  },
  nextjs: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm3.09 17.91h-1.89v-1.89h-1.89v1.89H9.33v-5.33h1.89v1.89h1.89v-1.89h1.89v5.33z" />
      </svg>
    ),
    color: '#000000'
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="#3178C6" d="M0 0h24v24H0z" />
        <path fill="white" d="M12 2L2 7v10l10 5 10-5V7l-10-5zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    color: '#3178C6'
  },
 
  
  wix: {
  component: () => (
    <svg role="img" viewBox="0 0 24 24" className="w-full h-full">
      <path
        fill="currentColor"
        d="M14.045 6.467s.768 1.08 1.094 1.453c.326.374.884.422 1.238.14.355-.281.9-1.066.9-1.066l2.923-3.626-3.438.003c-1.127.01-2.168.61-2.717 1.556zm-3.742-.026s-.78 1.096-1.094 1.463c-.313.366-.868.416-1.223.133-.354-.283-.902-1.072-.902-1.072L4.166 3.339h3.438c1.13.01 2.168.614 2.699 1.559zm-6.109 3.54h2.317v8.018H4.194zm15.734 0h-2.318v8.018h2.318zm-7.318.067h-2.812c-.913 0-1.688.776-1.688 1.691 0 .878.764 1.691 1.678 1.691h.756l-3.372 4.555c-.597.809.01 1.757.928 1.757h2.738c.945 0 1.703-.76 1.703-1.704 0-.932-.732-1.66-1.664-1.66h-.664l3.346-4.572c.611-.82.015-1.757-.89-1.757z"
      />
    </svg>
  ),
  color: "#000000",
},

express: {
  component: () => (
    <svg role="img" viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="currentColor"
        d="M64 64c0 35.346-28.654 64-64 64V0c35.346 0 64 28.654 64 64z"
      />
      <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="24" fill="white">
        ex
      </text>
    </svg>
  ),
  color: "#000000",
},

mongodb: {
  component: () => (
    <svg role="img" viewBox="0 0 24 24" className="w-full h-full">
      <path
        fill="#47A248"
        d="M12 0C12 0 8.573 2.789 7.876 6.118c-.697 3.329.235 7.008 1.918 9.257 1.683 2.25 2.5 4.447 2.5 4.447s.818-2.197 2.5-4.447c1.683-2.249 2.615-5.928 1.918-9.257C15.427 2.789 12 0 12 0z"
      />
    </svg>
  ),
  color: "#47A248",
},

postgresql: {
  component: () => (
    <svg role="img" viewBox="0 0 24 24" className="w-full h-full">
      <path
        fill="#336791"
        d="M23.5 8.7c-.2-1.2-.9-2.1-2-2.4-1.7-.5-3.7.3-5.3 2.1-1.3 1.5-2.3 3.6-2.8 5.7-.3 1.2-.6 2.6-1.2 3.5-.6.9-1.5 1.3-2.6 1.3-.7 0-1.5-.1-2.2-.3-1.4-.4-2.7-1.2-3.7-2.1C2.2 15 1.5 13.7 1.5 12c0-1.4.6-2.7 1.5-3.6.9-.9 2.1-1.5 3.5-1.5 1.5 0 2.8.6 3.6 1.6.4.5.7 1 .9 1.6.2.6.2 1.3.1 1.9-.1.6-.3 1.1-.6 1.6-.3.5-.8.9-1.3 1.1-.5.2-1.1.3-1.6.2-.5 0-.9-.2-1.3-.4-.4-.3-.7-.6-1-1-.3-.4-.4-.9-.5-1.4 0-.5.1-1 .3-1.5.2-.4.5-.8.9-1.1.4-.3.9-.5 1.4-.5s.9.2 1.2.5c.3.3.5.7.6 1.1.1.4.1.9-.1 1.3-.2.4-.4.8-.8 1.1-.4.3-.8.5-1.3.5-.3 0-.6-.1-.9-.3-.3-.2-.5-.5-.6-.8s-.2-.7-.1-1c.1-.3.3-.6.5-.8.2-.2.5-.3.8-.3s.6.1.8.3c.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.2-.5.3-.8.3-.3 0-.5-.1-.7-.3s-.3-.4-.3-.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3s.4.1.6.2c.1.2.2.3.2.5 0 .2-.1.4-.2.6-.2.2-.4.3-.6.3"
      />
    </svg>
  ),
  color: "#336791",
},

prisma: {
  component: () => (
    <svg role="img" viewBox="0 0 24 24" className="w-full h-full">
      <path
        fill="#2D3748"
        d="M12 0L1.5 21h21L12 0zM12 3.6l7.7 15.4H4.3L12 3.6z"
      />
    </svg>
  ),
  color: "#2D3748",
},

firebase: {
  component: () => (
    <svg role="img" viewBox="0 0 24 24" className="w-full h-full">
      <path
        fill="#FFCA28"
        d="M3 21L12 2l2.5 5L21 21H3z"
      />
      <path
        fill="#FFA000"
        d="M12 2l2.5 5-2.5 3-2.5-3L12 2z"
      />
    </svg>
  ),
  color: "#FFCA28",
},

figma: {
  component: () => (
    <svg role="img" viewBox="0 0 24 24" className="w-full h-full">
      <path fill="#F24E1E" d="M12 12a3 3 0 110-6 3 3 0 010 6z"/>
      <path fill="#FF7262" d="M6 6a3 3 0 116 0 3 3 0 01-6 0z"/>
      <path fill="#A259FF" d="M18 6a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path fill="#1ABCFE" d="M6 12a3 3 0 116 0 3 3 0 01-6 0z"/>
      <path fill="#0ACF83" d="M6 18a3 3 0 116 0 3 3 0 01-6 0z"/>
    </svg>
  ),
  color: "#F24E1E",
},

 
 
};


// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit (Core Frontend)
  {
    id: "html",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "HTML5",
  },
  {
    id: "css",
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 5,
    glowColor: "cyan",
    label: "CSS3",
  },
  {
    id: "javascript",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "javascript",
    phaseShift: (4 * Math.PI) / 5,
    glowColor: "cyan",
    label: "JavaScript",
  },
  {
    id: "typescript",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "typescript",
    phaseShift: (6 * Math.PI) / 5,
    glowColor: "cyan",
    label: "TypeScript",
  },
  {
    id: "tailwind",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "tailwind",
    phaseShift: (8 * Math.PI) / 5,
    glowColor: "cyan",
    label: "Tailwind CSS",
  },

  // Middle Orbit (Frameworks & Tools)
  {
    id: "react",
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "React",
  },
  {
    id: "nextjs",
    orbitRadius: 180,
    size: 48,
    speed: -0.6,
    iconType: "nextjs",
    phaseShift: (2 * Math.PI) / 6,
    glowColor: "purple",
    label: "Next.js",
  },
  
  {
    id: "node",
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: "node",
    phaseShift: (6 * Math.PI) / 6,
    glowColor: "purple",
    label: "Node.js",
  },
  {
    id: "express",
    orbitRadius: 180,
    size: 42,
    speed: -0.6,
    iconType: "express",
    phaseShift: (8 * Math.PI) / 6,
    glowColor: "purple",
    label: "Express.js",
  },
  {
    id: "wix",
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: "wix",
    phaseShift: (10 * Math.PI) / 6,
    glowColor: "purple",
    label: "Wix",
  },

  // Outer Orbit (Backend, DB, DevOps, Design)
  {
    id: "mongodb",
    orbitRadius: 260,
    size: 50,
    speed: 0.4,
    iconType: "mongodb",
    phaseShift: 0,
    glowColor: "cyan",
    label: "MongoDB",
  },
  {
    id: "postgresql",
    orbitRadius: 260,
    size: 48,
    speed: 0.4,
    iconType: "postgresql",
    phaseShift: (2 * Math.PI) / 7,
    glowColor: "purple",
    label: "PostgreSQL",
  },
  {
    id: "prisma",
    orbitRadius: 260,
    size: 42,
    speed: 0.4,
    iconType: "prisma",
    phaseShift: (4 * Math.PI) / 7,
    glowColor: "cyan",
    label: "Prisma",
  },
  {
    id: "firebase",
    orbitRadius: 260,
    size: 46,
    speed: 0.4,
    iconType: "firebase",
    phaseShift: (6 * Math.PI) / 7,
    glowColor: "purple",
    label: "Firebase",
  },
  
  
  {
    id: "figma",
    orbitRadius: 260,
    size: 40,
    speed: 0.4,
    iconType: "figma",
    phaseShift: (16 * Math.PI) / 7,
    glowColor: "purple",
    label: "Figma",
  },
 
 
  
];


// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = "cyan",
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const glowColors = {
      cyan: {
        primary: "rgba(6, 182, 212, 0.4)",
        secondary: "rgba(6, 182, 212, 0.2)",
        border: "rgba(6, 182, 212, 0.3)",
      },
      purple: {
        primary: "rgba(147, 51, 234, 0.4)",
        secondary: "rgba(147, 51, 234, 0.2)",
        border: "rgba(147, 51, 234, 0.3)",
      },
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        {/* Glowing background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Static ring for depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{
    radius: number;
    glowColor: GlowColor;
    delay: number;
  }> = [
    { radius: 100, glowColor: "cyan", delay: 0 },
    { radius: 180, glowColor: "purple", delay: 1.5 },
  ];

  return (
    <section className="py-20">
      <h2 className="mx-auto text-center text-white text-2xl md:text-4xl font-sans py-10 md:pt-10 relative z-20 font-bold tracking-tight">
        <Cover>My Skills</Cover>
      </h2>

    <main className="w-full flex items-center justify-center overflow-hidden">


      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[600px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div
            className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
    </section>
  );
}
