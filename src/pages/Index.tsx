
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Umbrella, Palmtree, Waves } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "testimonials", "contact"];
      
      let currentSection = "";
      let smallestDistance = Number.MAX_VALUE;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < smallestDistance) {
            smallestDistance = distance;
            currentSection = section;
          }
        }
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
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
