"use client";

import { StudentResult } from "@/data/studentResults";
import StudentPortrait from "./StudentPortrait";
import { School, Award, Calendar, BookOpen, AlertCircle } from "lucide-react";

interface StudentCardProps {
  student: StudentResult;
}

export default function StudentCard({ student }: StudentCardProps) {
  const isClassroom = student.category === "Classroom Programme";

  return (
    <div className="rounded-3xl bg-white border border-educraft-secondary/35 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* ===================================================================
            A. PROFILE PICTURE AREA — AT THE TOP (Consistent 4:5 Aspect Ratio)
           =================================================================== */}
        <div className="relative">
          <StudentPortrait
            photoPath={student.photoPath}
            name={student.name}
            initials={student.initials}
          />

          {/* Badges Overlay on Photo */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
            <span className="text-[10px] font-bold text-educraft-primary bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-2xs border border-educraft-secondary/30">
              Class {student.class}
            </span>
          </div>

          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            <span
              className={`text-[9px] font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs uppercase ${
                isClassroom
                  ? "bg-educraft-primary text-white border border-educraft-gold/40"
                  : "bg-educraft-gold text-educraft-primary border border-white/40"
              }`}
            >
              {isClassroom ? "Classroom" : "MMC Series"}
            </span>
          </div>
        </div>

        {/* ===================================================================
            B. STUDENT IDENTITY — IMMEDIATELY BELOW THE PHOTO
           =================================================================== */}
        <div className="p-5 sm:p-6 pb-4">
          <h3 className="text-xl font-bold text-educraft-primary mb-2 group-hover:text-educraft-gold transition-colors leading-snug">
            {student.name}
          </h3>

          <div className="space-y-1.5 text-xs text-foreground/75 mb-4">
            {/* School (if available) */}
            {student.school ? (
              <div className="flex items-center gap-2 text-foreground/80 font-medium">
                <School className="w-3.5 h-3.5 text-educraft-gold shrink-0" />
                <span className="line-clamp-1" title={student.school}>
                  {student.school}
                </span>
              </div>
            ) : null}

            {/* Academic Year */}
            <div className="flex items-center gap-2 text-foreground/65">
              <Calendar className="w-3.5 h-3.5 text-educraft-gold shrink-0" />
              <span>
                <strong>Academic Year:</strong> {student.academicYear}
              </span>
            </div>

            {/* Admin Flag Warning (for Ayesha Chowdhury mismatch IV (SIX)) */}
            {student.adminFlag && (
              <div className="p-2 rounded-lg bg-amber-50 border border-amber-200/80 text-[10px] text-amber-900 flex items-start gap-1.5 mt-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>{student.adminFlag}</span>
              </div>
            )}
          </div>

          {/* ===================================================================
              C. SUBJECT-WISE MARKS — BELOW STUDENT DETAILS
             =================================================================== */}
          <div className="space-y-2 pt-3 border-t border-gray-100">
            <div className="text-[10px] font-bold text-educraft-primary uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 text-educraft-gold" />
                Subject Performance
              </span>
              <span className="text-[9px] text-foreground/45 font-medium">
                Marks Scored
              </span>
            </div>

            {student.marks.length > 0 ? (
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {student.marks.map((m, idx) => {
                  const isCentum = m.marks === 100;
                  return (
                    <div
                      key={idx}
                      className={`px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs transition-colors ${
                        isCentum
                          ? "bg-amber-50/90 border border-amber-300 text-amber-900 font-bold shadow-2xs"
                          : "bg-[#faf9f5] border border-slate-200/70 text-foreground/85"
                      }`}
                    >
                      <span className="truncate pr-1 text-[11px] font-medium" title={m.subject}>
                        {m.subject}
                      </span>
                      <span
                        className={`text-xs font-bold shrink-0 ${
                          isCentum ? "text-amber-700 font-extrabold" : "text-educraft-primary"
                        }`}
                      >
                        {m.marks}
                        {isCentum && " ★"}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-3 text-center text-xs text-foreground/60 italic bg-gray-50 rounded-lg">
                Marks not provided
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===================================================================
          D. CARD FOOTER
         =================================================================== */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-foreground/60">
          <span className="font-semibold text-educraft-primary">
            {isClassroom ? "Classroom Programme" : "Based on MMC Series Proof"}
          </span>
          <span className="text-[10px] text-educraft-gold font-bold uppercase">
            {student.academicYear}
          </span>
        </div>
      </div>
    </div>
  );
}
