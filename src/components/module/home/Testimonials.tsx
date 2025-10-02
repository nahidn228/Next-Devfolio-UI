"use client";

import { Cover } from "@/components/ui/cover";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="bg-clip-text mt-4  text-transparent text-center bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans  relative z-20 font-bold tracking-tight pb-6">
        <Cover> Words From Collaborators</Cover>
      </h2>
      ;
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Nahid is a highly skilled developer! He delivered our project on time with clean, efficient code and went above and beyond to ensure everything ran smoothly. Truly professional and reliable.",
    name: "Sarah H.",
    title: "Project Manager",
  },
  {
    quote:
      "Working with Nahid was a pleasure. He has a strong problem-solving mindset and always finds elegant solutions to complex issues. His expertise in MERN stack is impressive!",
    name: "Rafiq A.",
    title: "Frontend Developer",
  },
  {
    quote:
      "Nahid demonstrated exceptional technical skills and professionalism. His attention to detail and ability to adapt to challenging requirements made a huge difference to our project success.",
    name: "Md. Karim",
    title: "CTO",
  },
  {
    quote: "Fast, reliable, and highly skilled. Nahid knows his stuff!",
    name: "Ayesha S.",
    title: "Entrepreneur",
  },
];
