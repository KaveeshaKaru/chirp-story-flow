import React from "react";
import { Sun, Umbrella, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="relative bg-gradient-to-b from-[#0ea5e9] to-[#2980b9] text-white">
      {/* Static wavy background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full" fill="url(#footer-gradient)">
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M0,32 C320,80 420,0 500,32 C580,64 620,32 720,32 C820,32 900,64 1000,32 C1100,0 1180,64 1200,32 L1200,120 L0,120 Z" />
          <path d="M0,60 C300,0 400,80 550,60 C700,40 750,80 900,80 C1050,80 1150,20 1200,60 L1200,120 L0,120 Z" className="opacity-30" />
          <path d="M0,90 C250,50 350,100 450,90 C550,80 650,20 750,80 C850,140 950,60 1200,90 L1200,120 L0,120 Z" className="opacity-20" />
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
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transform transition-transform hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white animate-pulse"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>
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
              {["Home", "Features", "Testimonials", "Contact"].map(link => <li key={link} className="group">
                  <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50 group-hover:bg-white group-hover:w-3 transition-all"></span>
                    {link}
                  </a>
                </li>)}
            </ul>

            <div className="mt-6 p-3 bg-white/10 rounded-lg">
              <p className="text-sm font-medium text-white/90">Subscribe to our newsletter</p>
              <div className="mt-2 flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Enter your email" className="px-3 py-2 bg-white/20 border border-white/10 rounded-md text-sm flex-1 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
                <Button size="sm" className="bg-white text-blue-600 hover:bg-white/90 sm:w-auto w-full mt-1 sm:mt-0">Subscribe</Button>
              </div>
            </div>
          </div>
          
          {/* Contact Us */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transform transition-transform hover:scale-105 md:col-span-2 lg:col-span-1">
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
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p className="flex flex-wrap items-center justify-center gap-1 px-4">
            <span>© {new Date().getFullYear()} Tara Guest House.</span> 
            <span className="px-2 hidden sm:inline">|</span> 
            <span>All rights reserved.</span>
          </p>
          <p className="mt-2 text-sm">Crafted by ZackMalli ❤️ in Weligama</p>
        </div>
      </div>
    </footer>;
};
export default Footer;