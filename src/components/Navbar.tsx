
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 shadow-md backdrop-blur-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group">
          <Waves className="h-6 w-6 text-[#2980b9] group-hover:animate-bounce" />
          <span className={`font-bold text-2xl transition-colors duration-300 ${
            scrolled ? "text-[#2980b9]" : "text-white"
          } group-hover:text-[#6dd5fa]`}>TARA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {["home", "features", "testimonials", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium capitalize hover:text-[#2980b9] transition-all duration-300 relative
                ${activeSection === section 
                  ? (scrolled ? "text-[#2980b9]" : "text-white font-bold") 
                  : (scrolled ? "text-gray-600" : "text-white/80")}
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 
                after:left-0 after:bg-[#2980b9] after:origin-bottom-right after:transition-transform 
                after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left
                ${activeSection === section ? "after:scale-x-100" : ""}`}
            >
              {section}
            </button>
          ))}
        </nav>
        
        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-[#2980b9] hover:bg-[#2070a0] text-white transition-transform hover:scale-105"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
