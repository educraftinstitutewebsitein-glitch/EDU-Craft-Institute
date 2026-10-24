"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ChevronDown,
  ShieldAlert,
  Target,
  Clock,
  Zap,
  BarChart2,
  TrendingUp,
  Award,
  BookOpen,
  School,
  HelpCircle,
  Phone,
  MessageCircle,
  MapPin,
  Check,
} from "lucide-react";
import {
  TEST_SERIES_HERO,
  TEST_SERIES_OVERVIEW,
  FOUNDATION_TEST_SERIES,
  HIGHER_CLASSES_TEST_SERIES,
  COMPETITIVE_TEST_SERIES,
  HOW_TEST_PRACTICE_HELPS_STAGES,
  TEST_CATEGORIES_DATA,
  TEST_SERIES_FAQS,
  CONTACT_DETAILS,
  TestCategory,
} from "@/data/testSeries";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TestSeriesContent() {
  // Category tabs state
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<
    "foundation" | "classes-9-12" | "iit-jee" | "neet"
  >("iit-jee");

  // FAQ state
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

  const currentCategoryData = TEST_CATEGORIES_DATA.find(
    (c) => c.id === selectedCategoryTab
  ) || TEST_CATEGORIES_DATA[0];

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* =========================================================================
          SECTION 3: TEST SERIES HERO (Editorial, Asymmetric)
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
            <span className="text-educraft-primary font-semibold">Test Series</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Typography Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 max-w-2xl"
            >
              <div className="inline-flex items-center space-x-2.5 bg-white/90 backdrop-blur-sm border border-educraft-secondary/40 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-educraft-gold animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-educraft-primary uppercase">
                  {TEST_SERIES_HERO.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-educraft-primary leading-[1.12] mb-4">
                TEST. ANALYSE. <br />
                <span className="text-educraft-gold relative inline-block">
                  IMPROVE.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-educraft-secondary opacity-60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-serif italic text-educraft-gold mb-6">
                &ldquo;{TEST_SERIES_HERO.supportingHeadline}&rdquo;
              </p>

              <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
                <p>{TEST_SERIES_HERO.description}</p>
              </div>

              {/* Free Notice Badge */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 mb-8 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                    Assessment Initiative
                  </div>
                  <div className="text-sm font-bold">
                    {TEST_SERIES_HERO.freeNotice}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link
                  href={TEST_SERIES_HERO.primaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide group"
                >
                  {TEST_SERIES_HERO.primaryCTA.label}
                  <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => scrollToSection(TEST_SERIES_HERO.secondaryCTA.targetId)}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-educraft-primary border-2 border-educraft-primary/20 font-medium hover:bg-educraft-light/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm tracking-wide cursor-pointer"
                >
                  {TEST_SERIES_HERO.secondaryCTA.label}
                </button>
              </div>
            </motion.div>

            {/* Right Column: Editorial Visual Showcase Card */}
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
                    alt="EDU-Craft Logo"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>

                <div className="w-full space-y-2 pt-4 border-t border-educraft-secondary/30">
                  <span className="text-[11px] font-bold text-educraft-gold tracking-widest uppercase">
                    Diagnostic Assessments
                  </span>
                  <h3 className="text-xl font-bold text-educraft-primary">
                    Assessment Driven Learning
                  </h3>
                  <p className="text-xs text-foreground/70">
                    B-71, Garden Reach Road, Kolkata – 700024
                  </p>
                </div>

                {/* 3 Pillar Summary Badges */}
                <div className="w-full mt-6 space-y-2.5 text-left text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-educraft-primary">Foundation (5–8)</div>
                      <div className="text-[10px] text-foreground/60">Anxiety Reduction &amp; Habits</div>
                    </div>
                    <span className="text-[10px] font-bold text-educraft-gold bg-educraft-light px-2 py-0.5 rounded">
                      Confidence
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-educraft-primary">Boards (9–12)</div>
                      <div className="text-[10px] text-foreground/60">Patterns &amp; Gap Identification</div>
                    </div>
                    <span className="text-[10px] font-bold text-educraft-gold bg-educraft-light px-2 py-0.5 rounded">
                      Mechanics
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-educraft-primary text-white shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">IIT-JEE &amp; NEET</div>
                      <div className="text-[10px] text-educraft-supporting-2">Simulation &amp; Negative Marking</div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-white/10 px-2 py-0.5 rounded">
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
          SECTION 4: TEST SERIES OVERVIEW & 3 DISTINCT PROGRAMMES
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#faf9f5] border-y border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Assessment Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              {TEST_SERIES_OVERVIEW.heading}
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              {TEST_SERIES_OVERVIEW.introduction}
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Programme 1: Foundation (Classes 5–8) — Warm Light Editorial Layout */}
            <div className="rounded-3xl bg-white border border-educraft-secondary/35 p-8 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light px-3 py-1 rounded-full mb-3">
                    <School className="w-3.5 h-3.5" />
                    <span>{FOUNDATION_TEST_SERIES.applicableClasses}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-educraft-primary mb-3">
                    {FOUNDATION_TEST_SERIES.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                    {FOUNDATION_TEST_SERIES.description}
                  </p>

                  <Link
                    href="/admission#enquiry"
                    className="inline-flex items-center gap-2 text-xs font-bold text-educraft-primary hover:text-educraft-gold transition-colors"
                  >
                    ENQUIRE ABOUT FOUNDATION TEST PRACTICE
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30">
                    <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-4 pb-2 border-b border-educraft-secondary/30">
                      Core Focus Areas
                    </div>
                    <ul className="space-y-3">
                      {FOUNDATION_TEST_SERIES.focusAreas.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                          <CheckCircle2 className="w-4 h-4 text-educraft-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Programme 2: Classes 9–12 Examination Practice — Balanced Clean Grid */}
            <div className="rounded-3xl bg-white border border-educraft-secondary/35 p-8 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light px-3 py-1 rounded-full mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{HIGHER_CLASSES_TEST_SERIES.applicableClasses}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-educraft-primary mb-3">
                    {HIGHER_CLASSES_TEST_SERIES.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                    {HIGHER_CLASSES_TEST_SERIES.description}
                  </p>

                  <Link
                    href="/admission#enquiry"
                    className="inline-flex items-center gap-2 text-xs font-bold text-educraft-primary hover:text-educraft-gold transition-colors"
                  >
                    ENQUIRE ABOUT BOARD TEST PRACTICE
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30">
                    <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-4 pb-2 border-b border-educraft-secondary/30">
                      Core Focus Areas
                    </div>
                    <ul className="space-y-3">
                      {HIGHER_CLASSES_TEST_SERIES.focusAreas.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                          <CheckCircle2 className="w-4 h-4 text-educraft-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Programme 3: IIT-JEE & NEET Test Practice — Prominent Deep Navy Feature */}
            <div className="rounded-3xl bg-educraft-primary text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-educraft-gold/30">
              <div className="absolute top-0 right-0 w-80 h-80 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-educraft-supporting-2/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest">
                    IIT-JEE &amp; NEET Preparation
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    {COMPETITIVE_TEST_SERIES.supportingStatement}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {COMPETITIVE_TEST_SERIES.heading}
                </h3>
                <p className="text-sm sm:text-base text-educraft-supporting-2/95 max-w-2xl leading-relaxed mb-10">
                  {COMPETITIVE_TEST_SERIES.description}
                </p>

                {/* 6 Focus Pillars Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {COMPETITIVE_TEST_SERIES.focusAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-educraft-gold/20 flex items-center justify-center text-educraft-gold mb-3">
                        <Target className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-white text-base mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-educraft-supporting-2/90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-educraft-secondary">
                    Open to all students on registration • Real examination simulations
                  </div>
                  <Link
                    href="/admission#enquiry"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all shadow-md text-xs sm:text-sm tracking-wide"
                  >
                    REGISTER FREE FOR TEST PRACTICE
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: HOW TEST PRACTICE HELPS (5-Stage Visual Journey)
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Learning Cycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              FROM PRACTICE TO PROGRESS
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              A structured five-stage assessment methodology designed to turn test attempts into lasting conceptual improvement.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          {/* 5-Stage Animated Timeline Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {HOW_TEST_PRACTICE_HELPS_STAGES.map((stage, idx) => (
                <div
                  key={stage.number}
                  className="rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30 p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-extrabold text-educraft-primary/20 font-mono group-hover:text-educraft-gold transition-colors">
                        {stage.number}
                      </span>
                      <span className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-educraft-primary mb-1">
                      {stage.title}
                    </h3>
                    <div className="text-xs font-semibold text-educraft-gold mb-3">
                      {stage.headline}
                    </div>

                    <p className="text-xs text-foreground/75 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-educraft-secondary/20 flex items-center gap-1.5 text-[11px] font-semibold text-educraft-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-educraft-gold" />
                    <span>Stage {stage.number}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Methodology Strip */}
            <div className="mt-12 p-6 rounded-2xl bg-educraft-light/50 border border-educraft-secondary/40 text-center text-xs sm:text-sm text-educraft-primary font-medium">
              Tests at EDU-Craft are treated as diagnostic learning checkpoints rather than end-point judgments.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TEST SERIES CATEGORIES (Interactive Tabs)
         ========================================================================= */}
      <section id="categories-section" className="py-20 md:py-24 bg-[#f8f9fa] border-y border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Interactive Navigation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-3">
              Test Series Categories
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Explore assessment guidelines and focus areas for your respective class or target entrance exam.
            </p>
          </div>

          {/* Interactive Segmented Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-10">
            {TEST_CATEGORIES_DATA.map((cat) => {
              const active = selectedCategoryTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryTab(cat.id)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    active
                      ? "bg-educraft-primary text-white shadow-md scale-105"
                      : "bg-white text-foreground/80 hover:bg-educraft-light/60 border border-slate-200"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.isFree && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-emerald-500 text-white">
                      FREE
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Category Panel Display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategoryData.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white border-2 border-educraft-secondary/40 p-8 sm:p-10 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-educraft-gold uppercase tracking-wider block mb-1">
                      {currentCategoryData.applicableClasses}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-educraft-primary">
                      {currentCategoryData.name} Test Practice
                    </h3>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        currentCategoryData.isFree
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-educraft-light text-educraft-primary border border-educraft-secondary/40"
                      }`}
                    >
                      {currentCategoryData.pricingLabel}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 font-medium">
                  {currentCategoryData.description}
                </p>

                {/* Focus Areas List */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-3">
                    Target Focus Areas:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentCategoryData.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#faf9f5] border border-educraft-secondary/30 flex items-center gap-2.5 text-xs text-foreground/85 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-educraft-gold shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Strip */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-foreground/60">
                    {currentCategoryData.isFree
                      ? "Free and open to all students on registration."
                      : "Structured assessment aligned with school and board curricula."}
                  </div>
                  <Link
                    href={currentCategoryData.ctaLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-educraft-primary text-white font-bold hover:bg-educraft-primary/90 transition-all text-xs sm:text-sm tracking-wide"
                  >
                    {currentCategoryData.ctaText}
                    <ArrowRight className="w-4 h-4 text-educraft-gold" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREE REGISTRATION SECTION (Prominent Dedicated CTA)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#fbf8f0] via-white to-[#fbf8f0] border-2 border-educraft-secondary/50 p-8 sm:p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-2 block">
              OPEN TEST PRACTICE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mb-4">
              TAKE THE FIRST STEP
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-8">
              IIT-JEE and NEET test practice at EDU-Craft is free and open to all on registration. Enquire today to secure your assessment seat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admission#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-xs sm:text-sm tracking-wide"
              >
                REGISTER FREE
                <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-educraft-primary border-2 border-educraft-primary/20 font-medium hover:bg-educraft-light/50 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
              >
                ASK A QUESTION
              </Link>
            </div>

            <p className="text-xs text-foreground/60 mt-6 italic">
              Note: Clicking &ldquo;Register Free&rdquo; directs you to our admissions enquiry form where you can select the Free Test Practice option.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: TEST SERIES FAQ SECTION (Accessible Accordion)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#fbfaf6] border-t border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Questions About Test Series
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Verified information on test practice, eligibility, schedules, and free registration.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {TEST_SERIES_FAQS.map((faq, index) => {
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
                Practice With Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                YOUR NEXT STEP STARTS WITH PRACTICE.
              </h2>
              <p className="text-base sm:text-lg text-educraft-supporting-2/95 leading-relaxed max-w-2xl mx-auto mb-10">
                Explore the test-practice options at EDU-Craft | Institute or contact the institute for information about registration and availability.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Link
                  href="/admission#enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg text-xs sm:text-sm tracking-wide"
                >
                  REGISTER FREE
                </Link>

                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  EXPLORE COURSES
                </Link>

                <Link
                  href="/admission#enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  START AN ENQUIRY
                </Link>

                <a
                  href={CONTACT_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all hover:-translate-y-0.5 shadow-md text-xs sm:text-sm tracking-wide"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP ({CONTACT_DETAILS.whatsapp})
                </a>
              </div>

              {/* Contact Information Footer */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-educraft-supporting-2/80">
                <a href={CONTACT_DETAILS.phoneUrl} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-educraft-gold" />
                  Call: {CONTACT_DETAILS.phone}
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-educraft-gold" />
                  {CONTACT_DETAILS.address}
                </span>
                <span className="text-educraft-gold">
                  Tagline: &ldquo;Expect the Unexpected.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
