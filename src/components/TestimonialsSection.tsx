
import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Tara Guest House was the perfect base for our surfing trip. Weligama's waves are just steps away and the staff are incredibly helpful!",
    name: "Emma S.",
    location: "Australia",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    text: "The beach views from our room were spectacular. Falling asleep to the sound of waves was pure bliss. Can't wait to return!",
    name: "Raj P.",
    location: "India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    text: "A hidden gem in Weligama! The location is unbeatable and the rooms are clean and comfortable. Perfect beach getaway.",
    name: "Michael T.",
    location: "UK",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 4
  },
  {
    text: "We loved the laid-back beach atmosphere and friendly staff. Tara Guest House made our first trip to Sri Lanka unforgettable.",
    name: "Lisa K.",
    location: "Germany",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!api || !autoPlay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, autoPlay]);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-white via-[#f7fcff] to-white py-20 relative">
      {/* Background image with enhanced styling */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-right bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-[#6dd5fa]/20 text-[#2980b9] rounded-full text-sm font-medium mb-4">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Guest Experiences</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our guests have to say about their stay at Tara Guest House.
          </p>
          <div className="w-24 h-1 bg-[#2980b9] mx-auto mt-6"></div>
        </div>
        
        <Carousel 
          className="max-w-4xl mx-auto"
          setApi={setApi}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg border-t-4 border-t-[#2980b9]">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                        <div className="absolute bottom-0 right-0 bg-[#2980b9] rounded-full p-1 shadow-sm">
                          <Star size={12} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="flex gap-1 my-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      
                      <div className="relative">
                        <span className="text-5xl absolute -top-10 left-0 text-[#6dd5fa] opacity-20">"</span>
                        <p className="text-lg text-gray-700 italic">{testimonial.text}</p>
                        <span className="text-5xl absolute -bottom-10 right-0 text-[#6dd5fa] opacity-20">"</span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                        <p className="font-semibold text-[#2980b9]">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 transition-transform hover:scale-110" />
          <CarouselNext className="-right-4 transition-transform hover:scale-110" />
        </Carousel>
        
        <div className="mt-10 text-center">
          <p className="text-[#2980b9] font-semibold animate-bounce inline-flex items-center gap-2">
            <Star size={16} className="fill-[#2980b9]" />
            Rated 4.9/5 based on 200+ reviews
          </p>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full opacity-30">
          <path 
            fill="#6dd5fa" 
            fillOpacity="0.3" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="animate-wave-slow"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TestimonialsSection;
