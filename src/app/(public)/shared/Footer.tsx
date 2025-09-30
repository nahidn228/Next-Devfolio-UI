"use client";

import { Github, Twitter, BookOpen, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container w-full mx-auto px-4 md:px-0 relative bg-background border-t border-primary/20 overflow-hidden ">
      {/* Background orbs - matching banner style */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/60 to-primary/40 rounded-full blur-3xl opacity-40 dark:opacity-60 animate-pulse"></div>
      <div className="absolute -top-10 right-1/3 w-48 h-48 bg-gradient-to-br from-primary/50 to-primary/30 rounded-full blur-3xl opacity-30 dark:opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-56 h-56 bg-gradient-to-br from-primary/50 to-primary/30 rounded-full blur-3xl opacity-30 dark:opacity-50 animate-pulse delay-2000"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>

      <div className="relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={"/"}>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="text-[oklch(0.623_0.214_259.815)]">
                  <Image
                    src="https://img.icons8.com/?size=96&id=8gR77jBNhfyz&format=png"
                    alt="Blue Icon"
                    width={24}
                    height={20}
                    className="mix-blend-multiply"
                  />
                </div>

                <span className="text-lg text-primary md:text-xl lg:text-2xl font-semibold  ">
                  PIC SEEK
                </span>
              </div>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed">
              Lets convert your creativity in the next level with Pic-Seek-AI.
              Find, Analyze & Explore Images Smarter with AI!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/create"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  href="/creation"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Painting
                 
 
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Animated-Image
              

                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Wallpaper  
  
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Poster 
 
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-2">
              <a
                href="https://github.com/nahidn228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer"
                >
                  <Github className="h-8 w-8" />
                </Button>
              </a>

              <a
                href="https://x.com/nahidn228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary hover:bg-[#7420E6]/10 transition-all duration-200 cursor-pointer"
                >
                  <Twitter className="h-8 w-8" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/nahid-hasan01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary hover:bg-[#7420E6]/10 transition-all duration-200 cursor-pointer"
                >
                  <Linkedin className="h-8 w-8" />
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, <br /> and shadcn/ui
            </p>
          </div>
        </div>

        {/* Bottom section with glassmorphism effect */}
        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
         
            <p className="text-base text-muted-foreground font-mono">
              © {new Date().getFullYear()} PIC SEEK. All rights reserved. Built
              for educational purposes.
            </p>
            <p className="text-base text-muted-foreground hover:text-primary mt-2">
              <a
                href="https://nahidhasan-portfolio.vercel.app/"
                target="_blank"
              >
                Built by Nahid Hasan
              </a>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-8 w-1 h-16 bg-gradient-to-t from-primary/40 to-transparent opacity-40"></div>
        <div className="absolute bottom-0 right-8 w-1 h-16 bg-gradient-to-t from-primary/40 to-transparent opacity-40"></div>
     
    </footer>
  );
};

export default Footer;
