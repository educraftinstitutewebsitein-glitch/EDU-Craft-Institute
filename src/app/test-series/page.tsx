import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestSeriesContent from "@/components/test-series/TestSeriesContent";

export const metadata: Metadata = {
  title: "Test Series & Assessment Practice — EDU-Craft | Institute",
  description:
    "Test practice for Foundation (Classes 5–8), Board examinations (Classes 9–12), and competitive exams. Free IIT-JEE & NEET test practice open to all on registration.",
};

export default function TestSeriesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <TestSeriesContent />
      </main>
      <Footer />
    </>
  );
}
