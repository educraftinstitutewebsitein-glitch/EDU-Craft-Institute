import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventsContent from "@/components/events/EventsContent";

export const metadata: Metadata = {
  title: "Events & Competitions — EDU-Craft | Institute",
  description:
    "Explore academic competitions, Master Mathematics Challenge 2026, talent hunts, and student events organized by EDU-Craft | Institute Kolkata.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <EventsContent />
      </main>
      <Footer />
    </>
  );
}
