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
  ExternalLink,
  Layers,
  Clock,
  Compass,
} from "lucide-react";
import {
  CONTACT_HERO_DATA,
  CONTACT_CARDS_DATA,
  QUICK_SHORTCUTS_DATA,
  CONTACT_PROCESS_STEPS,
  CONTACT_FAQS,
  SOCIAL_MEDIA_LINKS,
  LOCATION_DETAILS,
} from "@/data/contactData";
import ContactForm from "./ContactForm";

// Framer motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactContent() {
  const [selectedEnquiryTypePrefill, setSelectedEnquiryTypePrefill] = useState("Course Information");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToForm = (type?: string) => {
    if (type) {
      setSelectedEnquiryTypePrefill(type);
    }
    const el = document.getElementById("contact-form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-white text-foreground">
      {/* =========================================================================
          SECTION 3: CONTACT HERO
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
            <span className="text-educraft-primary font-semibold">Contact Us</span>
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
                  {CONTACT_HERO_DATA.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-educraft-primary leading-[1.12] mb-6">
                Let&apos;s Start a <br />
                <span className="text-educraft-gold relative inline-block">
                  Conversation.
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
                {CONTACT_HERO_DATA.supportingCopy}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={() => scrollToForm()}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-primary text-white font-medium hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide group cursor-pointer"
                >
                  {CONTACT_HERO_DATA.primaryCTA}
                  <ArrowRight className="ml-2 w-4 h-4 text-educraft-gold group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={LOCATION_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-educraft-primary border-2 border-educraft-primary/20 font-medium hover:bg-educraft-light/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm tracking-wide"
                >
                  <MapPin className="w-4 h-4 text-educraft-gold" />
                  <span>{CONTACT_HERO_DATA.secondaryCTA}</span>
                </a>
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
                    Institutional Desk
                  </span>
                  <h3 className="text-xl font-bold text-educraft-primary">
                    EDU-Craft | Institute
                  </h3>
                  <p className="text-xs text-foreground/70">
                    B-71, Garden Reach Road, Kolkata – 700024
                  </p>
                </div>

                <div className="w-full mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase block">Call Support</span>
                    <span className="text-xs font-bold text-educraft-primary">8100650948</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-educraft-gold uppercase block">WhatsApp</span>
                    <span className="text-xs font-bold text-educraft-primary">9477546832</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CONTACT INFORMATION CARDS (4 Working Cards)
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#faf9f5] border-y border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {CONTACT_CARDS_DATA.map((card) => {
              const isLocation = card.type === "location";
              const isWhatsapp = card.type === "whatsapp";
              return (
                <div
                  key={card.id}
                  className="rounded-3xl bg-white border border-educraft-secondary/35 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-educraft-light flex items-center justify-center text-educraft-primary mb-5 shadow-2xs">
                      {card.type === "phone" && <Phone className="w-5 h-5 text-educraft-gold" />}
                      {card.type === "whatsapp" && <MessageCircle className="w-5 h-5 text-emerald-600" />}
                      {card.type === "email" && <Mail className="w-5 h-5 text-educraft-gold" />}
                      {card.type === "location" && <MapPin className="w-5 h-5 text-educraft-gold" />}
                    </div>

                    <h3 className="text-lg font-bold text-educraft-primary mb-1">
                      {card.title}
                    </h3>

                    <div className="text-sm font-extrabold text-educraft-primary mb-2 break-all">
                      {card.detail}
                    </div>

                    <p className="text-xs text-foreground/65 leading-relaxed mb-6">
                      {card.subtext}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={card.href}
                      target={isLocation || isWhatsapp ? "_blank" : undefined}
                      rel={isLocation || isWhatsapp ? "noopener noreferrer" : undefined}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs ${
                        isWhatsapp
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                          : "bg-educraft-primary hover:bg-educraft-primary/90 text-white"
                      }`}
                    >
                      <span>{card.buttonLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: QUICK ENQUIRY SHORTCUTS
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Helpful Shortcuts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-educraft-primary mt-1 mb-2">
              What Would You Like to Know?
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70">
              Jump directly to specific programme information or preselect your enquiry question.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {QUICK_SHORTCUTS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/30 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <h4 className="font-bold text-educraft-primary text-sm mb-1.5 group-hover:text-educraft-gold transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-educraft-secondary/20 flex flex-col gap-1.5">
                  <Link
                    href={item.href}
                    className="text-[11px] font-bold text-educraft-primary hover:text-educraft-gold inline-flex items-center gap-1 transition-colors"
                  >
                    View Page <ChevronRight className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={() => scrollToForm(item.enquiryType)}
                    className="text-[11px] font-semibold text-educraft-gold hover:underline text-left cursor-pointer"
                  >
                    Ask in form
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CONTACT PROCESS SECTION (3 Steps)
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#faf8f2] border-y border-educraft-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-educraft-primary mt-1 mb-3">
              How We Connect
            </h2>
            <p className="text-sm text-foreground/75">
              Reaching out to our institute is fast, welcoming, and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CONTACT_PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-white border border-educraft-secondary/35 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-educraft-primary/20 font-mono">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold text-educraft-gold uppercase tracking-wider bg-educraft-light px-2 py-0.5 rounded border border-slate-200">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-educraft-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-educraft-primary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-educraft-gold" />
                  <span>Step {step.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONTACT FORM SECTION
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <ContactForm initialEnquiryType={selectedEnquiryTypePrefill} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: LOCATION AND MAP SECTION
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#f8f9fa] border-y border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
                Physical Campus
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-educraft-primary tracking-tight mt-1 mb-2">
                Find Us in Kolkata.
              </h2>
              <p className="text-sm text-foreground/70">
                Centrally situated on Garden Reach Road, accessible by local transport.
              </p>
            </div>

            {/* Polished Location Card Panel */}
            <div className="rounded-3xl bg-white border-2 border-educraft-secondary/40 shadow-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-educraft-primary text-white flex items-center justify-center mx-auto md:mx-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-educraft-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-educraft-primary">
                    {LOCATION_DETAILS.institute}
                  </h3>
                  <p className="text-base font-semibold text-foreground/80 mt-1">
                    {LOCATION_DETAILS.addressLine1}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {LOCATION_DETAILS.cityPincode}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-foreground/70 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-educraft-gold" />
                    {LOCATION_DETAILS.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    {LOCATION_DETAILS.whatsapp}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center gap-3">
                <a
                  href={LOCATION_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-educraft-primary text-white font-bold hover:bg-educraft-primary/90 transition-all shadow-md text-xs sm:text-sm tracking-wide"
                >
                  <MapPin className="w-4 h-4 text-educraft-gold" />
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
                <span className="text-[11px] text-foreground/50">Opens verified Google Maps location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS (Accordion)
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#fbfaf6] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase">
              Support &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-educraft-primary tracking-tight mt-1 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-foreground/75 leading-relaxed">
              Quick answers to help you connect with our academic team smoothly.
            </p>
            <div className="w-20 h-1 bg-educraft-gold/50 mx-auto mt-6 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {CONTACT_FAQS.map((faq, index) => {
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
          SECTION 10: SOCIAL MEDIA SECTION
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-2 block">
              Digital Community
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-educraft-primary mb-3">
              Stay Connected with EDU-Craft.
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl mx-auto mb-8">
              Follow our official channels for academic announcements, study pointers, and institute updates.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {SOCIAL_MEDIA_LINKS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-3 rounded-2xl bg-[#faf9f5] border border-educraft-secondary/40 text-xs sm:text-sm font-bold text-educraft-primary shadow-xs transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2 ${item.color}`}
                >
                  <span>{item.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CTA
         ========================================================================= */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#f9f8f4] to-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-educraft-primary text-white shadow-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-educraft-gold/30">
            <div className="absolute top-0 right-0 w-72 h-72 bg-educraft-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-educraft-supporting-2/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-educraft-gold uppercase mb-3 block">
                Direct Communication
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Your Questions Matter. Let&apos;s Talk.
              </h2>
              <p className="text-base sm:text-lg text-educraft-supporting-2/95 leading-relaxed max-w-2xl mx-auto mb-10">
                Whether you&apos;re exploring a programme or planning your next academic step, we&apos;re here to help you understand your options.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a
                  href={`https://wa.me/919477546832?text=${encodeURIComponent(
                    "Hello EDU-Craft | Institute, I would like to enquire about your courses and admission process."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all hover:-translate-y-0.5 shadow-md text-xs sm:text-sm tracking-wide"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP US
                </a>

                <a
                  href="tel:8100650948"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4 text-educraft-gold" />
                  CALL NOW (8100650948)
                </a>

                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-educraft-gold text-educraft-primary font-bold hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg text-xs sm:text-sm tracking-wide"
                >
                  EXPLORE COURSES
                </Link>
              </div>

              {/* Direct Location Note */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-educraft-supporting-2/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-educraft-gold" />
                  {LOCATION_DETAILS.fullAddress}
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
