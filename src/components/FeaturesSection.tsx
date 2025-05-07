
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Umbrella, PalmTree as Palmtree, Sailboat } from "lucide-react";

const features = [
  {
    title: "Beachfront Access",
    description: "Direct access to the beautiful Weligama beach, perfect for morning walks and sunset views.",
    icon: <Palmtree className="h-10 w-10 text-[#2980b9]" />
  },
  {
    title: "Surf Paradise",
    description: "Located at one of Sri Lanka's best surf spots, ideal for beginners and experienced surfers.",
    icon: <Sailboat className="h-10 w-10 text-[#2980b9]" />
  },
  {
    title: "Sun Terrace",
    description: "Spacious sun terrace with loungers to soak up the tropical sunshine and ocean breeze.",
    icon: <Sun className="h-10 w-10 text-[#2980b9]" />
  },
  {
    title: "Beach Amenities",
    description: "Complimentary beach umbrellas, towels and refreshments for a perfect day by the ocean.",
    icon: <Umbrella className="h-10 w-10 text-[#2980b9]" />
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience Beach Living</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Tara Guest House the perfect beachside retreat for your Sri Lankan adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 flex flex-col items-center">
                {feature.icon}
                <CardTitle className="text-lg mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
