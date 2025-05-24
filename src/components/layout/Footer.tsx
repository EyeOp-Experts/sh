import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const specialties = [
    { name: "Gynaecology", path: "/specialties/gynaecology" },
    { name: "Cancer Surgeries", path: "/specialties/cancer-surgeries" },
    { name: "Eye Surgeries", path: "/specialties/eye-surgeries" },
    { name: "Ortho", path: "/specialties/ortho" },
    { name: "Liver", path: "/specialties/liver" },
    { name: "Stone Removal", path: "/specialties/stone-removal" },
    { name: "ENT", path: "/specialties/ent" },
    { name: "Dental", path: "/specialties/dental" },
    { name: "Neurosurgeries", path: "/specialties/neurosurgeries" },
  ];

  const usefulLinks = [
    { name: "Our Doctors", path: "/doctors" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Health Blog", path: "/blog" },
    { name: "FAQs", path: "/faq" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-medical-dark text-white">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Swasthya Health</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for expert surgical consultations and affordable treatment options across Delhi NCR.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white">
                {/* Facebook SVG */}
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white">
                {/* Twitter SVG */}
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white">
                {/* Instagram SVG */}
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-white">
                {/* YouTube SVG */}
              </a>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-xl font-bold mb-4">Specialties</h3>
            <ul className="space-y-2">
              {specialties.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className="text-gray-300 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className="text-gray-300 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 mr-2 text-medical-accent" />
                <span className="text-gray-300">
                  123 Medical Center Road,<br />
                  Sector 10, Delhi NCR - 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-medical-accent" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-medical-accent" />
                <a href="mailto:info@mediconsultdelhi.com" className="text-gray-300 hover:text-white">
                  info@mediconsultdelhi.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-medical-accent" />
                <span className="text-gray-300">Mon - Sat: 9am - 8pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Swasthya Health. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed for improved patient experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
