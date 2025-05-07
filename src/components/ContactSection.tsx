
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
  };
  
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Your Stay</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready for the perfect beach getaway? Contact us to book your room at Tara Guest House.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="check-in">Check-in Date</Label>
                    <Input id="check-in" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-out">Check-out Date</Label>
                    <Input id="check-out" type="date" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Special Requests</Label>
                  <textarea
                    id="message"
                    className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#2980b9] hover:bg-[#2070a0] text-white"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[#2980b9] to-[#6dd5fa] p-8 rounded-lg text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Tara Guest House</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Address:</span> 
                  <span>Beach Road, Weligama, Southern Province, Sri Lanka</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Phone:</span>
                  <span>+94 77 123 4567</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Email:</span>
                  <span>info@taraguesthouse.com</span>
                </p>
                <div className="pt-4">
                  <p className="font-semibold mb-2">We offer:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Beach front rooms</li>
                    <li>Surf equipment rental</li>
                    <li>Airport transfers</li>
                    <li>Local excursions</li>
                    <li>Breakfast included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
