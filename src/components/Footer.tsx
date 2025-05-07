
import React from "react";
import { Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2980b9] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="h-6 w-6" />
              <span className="font-bold text-2xl">TARA</span>
            </div>
            <p className="text-white/80 mb-4">
              Your perfect beachside retreat in the heart of Weligama, Sri Lanka.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Beach Road, Weligama</p>
              <p>Southern Province, Sri Lanka</p>
              <p className="pt-2">Phone: +94 77 123 4567</p>
              <p>Email: info@taraguesthouse.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Tara Guest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
