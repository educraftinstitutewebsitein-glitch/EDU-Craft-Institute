"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Test Series", href: "/test-series" },
  { name: "Results", href: "/results" },
  { name: "Admission", href: "/admission" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-educraft-secondary/30 bg-white p-0.5 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo/logo.jpg"
              alt="EDU-Craft Institute Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-educraft-primary leading-none group-hover:text-educraft-primary/90 transition-colors">
              EDU-CRAFT
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-educraft-gold uppercase mt-0.5">
              Institute • Est. 2021
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-educraft-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/admission#enquiry"
            className="px-6 py-2.5 rounded-full bg-educraft-primary text-white text-sm font-medium hover:bg-educraft-primary/90 transition-colors shadow-lg shadow-educraft-primary/20"
          >
            START AN ENQUIRY
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm border border-educraft-secondary/30 bg-white p-0.5">
                  <Image
                    src="/images/logo/logo.jpg"
                    alt="EDU-Craft Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base text-educraft-primary">EDU-CRAFT INSTITUTE</span>
                  <span className="text-[10px] text-educraft-gold font-medium uppercase tracking-wider">Empowering Future Leaders</span>
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/admission#enquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-xl bg-educraft-primary text-white text-center font-medium shadow-md"
              >
                START AN ENQUIRY
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
