import CTA from "@/components/CTA";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  // Array of logos with direct URLs

  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Logo Cloud Section */}
      <LogoCloud />

      {/* Features Section */}
      <Features />
      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
