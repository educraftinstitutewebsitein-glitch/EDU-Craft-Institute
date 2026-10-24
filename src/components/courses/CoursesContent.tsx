"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  ShieldAlert,
  Percent,
  Sparkles,
  MapPin,
  FileText,
  Clock,
  Layers,
  Zap,
} from "lucide-react";
import {
  FOUNDATION_DATA,
  HIGHER_SECONDARY_DATA,
  COMPETITIVE_DATA,
  TEST_SERIES_DATA,
  STUDY_MATERIAL_DATA,
  COMPARISON_TABLE,
  PAYMENT_TERMS,
  SCHOLARSHIPS_INFO,
  COURSE_FAQS,
  CONTACT_INFO,
} from "@/data/coursesData";

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CoursesContent() {
  // Interactive Programme Discovery State
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "foundation" | "higher-secondary" | "iit-jee" | "neet" | "test-series"
  >("all");

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* =========================================================================
          SECTION 2: COURSES PAGE HERO (Asymmetrical Editorial Design)
         ========================================================================= */}
      <section className="relative pt-10 pb-20 md:py-24 bg-gradient-to-b from-[#f9f7f0] via-white to-white overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-educraft-supporting-2/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-educraft-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-foreground/60 mb-8 font-medium">
            <Link href="/" className="hover:text-educraft-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-educraft-gold" />
            <span className="text-educraft-primary font-semibold">Courses &amp; Programmes</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typography & CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 max-w-2xl"
            >
              <div className="inline-flex items-center space-x-2.5 bg-white/90 backdrop-blur-sm border border-educraft-secondary/40 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-educraft-gold animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-educraft-primary uppercase">
                  OUR ACADEMIC PROGRAMMES
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-educraft-primary leading-[1.12] mb-6">
                Find Your Path. <br />
                <span className="text-educraft-gold relative inline-block">
                  Build Your Future.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-educraft-secondary opacity-60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
              </h1>

              <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  EDU-Craft | Institute offers structured academic programmes for Foundation students, Higher Secondary learners, and students preparing for competitive examinations.
                </p>
                <p className="text-foreground/75 text-base">
                  Explore the available programmes and find the academic pathway relevant to your class, subjects, and examination goals.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={() => scrollToSection("programme-finder")}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide group cursor-pointer"
                >
                  EXPLORE PROGRAMMES
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/admission#enquiry"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-educraft-primary border-2 border-educraft-primary/20 font-medium hover:bg-educraft-light/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm tracking-wide"
                >
                  START AN ENQUIRY
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-10 pt-6 border-t border-educraft-secondary/30 flex flex-wrap items-center gap-6 text-xs text-foreground/70 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                  Foundation 5–10
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                  Higher Secondary 11–12
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                  Free Test Practice (NEET / JEE)
                </span>
              </div>
            </motion.div>

            {/* Right Column: Distinct Asymmetrical Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white via-[#fcfbf7] to-educraft-light/40 border-[6px] border-white shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center">
                {/* Official Logo Display */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto mb-6">
                  <Image
                    src="/images/logo/logo.jpg"
                    alt="EDU-Craft Institute Crest"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>

                <div className="w-full space-y-2 pt-4 border-t border-educraft-secondary/30">
                  <span className="text-[11px] font-bold text-educraft-gold tracking-widest uppercase">
                    Academic Year 2026–2027
                  </span>
                  <h3 className="text-xl font-bold text-educraft-primary">
                    Structured Curricular Pathways
                  </h3>
                  <p className="text-xs text-foreground/70">
                    B-71, Garden Reach Road, Kolkata – 700024
                  </p>
                </div>

                {/* 3 Pathway Badges */}
                <div className="w-full mt-6 space-y-2.5 text-left text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-educraft-primary">Foundation (5–10)</div>
                      <div className="text-[10px] text-foreground/60">WBBSE • ICSE • CBSE</div>
                    </div>
                    <span className="text-[10px] font-bold text-educraft-gold bg-educraft-light px-2 py-1 rounded">
                      Offline &amp; Online
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-educraft-primary">Higher Secondary (11–12)</div>
                      <div className="text-[10px] text-foreground/60">Science (PCMB) • Arts • Commerce</div>
                    </div>
                    <span className="text-[10px] font-bold text-educraft-gold bg-educraft-light px-2 py-1 rounded">
                      Board Mastery
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-educraft-primary text-white shadow-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">IIT-JEE &amp; NEET</div>
                      <div className="text-[10px] text-educraft-supporting-2">Targeted Problem Solving</div>
                    </div>
                    <span className="text-[10px] font-bold text-educraft-gold bg-white/10 px-2 py-1 rounded">
                      Free Practice
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: HOW TO CHOOSE A PROGRAMME (Interactive Programme-Discovery)
         ========================================================================= */}
      <section id="programme-finder" className="py-16 md:py-20 bg-[#faf9f5] border-y border-educraft-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Programme Discovery
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-educraft-primary tracking-tight mt-1 mb-3">
              How to Choose Your Programme
            </h2>
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
              Select your academic stage or examination goal to jump directly to the relevant curriculum and fee structure.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-10">
            {[
              { id: "all", label: "All Pathways" },
              { id: "foundation", label: "Foundation (Classes 5–10)" },
              { id: "higher-secondary", label: "Higher Secondary (11–12)" },
              { id: "iit-jee", label: "IIT-JEE Preparation" },
              { id: "neet", label: "NEET Preparation" },
              { id: "test-series", label: "Test Series & Practice" },
            ].map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedCategory(tab.id as typeof selectedCategory);
                    if (tab.id !== "all") {
                      scrollToSection(tab.id);
                    }
                  }}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-educraft-primary text-white shadow-md scale-105"
                      : "bg-white text-foreground/80 hover:bg-educraft-light/60 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FOUNDATION PROGRAMME
         ========================================================================= */}
      <section id="foundation" className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Programme Overview */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3">
                <BookOpen className="w-4 h-4" />
                <span>{FOUNDATION_DATA.classes}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mb-4">
                {FOUNDATION_DATA.title}
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
                {FOUNDATION_DATA.description}
              </p>

              {/* Supported Boards */}
              <div className="mb-8 p-5 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30">
                <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2">
                  Recognised Curricular Boards
                </div>
                <div className="flex flex-wrap gap-2">
                  {FOUNDATION_DATA.boards.map((board) => (
                    <span
                      key={board}
                      className="px-3.5 py-1.5 rounded-lg bg-white border border-educraft-secondary/40 text-xs font-bold text-educraft-primary shadow-2xs"
                    >
                      {board}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2 Clear Modes */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-educraft-primary uppercase tracking-wider mb-4">
                  Learning Modes Available
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border-2 border-educraft-secondary/40 shadow-sm">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider block mb-1">
                      Mode 01
                    </span>
                    <h4 className="font-bold text-educraft-primary text-base mb-1">
                      Offline Foundation
                    </h4>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      Classroom-based academic learning at our Kolkata centre.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border-2 border-educraft-secondary/40 shadow-sm">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider block mb-1">
                      Mode 02
                    </span>
                    <h4 className="font-bold text-educraft-primary text-base mb-1">
                      Online Foundation
                    </h4>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      Online academic learning accessible from home.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subjects Roster */}
              <div>
                <h3 className="text-sm font-bold text-educraft-primary uppercase tracking-wider mb-2">
                  Subjects Taught
                </h3>
                <p className="text-xs text-foreground/60 mb-3 italic">
                  Note: Displayed according to availability in the relevant class and programme. Subject arrangements for Classes 9–10 follow the school curriculum and applicable stream.
                </p>
                <div className="flex flex-wrap gap-2">
                  {FOUNDATION_DATA.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1.5 rounded-lg bg-[#f6f5ee] text-xs font-medium text-educraft-primary border border-educraft-secondary/30"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Fees & Enrollment Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-b from-white via-[#fcfbf7] to-educraft-light/50 border-2 border-educraft-secondary/40 p-8 shadow-xl relative overflow-hidden">
                <span className="text-[11px] font-bold text-educraft-gold uppercase tracking-widest block mb-2">
                  Foundation Fee Structure
                </span>
                <h3 className="text-2xl font-bold text-educraft-primary mb-6">
                  Supplied Offline Fees
                </h3>

                <div className="space-y-4 mb-6">
                  {FOUNDATION_DATA.fees.map((fee) => (
                    <div
                      key={fee.group}
                      className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-educraft-primary">
                          {fee.group}
                        </span>
                        <span className="text-xs font-bold text-educraft-gold bg-educraft-light px-2.5 py-0.5 rounded-full">
                          {fee.mode}
                        </span>
                      </div>
                      <div className="text-2xl font-extrabold text-educraft-primary">
                        {fee.feeRange}
                      </div>
                      <div className="text-[11px] text-foreground/60 mt-1">
                        {fee.note}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900 leading-relaxed mb-6">
                  <strong>Important Notice:</strong> {FOUNDATION_DATA.feeNote}
                </div>

                <Link
                  href="/admission#enquiry"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-md shadow-educraft-primary/20 text-xs sm:text-sm tracking-wide text-center"
                >
                  ENQUIRE ABOUT FOUNDATION
                  <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HIGHER SECONDARY PROGRAMME
         ========================================================================= */}
      <section id="higher-secondary" className="py-20 md:py-24 bg-[#f8f9fa] border-y border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Classes 11–12
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-3">
              {HIGHER_SECONDARY_DATA.title}
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              {HIGHER_SECONDARY_DATA.description}
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          {/* 3 Streams: Science, Arts, Commerce */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
            {HIGHER_SECONDARY_DATA.streams.map((stream) => (
              <div
                key={stream.name}
                className="rounded-3xl bg-white border border-educraft-secondary/30 p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light px-2.5 py-1 rounded-md">
                      {stream.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-foreground/40">11–12</span>
                  </div>
                  <h3 className="text-2xl font-bold text-educraft-primary mb-2">
                    {stream.name}
                  </h3>
                  <div className="text-xs font-semibold text-educraft-primary/80 mb-4">
                    {stream.combination}
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                    {stream.note}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider">
                      Subjects:
                    </div>
                    <ul className="space-y-1.5 text-xs text-foreground/80 font-medium">
                      {stream.subjects.map((sub, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-educraft-gold shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-foreground/60">
                  <span>Stream-calibrated coaching</span>
                </div>
              </div>
            ))}
          </div>

          {/* Higher Secondary Fees Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-educraft-primary text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-educraft-gold/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block mb-2">
                  Higher Secondary Fees
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Class 11 &amp; 12 Offline Tuition
                </h3>
                <p className="text-xs sm:text-sm text-educraft-supporting-2/90 leading-relaxed mb-6">
                  Fee ranges depend on the chosen study-material arrangement. GST of 18% is extra. We do not invent separate fees for Science, Arts, or Commerce.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {HIGHER_SECONDARY_DATA.fees.map((fee) => (
                    <div key={fee.group} className="p-4 rounded-xl bg-white/10 border border-white/15">
                      <div className="text-xs font-semibold text-educraft-secondary">{fee.group} — {fee.mode}</div>
                      <div className="text-xl sm:text-2xl font-bold text-white mt-1">{fee.feeRange}</div>
                      <div className="text-[10px] text-educraft-supporting-2/80 mt-1">{fee.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col justify-center items-center md:items-end text-center md:text-right">
                <div className="text-xs text-educraft-secondary mb-4">
                  Consult with our academic counsellors for subject combinations &amp; material packs.
                </div>
                <Link
                  href="/admission#enquiry"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg text-xs sm:text-sm tracking-wide"
                >
                  ENQUIRE ABOUT HIGHER SECONDARY
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COMPETITIVE EXAMINATION PROGRAMMES
         ========================================================================= */}
      <section id="iit-jee" className="py-20 md:py-24 bg-white relative">
        <div id="neet" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Entrance Exam Preparation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-3">
              COMPETITIVE PREPARATION
            </h2>
            <p className="text-xl font-serif italic text-educraft-gold mb-2">
              &ldquo;Prepare with Purpose.&rdquo;
            </p>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Targeted academic preparation focused on deep subject understanding, rigorous problem practice, and exam strategies for national competitive tests.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {COMPETITIVE_DATA.map((prog) => (
              <div
                key={prog.id}
                className="rounded-3xl bg-gradient-to-b from-[#fbfaf6] to-white border-2 border-educraft-secondary/40 p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light px-3 py-1 rounded-full border border-educraft-secondary/30">
                      {prog.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-foreground/40">
                      {prog.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-educraft-primary mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-sm font-semibold text-educraft-primary/90 mb-2">
                    {prog.target}
                  </p>

                  <p className="text-sm text-foreground/70 leading-relaxed mb-8">
                    {prog.focus}
                  </p>

                  {/* Fee Box */}
                  <div className="p-6 rounded-2xl bg-white border border-educraft-secondary/40 shadow-xs mb-8">
                    <div className="text-xs font-bold text-educraft-gold uppercase tracking-wider mb-1">
                      Fee Range — Droppers
                    </div>
                    <div className="text-3xl font-extrabold text-educraft-primary">
                      {prog.dropperFee}
                    </div>
                    <div className="text-xs text-foreground/60 mt-1">
                      {prog.note}
                    </div>
                  </div>
                </div>

                <Link
                  href="/admission#enquiry"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-md shadow-educraft-primary/20 text-xs sm:text-sm tracking-wide text-center"
                >
                  {prog.cta}
                  <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TEST SERIES
         ========================================================================= */}
      <section id="test-series" className="py-20 md:py-24 bg-[#fbfaf6] border-t border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              {TEST_SERIES_DATA.heading}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              {TEST_SERIES_DATA.headline}
            </h2>
            
            {/* Free Banner Alert */}
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{TEST_SERIES_DATA.bannerInfo}</span>
            </div>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              {TEST_SERIES_DATA.subtext}
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          {/* 3 Test Series Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 items-stretch">
            {TEST_SERIES_DATA.categories.map((cat) => (
              <div
                key={cat.level}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  cat.highlight
                    ? "bg-educraft-primary text-white shadow-xl border-2 border-educraft-gold/60"
                    : "bg-white text-foreground border border-educraft-secondary/30 shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        cat.highlight
                          ? "bg-educraft-gold text-educraft-primary"
                          : "bg-educraft-light text-educraft-primary"
                      }`}
                    >
                      {cat.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-6 ${
                      cat.highlight ? "text-white" : "text-educraft-primary"
                    }`}
                  >
                    {cat.level}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {cat.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            cat.highlight ? "text-educraft-gold" : "text-educraft-gold"
                          }`}
                        />
                        <span className={cat.highlight ? "text-educraft-supporting-2/95" : "text-foreground/80"}>
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`mt-6 pt-4 border-t text-xs font-semibold ${
                    cat.highlight ? "border-white/15 text-educraft-secondary" : "border-gray-100 text-foreground/60"
                  }`}
                >
                  {cat.highlight ? "Open to all on registration" : "Academic test benchmarking"}
                </div>
              </div>
            ))}
          </div>

          {/* Registration CTA Strip */}
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-educraft-secondary/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-educraft-gold uppercase tracking-wider">
                Registration &amp; Eligibility
              </div>
              <div className="text-base font-bold text-educraft-primary mt-1">
                Free for IIT-JEE and NEET test practice. Open to all on registration.
              </div>
            </div>
            <Link
              href="/admission#enquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all shadow-md text-xs sm:text-sm tracking-wide shrink-0"
            >
              {TEST_SERIES_DATA.cta}
              <ArrowRight className="w-4 h-4 text-educraft-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STUDY MATERIAL & DISTANCE LEARNING PACKAGES (DLP)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#faf8f2] via-white to-[#faf8f2] border-2 border-educraft-secondary/40 p-8 sm:p-12 shadow-lg">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block mb-2">
                  Academic Resources
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-educraft-primary mb-4">
                  {STUDY_MATERIAL_DATA.heading}
                </h2>
                <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6">
                  {STUDY_MATERIAL_DATA.description}
                </p>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs inline-block">
                  <div className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider">
                    Standalone Test Series / DLP Packages
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-educraft-primary mt-0.5">
                    {STUDY_MATERIAL_DATA.dlpRange}
                  </div>
                  <div className="text-[11px] text-foreground/60 mt-0.5">
                    {STUDY_MATERIAL_DATA.dlpNote}
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-center items-center md:items-end">
                <Link
                  href="/admission#enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-md text-xs sm:text-sm tracking-wide text-center"
                >
                  {STUDY_MATERIAL_DATA.cta}
                  <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: COURSE COMPARISON (Detailed Premium Table)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#f8f9fa] border-y border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Comprehensive Overview
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Programme Comparison Matrix
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Compare classes, learning modes, and verified fee details across all academic programmes offered at EDU-Craft.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          {/* Responsive Table Container */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-educraft-secondary/30 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-educraft-primary text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Programme</th>
                    <th className="py-4 px-4">Classes</th>
                    <th className="py-4 px-4">Mode</th>
                    <th className="py-4 px-6">Supplied Fee</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARISON_TABLE.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-[#faf9f5] transition-colors ${
                        item.featured ? "bg-educraft-light/30" : ""
                      }`}
                    >
                      <td className="py-4 px-6 font-bold text-educraft-primary">
                        <div className="flex items-center gap-2">
                          {item.featured && (
                            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          <span>{item.programme}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-foreground/80 font-medium">{item.classes}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                            item.mode === "Offline"
                              ? "bg-educraft-light text-educraft-primary"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item.mode}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-educraft-primary">
                        {item.fee}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link
                          href={item.ctaLink}
                          className="inline-flex items-center gap-1 text-xs font-bold text-educraft-primary hover:text-educraft-gold transition-colors"
                        >
                          {item.ctaText}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Clear Table Footer Note */}
            <div className="p-6 bg-[#faf9f5] border-t border-educraft-secondary/30 text-xs text-foreground/75 leading-relaxed">
              <p className="font-semibold text-educraft-primary mb-1">
                Fee &amp; Tax Terms Note:
              </p>
              <p>
                &ldquo;GST of 18% is extra on the listed Foundation, Higher Secondary, and Competitive programme fee ranges. Confirm the applicable programme, study-material option, and final fee with the institute.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FEES AND PAYMENT INFORMATION & SCHOLARSHIPS
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Financial Information
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Fees &amp; Payment Terms
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Transparent, straightforward payment terms and scholarship criteria established by the institute.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
            {/* Payment Terms Card */}
            <div className="rounded-3xl bg-[#faf9f5] border border-educraft-secondary/40 p-8 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-educraft-secondary/30">
                  <div className="w-10 h-10 rounded-xl bg-educraft-primary text-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-educraft-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-educraft-primary">
                      Payment Conditions
                    </h3>
                    <p className="text-xs text-foreground/60">
                      Standard fee schedule guidelines
                    </p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/80">
                  {PAYMENT_TERMS.map((term, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-educraft-gold shrink-0 mt-0.5" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-educraft-secondary/20 text-xs text-foreground/60">
                Please confirm applicable conditions with the institute during admission.
              </div>
            </div>

            {/* Scholarships & Discounts Card */}
            <div className="rounded-3xl bg-[#faf9f5] border border-educraft-secondary/40 p-8 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-educraft-secondary/30">
                  <div className="w-10 h-10 rounded-xl bg-educraft-primary text-white flex items-center justify-center">
                    <Percent className="w-5 h-5 text-educraft-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-educraft-primary">
                      Scholarships &amp; Concessions
                    </h3>
                    <p className="text-xs text-foreground/60">
                      ESAT &amp; Merit opportunities
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 mb-6">
                  <div className="text-xs font-bold text-educraft-gold uppercase tracking-wider mb-1">
                    ESAT &amp; Board Marks Criteria
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {SCHOLARSHIPS_INFO.main}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2">
                    Additional Concessions:
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {SCHOLARSHIPS_INFO.additionalDiscounts.map((d, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200 text-center">
                        <div className="text-lg font-bold text-educraft-primary">{d.value}</div>
                        <div className="text-[10px] text-foreground/60 font-semibold uppercase">{d.title}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-1.5">
                    Policy Rules:
                  </div>
                  <ul className="space-y-1.5 text-xs text-foreground/70">
                    {SCHOLARSHIPS_INFO.rules.map((r, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-educraft-gold" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-educraft-secondary/20 text-xs text-foreground/60">
                Scholarships are subject to formal verification and cannot be combined.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: COURSE FAQS (Animated Accessible Accordion)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#fbfaf6] border-t border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Common Questions About Our Courses
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Clear answers regarding our classes, syllabi, tests, materials, and admissions.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {COURSE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-educraft-secondary/40 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-bold text-base sm:text-lg text-educraft-primary">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-educraft-primary text-white rotate-180" : "bg-educraft-light text-educraft-primary"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-foreground/75 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: FINAL CALL TO ACTION
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#f9f8f4] to-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-educraft-primary text-white shadow-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-educraft-gold/30">
            {/* Background lighting */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-educraft-supporting-2/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
                Start Your Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Find the Right Academic Path.
              </h2>
              <p className="text-base sm:text-lg text-educraft-supporting-2/95 leading-relaxed max-w-2xl mx-auto mb-10">
                Explore the available EDU-Craft programmes or contact the institute to discuss your academic requirements, subjects, and applicable fee options.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <button
                  onClick={() => scrollToSection("programme-finder")}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg text-xs sm:text-sm tracking-wide cursor-pointer"
                >
                  EXPLORE PROGRAMMES
                </button>

                <Link
                  href="/admission#enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  START AN ENQUIRY
                </Link>

                <a
                  href={CONTACT_INFO.phoneUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4 text-educraft-gold" />
                  CALL NOW ({CONTACT_INFO.phone})
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all hover:-translate-y-0.5 shadow-md text-xs sm:text-sm tracking-wide"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP ({CONTACT_INFO.whatsapp})
                </a>
              </div>

              {/* Direct Location Note */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-educraft-supporting-2/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-educraft-gold" />
                  {CONTACT_INFO.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-educraft-gold" />
                  EDU-Craft | Institute • Expect the Unexpected
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
