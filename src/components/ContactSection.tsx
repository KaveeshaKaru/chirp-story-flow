
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you! We'll be in touch soon.", {
      description: "Your booking request has been received.",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    });
    
    setIsSubmitting(false);
    setFormStep(1);
  };
  
  return (
    <div className="bg-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#f7fcff] to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6dd5fa]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2980b9]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#6dd5fa]/20 text-[#2980b9] rounded-full text-sm font-medium mb-4">BOOK YOUR STAY</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Start Your Beach Adventure</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready for the perfect beach getaway? Contact us to book your room at Tara Guest House.
          </p>
          <div className="w-24 h-1 bg-[#2980b9] mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form with enhanced styling and animations */}
          <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#2980b9] to-[#6dd5fa]"></div>
            <CardHeader>
              <CardTitle className="text-2xl text-[#2980b9]">Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formStep === 0 ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" className="border-gray-200 focus:border-[#2980b9]" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" className="border-gray-200 focus:border-[#2980b9]" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="border-gray-200 focus:border-[#2980b9]" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="check-in">Check-in Date</Label>
                      <Input id="check-in" type="date" className="border-gray-200 focus:border-[#2980b9]" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="check-out">Check-out Date</Label>
                      <Input id="check-out" type="date" className="border-gray-200 focus:border-[#2980b9]" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input id="guests" type="number" min="1" className="border-gray-200 focus:border-[#2980b9]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requests</Label>
                    <textarea
                      id="message"
                      className="w-full min-h-[100px] p-3 rounded-md border border-gray-200 focus:border-[#2980b9] focus:outline-none focus:ring-1 focus:ring-[#2980b9]"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] hover:from-[#2070a0] hover:to-[#5bc4e9] text-white font-semibold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : "Send Inquiry"}
                  </Button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
                  <p className="text-gray-600">Your booking request has been submitted successfully.</p>
                  <p className="text-gray-600">We'll get back to you within 24 hours to confirm your reservation.</p>
                  <Button 
                    onClick={() => setFormStep(0)} 
                    variant="outline" 
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Contact Information with enhanced styling */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[#2980b9] to-[#6dd5fa] p-8 rounded-lg text-white shadow-xl relative overflow-hidden">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="white" fill="none" strokeWidth="2" />
                    </pattern>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 relative">Tara Guest House</h3>
              <div className="space-y-6 relative">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Address</p>
                    <p>Beach Road, Weligama, Southern Province, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <p>+94 77 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p>info@taraguesthouse.com</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="font-semibold text-lg mb-3 border-b border-white/30 pb-2">We offer:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Beach front rooms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Surf equipment rental</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Airport transfers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Local excursions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Breakfast included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Yoga sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10 h-[120px]">
        {/* Blue wave - background layer */}
        <div className="flex w-[5760px] h-full absolute bottom-0 animate-wave-scroll-slow z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 120" preserveAspectRatio="none" className="w-[2880px] h-full">
            <path fill="#6DD5FA" fillOpacity="0.8" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1520,69.3C1600,75,1760,85,1920,80C2080,75,2240,53,2400,48C2560,43,2720,53,2800,58.7L2880,64L2880,120L2800,120C2720,120,2560,120,2400,120C2240,120,2080,120,1920,120C1760,120,1600,120,1440,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 120" preserveAspectRatio="none" className="w-[2880px] h-full">
            <path fill="#6DD5FA" fillOpacity="0.8" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1520,69.3C1600,75,1760,85,1920,80C2080,75,2240,53,2400,48C2560,43,2720,53,2800,58.7L2880,64L2880,120L2800,120C2720,120,2560,120,2400,120C2240,120,2080,120,1920,120C1760,120,1600,120,1440,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>

        {/* White wave - top layer */}
        <div className="flex w-[5760px] h-full absolute bottom-0 animate-wave-scroll z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 120" preserveAspectRatio="none" className="w-[2880px] h-full">
            <path fill="#0ea5e9" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1520,69.3C1600,75,1760,85,1920,80C2080,75,2240,53,2400,48C2560,43,2720,53,2800,58.7L2880,64L2880,120L2800,120C2720,120,2560,120,2400,120C2240,120,2080,120,1920,120C1760,120,1600,120,1440,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 120" preserveAspectRatio="none" className="w-[2880px] h-full">
            <path fill="#0ea5e9" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1520,69.3C1600,75,1760,85,1920,80C2080,75,2240,53,2400,48C2560,43,2720,53,2800,58.7L2880,64L2880,120L2800,120C2720,120,2560,120,2400,120C2240,120,2080,120,1920,120C1760,120,1600,120,1440,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
