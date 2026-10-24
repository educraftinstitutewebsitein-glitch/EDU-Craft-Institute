"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Clock, Award, CheckCircle2, BookOpen } from "lucide-react";
import { FacultyMember } from "@/data/faculty";
import FacultyPortrait from "./FacultyPortrait";

interface FacultyModalProps {
  member: FacultyMember | null;
  onClose: () => void;
}

export default function FacultyModal({ member, onClose }: FacultyModalProps) {
  // Support Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (member) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-educraft-secondary/40 overflow-hidden z-10 max-h-[90vh] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="faculty-modal-title"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close profile details"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-educraft-primary flex items-center justify-center shadow-md transition-transform hover:scale-110 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 sm:p-8">
            <div className="grid sm:grid-cols-12 gap-6 sm:gap-8 items-start mb-6">
              {/* Portrait Thumbnail */}
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border-2 border-educraft-secondary/30 shadow-md">
                <FacultyPortrait
                  imagePath={member.imagePath}
                  name={member.name}
                  initials={member.initials}
                  isFounder={member.isFounder}
                />
              </div>

              {/* Header Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold tracking-widest text-educraft-gold uppercase bg-educraft-light px-2.5 py-0.5 rounded-full">
                    Faculty {member.number}
                  </span>
                  {member.isFounder && (
                    <span className="text-[10px] font-bold tracking-wider text-white bg-educraft-primary px-2.5 py-0.5 rounded-full">
                      Founder
                    </span>
                  )}
                </div>

                <h2 id="faculty-modal-title" className="text-2xl sm:text-3xl font-bold text-educraft-primary leading-tight">
                  {member.name}
                </h2>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-educraft-gold shrink-0" />
                    <span><strong>Qualification:</strong> {member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-educraft-gold shrink-0" />
                    <span><strong>Teaching Experience:</strong> {member.experience}</span>
                  </div>
                </div>

                {member.competitiveExams && member.competitiveExams.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[10px] font-bold text-educraft-primary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-educraft-gold" />
                      Competitive Examination Expertise:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.competitiveExams.map((exam) => (
                        <span
                          key={exam}
                          className="px-2.5 py-0.5 rounded-md bg-educraft-primary text-white text-[11px] font-bold"
                        >
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Detailed Subjects & Applicable Classes breakdown */}
            <div className="mt-6 pt-6 border-t border-educraft-secondary/30 space-y-4">
              <h3 className="text-sm font-bold text-educraft-primary uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-educraft-gold" />
                Subjects &amp; Classes Taught
              </h3>

              <div className="space-y-3">
                {member.subjectsAndClasses.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#faf9f5] border border-educraft-secondary/30"
                  >
                    <div className="text-xs font-bold text-educraft-primary uppercase tracking-wide mb-2">
                      {item.label}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.items.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-foreground/85 shadow-2xs"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note & Footer */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-foreground/60">
              <span>EDU-Craft | Institute Kolkata</span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-educraft-primary text-white text-xs font-semibold hover:bg-educraft-primary/90 transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
