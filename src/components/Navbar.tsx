
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Waves, LogIn, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when switching to desktop
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile, menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      if (isMobile) setMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-inter ${
        scrolled || menuOpen
          ? "bg-white/90 shadow-md backdrop-blur-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group">
          <Waves className="h-6 w-6 text-[#2980b9] group-hover:animate-bounce" />
          <span className={`font-extrabold text-xl md:text-2xl transition-colors duration-300 ${
            scrolled || menuOpen ? "text-[#2980b9]" : "text-white"
          } group-hover:text-[#6dd5fa]`}>TARA</span>
        </div>
        
        {/* Desktop Navigation */}
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
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden flex items-center justify-center z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={`h-6 w-6 ${scrolled || menuOpen ? "text-[#2980b9]" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-[#2980b9]" : "text-white"}`} />
          )}
        </button>
        
        {/* Mobile Navigation Menu */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
          <nav className="flex flex-col items-center gap-6">
            {["home", "features", "testimonials", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-xl font-medium capitalize text-gray-800 hover:text-[#2980b9] transition-all duration-300"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/admin/login">
            <Button 
              variant="outline" 
              className={`border-[#2980b9] transition-transform hover:scale-105 flex items-center gap-2 ${
                scrolled ? "text-[#2980b9] bg-white" : "text-white bg-transparent"
              }`}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </Link>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-[#2980b9] hover:bg-[#2070a0] text-white transition-transform hover:scale-105"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
