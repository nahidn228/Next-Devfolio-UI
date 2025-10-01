"use client";
import { ModeToggle } from "@/components/darkMode/ModeToggle";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export function NavbarPicSeek() {
  const session = useSession();
  console.log(session?.data?.user);

  const user = session?.data?.user;

  const navItems = [
    
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About Me",
      link: "/about-me",
    },
    {
      name: "My Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <div>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton className="px-0" variant="secondary">
              <ModeToggle />
            </NavbarButton>
            {user ? (
              <NavbarButton
                href="/login"
                onClick={() => signOut()}
                className="bg-orange-500 "
                variant="primary"
              >
                Logout
              </NavbarButton>
            ) : (
              <NavbarButton href="/login" variant="primary" className="bg-primary text-white">
                Login
              </NavbarButton>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <NavbarButton className="px-0" variant="secondary">
                <ModeToggle />
              </NavbarButton>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
