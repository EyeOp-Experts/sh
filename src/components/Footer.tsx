"use client"
import React from "react";
import  Link  from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-swasthya-blue">Swasthya Health</h3>
            <p className="text-gray-600 mb-4">
              Empowering vision through advanced eye care technology and expert surgical solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-swasthya-blue" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-swasthya-blue" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-swasthya-blue" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-swasthya-blue" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#lasik" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  LASIK Surgery
                </Link>
              </li>
              <li>
                <Link href="/services#smile" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  SMILE Surgery
                </Link>
              </li>
              <li>
                <Link href="/services#cataract" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  Cataract Surgery
                </Link>
              </li>
              <li>
                <Link href="/services#consultation" className="text-gray-600 hover:text-swasthya-blue transition-colors">
                  Eye Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-swasthya-blue mt-1" />
                <span className="text-gray-600">+91 9818996967</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-swasthya-blue mt-1" />
                <span className="text-gray-600">eyeopexperts@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-swasthya-blue mt-1" />
                <span className="text-gray-600">
                  Delhi NCR
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-swasthya-blue mt-1" />
                <span className="text-gray-600">
                  Mon-Sun: 9AM-6PM<br />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Swasthya Health. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-swasthya-blue text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-swasthya-blue text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
