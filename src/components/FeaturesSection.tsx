
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Umbrella, Palmtree, Sailboat, Coffee, Wifi, Navigation, Utensils } from "lucide-react";

const features = [
  {
    title: "Beachfront Access",
    description: "Direct access to the beautiful Weligama beach, perfect for morning walks and sunset views.",
    icon: <Palmtree className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  },
  {
    title: "Surf Paradise",
    description: "Located at one of Sri Lanka's best surf spots, ideal for beginners and experienced surfers.",
    icon: <Sailboat className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  },
  {
    title: "Sun Terrace",
    description: "Spacious sun terrace with loungers to soak up the tropical sunshine and ocean breeze.",
    icon: <Sun className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  },
  {
    title: "Beach Amenities",
    description: "Complimentary beach umbrellas, towels and refreshments for a perfect day by the ocean.",
    icon: <Umbrella className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  },
  {
    title: "Authentic Cuisine",
    description: "Experience the flavors of Sri Lanka with our home-cooked meals using fresh local ingredients.",
    icon: <Utensils className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  },
  {
    title: "High-Speed WiFi",
    description: "Stay connected with complimentary high-speed internet throughout the property.",
    icon: <Wifi className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  },
  {
    title: "Coffee Bar",
    description: "Start your day with our complimentary coffee bar featuring locally sourced Sri Lankan coffee.",
    icon: <Coffee className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  },
  {
    title: "Guided Tours",
    description: "Explore the beauty of Sri Lanka with our curated guided tours to local attractions.",
    icon: <Navigation className="h-10 w-10 text-[#2980b9] group-hover:text-white transition-colors" />
  }
];

const FeaturesSection = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-white py-20 relative overflow-hidden font-inter">
      {/* Background image with enhanced styling */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#6dd5fa]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#2980b9]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#6dd5fa]/20 text-[#2980b9] rounded-full text-sm font-medium mb-4">AMENITIES</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Experience Beach Living
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Tara Guest House the perfect beachside retreat for your Sri Lankan adventure.
          </p>
          <div className="w-24 h-1 bg-[#2980b9] mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 transform translate-y-10"
              ref={el => featureRefs.current[index] = el}
            >
              <Card 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardHeader className="pb-2 flex flex-col items-center">
                  <div className="text-[#2980b9] transition-transform hover:scale-110 duration-300 p-4 rounded-full bg-[#6dd5fa]/10 group-hover:bg-[#2980b9] group-hover:text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg mt-4 font-extrabold group-hover:text-[#2980b9] transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 group-hover:text-gray-800 transition-colors">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
