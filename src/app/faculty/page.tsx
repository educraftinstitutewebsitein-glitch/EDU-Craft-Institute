import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FacultyContent from "@/components/faculty/FacultyContent";

export const metadata: Metadata = {
  title: "Our Faculty | EDU-Craft Institute — Dedicated Educators",
  description:
    "Meet the 14 minds behind EDU-Craft | Institute, Kolkata. Subject-focused educators supporting Foundation (5–10), Higher Secondary (11–12), and Competitive (IIT-JEE & NEET) programmes.",
};

export default function FacultyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <FacultyContent />
      </main>
      <Footer />
    </>
  );
}
