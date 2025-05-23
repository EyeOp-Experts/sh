'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SpecialtyCardProps {
  title: string;
  description: string;
  iconSrc: string;
  path: string;
  procedures: string[];
}

const SpecialtyCard = ({ title, description, iconSrc, path, procedures }: SpecialtyCardProps) => {
  return (
    <div className="specialty-card group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-medical-primary">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-medical-light flex items-center justify-center mr-3">
          <img src={iconSrc} alt={title} className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-medical-dark">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 mb-6 space-y-1">
        {procedures.map((procedure, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-medical-primary rounded-full mr-2"></span>
            {procedure}
          </li>
        ))}
      </ul>
      <Link 
        href={path}
        className="inline-flex items-center text-medical-primary font-medium hover:text-medical-dark transition-colors group"
      >
        Learn More 
        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const specialties = [
    {
      title: "Gynaecology",
      description: "Expert treatments for women's health concerns with minimally invasive options.",
      iconSrc: "/assets/icons/gynaecology.svg",
      path: "/specialties/gynaecology",
      procedures: ["Hysteroscopy", "Laparoscopy", "Fibroid Removal", "Hysterectomy"]
    },
    {
      title: "Cancer Surgeries",
      description: "Advanced surgical treatments for various cancer types with comprehensive care.",
      iconSrc: "/assets/icons/cancer.svg",
      path: "/specialties/cancer-surgeries",
      procedures: ["Oral Cancer", "Breast Cancer", "Throat Cancer", "Abdominal Cancer"]
    },
    {
      title: "Eye Surgeries",
      description: "State-of-the-art procedures to restore and improve vision with minimal recovery time.",
      iconSrc: "/assets/icons/eye.svg",
      path: "/specialties/eye-surgeries",
      procedures: ["Cataract", "Glaucoma", "LASIK", "SMILE"]
    },
    {
      title: "Ortho",
      description: "Comprehensive orthopedic treatments for bone and joint issues for improved mobility.",
      iconSrc: "/assets/icons/ortho.svg",
      path: "/specialties/ortho",
      procedures: ["Knee Replacement", "Hip Replacement", "Sports Injuries", "Arthroscopy"]
    },
    {
      title: "Stone Removal",
      description: "Minimally invasive procedures to remove painful stones with quick recovery.",
      iconSrc: "/assets/icons/kidney.svg",
      path: "/specialties/stone-removal",
      procedures: ["Kidney Stone", "Gall Bladder Stone", "Urinary Stones", "PCNL"]
    },
    {
      title: "Dental",
      description: "Complete dental care solutions from basic treatments to advanced procedures.",
      iconSrc: "/assets/icons/dental.svg",
      path: "/specialties/dental",
      procedures: ["Implants", "Prosthesis", "Cavity Filling", "Extraction"]
    },
    {
      title: "Liver Surgery",
      description: "Advanced surgical treatments for liver diseases with expert hepatic specialists.",
      iconSrc: "/assets/icons/kidney.svg",
      path: "/specialties/liver-surgery",
      procedures: ["Liver Resection", "Transplantation", "Laparoscopic Surgery", "RFA"]
    },
    {
      title: "ENT Surgery",
      description: "Specialized care for ear, nose, and throat conditions with precision techniques.",
      iconSrc: "/assets/icons/gynaecology.svg",
      path: "/specialties/ent-surgery",
      procedures: ["Tonsillectomy", "Septoplasty", "Ear Surgery", "Sinus Surgery"]
    },
    {
      title: "Gastroenterology",
      description: "Comprehensive care for digestive system disorders with advanced diagnostics and treatments.",
      iconSrc: "/assets/icons/kidney.svg",
      path: "/specialties/gastroenterology",
      procedures: ["Endoscopy", "Colonoscopy", "ERCP", "Hernia Repair"]
    },
    {
      title: "Abdominal Surgery",
      description: "Expert surgical care for conditions affecting abdominal organs and tissues.",
      iconSrc: "/assets/icons/cancer.svg",
      path: "/specialties/abdominal-surgery",
      procedures: ["Appendectomy", "Hernia Repair", "Bowel Resection", "Splenectomy"]
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="content-container">
        <div className="text-center mb-12">
          <span className="bg-medical-light text-medical-primary px-4 py-1.5 rounded-full text-sm font-medium">Our Specialties</span>
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mt-4 mb-6">Comprehensive Surgical Care</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide expert consultation and affordable treatment options across multiple surgical specialties,
            all delivered by experienced specialists in Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.slice(0, 6).map((specialty) => (
            <SpecialtyCard
              key={specialty.title}
              title={specialty.title}
              description={specialty.description}
              iconSrc={specialty.iconSrc}
              path={specialty.path}
              procedures={specialty.procedures}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/specialties"
            className="inline-flex items-center justify-center px-8 py-3 bg-medical-primary text-white font-medium rounded-lg hover:bg-medical-dark transition-colors shadow-md"
          >
            View All Specialties
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
