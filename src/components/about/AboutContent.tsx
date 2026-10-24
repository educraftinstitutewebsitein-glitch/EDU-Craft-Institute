"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Target,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  CheckCircle2,
  Users,
  GraduationCap,
  MapPin,
  ChevronRight,
  Layers,
  Search,
  Activity,
  TrendingUp,
  ShieldCheck,
  Building,
  School,
  Clock,
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutContent() {
  const learningStages = [
    {
      number: "01",
      title: "Understand",
      icon: Search,
      desc: "Build conceptual clarity by explaining topics step by step and helping students understand the fundamentals before moving to more complex concepts.",
      tag: "Foundation & Concepts",
    },
    {
      number: "02",
      title: "Practice",
      icon: Layers,
      desc: "Encourage regular practice and problem-solving so that students can reinforce what they learn and become more comfortable applying concepts.",
      tag: "Problem Solving",
    },
    {
      number: "03",
      title: "Evaluate",
      icon: Activity,
      desc: "Use tests and assessments to help identify areas of strength and topics that need additional attention.",
      tag: "Assessments & Diagnostics",
    },
    {
      number: "04",
      title: "Improve",
      icon: TrendingUp,
      desc: "Support improvement through revision, doubt clarification, academic guidance, and focused practice.",
      tag: "Personalised Guidance",
    },
    {
      number: "05",
      title: "Master",
      icon: ShieldCheck,
      desc: "Encourage students to develop stronger subject understanding, exam readiness, confidence, and independent learning habits.",
      tag: "Academic Independence",
    },
  ];

  const founders = [
    {
      number: "01",
      name: "Umair Khan",
      role: "Co-Founder & Academic Lead",
      qualification: "B.Sc. Physics Honours",
      experience: "5+ years",
      initials: "UK",
      accent: "from-educraft-primary to-educraft-primary/80",
      imagePath: "/images/faculty/umair-khan.jpg",
      expertise: [
        "All subjects, Foundation Classes 5–10",
        "Physics for Classes 11–12",
        "Physics for NEET and IIT-JEE",
      ],
    },
    {
      number: "02",
      name: "MD Shaharyar Alam",
      role: "Co-Founder & Academic Lead",
      qualification: "B.Sc. Zoology Honours",
      experience: "7+ years",
      initials: "SA",
      accent: "from-educraft-primary to-[#1a2d48]",
      imagePath: "/images/faculty/md-shaharyar-alam.jpg",
      expertise: [
        "All subjects, Foundation Classes 5–10",
        "Zoology and Botany for Classes 11–12 and NEET",
        "English for Classes 11–12",
      ],
    },
  ];

  const coreValues = [
    {
      title: "Quality Over Quantity",
      description:
        "We prioritise meaningful learning and academic understanding over simply covering more material.",
      badge: "Our Priority",
    },
    {
      title: "Conceptual Clarity",
      description:
        "We encourage students to understand the principles behind a topic instead of relying only on memorisation.",
      badge: "Deep Learning",
    },
    {
      title: "Consistency",
      description:
        "Regular practice, revision, and sustained effort are important parts of academic progress.",
      badge: "Daily Habit",
    },
    {
      title: "Individual Learning Needs",
      description:
        "Students may need different kinds of explanation, practice, and guidance. Our approach recognises the importance of supporting individual learning needs.",
      badge: "Student-Centred",
    },
    {
      title: "Confidence & Independence",
      description:
        "We encourage students to develop confidence in their understanding and become more independent learners.",
      badge: "Lifelong Growth",
    },
    {
      title: "Growth Beyond Examinations",
      description:
        "Education should support academic development while also encouraging curiosity, responsibility, and a willingness to learn.",
      badge: "Holistic Mindset",
    },
  ];

  const keySupportAreas = [
    "Subject-focused faculty",
    "Conceptual explanations",
    "Regular practice and revision",
    "Doubt clarification",
    "Tests and assessments",
    "Academic guidance",
    "Support for school and competitive examination preparation",
  ];

  const learningEnvHighlights = [
    { title: "Dedicated Classroom Environment", desc: "Structured, focused learning spaces designed for academic concentration and peer encouragement." },
    { title: "Subject-Focused Teaching", desc: "Step-by-step guidance by educators dedicated to their specific subject domains." },
    { title: "Study & Learning Support", desc: "Structured study schedules, revision material, and guided problem-solving assistance." },
    { title: "Tests & Assessments", desc: "Regular evaluation cycles to benchmark student progress against curriculum standards." },
    { title: "Doubt & Academic Guidance", desc: "Dedicated time for students to raise questions and receive personalized explanations." },
    { title: "Competitive Exam Preparation", desc: "Targeted problem-solving frameworks tailored for NEET and IIT-JEE requirements." },
    { title: "Individual Learning Needs", desc: "Attentive support that respects different learning paces, strengths, and areas for improvement." },
  ];

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* =========================================================================
          SECTION 1: HERO / ABOUT EDU-CRAFT
         ========================================================================= */}
      <section className="relative pt-12 pb-20 md:py-24 bg-gradient-to-b from-educraft-light/40 via-white to-white overflow-hidden">
        {/* Subtle decorative background blur shapes */}
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-educraft-supporting-2/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-educraft-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-foreground/60 mb-8 font-medium">
            <Link href="/" className="hover:text-educraft-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-educraft-gold" />
            <span className="text-educraft-primary font-semibold">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 max-w-2xl"
            >
              <div className="inline-flex items-center space-x-2.5 bg-white/80 backdrop-blur-sm border border-educraft-secondary/40 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-educraft-gold animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-educraft-primary uppercase">
                  About EDU-Craft | Institute
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-educraft-primary leading-[1.12] mb-6">
                Education Beyond <br />
                <span className="text-educraft-gold relative inline-block">
                  Expectations.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-educraft-secondary opacity-60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
              </h1>

              <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
                <p className="font-medium text-educraft-primary/90">
                  EDU-Craft | Institute is an educational institute located at{" "}
                  <strong className="text-educraft-primary font-semibold">
                    B-71, Garden Reach Road, Kolkata – 700024
                  </strong>
                  . The institute provides structured academic preparation for students across Foundation, Higher Secondary, and Competitive examination programmes.
                </p>
                <p className="text-foreground/75 text-base leading-relaxed">
                  At EDU-Craft, education goes beyond completing a syllabus or preparing for examinations. The focus is on developing conceptual clarity, encouraging consistent practice, providing academic guidance, and helping students grow in confidence and independent learning.
                </p>
                <p className="text-foreground/75 text-base leading-relaxed">
                  Through subject-focused teaching and structured academic support, EDU-Craft aims to create a learning environment where students can strengthen their understanding and prepare for their academic goals.
                </p>
              </div>

              {/* Tagline Box */}
              <div className="mt-8 pt-6 border-t border-educraft-secondary/30 flex flex-wrap items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-educraft-primary text-white text-xs font-semibold tracking-wider uppercase">
                  Tagline
                </div>
                <div className="text-xl md:text-2xl font-bold tracking-tight text-educraft-primary italic">
                  &ldquo;Expect the Unexpected.&rdquo;
                </div>
              </div>
            </motion.div>

            {/* Right Editorial Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white via-[#fcfbf7] to-educraft-light/40 border-[6px] border-white shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-educraft-gold/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-educraft-primary/10 rounded-full blur-2xl pointer-events-none" />

                {/* Institute Logo Emblem */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/logo/logo.jpg"
                    alt="EDU-Craft Institute Logo"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>

                <div className="w-full space-y-3 pt-4 border-t border-educraft-secondary/30">
                  <span className="text-xs font-bold text-educraft-gold tracking-widest uppercase">
                    Kolkata Educational Centre
                  </span>
                  <h3 className="text-xl font-bold text-educraft-primary">
                    EDU-CRAFT | INSTITUTE
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-xs text-foreground/70">
                    <MapPin className="w-4 h-4 text-educraft-gold shrink-0" />
                    <span>Garden Reach, Kolkata – 700024</span>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-5 border-t border-educraft-secondary/20 text-left">
                  <div className="p-3 rounded-xl bg-white/80 border border-slate-100 shadow-sm">
                    <div className="text-[10px] text-educraft-gold font-bold uppercase tracking-wider">Established</div>
                    <div className="text-sm font-bold text-educraft-primary">EST. 2021</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 border border-slate-100 shadow-sm">
                    <div className="text-[10px] text-educraft-gold font-bold uppercase tracking-wider">Study Modes</div>
                    <div className="text-sm font-bold text-educraft-primary">Offline &amp; Online</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR PHILOSOPHY
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-educraft-primary text-white relative overflow-hidden">
        {/* Background decorative patterns */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-educraft-supporting-2/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-educraft-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-educraft-gold uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-educraft-gold" />
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Expect the Unexpected.
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-educraft-secondary/90 mb-8">
              &ldquo;More Than Exams. A Foundation for Life.&rdquo;
            </p>
            <div className="w-24 h-0.5 bg-educraft-gold/60 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-educraft-gold/20 flex items-center justify-center text-educraft-gold mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Active Understanding Over Memorisation
                </h3>
                <p className="text-educraft-supporting-2/90 leading-relaxed text-base">
                  At EDU-Craft | Institute, we believe that education should help students understand, question, practise, and grow—not simply memorise information. Our approach focuses on building strong concepts, encouraging curiosity, developing consistent study habits, and helping students approach academic challenges with greater confidence.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-educraft-secondary font-medium tracking-wide">
                Principle: Questioning &amp; Conceptual Depth
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-educraft-gold/20 flex items-center justify-center text-educraft-gold mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Nurturing Individual Needs &amp; Habits
                </h3>
                <p className="text-educraft-supporting-2/90 leading-relaxed text-base">
                  We believe that every learner has individual needs. Meaningful academic support should therefore encourage understanding, improvement, and independent thinking. Our aim is to support students not only in their examinations but also in developing habits and abilities that contribute to their continued learning.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-educraft-secondary font-medium tracking-wide">
                Principle: Lifelong Independence &amp; Growth
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR MISSION & VISION
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#fdfcf9] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Purpose &amp; Direction
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-2">
              Our Mission &amp; Vision
            </h2>
            <div className="w-16 h-1 bg-educraft-gold/50 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl p-8 sm:p-10 bg-white border border-educraft-secondary/30 shadow-xl shadow-educraft-primary/5 hover:border-educraft-gold/60 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-educraft-primary to-educraft-gold" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-educraft-light flex items-center justify-center text-educraft-primary group-hover:scale-105 transition-transform">
                  <Target className="w-7 h-7 text-educraft-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest">
                    Execution
                  </span>
                  <h3 className="text-2xl font-bold text-educraft-primary">Our Mission</h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                To provide structured academic learning that emphasises conceptual clarity, regular practice, subject-focused teaching, and individual academic guidance. We aim to help students understand their subjects, strengthen their preparation, and develop confidence in their learning.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-educraft-primary uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                <span>Conceptual clarity • Regular practice • Academic guidance</span>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl p-8 sm:p-10 bg-white border border-educraft-secondary/30 shadow-xl shadow-educraft-primary/5 hover:border-educraft-gold/60 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-educraft-gold to-educraft-primary" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-educraft-light flex items-center justify-center text-educraft-gold group-hover:scale-105 transition-transform">
                  <Compass className="w-7 h-7 text-educraft-gold" />
                </div>
                <div>
                  <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest">
                    Horizon
                  </span>
                  <h3 className="text-2xl font-bold text-educraft-primary">Our Vision</h3>
                </div>
              </div>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-base sm:text-lg">
                <p>
                  To encourage a learning culture where students are motivated to think independently, approach challenges with confidence, and continue growing academically and personally.
                </p>
                <p className="text-base text-foreground/70">
                  We believe that quality education should support both academic progress and the development of responsible, capable individuals.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-educraft-primary uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                <span>Independent thinking • Capable &amp; responsible growth</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR TEACHING APPROACH (VISUAL LEARNING JOURNEY)
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Methodology &amp; Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-2 mb-4">
              Learning That Builds Understanding.
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              At EDU-Craft, the learning approach focuses on understanding concepts, practising consistently, identifying areas for improvement, and preparing students for academic challenges.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          {/* Visual 5-Stage Journey */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {learningStages.map((stage, idx) => {
                const IconComponent = stage.icon;
                return (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col h-full rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold tracking-wider text-educraft-gold uppercase">
                        Stage {stage.number}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-educraft-primary group-hover:bg-educraft-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-educraft-primary mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-foreground/75 leading-relaxed flex-grow">
                      {stage.desc}
                    </p>

                    <div className="mt-6 pt-4 border-t border-educraft-secondary/20">
                      <span className="text-[11px] font-semibold text-educraft-primary bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block">
                        {stage.tag}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Journey Summary Banner */}
            <div className="mt-12 p-6 rounded-2xl bg-educraft-light/50 border border-educraft-secondary/40 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-educraft-primary shadow-sm shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-educraft-gold" />
                </div>
                <p className="text-sm md:text-base font-medium text-educraft-primary">
                  A structured five-step progression engineered to transform passive learners into confident, self-directed achievers.
                </p>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-educraft-primary text-white text-xs font-semibold hover:bg-educraft-primary/90 transition-colors shadow-sm shrink-0"
              >
                VIEW PROGRAMMES
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR FOUNDERS
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] relative border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Leadership &amp; Vision
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-2 mb-4">
              The People Behind the Purpose
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              EDU-Craft | Institute was founded by <strong className="text-educraft-primary">Umair Khan</strong> and{" "}
              <strong className="text-educraft-primary">MD Shaharyar Alam</strong>. They lead the institute&apos;s educational vision and academic approach.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {founders.map((founder) => (
              <motion.div
                key={founder.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="rounded-3xl bg-white border border-educraft-secondary/30 p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Branded founder avatar badge */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-educraft-primary text-white flex items-center justify-center font-bold text-2xl shadow-md border-2 border-educraft-gold/40 overflow-hidden relative">
                        {founder.imagePath ? (
                          <Image
                            src={founder.imagePath}
                            alt={founder.name}
                            fill
                            className="object-cover object-top"
                          />
                        ) : (
                          founder.initials
                        )}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-educraft-gold uppercase tracking-wider">
                          Founder {founder.number}
                        </span>
                        <h3 className="text-2xl font-bold text-educraft-primary">
                          {founder.name}
                        </h3>
                        <p className="text-xs text-foreground/60 font-medium">
                          {founder.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-educraft-light/40 border border-educraft-secondary/30">
                    <div>
                      <div className="text-[10px] text-educraft-gold font-bold uppercase tracking-wider">
                        Qualification
                      </div>
                      <div className="text-sm font-semibold text-educraft-primary">
                        {founder.qualification}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-educraft-gold font-bold uppercase tracking-wider">
                        Experience
                      </div>
                      <div className="text-sm font-semibold text-educraft-primary">
                        {founder.experience}
                      </div>
                    </div>
                  </div>

                  {/* Academic Expertise */}
                  <div>
                    <h4 className="text-xs font-bold text-educraft-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-educraft-gold" />
                      Academic Expertise
                    </h4>
                    <ul className="space-y-2.5 text-sm text-foreground/80">
                      {founder.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-educraft-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-foreground/60">
                  <span>Educational Leadership</span>
                  <span className="font-semibold text-educraft-primary">EDU-Craft Co-Founder</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Founders Message Button */}
          <div className="text-center mt-12">
            <Link
              href="/about#founders-desk"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide"
            >
              READ THE FOUNDERS&apos; MESSAGE
              <ArrowRight className="w-4 h-4 text-educraft-gold" />
            </Link>
          </div>

          {/* Dedicated Founders' Desk Anchor & Statement */}
          <div
            id="founders-desk"
            className="mt-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-educraft-primary to-[#1c304d] text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-educraft-gold/10 rounded-full blur-2xl pointer-events-none" />
            <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block mb-2">
              From the Founders&apos; Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Building Conceptual Foundations That Last
            </h3>
            <p className="text-educraft-supporting-2/95 text-base sm:text-lg leading-relaxed mb-6 font-serif italic">
              &ldquo;When we founded EDU-Craft | Institute, our clear intent was to create a learning space where students do not merely memorize formulas for short-term scores, but genuinely comprehend the core logic of their subjects. True academic self-confidence begins with clarity. When students know why a concept works, they approach examinations and future learning challenges without fear.&rdquo;
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-educraft-secondary">
              <span>Umair Khan &amp; MD Shaharyar Alam</span>
              <span className="font-semibold text-educraft-gold">EDU-Craft Founders • Est. 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR FACULTY & ACADEMIC SUPPORT
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
                Faculty &amp; Pedagogy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-2 mb-6">
                Subject-Focused Teaching. <br />
                Meaningful Academic Support.
              </h2>
              <div className="space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
                <p>
                  EDU-Craft&apos;s faculty team covers a range of academic subjects across Foundation, Higher Secondary, and Competitive programmes.
                </p>
                <p className="text-base text-foreground/75">
                  The institute&apos;s academic approach emphasises subject-focused teaching, step-by-step explanations, regular practice, doubt clarification, and guidance according to students&apos; learning needs.
                </p>
                <p className="text-base text-foreground/75">
                  The aim is to help students strengthen their understanding, identify areas for improvement, and develop more effective learning habits.
                </p>
              </div>

              {/* Action Button */}
              <Link
                href="/faculty"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-md shadow-educraft-primary/15 text-sm"
              >
                EXPLORE OUR FACULTY TEAM
                <ArrowRight className="w-4 h-4 text-educraft-gold" />
              </Link>
            </div>

            {/* Right Key Areas Checklist */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#faf9f5] border border-educraft-secondary/40 shadow-lg">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-educraft-secondary/30">
                  <div className="w-10 h-10 rounded-xl bg-educraft-primary text-white flex items-center justify-center">
                    <Users className="w-5 h-5 text-educraft-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-educraft-primary text-lg">
                      Key Areas of Support
                    </h3>
                    <p className="text-xs text-foreground/60">
                      Standardized pedagogical delivery
                    </p>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {keySupportAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/85 font-medium">
                      <div className="w-5 h-5 rounded-full bg-educraft-gold/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-educraft-gold" />
                      </div>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4 border-t border-educraft-secondary/20 text-xs text-foreground/60 italic">
                  Note: Comprehensive profiles of our full faculty team are detailed on the dedicated Faculty page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR LEARNING ENVIRONMENT
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#f7f5ed] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Institute Atmosphere
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-2 mb-4">
              A Learning Environment That Encourages Growth.
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              EDU-Craft aims to provide a dedicated academic environment where students can learn systematically, practise regularly, clarify doubts, and receive academic guidance.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed text-center mb-12">
            <p>
              The institute&apos;s educational support includes classroom learning, subject-focused teaching, study support, assessments, and preparation for school and competitive examinations.
            </p>
            <p className="text-base text-foreground/70">
              Beyond the classroom, the emphasis remains on developing confidence, encouraging consistent effort, and helping students become more independent in their learning.
            </p>
          </div>

          {/* Highlight Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningEnvHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white border border-educraft-secondary/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-educraft-light flex items-center justify-center text-educraft-primary mb-4">
                    <Building className="w-5 h-5 text-educraft-gold" />
                  </div>
                  <h3 className="font-bold text-educraft-primary text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-educraft-gold uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Institute Focus</span>
                </div>
              </motion.div>
            ))}

            {/* Genuine Institute Address Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-educraft-primary text-white border border-educraft-primary shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-educraft-gold mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">
                  Campus Location
                </h3>
                <p className="text-sm text-educraft-supporting-2/90 leading-relaxed">
                  B-71, Garden Reach Road, Kolkata – 700024. Providing classroom academic preparation in South Kolkata.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-educraft-gold uppercase">
                Offline &amp; Online Learning Modes
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: OUR ACADEMIC PROGRAMMES
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Curricular Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-2 mb-4">
              Learning Pathways for Different Academic Goals.
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              EDU-Craft offers academic programmes for school students and learners preparing for higher secondary and competitive examinations.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Programme 1: Foundation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl p-8 bg-[#faf9f5] border border-educraft-secondary/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-educraft-primary text-white flex items-center justify-center mb-6 shadow-sm">
                  <School className="w-6 h-6 text-educraft-gold" />
                </div>
                <span className="text-[11px] font-bold text-educraft-gold uppercase tracking-wider">
                  Classes 5–10
                </span>
                <h3 className="text-2xl font-bold text-educraft-primary mb-3">
                  Foundation Programme
                </h3>
                <div className="space-y-2 mb-6 text-xs text-foreground/70">
                  <div><strong>Modes:</strong> Online and Offline</div>
                  <div><strong>Boards:</strong> WBBSE, ICSE, CBSE</div>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Provides structured support across major school subjects. Subject availability may vary according to class, board, and academic programme. Focuses on clearing core doubts early and establishing disciplined study habits.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-educraft-secondary/20">
                <Link
                  href="/courses#foundation"
                  className="text-xs font-bold text-educraft-primary hover:text-educraft-gold flex items-center gap-1.5 transition-colors"
                >
                  FOUNDATION DETAILS
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Programme 2: Higher Secondary */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl p-8 bg-[#faf9f5] border border-educraft-secondary/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-educraft-primary text-white flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen className="w-6 h-6 text-educraft-gold" />
                </div>
                <span className="text-[11px] font-bold text-educraft-gold uppercase tracking-wider">
                  Classes 11–12
                </span>
                <h3 className="text-2xl font-bold text-educraft-primary mb-3">
                  Higher Secondary
                </h3>
                <div className="space-y-2 mb-6 text-xs text-foreground/70">
                  <div><strong>Science:</strong> Physics, Chemistry, Biology, Mathematics (PCMB)</div>
                  <div><strong>Arts:</strong> Subjects per selected programme</div>
                  <div><strong>Commerce:</strong> Subjects per selected programme</div>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Thorough academic preparation calibrated for board excellence and advanced conceptual depth in Science, Commerce, and Arts streams.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-educraft-secondary/20">
                <Link
                  href="/courses#higher-secondary"
                  className="text-xs font-bold text-educraft-primary hover:text-educraft-gold flex items-center gap-1.5 transition-colors"
                >
                  STREAM DETAILS
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Programme 3: Competitive Preparation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl p-8 bg-gradient-to-b from-educraft-primary to-[#182942] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 shadow-sm border border-white/15">
                  <Award className="w-6 h-6 text-educraft-gold" />
                </div>
                <span className="text-[11px] font-bold text-educraft-gold uppercase tracking-wider">
                  Targeted Entrance Coaching
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Competitive Preparation
                </h3>
                <div className="space-y-2 mb-6 text-xs text-educraft-supporting-2/90">
                  <div><strong>Examinations:</strong> IIT-JEE &amp; NEET</div>
                  <div><strong>Focus:</strong> Problem Speed &amp; Rigorous Depth</div>
                </div>
                <p className="text-sm text-educraft-supporting-2/90 leading-relaxed">
                  The programmes focus on subject understanding, practice, and preparation for the relevant examination requirements with continuous test benchmarking.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/courses#competitive"
                  className="text-xs font-bold text-educraft-gold hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  COMPETITIVE DETAILS
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide"
            >
              EXPLORE ALL COURSES &amp; SYLLABUS
              <ArrowRight className="w-4 h-4 text-educraft-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: OUR CORE VALUES
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#fbfaf6] relative border-t border-educraft-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mt-2 mb-4">
              What Guides Our Approach.
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Six core values that shape our classroom culture, academic interactions, and institutional commitments every day.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white border border-educraft-secondary/30 shadow-sm hover:shadow-xl hover:border-educraft-gold/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light/60 px-2.5 py-1 rounded-md border border-educraft-secondary/20">
                      {val.badge}
                    </span>
                    <span className="text-xs font-bold text-foreground/30 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-educraft-primary mb-3 group-hover:text-educraft-gold transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-educraft-primary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-educraft-gold" />
                  <span>Core Value</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: OUR COMMITMENT
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-educraft-primary text-white relative overflow-hidden">
        {/* Fine gold line accents */}
        <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
              Our Commitment
            </span>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-educraft-gold tracking-wider uppercase mb-6">
              Quality Over Quantity
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              Helping Students Understand. <br />
              <span className="text-educraft-secondary font-serif italic">
                Encouraging Them to Grow.
              </span>
            </h2>

            <div className="space-y-6 text-educraft-supporting-2/95 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
              <p>
                At EDU-Craft | Institute, our educational approach is guided by the belief that meaningful learning begins with understanding.
              </p>
              <p>
                We aim to support students through structured preparation, consistent practice, academic guidance, and an environment that encourages questions and improvement.
              </p>
              <p>
                Our commitment is to make learning purposeful, help students approach their academic goals with confidence, and encourage habits that support continued growth.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-xs uppercase tracking-widest text-educraft-gold font-semibold">
                Closing Tagline:
              </span>
              <span className="text-2xl sm:text-3xl font-bold italic tracking-wide text-white">
                &ldquo;Expect the Unexpected.&rdquo;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CALL TO ACTION
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#f8f7f2] to-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-educraft-secondary/40 shadow-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background insignia watermark */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-educraft-gold/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-educraft-primary/5 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
                Begin Your Preparation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-educraft-primary tracking-tight mb-6">
                Ready to Begin Your Learning Journey?
              </h2>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-10">
                Explore the academic programmes at EDU-Craft | Institute or start a conversation with our team to discuss the right learning pathway for your needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide group"
                >
                  EXPLORE COURSES
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/admission#enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-educraft-primary border-2 border-educraft-primary/20 font-medium hover:bg-educraft-light/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm tracking-wide"
                >
                  START AN ENQUIRY
                </Link>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-xs text-foreground/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-educraft-gold" />
                  B-71, Garden Reach Road, Kolkata – 700024
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-educraft-gold" />
                  Foundation • Higher Secondary • NEET &amp; JEE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
