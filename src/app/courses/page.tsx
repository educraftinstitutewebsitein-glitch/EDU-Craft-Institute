import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoursesContent from "@/components/courses/CoursesContent";

export const metadata: Metadata = {
  title: "Academic Programmes & Courses — EDU-Craft | Institute",
  description:
    "Explore academic programmes at EDU-Craft | Institute, Kolkata. Foundation (Classes 5–10), Higher Secondary (Classes 11–12 PCMB, Arts, Commerce), IIT-JEE & NEET preparation and Test Series.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <CoursesContent />
      </main>
      <Footer />
    </>
  );
}
