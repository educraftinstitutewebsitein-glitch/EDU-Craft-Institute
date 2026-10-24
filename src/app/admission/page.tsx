import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionContent from "@/components/admission/AdmissionContent";

export const metadata: Metadata = {
  title: "Admissions & Academic Enquiries — EDU-Craft | Institute Kolkata",
  description:
    "Explore admission programmes at EDU-Craft | Institute, Kolkata. Submit an enquiry for Foundation (Classes 5–10), Higher Secondary (Classes 11–12), or Competitive (IIT-JEE & NEET) courses.",
};

export default function AdmissionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <AdmissionContent />
      </main>
      <Footer />
    </>
  );
}
