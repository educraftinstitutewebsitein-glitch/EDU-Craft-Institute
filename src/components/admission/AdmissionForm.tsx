"use client";

import { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  MessageCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { CONTACT_BUSINESS_INFO } from "@/data/admissionData";

interface AdmissionFormProps {
  initialProgramme?: string;
  initialMessage?: string;
}

export default function AdmissionForm({
  initialProgramme,
  initialMessage,
}: AdmissionFormProps) {
  // Form Field States
  const [studentName, setStudentName] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [email, setEmail] = useState("");
  const [currentClass, setCurrentClass] = useState("Class 10");
  const [schoolBoard, setSchoolBoard] = useState("CBSE");
  const [programme, setProgramme] = useState(
    initialProgramme || "Foundation Programme"
  );
  const [learningMode, setLearningMode] = useState("Offline");
  const [academicSession] = useState(CONTACT_BUSINESS_INFO.academicSession);
  const [message, setMessage] = useState(initialMessage || "");

  // Update programme if initialProgramme prop changes from external buttons
  useEffect(() => {
    if (initialProgramme) {
      setProgramme(initialProgramme);
    }
  }, [initialProgramme]);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId?: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);

  // Helper to format WhatsApp message text
  const generateWhatsAppUrl = (refId?: string) => {
    const lines = [
      `*EDU-CRAFT INSTITUTE — NEW ADMISSION ENQUIRY*`,
      ...(refId ? [`*Reference ID:* ${refId}`] : []),
      `-----------------------------------------`,
      `*Student Name:* ${studentName.trim()}`,
      ...(guardianName.trim() ? [`*Parent/Guardian:* ${guardianName.trim()}`] : []),
      `*Student Mobile:* +91 ${studentPhone.trim()}`,
      ...(guardianPhone.trim() ? [`*Parent Mobile:* +91 ${guardianPhone.trim()}`] : []),
      ...(email.trim() ? [`*Email:* ${email.trim()}`] : []),
      `*Current Class:* ${currentClass}`,
      `*Curriculum/Board:* ${schoolBoard}`,
      `*Programme of Interest:* ${programme}`,
      `*Learning Mode:* ${learningMode}`,
      `*Academic Session:* ${academicSession}`,
      ...(message.trim() ? [`*Message/Goal:* ${message.trim()}`] : []),
      `-----------------------------------------`,
      `_Sent via EDU-Craft Institute Website_`,
    ];

    const encodedText = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/91${CONTACT_BUSINESS_INFO.whatsapp}?text=${encodedText}`;
  };

  // Form submission handler with automated WhatsApp redirection
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!studentName.trim()) {
      setErrorMessage("Please enter the student's full name.");
      return;
    }

    const cleanPhone = studentPhone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    let generatedRefId = `EC-${Date.now().toString().slice(-6)}`;

    try {
      // 1. Post to API route for server-side logging and database prep
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: studentName.trim(),
          guardianName: guardianName.trim(),
          studentPhone: studentPhone.trim(),
          guardianPhone: guardianPhone.trim(),
          email: email.trim(),
          currentClass,
          schoolBoard,
          programme,
          learningMode,
          academicSession,
          message: message.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success && data.referenceId) {
        generatedRefId = data.referenceId;
      }
    } catch (err) {
      console.warn("Server log warning, proceeding with WhatsApp handoff:", err);
    }

    // 2. Build direct WhatsApp URL with prefilled enquiry details
    const waUrl = generateWhatsAppUrl(generatedRefId);

    // 3. Set success state
    setSuccessData({
      referenceId: generatedRefId,
      message:
        "Your enquiry has been prepared. Redirecting directly to WhatsApp so you can send your details to our team...",
      whatsappUrl: waUrl,
    });

    setIsSubmitting(false);

    // 4. Trigger direct redirect to WhatsApp
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  return (
    <div
      id="enquiry"
      className="rounded-3xl bg-white border-2 border-educraft-secondary/40 shadow-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
    >
      {/* Decorative accent glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-educraft-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Success View */}
      {successData ? (
        <div className="text-center py-10 px-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block mb-2">
            Enquiry Prepared for WhatsApp
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold text-educraft-primary mb-3">
            Thank You, {studentName}!
          </h3>

          <p className="text-sm text-foreground/80 leading-relaxed mb-6">
            A WhatsApp window has been opened with your pre-filled enquiry. If it didn&apos;t open automatically, please click the button below to send your details to our team.
          </p>

          {successData.referenceId && (
            <div className="p-3.5 rounded-xl bg-[#faf9f5] border border-slate-200 inline-block mb-6 text-xs text-foreground/70">
              Reference ID: <strong className="text-educraft-primary">{successData.referenceId}</strong>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={successData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>SEND ON WHATSAPP NOW</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>

            <button
              onClick={() => {
                setSuccessData(null);
                setStudentName("");
                setStudentPhone("");
                setGuardianName("");
                setGuardianPhone("");
                setEmail("");
                setMessage("");
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-educraft-light/80 hover:bg-educraft-light text-educraft-primary text-xs font-bold transition-colors cursor-pointer border border-educraft-secondary/30"
            >
              Fill Another Form
            </button>
          </div>
        </div>
      ) : (
        /* The Actual Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-educraft-gold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct WhatsApp &amp; Online Admission Enquiry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-educraft-primary tracking-tight">
              Let&apos;s Find the Right Programme for You.
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 mt-2">
              Fill the details below to instantly connect with our counsellors on WhatsApp and get complete course details.
            </p>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Please check your details:</strong>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Student's Full Name (Required) */}
            <div>
              <label
                htmlFor="studentName"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Student&apos;s Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="studentName"
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Ayesha Khan"
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs"
              />
            </div>

            {/* Parent / Guardian Name (Optional) */}
            <div>
              <label
                htmlFor="guardianName"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Parent / Guardian Name <span className="text-foreground/40 text-[10px] lowercase font-normal">(optional)</span>
              </label>
              <input
                id="guardianName"
                type="text"
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
                placeholder="Parent or Guardian's name"
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs"
              />
            </div>

            {/* Student's Mobile Number (Required) */}
            <div>
              <label
                htmlFor="studentPhone"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Student&apos;s Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-foreground/50">
                  +91
                </span>
                <input
                  id="studentPhone"
                  type="tel"
                  required
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Parent Mobile Number (Optional) */}
            <div>
              <label
                htmlFor="guardianPhone"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Parent&apos;s Mobile Number <span className="text-foreground/40 text-[10px] lowercase font-normal">(optional)</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-foreground/50">
                  +91
                </span>
                <input
                  id="guardianPhone"
                  type="tel"
                  value={guardianPhone}
                  onChange={(e) => setGuardianPhone(e.target.value)}
                  placeholder="Parent's contact number"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Email Address (Optional) */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Email Address <span className="text-foreground/40 text-[10px] lowercase font-normal">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs"
              />
            </div>

            {/* Current Class (Dropdown) */}
            <div>
              <label
                htmlFor="currentClass"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Current Class <span className="text-rose-500">*</span>
              </label>
              <select
                id="currentClass"
                value={currentClass}
                onChange={(e) => setCurrentClass(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs cursor-pointer"
              >
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Dropper">Dropper</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* School / Board (Dropdown / Options) */}
            <div>
              <label
                htmlFor="schoolBoard"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                School Curriculum / Board <span className="text-foreground/40 text-[10px] lowercase font-normal">(optional)</span>
              </label>
              <select
                id="schoolBoard"
                value={schoolBoard}
                onChange={(e) => setSchoolBoard(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs cursor-pointer"
              >
                <option value="CBSE">CBSE Board</option>
                <option value="ICSE">ICSE Board</option>
                <option value="WBBSE">WBBSE Board</option>
                <option value="Other">Other Board / School</option>
              </select>
            </div>

            {/* Programme of Interest (Required) */}
            <div>
              <label
                htmlFor="programme"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Programme of Interest <span className="text-rose-500">*</span>
              </label>
              <select
                id="programme"
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs cursor-pointer"
              >
                <option value="Foundation Programme">Foundation Programme (Classes 5–10)</option>
                <option value="Higher Secondary Programme">Higher Secondary Programme (Classes 11–12)</option>
                <option value="IIT-JEE Preparation">IIT-JEE Preparation</option>
                <option value="NEET Preparation">NEET Preparation</option>
                <option value="Test Series">Test Series</option>
                <option value="Not Sure Yet">Not Sure Yet (Need Guidance)</option>
              </select>
            </div>

            {/* Preferred Learning Mode */}
            <div>
              <label
                htmlFor="learningMode"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Preferred Learning Mode <span className="text-rose-500">*</span>
              </label>
              <select
                id="learningMode"
                value={learningMode}
                onChange={(e) => setLearningMode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs cursor-pointer"
              >
                <option value="Offline">Offline (Classroom-based, Garden Reach Centre)</option>
                <option value="Online">Online (Remote learning)</option>
                <option value="Need Guidance">Need Guidance</option>
              </select>
            </div>

            {/* Academic Session (Configurable constant) */}
            <div>
              <label
                htmlFor="academicSession"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Academic Session
              </label>
              <input
                id="academicSession"
                type="text"
                readOnly
                value={academicSession}
                className="w-full px-4 py-3 rounded-xl bg-gray-100/90 border border-slate-200 text-foreground/70 text-sm font-medium cursor-not-allowed"
              />
            </div>
          </div>

          {/* Message or Academic Goal (Optional Multiline) */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
            >
              Message or Academic Goal <span className="text-foreground/40 text-[10px] lowercase font-normal">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about specific subjects, learning goals, or any questions you'd like our academic counsellors to address..."
              className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs resize-none"
            />
          </div>

          {/* Privacy Note */}
          <div className="flex items-center gap-2 text-xs text-foreground/60 pt-2">
            <Lock className="w-3.5 h-3.5 text-educraft-gold shrink-0" />
            <span>
              Your information is kept confidential and sent securely to our official WhatsApp desk (+91 9477546832).
            </span>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-educraft-primary text-white font-bold hover:bg-educraft-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-educraft-primary/20 text-sm tracking-wide cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Preparing WhatsApp Redirect...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>SUBMIT &amp; SEND ON WHATSAPP</span>
                  <Send className="w-4 h-4 text-educraft-gold" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
