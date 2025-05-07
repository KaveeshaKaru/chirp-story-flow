
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Umbrella, PalmTree as Palmtree, Waves } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1">
        <section id="home" className="scroll-mt-16">
          <HeroSection />
        </section>
        
        <section id="features" className="scroll-mt-16">
          <FeaturesSection />
        </section>
        
        <section id="testimonials" className="scroll-mt-16">
          <TestimonialsSection />
        </section>
        
        <section id="contact" className="scroll-mt-16">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
