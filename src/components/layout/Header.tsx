"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "@/components/ui/button-whatsapp";
import Logo from "@/components/ui/logo";
import CallButton from "@/components/ui/CallButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const specialties = [
    { name: "Cancer Surgeries", path: "/specialties/cancer-surgeries" },
    { name: "Eye Surgeries", path: "/specialties/eye-surgeries" },
    { name: "Ortho", path: "/specialties/ortho" },
    { name: "Liver", path: "/specialties/liver" },
    { name: "Stone Removal", path: "/specialties/stone-removal" },
    { name: "ENT", path: "/specialties/ent" },
    { name: "Gastro", path: "/specialties/gastro" },
    { name: "Dental", path: "/specialties/dental" },
    { name: "Abdominal Surgeries", path: "/specialties/abdominal-surgeries" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="content-container">
        <div className="flex justify-between items-center py-4">
          <Logo showTagline />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-medical-primary transition-colors font-medium">
              Home
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-medical-primary transition-colors font-medium flex items-center">
                Specialties
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2 max-h-96 overflow-y-auto">
                  {specialties.map((specialty) => (
                    <Link
                      key={specialty.name}
                      href={specialty.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-medical-light hover:text-medical-primary"
                    >
                      {specialty.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/doctors" className="text-gray-700 hover:text-medical-primary transition-colors font-medium">
              Our Doctors
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-medical-primary transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-medical-primary transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-medical-primary transition-colors font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-medical-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <CallButton label="Call Now" className="w-36 h-10" />
            <WhatsAppButton size="sm" text="WhatsApp" className="w-36 h-10 text-white" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="content-container">
            <nav className="py-3">
              <Link href="/" className="block py-2 text-gray-700 hover:text-medical-primary" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              <details className="group">
                <summary className="block py-2 text-gray-700 cursor-pointer flex items-center justify-between">
                  Specialties
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pl-4 border-l-2 border-gray-100">
                  {specialties.map((specialty) => (
                    <Link
                      key={specialty.name}
                      href={specialty.path}
                      className="block py-2 text-gray-700 hover:text-medical-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {specialty.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/doctors" className="block py-2 text-gray-700 hover:text-medical-primary" onClick={() => setIsMenuOpen(false)}>
                Our Doctors
              </Link>
              <Link href="/testimonials" className="block py-2 text-gray-700 hover:text-medical-primary" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="/blog" className="block py-2 text-gray-700 hover:text-medical-primary" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-medical-primary" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-medical-primary" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 pt-3">
                <CallButton label="Call Now" className="w-full h-10" />
                <WhatsAppButton size="sm" text="WhatsApp" className="w-full h-10 text-white" fullWidth />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
