import React from "react";

// Sections
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-28 font-poppins bg-gray-50 text-gray-900">
      {/* Hero / Intro */}
      <HeroSection />

      {/* About Me */}
      <AboutSection />

      {/* Skills */}
      <SkillsSection />

      {/* Portfolio */}
      <PortfolioSection />

      {/* Testimonial */}
      <TestimonialSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}

export default Home;
