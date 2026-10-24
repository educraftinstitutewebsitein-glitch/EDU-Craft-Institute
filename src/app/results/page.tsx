import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResultsContent from "@/components/results/ResultsContent";

export const metadata: Metadata = {
  title: "Student Results & Academic Achievements — EDU-Craft | Institute",
  description:
    "Celebrating the verified academic achievements, progress, and marks of EDU-Craft | Institute students across Classroom Programmes and MMC Series assessments.",
};

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <ResultsContent />
      </main>
      <Footer />
    </>
  );
}
