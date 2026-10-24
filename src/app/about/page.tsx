import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About EDU-Craft | Institute — Education Beyond Expectations",
  description:
    "Learn about EDU-Craft | Institute at B-71, Garden Reach Road, Kolkata – 700024. Our philosophy, teaching approach, founders Umair Khan & MD Shaharyar Alam, and academic programmes.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
