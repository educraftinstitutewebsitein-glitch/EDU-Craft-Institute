"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-educraft-primary text-white border-t border-educraft-gold/20">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
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
                <span className="font-bold text-xl tracking-tight text-white leading-tight">
                  EDU-CRAFT
                </span>
                <span className="text-[10px] tracking-widest text-educraft-gold uppercase font-semibold">
                  Institute • Est. 2021
                </span>
              </div>
            </Link>
            <p className="text-sm text-educraft-supporting-2/90 leading-relaxed">
              Education Beyond Expectations. Structured academic preparation for Foundation, Higher Secondary, and Competitive examinations.
            </p>
            <div className="pt-2 text-xs text-educraft-secondary font-medium tracking-wide">
              Tagline: &ldquo;Expect the Unexpected.&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-educraft-gold" />
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-educraft-supporting-2/80">
              <li>
                <Link href="/" className="hover:text-educraft-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-educraft-gold transition-colors">
                  About EDU-Craft
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-educraft-gold transition-colors">
                  Academic Programmes
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-educraft-gold transition-colors">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-educraft-gold transition-colors">
                  Events &amp; Competitions
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-educraft-gold transition-colors">
                  Student Testimonials
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-educraft-gold transition-colors">
                  Admissions &amp; Enquiry
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-educraft-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Programmes */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-educraft-gold" />
              Programmes
            </h4>
            <ul className="space-y-2.5 text-sm text-educraft-supporting-2/80">
              <li className="flex items-start gap-2">
                <span className="text-educraft-gold">›</span>
                <span>Foundation (Classes 5–10)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-educraft-gold">›</span>
                <span>Higher Secondary (11–12 PCMB, Arts, Commerce)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-educraft-gold">›</span>
                <span>NEET Preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-educraft-gold">›</span>
                <span>IIT-JEE Preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-educraft-gold">›</span>
                <span>Board Test Series</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-educraft-gold" />
              Visit the Institute
            </h4>
            <ul className="space-y-3 text-sm text-educraft-supporting-2/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-educraft-gold shrink-0 mt-1" />
                <span>B-71, Garden Reach Road, Kolkata – 700024</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-educraft-gold shrink-0" />
                <span>Offline &amp; Online Learning Modes</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/admission#enquiry"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-educraft-gold/20 text-educraft-gold border border-educraft-gold/40 text-xs font-semibold hover:bg-educraft-gold hover:text-educraft-primary transition-all duration-200"
                >
                  START AN ENQUIRY
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-educraft-supporting-2/70 gap-4">
          <p>© {currentYear} EDU-Craft | Institute. All rights reserved.</p>
          <p className="text-educraft-secondary/80">
            Education Beyond Expectations. B-71, Garden Reach Road, Kolkata – 700024
          </p>
        </div>
      </div>
    </footer>
  );
}
