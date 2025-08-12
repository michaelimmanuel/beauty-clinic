// src/components/organisms/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import NavMenu from "../molecules/NavMenu";
import HamburgerButton from "../atoms/HamburgerButton";
import MobileMenu from "../molecules/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  // scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // animate background when scrolled
  useEffect(() => {
    controls.start({
      backgroundColor: scrolled ? "rgba(75, 46, 43, 0.95)" : "rgba(0,0,0,0)",
      backdropFilter: scrolled ? "blur(6px)" : "blur(0px)",
      boxShadow: scrolled ? "0 6px 18px rgba(0,0,0,0.12)" : "none",
      transition: { duration: 0.28, ease: "easeInOut" },
    });
  }, [scrolled, controls]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        animate={controls}
        className="fixed top-0 left-0 w-full z-[60]"
    >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-cream">Beauty Clinic</h1>

          <div className="hidden md:flex">
            <NavMenu />
          </div>

          <HamburgerButton
            isOpen={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            
            />
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
