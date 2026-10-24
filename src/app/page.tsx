import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutContent from "@/components/about/AboutContent";
import CoursesContent from "@/components/courses/CoursesContent";
import FacultyContent from "@/components/faculty/FacultyContent";
import TestSeriesContent from "@/components/test-series/TestSeriesContent";
import ResultsContent from "@/components/results/ResultsContent";
import AdmissionContent from "@/components/admission/AdmissionContent";
import ContactContent from "@/components/contact/ContactContent";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-20">
          <AboutContent />
        </section>

        <section id="courses" className="scroll-mt-20">
          <CoursesContent />
        </section>

        <section id="faculty" className="scroll-mt-20">
          <FacultyContent />
        </section>

        <section id="test-series" className="scroll-mt-20">
          <TestSeriesContent />
        </section>

        <section id="results" className="scroll-mt-20">
          <ResultsContent />
        </section>

        <section id="admission" className="scroll-mt-20">
          <AdmissionContent />
        </section>

        <section id="contact" className="scroll-mt-20">
          <ContactContent />
        </section>
      </main>
      <Footer />
    </>
  );
}
