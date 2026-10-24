"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  X,
  GraduationCap,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
  Award,
  ChevronRight,
  Users,
  CheckCircle2,
  BookOpen,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  FACULTY_MEMBERS,
  FACULTY_CATEGORIES,
  FacultyMember,
  FacultyCategory,
} from "@/data/faculty";
import FacultyPortrait from "./FacultyPortrait";
import FacultyModal from "./FacultyModal";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FacultyContent() {
  const [activeCategory, setActiveCategory] = useState<FacultyCategory>("All Faculty");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);

  // Filter & Search Logic
  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter((member) => {
      // Category check
      const matchesCategory =
        activeCategory === "All Faculty" || member.categories.includes(activeCategory);

      if (!matchesCategory) return false;

      // Search query check
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = member.name.toLowerCase().includes(q);
      const qualMatch = member.qualification.toLowerCase().includes(q);
      const subjectMatch = member.allSubjects.some((s) => s.toLowerCase().includes(q));
      const examMatch = member.competitiveExams?.some((e) => e.toLowerCase().includes(q));
      const classesMatch = member.classesSummary.toLowerCase().includes(q);

      return nameMatch || qualMatch || subjectMatch || examMatch || classesMatch;
    });
  }, [activeCategory, searchQuery]);

  const clearFilters = () => {
    setActiveCategory("All Faculty");
    setSearchQuery("");
  };

  // Founders data for the dedicated feature
  const founders = FACULTY_MEMBERS.filter((f) => f.isFounder);

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* =========================================================================
          SECTION 3: FACULTY PAGE HERO (Editorial, Asymmetric)
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
            <span className="text-educraft-primary font-semibold">Faculty</span>
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
                  OUR EDUCATORS · OUR STRENGTH
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-educraft-primary leading-[1.12] mb-6">
                MEET THE MINDS <br />
                <span className="text-educraft-gold relative inline-block">
                  BEHIND EDU-CRAFT
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
                Every subject brings a new perspective, and every learner has a different journey. Meet the educators supporting students across Foundation, Higher Secondary, and Competitive examination programmes at EDU-Craft | Institute.
              </p>

              {/* Verified Count Badge */}
              <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white border border-educraft-secondary/40 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-educraft-primary text-white flex items-center justify-center font-bold text-xl shadow-xs">
                  14
                </div>
                <div>
                  <div className="text-xs font-bold text-educraft-gold uppercase tracking-wider">
                    Verified Educator Team
                  </div>
                  <div className="text-sm font-bold text-educraft-primary">
                    14 Faculty Members Across Foundation, Boards &amp; Competitive
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Asymmetrical Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white via-[#fcfbf7] to-educraft-light/40 border-[6px] border-white shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center">
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
                    Academic Mentorship
                  </span>
                  <h3 className="text-xl font-bold text-educraft-primary">
                    Subject-Focused Pedagogy
                  </h3>
                  <p className="text-xs text-foreground/70">
                    B-71, Garden Reach Road, Kolkata – 700024
                  </p>
                </div>

                <div className="w-full mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase block">Guidance</span>
                    <span className="text-xs font-bold text-educraft-primary">Step-by-Step</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase block">Approach</span>
                    <span className="text-xs font-bold text-educraft-primary">Conceptual Clarity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FOUNDER FEATURE (Prominent Introduction)
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#faf9f5] border-y border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Educational Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-educraft-primary tracking-tight mt-1 mb-3">
              The Founders of EDU-Craft
            </h2>
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
              Leading the institute&apos;s academic vision and classroom standards with dedicated subject mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="rounded-3xl bg-white border-2 border-educraft-secondary/40 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-educraft-secondary/30 shadow-xs">
                      <FacultyPortrait
                        imagePath={founder.founderImagePath || founder.imagePath}
                        name={founder.name}
                        initials={founder.initials}
                        isFounder={true}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-white bg-educraft-primary px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1.5">
                        Founder
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-educraft-primary">
                        {founder.name}
                      </h3>
                      <div className="text-xs text-educraft-gold font-bold mt-0.5">
                        {founder.qualification}
                      </div>
                      <div className="text-xs text-foreground/60 mt-0.5">
                        Experience: {founder.experience}
                      </div>
                    </div>
                  </div>

                  {/* Subjects Breakdown */}
                  <div className="space-y-2.5 text-xs text-foreground/80 mb-6">
                    {founder.subjectsAndClasses.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/25">
                        <span className="font-bold text-educraft-primary block mb-1">
                          {item.label}:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {item.items.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded bg-white border border-slate-200 font-medium"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedMember(founder)}
                  className="w-full py-2.5 rounded-xl bg-educraft-light/80 hover:bg-educraft-light text-educraft-primary text-xs font-bold transition-colors cursor-pointer border border-educraft-secondary/30 text-center"
                >
                  View Full Profile Details
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about#founders-desk"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-md shadow-educraft-primary/20 text-xs sm:text-sm tracking-wide"
            >
              READ THE FOUNDERS&apos; MESSAGE
              <ArrowRight className="w-4 h-4 text-educraft-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 & 8: INTERACTIVE FILTERS & SEARCH
         ========================================================================= */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-foreground/40">
                <Search className="w-5 h-5 text-educraft-gold" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty by name or subject..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/45 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-foreground/40 hover:text-foreground cursor-pointer"
                  aria-label="Clear search input"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {FACULTY_CATEGORIES.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-educraft-primary text-white shadow-md scale-105"
                        : "bg-[#faf9f5] text-foreground/80 hover:bg-educraft-light/60 border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Result Counter & Active Reset Strip */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-foreground/70 pt-2 px-2">
              <span className="font-medium">
                Showing <strong className="text-educraft-primary">{filteredFaculty.length}</strong> of{" "}
                {FACULTY_MEMBERS.length} faculty members
              </span>

              {(activeCategory !== "All Faculty" || searchQuery) && (
                <button
                  onClick={clearFilters}
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
          SECTION 4 & 6: FACULTY DIRECTORY & ADVANCED CARD DESIGN
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#fcfbf8] relative">
        <div className="container mx-auto px-4 md:px-6">
          {filteredFaculty.length === 0 ? (
            /* Premium Empty State */
            <div className="max-w-md mx-auto text-center py-16 px-6 rounded-3xl bg-white border border-educraft-secondary/30 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-educraft-light flex items-center justify-center mx-auto mb-4 text-educraft-primary">
                <Users className="w-8 h-8 text-educraft-gold" />
              </div>
              <h3 className="text-xl font-bold text-educraft-primary mb-2">
                No faculty members match your search.
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 mb-6">
                Try adjusting your search query or selecting a different subject category.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-xl bg-educraft-primary text-white text-xs font-semibold hover:bg-educraft-primary/90 transition-colors cursor-pointer"
              >
                CLEAR FILTERS
              </button>
            </div>
          ) : (
            /* Complete Faculty Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {filteredFaculty.map((faculty) => (
                <motion.div
                  key={faculty.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white border border-educraft-secondary/35 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Portrait Frame */}
                    <div className="relative">
                      <FacultyPortrait
                        imagePath={faculty.imagePath}
                        name={faculty.name}
                        initials={faculty.initials}
                        isFounder={faculty.isFounder}
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                        <span className="text-[10px] font-bold text-educraft-gold bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-2xs">
                          {faculty.number}
                        </span>
                        {faculty.isFounder && (
                          <span className="text-[10px] font-bold text-white bg-educraft-primary px-2.5 py-0.5 rounded-full shadow-2xs">
                            Founder
                          </span>
                        )}
                      </div>

                      {/* Experience Pill */}
                      <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                        <span className="text-[10px] font-bold text-white bg-educraft-primary/90 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/20">
                          {faculty.experience} exp
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl font-bold text-educraft-primary mb-1 group-hover:text-educraft-gold transition-colors leading-snug">
                        {faculty.name}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-4 font-medium">
                        <GraduationCap className="w-3.5 h-3.5 text-educraft-gold shrink-0" />
                        <span>{faculty.qualification}</span>
                      </div>

                      {/* Subject Tags Preview */}
                      <div className="space-y-2 mb-4">
                        <div className="text-[10px] font-bold text-educraft-primary uppercase tracking-wider">
                          Subjects &amp; Classes:
                        </div>
                        <div className="flex flex-wrap gap-1.5 max-h-24 overflow-hidden">
                          {faculty.allSubjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-md bg-[#faf9f5] border border-slate-200 text-[11px] font-medium text-foreground/80"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-[11px] text-foreground/60">
                        <strong>Classes:</strong> {faculty.classesSummary}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setSelectedMember(faculty)}
                      className="w-full py-2.5 rounded-xl bg-educraft-light/60 hover:bg-educraft-primary hover:text-white text-educraft-primary text-xs font-bold transition-all duration-200 border border-educraft-secondary/30 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>VIEW FULL PROFILE</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FACULTY PAGE ENDING / FINAL CTA
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#f9f8f4] to-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-educraft-primary text-white shadow-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-educraft-gold/30">
            {/* Background lighting */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-educraft-supporting-2/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
                Begin Academic Preparation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Find the Right Academic Path.
              </h2>
              <p className="text-base sm:text-lg text-educraft-supporting-2/95 leading-relaxed max-w-2xl mx-auto mb-10">
                Explore EDU-Craft&apos;s academic programmes or contact the institute to learn more about the subjects and academic support available.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg text-xs sm:text-sm tracking-wide"
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
                  href="tel:+918100650948"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4 text-educraft-gold" />
                  CALL NOW (8100650948)
                </a>

                <a
                  href="https://wa.me/919477546832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all hover:-translate-y-0.5 shadow-md text-xs sm:text-sm tracking-wide"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP (9477546832)
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
                  EDU-Craft | Institute • Expect the Unexpected
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Profile Modal */}
      <FacultyModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
