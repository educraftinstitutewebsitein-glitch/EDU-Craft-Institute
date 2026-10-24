"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-educraft-light/30 -z-10" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-educraft-supporting-2/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-educraft-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2.5 bg-white/80 backdrop-blur-sm border border-educraft-secondary/40 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
                <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-educraft-secondary/40 bg-white">
                  <Image
                    src="/images/logo/logo.jpg"
                    alt="EDU-Craft"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-educraft-primary">Premium Coaching Institute • Est. 2021</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-educraft-primary leading-[1.1] mb-6"
            >
              EXPECT THE <br />
              <span className="text-educraft-gold relative">
                UNEXPECTED
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-educraft-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-foreground/80 mb-4"
            >
              Concepts that stay. Confidence that grows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-foreground/70 mb-8 max-w-xl leading-relaxed"
            >
              EDU-Craft provides structured academic preparation for Foundation, Higher Secondary, and Competitive examinations. We believe in building a foundation for life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/admission#enquiry"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 group"
              >
                START AN ENQUIRY
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-educraft-primary border border-educraft-primary/10 font-medium hover:bg-gray-50 transition-all hover:-translate-y-0.5 shadow-sm group"
              >
                <BookOpen className="mr-2 w-4 h-4 text-educraft-gold" />
                EXPLORE COURSES
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/admission#counselling"
                className="text-sm font-medium text-foreground/60 hover:text-educraft-primary underline underline-offset-4 transition-colors"
              >
                BOOK FREE COUNSELLING SESSION
              </Link>
            </motion.div>
          </div>

          {/* Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md lg:max-w-lg rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl bg-gradient-to-b from-white via-[#fcfbf7] to-educraft-light/30 p-8 sm:p-10 flex flex-col items-center justify-center group"
          >
            {/* Subtle background glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-educraft-gold/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-educraft-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-[320px] aspect-square transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/logo/logo.jpg"
                alt="EDU-Craft Institute Coaching Centre"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>

            <div className="mt-6 pt-5 border-t border-educraft-secondary/30 w-full flex items-center justify-between text-xs text-educraft-primary">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-educraft-gold animate-pulse" />
                Official Institute Crest
              </span>
              <span className="text-foreground/60 font-semibold tracking-wider">
                EST. 2021
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
