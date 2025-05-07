
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Palmtree } from "lucide-react";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          transform: `translateY(${offset * 0.5}px)`,
          filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2980b9]/80 via-[#6dd5fa]/60 to-white/90 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Welcome to Tara Guest House
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md animate-pulse">
              Your perfect beachside retreat in the heart of Weligama, Sri Lanka
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-[#2980b9] hover:bg-white/90 font-semibold transition-transform hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Your Stay
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
                onClick={() => {
                  const featuresSection = document.getElementById("features");
                  featuresSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Amenities
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Palmtree size={20} className="animate-bounce" />
                <span>Beach Access</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Palmtree size={20} className="animate-bounce" />
                <span>Ocean View</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Palmtree size={20} className="animate-bounce" />
                <span>Surf Spot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full animate-pulse">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
