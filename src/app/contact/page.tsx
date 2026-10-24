import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — EDU-Craft | Institute Kolkata",
  description:
    "Get in touch with EDU-Craft | Institute in Kolkata. Have questions about courses, admissions, fees, or scholarships? Call us at 8100650948, chat on WhatsApp at 9477546832, or visit our campus at B-71 Garden Reach Road.",
  keywords: [
    "EDU-Craft Contact",
    "Coaching Institute Kolkata Contact",
    "Garden Reach Road Kolkata Institute",
    "IIT JEE NEET Coaching Enquiry",
    "EDU-Craft Phone WhatsApp",
  ],
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-[#F7F2DD]/30">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
