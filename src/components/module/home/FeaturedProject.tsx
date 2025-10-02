"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Author {
  id: number;
  name: string;
  email: string;
  picture: string | null;
}

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  liveUrl: string | null;
  repoUrl: string | null;
  views: number;
  techStack: string[];
  features: string[];
  isFeatured: boolean;
  createdAt: string;
  author: Author;
}

const StoryCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="relative w-80 h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-xl group"
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
    >
      <Image
        src={"https://prnt.sc/wb_-MfsJn6TO"}
        alt={project?.title}
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <h3 className="font-bold text-2xl tracking-wide">{project?.title}</h3>
      </div>
    </motion.div>
  );
};

export default function CarouselCards({ project }: { project: Project }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  console.log(project);

  useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setDragConstraint(containerWidth - trackWidth);
      }
    };

    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);

    return () => window.removeEventListener("resize", calculateConstraints);
  }, []);

  return (
    <div className="font-sans w-full py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          ref={containerRef}
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            ref={trackRef}
            className="flex space-x-6 pb-6 px-4"
            drag="x"
            dragConstraints={{
              right: 0,
              left: dragConstraint - 32,
            }}
            dragElastic={0.15}
          >
            <StoryCard project={project} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
