// components/Logo.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Logo Icon (Custom SVG) */}
      <motion.div
        initial={{ rotate: -15, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-10 h-10 flex items-center justify-center rounded-2xl bg-primary text-white shadow-lg group-hover:scale-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {/* Code brackets icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          />
        </svg>
      </motion.div>

      {/* Logo Text */}
      <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-indigo-600 transition">
        Dev<span className="text-primary">Folio</span>
      </span>
    </Link>
  );
}
