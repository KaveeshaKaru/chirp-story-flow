
import React from "react";
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
  return (
    <div className="bg-gradient-to-b from-white via-[#f7fcff] to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Guest Experiences</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our guests have to say about their stay at Tara Guest House.
          </p>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="text-5xl text-[#6dd5fa]">"</div>
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
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
