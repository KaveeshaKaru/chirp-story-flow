
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Palmtree, Waves, Sun, MapPin } from "lucide-react";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
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
          backgroundImage: "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          transform: `translateY(${offset * 0.5}px)`,
          filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] animate-float-slow opacity-70">
          <Palmtree size={40} className="text-white" />
        </div>
        <div className="absolute top-[60%] right-[15%] animate-float-medium opacity-70">
          <Sun size={30} className="text-white" />
        </div>
        <div className="absolute top-[40%] left-[80%] animate-float-fast opacity-70">
          <Waves size={35} className="text-white" />
        </div>
        <div className="absolute bottom-[30%] left-[20%] animate-float-medium opacity-70">
          <MapPin size={25} className="text-white" />
        </div>
      </div>
      
      {/* Background gradient overlay with new vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2980b9]/80 via-[#00c6ff]/60 to-white/90 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-white font-medium flex items-center gap-2">
                <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                Now Accepting Reservations for Summer 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              <span className="block mb-2">Your Perfect</span>
              <span className="relative inline-block">
                Beachside Retreat
                <svg className="absolute -bottom-2 left-0 right-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q40,0 80,5 T160,5 T240,5" stroke="#6dd5fa" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              Experience the magic of Weligama Bay at our boutique beachfront guest house in the heart of Sri Lanka's surf paradise
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-[#2980b9] hover:bg-white/90 font-semibold transition-all hover:scale-105 hover:shadow-lg"
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
  style={{
    backgroundImage: 'linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)',
    color: '#fff',
    border: 'none',
  }}
  className="transition-all hover:scale-105"
  onClick={() => {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Explore Amenities
</Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Palmtree size={20} className="animate-bounce" />
                <span>Beach Access</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sun size={20} className="animate-bounce" />
                <span>Ocean View</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves size={20} className="animate-bounce" />
                <span>Surf Spot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration with enhanced animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
