
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { MapPin, Phone, Mail, CheckCircle2, Calendar, User, CreditCard } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Create a schema for form validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  checkIn: z.string().min(1, { message: "Check-in date is required" }),
  checkOut: z.string().min(1, { message: "Check-out date is required" }),
  guests: z.string().min(1, { message: "Number of guests is required" }),
  requests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [inquiryNumber, setInquiryNumber] = useState("");
  
  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "1",
      requests: "",
    },
  });

  // Generate a unique inquiry number
  const generateInquiryNumber = () => {
    const prefix = "TGH";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    return `${prefix}-${timestamp}-${random}`;
  };
  
  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Generate inquiry number
    const newInquiryNumber = generateInquiryNumber();
    setInquiryNumber(newInquiryNumber);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you! We'll be in touch soon.", {
      description: "Your booking request has been received.",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    });
    
    setIsSubmitting(false);
    setFormStep(1);
  };

  const resetForm = () => {
    form.reset();
    setFormStep(0);
  };
  
  return (
    <div className="bg-white py-16 md:py-20 relative overflow-hidden">
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
          {/* Reservation Form with enhanced validation and error handling */}
          <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#2980b9] to-[#6dd5fa]"></div>
            <CardHeader>
              <CardTitle className="text-2xl text-[#2980b9]">Reservation Request</CardTitle>
              <CardDescription>
                Fill out the form below to start your booking process.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formStep === 0 ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} className="border-gray-200 focus:border-[#2980b9]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} className="border-gray-200 focus:border-[#2980b9]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@example.com" {...field} className="border-gray-200 focus:border-[#2980b9]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+94 77 123 4567" {...field} className="border-gray-200 focus:border-[#2980b9]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="checkIn"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Check-in Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} className="border-gray-200 focus:border-[#2980b9]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="checkOut"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Check-out Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} className="border-gray-200 focus:border-[#2980b9]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Number of Guests</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} className="border-gray-200 focus:border-[#2980b9]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="requests"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Special Requests</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              className="w-full min-h-[100px] p-3 rounded-md border border-gray-200 focus:border-[#2980b9] focus:outline-none focus:ring-1 focus:ring-[#2980b9]"
                            ></textarea>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
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
                      ) : "Submit Reservation Request"}
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="py-6 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800">Booking Request Received!</h3>
                    <p className="text-gray-600">Your inquiry has been submitted successfully.</p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-left my-6">
                    <h4 className="font-semibold text-[#2980b9] mb-3 flex items-center gap-2">
                      <CreditCard className="h-5 w-5" /> Payment Instructions
                    </h4>
                    
                    <div className="space-y-4 text-gray-700">
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">Your Inquiry Number:</span>
                        <span className="text-lg font-bold text-[#2980b9]">{inquiryNumber}</span>
                        <span className="text-sm text-gray-500">Please save this number for reference.</span>
                      </div>
                      
                      <p>To confirm your reservation, please make a deposit of <strong>30%</strong> of the total booking amount to our bank account:</p>
                      
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <p><span className="font-medium">Bank:</span> National Bank of Sri Lanka</p>
                        <p><span className="font-medium">Account Name:</span> Tara Guest House</p>
                        <p><span className="font-medium">Account Number:</span> 1234-5678-9012-3456</p>
                        <p><span className="font-medium">Branch Code:</span> 001</p>
                        <p><span className="font-medium">Payment Reference:</span> {inquiryNumber}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="font-medium">Next steps:</p>
                        <ol className="list-decimal pl-5">
                          <li>Make the bank transfer within 48 hours</li>
                          <li>Email a copy of your payment slip to <span className="text-[#2980b9]">bookings@taraguesthouse.com</span></li>
                          <li>Include your inquiry number in the email subject</li>
                        </ol>
                      </div>
                      
                      <p>We'll send your booking confirmation as soon as your payment is verified.</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={resetForm} 
                    variant="outline" 
                    className="mt-4"
                  >
                    Make Another Reservation
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
                  <p className="font-semibold text-lg mb-3 border-b border-white/30 pb-2">Booking Information:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>50% deposit to confirm</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Free cancellation 7 days before</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Check-in: 2:00 PM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Check-out: 11:00 AM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>Airport pickup available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                      <span>All rooms with sea view</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> Reservation Process
                    </h4>
                    <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm">
                      <li>Submit your booking request</li>
                      <li>Receive payment instructions</li>
                      <li>Make bank transfer within 48 hours</li>
                      <li>Email payment confirmation</li>
                      <li>Receive booking confirmation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Static wavy background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full">
          <path fill="#0ea5e9" fillOpacity="0.3" d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,144C840,117,960,75,1080,64C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <path fill="#0ea5e9" fillOpacity="0.6" d="M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,170.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ContactSection;
