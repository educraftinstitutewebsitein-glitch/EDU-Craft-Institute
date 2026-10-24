"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  X,
  Award,
  BookOpen,
  School,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Users,
  MapPin,
  Phone,
  MessageCircle,
  GraduationCap,
  Calendar,
} from "lucide-react";
import {
  STUDENT_RESULTS,
  RESULTS_STATS,
  StudentResult,
  ResultCategory,
} from "@/data/studentResults";
import StudentCard from "./StudentCard";

// Framer motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ResultsContent() {
  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Dynamic filter options extracted from actual data
  const classOptions = useMemo(() => {
    const set = new Set<string>();
    STUDENT_RESULTS.forEach((s) => set.add(s.class));
    return Array.from(set).sort();
  }, []);

  const yearOptions = useMemo(() => {
    const set = new Set<string>();
    STUDENT_RESULTS.forEach((s) => set.add(s.academicYear));
    return Array.from(set).sort();
  }, []);

  // Filtered results
  const filteredStudents = useMemo(() => {
    return STUDENT_RESULTS.filter((student) => {
      // Category filter
      if (selectedCategory !== "all" && student.category !== selectedCategory) {
        return false;
      }

      // Class filter
      if (selectedClass !== "all" && student.class !== selectedClass) {
        return false;
      }

      // Year filter
      if (selectedYear !== "all" && student.academicYear !== selectedYear) {
        return false;
      }

      // Search query filter (name, school, subjects)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = student.name.toLowerCase().includes(q);
        const schoolMatch = student.school?.toLowerCase().includes(q) || false;
        const subjectMatch = student.marks.some((m) =>
          m.subject.toLowerCase().includes(q)
        );
        const classMatch = student.class.toLowerCase().includes(q);

        if (!nameMatch && !schoolMatch && !subjectMatch && !classMatch) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedClass, selectedYear, selectedCategory]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedClass("all");
    setSelectedYear("all");
    setSelectedCategory("all");
  };

  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedClass !== "all" ||
    selectedYear !== "all" ||
    selectedCategory !== "all";

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* =========================================================================
          SECTION 2 & 3: RESULTS HERO & INTRODUCTION
         ========================================================================= */}
      <section className="relative pt-10 pb-16 md:py-24 bg-gradient-to-b from-[#f9f7f0] via-white to-white overflow-hidden">
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
            <span className="text-educraft-primary font-semibold">Student Results</span>
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
                  ACADEMIC ACHIEVEMENTS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-educraft-primary leading-[1.12] mb-6">
                Every Achievement <br />
                <span className="text-educraft-gold relative inline-block">
                  Has a Story.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-educraft-secondary opacity-60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-serif italic text-educraft-primary/90 mb-6">
                &ldquo;Celebrating the dedication, progress, and academic achievements of EDU-Craft students.&rdquo;
              </p>

              <div className="space-y-4 text-base text-foreground/80 leading-relaxed mb-8">
                <p>
                  At EDU-Craft | Institute, meaningful education is reflected in consistent daily effort, thorough conceptual understanding, and personal academic progress.
                </p>
                <p className="text-sm text-foreground/70">
                  Below is the verified performance record of our students across Classroom Programmes and MMC Series assessments.
                </p>
              </div>

              {/* Quick Navigation Anchor CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={() => {
                    const el = document.getElementById("results-grid-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide group cursor-pointer"
                >
                  EXPLORE STUDENT RESULTS
                  <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/admission#enquiry"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-educraft-primary border-2 border-educraft-primary/20 font-medium hover:bg-educraft-light/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm tracking-wide"
                >
                  BOOK ACADEMIC COUNSELLING
                </Link>
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
                    Kolkata Academic Centre
                  </span>
                  <h3 className="text-xl font-bold text-educraft-primary">
                    Student Achievement Records
                  </h3>
                  <p className="text-xs text-foreground/70">
                    B-71, Garden Reach Road, Kolkata – 700024
                  </p>
                </div>

                <div className="w-full mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase block">Records</span>
                    <span className="text-sm font-bold text-educraft-primary">32 Verified</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase block">Centum Scores</span>
                    <span className="text-sm font-bold text-educraft-primary">{RESULTS_STATS.centumCount} Perfect 100s</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SUMMARY STATISTICS (Calculated from Data)
         ========================================================================= */}
      <section className="py-12 md:py-16 bg-[#faf9f5] border-y border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Stat 1: Total Records */}
            <div className="p-6 rounded-2xl bg-white border border-educraft-secondary/35 shadow-sm text-center">
              <div className="w-10 h-10 rounded-xl bg-educraft-light flex items-center justify-center mx-auto mb-3 text-educraft-primary">
                <Users className="w-5 h-5 text-educraft-gold" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-educraft-primary mb-1">
                {RESULTS_STATS.totalStudents}
              </div>
              <div className="text-xs font-bold text-foreground/75 uppercase tracking-wider">
                Total Student Records
              </div>
              <div className="text-[10px] text-foreground/50 mt-1">Verified academic entries</div>
            </div>

            {/* Stat 2: Classroom Programme */}
            <div className="p-6 rounded-2xl bg-white border border-educraft-secondary/35 shadow-sm text-center">
              <div className="w-10 h-10 rounded-xl bg-educraft-light flex items-center justify-center mx-auto mb-3 text-educraft-primary">
                <School className="w-5 h-5 text-educraft-gold" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-educraft-primary mb-1">
                {RESULTS_STATS.classroomProgrammeCount}
              </div>
              <div className="text-xs font-bold text-foreground/75 uppercase tracking-wider">
                Classroom Programme
              </div>
              <div className="text-[10px] text-foreground/50 mt-1">School records &amp; exams</div>
            </div>

            {/* Stat 3: MMC Series Proof */}
            <div className="p-6 rounded-2xl bg-white border border-educraft-secondary/35 shadow-sm text-center">
              <div className="w-10 h-10 rounded-xl bg-educraft-light flex items-center justify-center mx-auto mb-3 text-educraft-primary">
                <FileCheck2 className="w-5 h-5 text-educraft-gold" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-educraft-primary mb-1">
                {RESULTS_STATS.mmcSeriesProofCount}
              </div>
              <div className="text-xs font-bold text-foreground/75 uppercase tracking-wider">
                MMC Series Proof
              </div>
              <div className="text-[10px] text-foreground/50 mt-1">Assessment performance</div>
            </div>

            {/* Stat 4: Centum Scores (100/100) */}
            <div className="p-6 rounded-2xl bg-educraft-primary text-white border border-educraft-primary shadow-md text-center">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 text-educraft-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-educraft-gold mb-1">
                {RESULTS_STATS.centumCount}
              </div>
              <div className="text-xs font-bold text-educraft-secondary uppercase tracking-wider">
                100/100 Perfect Scores
              </div>
              <div className="text-[10px] text-educraft-supporting-2/80 mt-1">Individual subject centums</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SEARCH AND FILTERING CONTROLS
         ========================================================================= */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search Input Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-foreground/40">
                <Search className="w-5 h-5 text-educraft-gold" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search students by name, school, class, or subject..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/45 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-foreground/40 hover:text-foreground cursor-pointer"
                  aria-label="Clear search query"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-1.5">
                  Result Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-educraft-gold"
                >
                  <option value="all">All Categories ({STUDENT_RESULTS.length})</option>
                  <option value="Classroom Programme">
                    Classroom Programme ({RESULTS_STATS.classroomProgrammeCount})
                  </option>
                  <option value="Based on MMC Series Proof">
                    Based on MMC Series Proof ({RESULTS_STATS.mmcSeriesProofCount})
                  </option>
                </select>
              </div>

              {/* Class Filter */}
              <div>
                <label className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-1.5">
                  Filter by Class
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-educraft-gold"
                >
                  <option value="all">All Classes</option>
                  {classOptions.map((cls) => (
                    <option key={cls} value={cls}>
                      Class {cls}
                    </option>
                  ))}
                </select>
              </div>

              {/* Academic Year Filter */}
              <div>
                <label className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-1.5">
                  Academic Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-educraft-gold"
                >
                  <option value="all">All Academic Years</option>
                  {yearOptions.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live Results Counter & Reset Control */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-foreground/75 pt-1 px-1">
              <span>
                Showing <strong className="text-educraft-primary font-bold">{filteredStudents.length}</strong> of{" "}
                {STUDENT_RESULTS.length} student records
              </span>

              {isFiltered && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-bold text-educraft-gold hover:text-educraft-primary underline transition-colors cursor-pointer"
                >
                  CLEAR FILTERS
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: STUDENT RESULTS GRID (Strict Card Hierarchy)
         ========================================================================= */}
      <section id="results-grid-section" className="py-16 md:py-24 bg-[#fcfbf8] relative">
        <div className="container mx-auto px-4 md:px-6">
          {filteredStudents.length === 0 ? (
            /* Premium Empty State */
            <div className="max-w-md mx-auto text-center py-16 px-6 rounded-3xl bg-white border border-educraft-secondary/30 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-educraft-light flex items-center justify-center mx-auto mb-4 text-educraft-primary">
                <Users className="w-8 h-8 text-educraft-gold" />
              </div>
              <h3 className="text-xl font-bold text-educraft-primary mb-2">
                No students match your search.
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 mb-6">
                Try clearing or adjusting your search query, class, or category filter.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 rounded-xl bg-educraft-primary text-white text-xs font-semibold hover:bg-educraft-primary/90 transition-colors cursor-pointer"
              >
                CLEAR FILTERS
              </button>
            </div>
          ) : (
            /* Dynamic Multi-Column Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {filteredStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLEAR CALL-TO-ACTION FOR ENQUIRIES OR COUNSELLING
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#f9f8f4] to-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-educraft-primary text-white shadow-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-educraft-gold/30">
            {/* Background lighting */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-educraft-supporting-2/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
                Begin Your Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to Build Your Own Story of Success?
              </h2>
              <p className="text-base sm:text-lg text-educraft-supporting-2/95 leading-relaxed max-w-2xl mx-auto mb-10">
                Join EDU-Craft | Institute for structured classroom preparation, conceptual clarity, and dedicated academic mentorship. Book a free counselling session or start an enquiry today.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Link
                  href="/admission#enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg text-xs sm:text-sm tracking-wide"
                >
                  START AN ENQUIRY
                </Link>

                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  EXPLORE PROGRAMMES
                </Link>

                <a
                  href="tel:+918100650948"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4 text-educraft-gold" />
                  CALL: 8100650948
                </a>

                <a
                  href="https://wa.me/919477546832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all hover:-translate-y-0.5 shadow-md text-xs sm:text-sm tracking-wide"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP: 9477546832
                </a>
              </div>

              {/* Contact Footer Note */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-educraft-supporting-2/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-educraft-gold" />
                  B-71, Garden Reach Road, Kolkata – 700024
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-educraft-gold" />
                  Foundation • Boards • NEET &amp; JEE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
