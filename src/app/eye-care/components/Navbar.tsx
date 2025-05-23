"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-swasthya-blue text-xl font-bold inline-block">Swasthya Health</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link href="/" className="text-foreground hover:text-swasthya-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-swasthya-blue transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-foreground hover:text-swasthya-blue transition-colors">
              Services
            </Link>
            <Link href="/faq" className="text-foreground hover:text-swasthya-blue transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-foreground hover:text-swasthya-blue transition-colors">
              Contact
            </Link>
          </div>
          <Link href="/book-consultation">
            <Button className="btn-primary whitespace-nowrap">Book Consultation</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <a href="tel:+1234567890" className="p-2 bg-swasthya-blue text-white rounded-full">
            <Phone size={20} />
          </a>
          <button
            onClick={toggleMenu}
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-foreground hover:text-swasthya-blue py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-swasthya-blue py-2 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-swasthya-blue py-2 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/faq"
              className="text-foreground hover:text-swasthya-blue py-2 transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-swasthya-blue py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/book-consultation"
              className="btn-primary text-center py-2"
              onClick={toggleMenu}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
