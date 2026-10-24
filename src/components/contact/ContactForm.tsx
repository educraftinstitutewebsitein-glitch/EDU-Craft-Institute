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
import { LOCATION_DETAILS } from "@/data/contactData";

interface ContactFormProps {
  initialEnquiryType?: string;
}

export default function ContactForm({ initialEnquiryType }: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [visitorType, setVisitorType] = useState<"Student" | "Parent/Guardian" | "Other">("Student");
  const [enquiryType, setEnquiryType] = useState(
    initialEnquiryType || "Course Information"
  );
  const [message, setMessage] = useState("");

  // Update enquiryType if prop changes
  useEffect(() => {
    if (initialEnquiryType) {
      setEnquiryType(initialEnquiryType);
    }
  }, [initialEnquiryType]);

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId?: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);

  // Helper to build WhatsApp formatted text
  const generateWhatsAppUrl = (refId?: string) => {
    const lines = [
      `*EDU-CRAFT INSTITUTE — NEW CONTACT ENQUIRY*`,
      ...(refId ? [`*Reference ID:* ${refId}`] : []),
      `-----------------------------------------`,
      `*Name:* ${fullName.trim()}`,
      `*I Am A:* ${visitorType}`,
      `*Mobile Number:* +91 ${mobile.trim()}`,
      ...(email.trim() ? [`*Email:* ${email.trim()}`] : []),
      `*Enquiry Type:* ${enquiryType}`,
      `*Message:* ${message.trim()}`,
      `-----------------------------------------`,
      `_Sent via EDU-Craft Institute Website_`,
    ];

    const encodedText = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/91${LOCATION_DETAILS.whatsapp}?text=${encodedText}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanPhone = mobile.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!message.trim()) {
      setErrorMessage("Please share your question or message.");
      return;
    }

    setIsSubmitting(true);

    let generatedRefId = `CN-${Date.now().toString().slice(-6)}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          mobile: mobile.trim(),
          email: email.trim(),
          visitorType,
          enquiryType,
          message: message.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success && data.referenceId) {
        generatedRefId = data.referenceId;
      }
    } catch (err) {
      console.warn("Contact log warning, proceeding with WhatsApp handoff:", err);
    }

    // Direct WhatsApp handoff URL
    const waUrl = generateWhatsAppUrl(generatedRefId);

    setSuccessData({
      referenceId: generatedRefId,
      message:
        "Your message has been compiled. You can also send this enquiry directly to our WhatsApp desk for faster response.",
      whatsappUrl: waUrl,
    });

    setIsSubmitting(false);

    // Automatically trigger WhatsApp window
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  return (
    <div
      id="contact-form"
      className="rounded-3xl bg-white border-2 border-educraft-secondary/40 shadow-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-educraft-gold/10 rounded-full blur-3xl pointer-events-none" />

      {successData ? (
        /* Success View */
        <div className="text-center py-10 px-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="text-xs font-bold text-educraft-gold uppercase tracking-widest block mb-2">
            Enquiry Prepared
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold text-educraft-primary mb-3">
            Thank You, {fullName}!
          </h3>

          <p className="text-sm text-foreground/80 leading-relaxed mb-6">
            {successData.message}
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
                setFullName("");
                setMobile("");
                setEmail("");
                setMessage("");
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-educraft-light/80 hover:bg-educraft-light text-educraft-primary text-xs font-bold transition-colors cursor-pointer border border-educraft-secondary/30"
            >
              Send Another Question
            </button>
          </div>
        </div>
      ) : (
        /* The Actual Contact Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-educraft-gold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-educraft-primary tracking-tight">
              How Can We Help You?
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 mt-2">
              Send us your question, and tell us what you would like to know.
            </p>
          </div>

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
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-foreground/50">
                  +91
                </span>
                <input
                  id="mobile"
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="9876543210"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Email Address */}
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

            {/* I Am A */}
            <div>
              <label
                htmlFor="visitorType"
                className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
              >
                I Am A <span className="text-rose-500">*</span>
              </label>
              <select
                id="visitorType"
                value={visitorType}
                onChange={(e) => setVisitorType(e.target.value as typeof visitorType)}
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs cursor-pointer"
              >
                <option value="Student">Student</option>
                <option value="Parent/Guardian">Parent / Guardian</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Enquiry Type */}
          <div>
            <label
              htmlFor="enquiryType"
              className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
            >
              Enquiry Type <span className="text-rose-500">*</span>
            </label>
            <select
              id="enquiryType"
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs cursor-pointer"
            >
              <option value="Course Information">Course Information</option>
              <option value="Admission Enquiry">Admission Enquiry</option>
              <option value="Foundation Programme">Foundation Programme (Classes 5–10)</option>
              <option value="Higher Secondary Programme">Higher Secondary Programme (Classes 11–12)</option>
              <option value="IIT-JEE Preparation">IIT-JEE Preparation</option>
              <option value="NEET Preparation">NEET Preparation</option>
              <option value="Test Series">Test Series</option>
              <option value="Scholarship Information">Scholarship Information</option>
              <option value="Fees and Payment Information">Fees and Payment Information</option>
              <option value="Other">Other Query</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-educraft-primary uppercase tracking-wider mb-2"
            >
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you would like to know, or share your student's class and learning requirements..."
              className="w-full px-4 py-3 rounded-xl bg-[#faf9f5] border border-educraft-secondary/40 text-foreground placeholder:text-foreground/40 text-sm focus:outline-hidden focus:ring-2 focus:ring-educraft-gold focus:bg-white transition-all shadow-2xs resize-none"
            />
          </div>

          {/* Privacy Note */}
          <div className="flex items-center gap-2 text-xs text-foreground/60 pt-1">
            <Lock className="w-3.5 h-3.5 text-educraft-gold shrink-0" />
            <span>
              Your information is private and will be used solely to answer your enquiry at EDU-Craft | Institute.
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
                  <span>Sending Your Enquiry...</span>
                </>
              ) : (
                <>
                  <span>SEND YOUR ENQUIRY</span>
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
