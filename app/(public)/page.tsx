"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { AppShowcaseSection } from "@/components/sections/app-showcase-section";
import { EventsSection } from "@/components/sections/events-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AppShowcaseSection />
      <FeaturesSection />
      <EventsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
} 