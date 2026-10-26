"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Layers,
  CheckCircle2,
  Maximize2,
  X,
  GraduationCap,
} from "lucide-react";
import { EVENTS_DATA } from "@/data/eventsData";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EventsContent() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const primaryEvent = EVENTS_DATA[0];

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActivePhoto(null)}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-5xl max-h-[90vh] w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activePhoto}
                alt="Event Enlarged Photo"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative pt-12 pb-16 md:py-24 bg-gradient-to-b from-educraft-light/40 via-white to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-educraft-supporting-2/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-educraft-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-foreground/60 mb-8 font-medium">
            <Link href="/" className="hover:text-educraft-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-educraft-gold" />
            <span className="text-educraft-primary font-semibold">Events &amp; Competitions</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-educraft-primary/5 text-educraft-primary text-xs font-semibold tracking-wider uppercase mb-4 border border-educraft-primary/10">
                <Trophy className="w-3.5 h-3.5 text-educraft-gold" />
                Institute Life &amp; Competitions
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-educraft-primary tracking-tight mb-6">
                Cultivating Champions,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-educraft-primary via-educraft-primary to-educraft-gold">
                  Inspiring Minds
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl mx-auto">
                Discover key events, academic olympiads, and competitive challenges organized by{" "}
                <strong className="text-educraft-primary font-semibold">EDU-Craft | Institute</strong>. We believe in providing real platforms where theoretical knowledge transforms into confident performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED EVENT: MASTER MATHEMATICS CHALLENGE 2026
         ========================================================================= */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white via-[#fcfbf7] to-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-educraft-secondary/40 shadow-xl overflow-hidden">
            {/* Event Header Banner */}
            <div className="bg-gradient-to-r from-educraft-primary via-[#1e3452] to-educraft-primary p-6 sm:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-educraft-gold text-educraft-primary text-xs font-bold uppercase tracking-wider">
                    {primaryEvent.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">
                    {primaryEvent.session}
                  </span>
                </div>
                <div className="text-xs text-educraft-secondary font-medium tracking-wide">
                  {primaryEvent.organizer}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                {primaryEvent.title}
              </h2>
              <p className="text-educraft-supporting-2 text-sm sm:text-base max-w-2xl leading-relaxed">
                {primaryEvent.subtitle}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-educraft-gold" />
                  </div>
                  <div>
                    <div className="text-educraft-secondary text-[10px] uppercase font-bold tracking-wider">
                      Event Date
                    </div>
                    <div className="font-semibold text-white">{primaryEvent.date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-educraft-gold" />
                  </div>
                  <div>
                    <div className="text-educraft-secondary text-[10px] uppercase font-bold tracking-wider">
                      Venue
                    </div>
                    <div className="font-semibold text-white">{primaryEvent.venue}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-educraft-gold" />
                  </div>
                  <div>
                    <div className="text-educraft-secondary text-[10px] uppercase font-bold tracking-wider">
                      Participation
                    </div>
                    <div className="font-semibold text-white">Classes 3 to 10 (Groups A, B, C)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Description & Highlights */}
            <div className="p-6 sm:p-10 grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-educraft-primary flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-educraft-gold" />
                  About the Challenge
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                  {primaryEvent.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-educraft-primary uppercase tracking-wider">
                    Event Highlights &amp; Outcomes
                  </h4>
                  <ul className="space-y-2.5 text-sm text-foreground/75">
                    {primaryEvent.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {primaryEvent.specialNote && (
                  <div className="p-4 rounded-2xl bg-educraft-light/50 border border-educraft-gold/30 text-xs sm:text-sm text-educraft-primary font-medium leading-relaxed">
                    <span className="font-bold text-educraft-gold block mb-1">
                      ★ Special Initiative Announcement:
                    </span>
                    {primaryEvent.specialNote}
                  </div>
                )}
              </div>

              {/* Right Side: Winner Showcase */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-gray-200">
                  <h4 className="text-base font-bold text-educraft-primary mb-4 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-educraft-gold" />
                    Official Rank Holders Felicitation
                  </h4>

                  {primaryEvent.winnersByGroup?.map((grp, idx) => (
                    <div key={idx} className="mb-5 last:mb-0 pb-5 last:pb-0 border-b last:border-0 border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-sm text-educraft-primary">
                          {grp.group} ({grp.classes})
                        </span>
                        <span className="text-[10px] font-semibold text-educraft-gold uppercase tracking-wider">
                          Finalists
                        </span>
                      </div>
                      <div className="space-y-2">
                        {grp.winners.map((winner, widx) => (
                          <div
                            key={widx}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-100 shadow-sm"
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${winner.badgeColor}`}
                              >
                                {winner.position}
                              </span>
                              <span className="text-sm font-semibold text-educraft-primary">
                                {winner.name}
                              </span>
                            </div>
                            <Award className="w-4 h-4 text-educraft-gold shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Media Gallery */}
            <div className="p-6 sm:p-10 bg-[#fafafa] border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-educraft-gold uppercase tracking-wider block">
                    Photographic Highlights
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-educraft-primary flex items-center gap-2">
                    Event Photo Gallery
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-educraft-primary/10 text-educraft-primary font-semibold">
                      {primaryEvent.gallery.length} Photos
                    </span>
                  </h3>
                </div>
                <span className="text-xs text-foreground/60">Click any image to enlarge in full view</span>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {primaryEvent.gallery.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md cursor-pointer flex flex-col"
                    onClick={() => setActivePhoto(photo.src)}
                  >
                    <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white">
                          <Maximize2 className="w-3.5 h-3.5" /> View Photo
                        </span>
                      </div>
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-educraft-primary/90 text-white text-[10px] font-semibold tracking-wide backdrop-blur-sm">
                        {photo.tag}
                      </span>
                    </div>
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <p className="text-xs text-foreground/80 leading-snug line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UPCOMING EVENTS / PARTICIPATION CTA
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-educraft-primary to-[#182942] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
              Want Your Child to Participate in Upcoming Challenges?
            </h3>
            <p className="text-educraft-supporting-2 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              EDU-Craft | Institute regularly hosts olympiads, talent searches, and subject competitions like the Science Fusion &amp; Master Mathematics Challenge. Enquire today to stay informed of our upcoming competition calendar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admission#enquiry"
                className="px-7 py-3.5 rounded-xl bg-educraft-gold text-educraft-primary font-bold text-sm hover:bg-educraft-gold/90 transition-all hover:shadow-lg shadow-educraft-gold/20"
              >
                ENQUIRE FOR COMPETITIONS
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                CONTACT INSTITUTE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
