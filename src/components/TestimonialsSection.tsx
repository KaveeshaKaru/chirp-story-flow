
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "Tara Guest House was the perfect base for our surfing trip. Weligama's waves are just steps away and the staff are incredibly helpful!",
    name: "Emma S.",
    location: "Australia"
  },
  {
    text: "The beach views from our room were spectacular. Falling asleep to the sound of waves was pure bliss. Can't wait to return!",
    name: "Raj P.",
    location: "India"
  },
  {
    text: "A hidden gem in Weligama! The location is unbeatable and the rooms are clean and comfortable. Perfect beach getaway.",
    name: "Michael T.",
    location: "UK"
  },
  {
    text: "We loved the laid-back beach atmosphere and friendly staff. Tara Guest House made our first trip to Sri Lanka unforgettable.",
    name: "Lisa K.",
    location: "Germany"
  }
];

const TestimonialsSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api || !autoPlay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, autoPlay]);

  return (
    <div className="bg-gradient-to-b from-white via-[#f7fcff] to-white py-20 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-right bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Guest Experiences</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our guests have to say about their stay at Tara Guest House.
          </p>
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
                <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="text-5xl text-[#6dd5fa] animate-pulse">"</div>
                      <p className="text-lg text-gray-700 italic">{testimonial.text}</p>
                      <div className="mt-4">
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
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full opacity-30">
          <path 
            fill="#6dd5fa" 
            fillOpacity="0.3" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TestimonialsSection;
