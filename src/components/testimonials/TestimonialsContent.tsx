"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  Maximize2,
  X,
  Users,
  CheckCircle2,
  Award,
} from "lucide-react";
import { TESTIMONIALS_DATA, STUDENTS_PARENTS_WALL } from "@/data/testimonialsData";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function TestimonialsContent() {
  const [activeCardPhoto, setActiveCardPhoto] = useState<string | null>(null);

  return (
    <div className="relative py-20 md:py-28 bg-[#fbfbfa] text-foreground border-t border-gray-100 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-educraft-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[35vw] h-[35vw] bg-educraft-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Lightbox Preview for Original Testimonial Card */}
      <AnimatePresence>
        {activeCardPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveCardPhoto(null)}
          >
            <button
              onClick={() => setActiveCardPhoto(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close testimonial preview"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-xl w-full aspect-square flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeCardPhoto}
                alt="Enlarged Testimonial Certificate"
                fill
                className="object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-educraft-primary/5 text-educraft-primary text-xs font-semibold tracking-wider uppercase mb-3 border border-educraft-primary/10">
            <HeartHandshake className="w-3.5 h-3.5 text-educraft-gold" />
            Voices of Trust &amp; Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
            Testimonials &amp; Student Reviews
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Genuine words of encouragement from students and parents highlighting the conceptual clarity, supportive mentors, and personalized care at{" "}
            <strong className="text-educraft-primary font-semibold">EDU-Craft | Institute</strong>.
          </p>
          <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
        </div>

        {/* Featured Testimonial (Shahina Khatoon - In-depth Review) */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-3xl bg-gradient-to-br from-educraft-primary to-[#1a2d48] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden border border-white/10"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border-2 border-educraft-gold text-educraft-gold font-serif font-bold text-3xl sm:text-4xl flex items-center justify-center shrink-0 shadow-lg">
                S
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-educraft-gold block">
                      Featured Review • Competitive &amp; Olympiad Prep
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Shahina Khatoon
                    </h3>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-educraft-supporting-2/95 text-sm sm:text-base leading-relaxed font-serif italic">
                  &ldquo;I highly recommend EDU-Craft Coaching Institute for anyone preparing for Best class results, any competitive exams, Olympiad etc. The faculty is incredibly supportive and ensures that every basic concept is crystal clear. The small batch size allowed for personalized doubt clearing sessions, which really boosted my confidence. The structured study material and regular mock tests are perfectly aligned with the latest exam pattern.&rdquo;
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs text-educraft-secondary">
                  <span>Small Batch Sizes • Structured Mock Tests • Concept Clarity</span>
                  <button
                    type="button"
                    onClick={() => setActiveCardPhoto("/images/testimonials/testimonial-shahina-khatoon.png")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/15"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-educraft-gold" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Regular Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {TESTIMONIALS_DATA.filter((t) => t.id !== "shahina-khatoon").map((t) => (
            <motion.div
              key={t.id}
              variants={fadeInUp}
              className={`group rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1 ${t.colorScheme.borderHover}`}
            >
              <div>
                {/* Header row: Initial icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl ${t.colorScheme.avatarBg} font-serif font-bold text-xl flex items-center justify-center shadow-md`}
                  >
                    {t.initial}
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${t.colorScheme.badgeBg}`}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote with quote icon */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-educraft-gold/20 absolute -top-3 -left-1 pointer-events-none" />
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-serif italic pt-2">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-educraft-primary tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-foreground/60">{t.role}</p>
                </div>

                {/* View Official Graphic Badge */}
                <button
                  type="button"
                  onClick={() => setActiveCardPhoto(t.imagePath)}
                  className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-educraft-primary hover:text-white text-foreground/60 flex items-center justify-center transition-all duration-200 border border-gray-100 shrink-0"
                  title="View Official Certificate"
                  aria-label={`View official testimonial card for ${t.name}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================================================================
            STUDENTS & PARENTS WALL OF PRAISE (from official graphic)
           ========================================================================= */}
        <div className="mt-16 max-w-6xl mx-auto rounded-3xl bg-white border border-gray-200/80 p-8 sm:p-10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold text-educraft-gold uppercase tracking-wider block">
                Community Trust
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-educraft-primary tracking-tight">
                What Students &amp; Parents Are Saying
              </h3>
              <p className="text-xs sm:text-sm text-foreground/70 mt-1">
                We love hearing from you! Here is what our satisfied students and parents have shared.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveCardPhoto("/images/testimonials/testimonial-students-parents-wall.png")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-educraft-primary/5 hover:bg-educraft-primary/10 text-educraft-primary text-xs font-semibold transition-colors border border-educraft-primary/10"
            >
              <Maximize2 className="w-3.5 h-3.5 text-educraft-gold" />
              View Official Wall Graphic
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {STUDENTS_PARENTS_WALL.map((person, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#fafafa] border border-gray-100 hover:border-educraft-gold/50 transition-all flex flex-col items-center text-center shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-educraft-primary text-white font-serif font-bold text-lg flex items-center justify-center mb-2 shadow-xs">
                  {person.initial}
                </div>
                <h4 className="font-bold text-xs text-educraft-primary leading-tight mb-1.5">
                  {person.name}
                </h4>
                <div className="flex items-center gap-0.5">
                  {[...Array(person.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner Strip */}
        <div className="mt-12 max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-educraft-primary via-[#1d324f] to-educraft-primary text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block">
                Why Students &amp; Families Choose Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Empowering Students Beyond Rote Learning
              </h3>
              <p className="text-educraft-supporting-2 text-sm sm:text-base leading-relaxed">
                From personalized extra doubt-clearing sessions to deep conceptual problem solving in Physics, Mathematics, and Biology — our faculty is committed to walking with every student until full clarity is achieved.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-white/90">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                  Small Batches &amp; Friendly Environment
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                  Dedicated Extra Care &amp; Support
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                  Foundation to Competitive Readiness
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end justify-center">
              <Link
                href="/admission#enquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-educraft-gold hover:bg-educraft-gold/90 text-educraft-primary font-bold text-sm transition-all hover:shadow-lg shadow-educraft-gold/20"
              >
                JOIN EDU-CRAFT TODAY
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
