
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 shadow-md backdrop-blur-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Waves className="h-6 w-6 text-[#2980b9]" />
          <span className="font-bold text-2xl text-[#2980b9]">TARA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {["home", "features", "testimonials", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium capitalize hover:text-[#2980b9] transition-colors ${
                activeSection === section ? "text-[#2980b9]" : "text-gray-600"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
        
        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-[#2980b9] hover:bg-[#2070a0] text-white"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
