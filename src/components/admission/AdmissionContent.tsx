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
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  HelpCircle,
  Award,
  BookOpen,
  GraduationCap,
  Calendar,
  Layers,
  Percent,
  Compass,
} from "lucide-react";
import {
  ADMISSION_HERO_DATA,
  ADMISSION_PHILOSOPHY,
  ADMISSION_PROGRAMMES,
  ADMISSION_STEPS,
  SCHOLARSHIP_DETAILS,
  FEES_TRANSPARENCY_INFO,
  CONTACT_BUSINESS_INFO,
  ADMISSION_FAQS,
} from "@/data/admissionData";
import AdmissionForm from "./AdmissionForm";

// Framer motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AdmissionContent() {
  const [selectedProgrammePrefill, setSelectedProgrammePrefill] = useState(
    "Foundation Programme"
  );
  const [selectedMessagePrefill, setSelectedMessagePrefill] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToEnquiry = (programmeName?: string, messageNote?: string) => {
    if (programmeName) {
      setSelectedProgrammePrefill(programmeName);
    }
    if (messageNote) {
      setSelectedMessagePrefill(messageNote);
    }
    const el = document.getElementById("enquiry");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* =========================================================================
          SECTION 3: ADMISSION HERO (Editorial, Asymmetric)
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
            <span className="text-educraft-primary font-semibold">Admissions &amp; Enquiry</span>
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
                  {ADMISSION_HERO_DATA.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-educraft-primary leading-[1.12] mb-6">
                Your Next Chapter <br />
                <span className="text-educraft-gold relative inline-block">
                  Starts Here.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-educraft-secondary opacity-60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
                {ADMISSION_HERO_DATA.supportingText}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={() => scrollToEnquiry()}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide group cursor-pointer"
                >
                  {ADMISSION_HERO_DATA.primaryCTA}
                  <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-educraft-primary border-2 border-educraft-primary/20 font-medium hover:bg-educraft-light/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm tracking-wide"
                >
                  {ADMISSION_HERO_DATA.secondaryCTA}
                </Link>
              </div>

              {/* Direct Reach Pill */}
              <div className="mt-10 pt-6 border-t border-educraft-secondary/30 flex flex-wrap items-center gap-6 text-xs text-foreground/70 font-medium">
                <a
                  href={CONTACT_BUSINESS_INFO.phoneUrl}
                  className="flex items-center gap-1.5 hover:text-educraft-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-educraft-gold" />
                  Call: {CONTACT_BUSINESS_INFO.phone}
                </a>
                <a
                  href={CONTACT_BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp: {CONTACT_BUSINESS_INFO.whatsapp}
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-educraft-gold" />
                  Kolkata – 700024
                </span>
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
                    Session {CONTACT_BUSINESS_INFO.academicSession}
                  </span>
                  <h3 className="text-xl font-bold text-educraft-primary">
                    Academic Enrolment Enquiry
                  </h3>
                  <p className="text-xs text-foreground/70">
                    B-71, Garden Reach Road, Kolkata – 700024
                  </p>
                </div>

                <div className="w-full mt-6 space-y-2.5 text-left text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-educraft-primary">Free Counselling</div>
                      <div className="text-[10px] text-foreground/60">One-on-one academic consultation</div>
                    </div>
                    <span className="text-[10px] font-bold text-educraft-gold bg-educraft-light px-2 py-0.5 rounded">
                      Available
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-educraft-primary">Trial Session</div>
                      <div className="text-[10px] text-foreground/60">Adjusted against tuition on enrollment</div>
                    </div>
                    <span className="text-[10px] font-bold text-educraft-gold bg-educraft-light px-2 py-0.5 rounded">
                      ₹800 Credit
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PHILOSOPHY SECTION
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-educraft-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-educraft-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-educraft-supporting-2/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
              Admission Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              &ldquo;{ADMISSION_PHILOSOPHY.headline}&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-educraft-supporting-2/95 leading-relaxed">
              {ADMISSION_PHILOSOPHY.copy}
            </p>
            <div className="w-20 h-0.5 bg-educraft-gold/50 mx-auto mt-6" />
          </div>

          {/* 3 Concise Principles */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {ADMISSION_PHILOSOPHY.principles.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-educraft-gold/20 flex items-center justify-center text-educraft-gold mb-6 font-bold text-lg">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-educraft-supporting-2/90 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-educraft-secondary">
                  {p.tag}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-educraft-secondary/80 max-w-xl mx-auto italic">
            {ADMISSION_PHILOSOPHY.disclaimer}
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PROGRAMMES AVAILABLE (Preselects Form and Scrolls)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Curricular Options
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Programmes Open for Enquiry
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Click any programme to pre-select it in the enquiry form below.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {ADMISSION_PROGRAMMES.map((prog) => (
              <div
                key={prog.id}
                className="rounded-3xl bg-[#faf9f5] border border-educraft-secondary/35 p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light px-2.5 py-1 rounded-md">
                      {prog.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-foreground/40">
                      {prog.classes}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-educraft-primary mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {prog.options.map((opt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-educraft-gold shrink-0" />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-educraft-secondary/20">
                  <button
                    onClick={() => scrollToEnquiry(prog.programmeValue)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-educraft-primary text-white font-bold hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-sm text-xs tracking-wide cursor-pointer"
                  >
                    <span>{prog.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-educraft-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ADMISSION PROCESS (4-Step Timeline)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#faf9f5] border-y border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Step-by-Step
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              The Admission Process
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Transparent, straightforward four-stage progression from initial enquiry to confirmed enrolment.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-white border border-educraft-secondary/35 p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-educraft-primary/20 font-mono group-hover:text-educraft-gold transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light px-2 py-0.5 rounded border border-slate-200">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-educraft-primary mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-educraft-primary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-educraft-gold" />
                  <span>Step {step.number}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-foreground/60 max-w-xl mx-auto mt-10 italic">
            Note: Submitting an enquiry does not automatically enrol a student. Formal enrolment takes place after programme suitability and applicable terms are confirmed.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ADMISSION ENQUIRY FORM (Most Important Section)
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AdmissionForm
              initialProgramme={selectedProgrammePrefill}
              initialMessage={selectedMessagePrefill}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: WHATSAPP AND PHONE CONTACT OPTIONS
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#f8f9fa] border-y border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-educraft-secondary/40 shadow-lg p-8 sm:p-12 text-center">
            <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block mb-2">
              Direct Contact Channels
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-educraft-primary mb-3">
              Prefer a Direct Conversation?
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 max-w-xl mx-auto mb-8">
              Speak directly with our academic coordinators or message us on WhatsApp with your questions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CONTACT_BUSINESS_INFO.phoneUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-educraft-primary text-white font-bold hover:bg-educraft-primary/90 transition-all shadow-md text-xs sm:text-sm tracking-wide"
              >
                <Phone className="w-4 h-4 text-educraft-gold" />
                CALL NOW ({CONTACT_BUSINESS_INFO.phone})
              </a>

              <a
                href={CONTACT_BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all shadow-md text-xs sm:text-sm tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                WHATSAPP ENQUIRY ({CONTACT_BUSINESS_INFO.whatsapp})
              </a>

              <button
                onClick={() => scrollToEnquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-light text-educraft-primary font-bold hover:bg-educraft-secondary/40 border border-educraft-secondary/40 transition-all text-xs sm:text-sm tracking-wide cursor-pointer"
              >
                START AN ENQUIRY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SCHOLARSHIP INFORMATION SECTION
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#faf9f5] border-2 border-educraft-secondary/40 p-8 sm:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-educraft-secondary/30">
              <div className="w-12 h-12 rounded-2xl bg-educraft-primary text-white flex items-center justify-center">
                <Percent className="w-6 h-6 text-educraft-gold" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider block">
                  {SCHOLARSHIP_DETAILS.subheading}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-educraft-primary">
                  {SCHOLARSHIP_DETAILS.headline}
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-sm text-foreground/80 leading-relaxed mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-xs font-bold text-educraft-gold uppercase tracking-wider mb-1">
                  Range &amp; Criteria
                </div>
                <div className="text-lg font-bold text-educraft-primary mb-1">
                  {SCHOLARSHIP_DETAILS.mainInfo}
                </div>
                <p className="text-xs text-foreground/70">
                  {SCHOLARSHIP_DETAILS.criteria}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {SCHOLARSHIP_DETAILS.additional.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-educraft-primary text-xs">{item.label}</span>
                    <span className="text-lg font-extrabold text-educraft-gold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="mb-8">
              <div className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2">
                Scholarship Policy Rules:
              </div>
              <ul className="space-y-1.5 text-xs text-foreground/75">
                {SCHOLARSHIP_DETAILS.rules.map((r, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-educraft-gold" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-educraft-secondary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-foreground/60 italic">
                Scholarships are subject to institute confirmation upon formal assessment.
              </span>
              <button
                onClick={() =>
                  scrollToEnquiry(
                    undefined,
                    "I would like to enquire about scholarship eligibility through ESAT / board marks."
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-educraft-primary text-white text-xs font-bold hover:bg-educraft-primary/90 transition-all cursor-pointer"
              >
                ENQUIRE ABOUT SCHOLARSHIPS
                <ArrowRight className="w-3.5 h-3.5 text-educraft-gold" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FEES AND TRANSPARENCY
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#faf8f2] border-y border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-educraft-secondary/40 p-8 sm:p-10 shadow-md">
            <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block mb-2">
              Financial Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-educraft-primary mb-3">
              {FEES_TRANSPARENCY_INFO.title}
            </h2>
            <p className="text-sm text-foreground/75 leading-relaxed mb-6">
              {FEES_TRANSPARENCY_INFO.description} Families can discuss:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {FEES_TRANSPARENCY_INFO.points.map((pt, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#faf9f5] border border-slate-200 flex items-start gap-2.5 text-xs text-foreground/85 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-foreground/60">
              <span>View full fee breakdowns and course syllabi:</span>
              <Link
                href="/courses"
                className="font-bold text-educraft-primary hover:text-educraft-gold flex items-center gap-1 transition-colors"
              >
                EXPLORE COURSES PAGE
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: LOCATION AND CONTACT SECTION
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Institute Headquarters
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Visit Our Kolkata Centre
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Located on Garden Reach Road, our centre provides an encouraging, dedicated academic classroom environment.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-educraft-light flex items-center justify-center text-educraft-primary mb-4">
                  <MapPin className="w-5 h-5 text-educraft-gold" />
                </div>
                <h3 className="font-bold text-educraft-primary text-base mb-1">
                  Campus Address
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  {CONTACT_BUSINESS_INFO.address}
                </p>
              </div>
              <a
                href={CONTACT_BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-educraft-secondary/20 text-xs font-bold text-educraft-gold hover:text-educraft-primary inline-flex items-center gap-1"
              >
                View on Google Maps <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-educraft-light flex items-center justify-center text-educraft-primary mb-4">
                  <Phone className="w-5 h-5 text-educraft-gold" />
                </div>
                <h3 className="font-bold text-educraft-primary text-base mb-1">
                  Telephone
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Direct academic enquiries &amp; admissions desk.
                </p>
              </div>
              <a
                href={CONTACT_BUSINESS_INFO.phoneUrl}
                className="mt-4 pt-3 border-t border-educraft-secondary/20 text-xs font-bold text-educraft-primary hover:text-educraft-gold inline-flex items-center gap-1"
              >
                {CONTACT_BUSINESS_INFO.phone}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-educraft-primary text-base mb-1">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Instant messaging for parents and students.
                </p>
              </div>
              <a
                href={CONTACT_BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-educraft-secondary/20 text-xs font-bold text-emerald-700 hover:text-emerald-600 inline-flex items-center gap-1"
              >
                {CONTACT_BUSINESS_INFO.whatsapp}
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-educraft-light flex items-center justify-center text-educraft-primary mb-4">
                  <Mail className="w-5 h-5 text-educraft-gold" />
                </div>
                <h3 className="font-bold text-educraft-primary text-base mb-1">
                  Official Email
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed break-all">
                  {CONTACT_BUSINESS_INFO.email}
                </p>
              </div>
              <a
                href={CONTACT_BUSINESS_INFO.emailUrl}
                className="mt-4 pt-3 border-t border-educraft-secondary/20 text-xs font-bold text-educraft-primary hover:text-educraft-gold inline-flex items-center gap-1"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: ADMISSION FAQ SECTION (Accessible Accordion)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#fbfaf6] border-t border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Questions About Admission
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Clear answers regarding courses, curriculum boards, scholarships, and the enquiry process.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {ADMISSION_FAQS.map((faq, index) => {
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
          SECTION 13: FINAL CALL TO ACTION
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#f9f8f4] to-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-educraft-primary text-white shadow-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-educraft-gold/30">
            {/* Background lighting */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-educraft-supporting-2/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
                Next Steps
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Let&apos;s Talk About Your Next Step.
              </h2>
              <p className="text-base sm:text-lg text-educraft-supporting-2/95 leading-relaxed max-w-2xl mx-auto mb-10">
                Tell us what you&apos;re working towards. We&apos;ll help you explore the available options.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <button
                  onClick={() => scrollToEnquiry()}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg text-xs sm:text-sm tracking-wide cursor-pointer"
                >
                  START AN ENQUIRY
                </button>

                <a
                  href={CONTACT_BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all hover:-translate-y-0.5 shadow-md text-xs sm:text-sm tracking-wide"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP US
                </a>

                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  EXPLORE COURSES
                </Link>
              </div>

              {/* Direct Location Note */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-educraft-supporting-2/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-educraft-gold" />
                  {CONTACT_BUSINESS_INFO.address}
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
