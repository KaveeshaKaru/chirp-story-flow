
import React from "react";
import { Waves, Sun, Umbrella, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0ea5e9] to-[#2980b9] text-white overflow-hidden pt-16">
      {/* Wave animation at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative block w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,170.7C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>

      {/* Beach decorative elements */}
      <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[8%] animate-float-slow opacity-50">
          <Umbrella size={40} className="text-white" />
        </div>
        <div className="absolute top-[40%] right-[10%] animate-float-medium opacity-50">
          <Sun size={35} className="text-yellow-300" />
        </div>
        <div className="absolute bottom-[20%] left-[15%] animate-float-fast opacity-50">
          <Cloud size={30} className="text-white" />
        </div>
        <div className="absolute bottom-[30%] right-[15%] animate-float-medium opacity-50">
          <Waves size={45} className="text-blue-300" />
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transform transition-transform hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/20 rounded-full">
                <Waves className="h-6 w-6 text-white animate-pulse" />
              </div>
              <span className="font-bold text-2xl">TARA</span>
            </div>
            <p className="text-white/80 mb-4">
              Your perfect beachside retreat in the heart of Weligama, Sri Lanka, where the ocean meets luxury.
            </p>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sun size={20} className="text-yellow-300" /> 
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Features", "Testimonials", "Contact"].map((link) => (
                <li key={link} className="group">
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group-hover:translate-x-1 transform transition-transform"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50 group-hover:bg-white group-hover:w-3 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 bg-white/10 rounded-lg">
              <p className="text-sm font-medium text-white/90">Subscribe to our newsletter</p>
              <div className="mt-2 flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-3 py-2 bg-white/20 border border-white/10 rounded-md text-sm flex-1 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button size="sm" className="bg-white text-blue-600 hover:bg-white/90">Subscribe</Button>
              </div>
            </div>
          </div>
          
          {/* Contact Us */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Umbrella size={20} className="text-white" /> Contact Us
            </h3>
            <address className="not-italic text-white/80 space-y-3">
              <p className="flex items-center gap-2">
                <span className="p-1 bg-white/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                Beach Road, Weligama, Sri Lanka
              </p>
              <p className="flex items-center gap-2">
                <span className="p-1 bg-white/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                +94 77 123 4567
              </p>
              <p className="flex items-center gap-2">
                <span className="p-1 bg-white/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </span>
                info@taraguesthouse.com
              </p>
            </address>

            <div className="mt-6">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-center text-white/90">
                  Open for Bookings
                </p>
                <p className="text-center font-bold text-white animate-pulse">
                  24/7 - 365 Days
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave animation */}
        <div className="relative mt-12">
          <div className="flex overflow-hidden h-8">
            <div className="flex min-w-full animate-wave-slow">
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
            </div>
            <div className="flex min-w-full animate-wave">
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
              <Waves className="text-white/10 h-8 w-20" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p className="flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} Tara Guest House.</span> 
            <span className="px-2">|</span> 
            <span>All rights reserved.</span>
          </p>
          <p className="mt-2 text-sm">Crafted with ❤️ in Weligama</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
