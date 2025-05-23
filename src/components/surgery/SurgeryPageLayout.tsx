"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Breadcrumb, { BreadcrumbItem } from "../layout/Breadcrumb";
import WhatsAppButton from "../ui/button-whatsapp";
import { Phone } from "lucide-react";
import Logo from "../ui/logo";

interface SurgeryOverview {
  title: string;
  description: string;
  image: string;
  recoveryTime: string;
  costRange: string;
  eligibility: string;
  recommended: boolean;
}

interface RelatedSpecialty {
  name: string;
  path: string;
}

interface SurgeryPageLayoutProps {
  breadcrumbItems: BreadcrumbItem[];
  surgeryData: SurgeryOverview;
  children: ReactNode;
  relatedSpecialties?: RelatedSpecialty[];
}

const defaultRelatedSpecialties: RelatedSpecialty[] = [
  { name: "Orthopedic Surgery", path: "/specialties/ortho" },
  { name: "Eye Surgery", path: "/specialties/eye-surgeries" },
  { name: "Cancer Surgery", path: "/specialties/cancer-surgeries" },
  { name: "Gynecology", path: "/specialties/gynaecology/hysteroscopy" }
];

const SurgeryPageLayout = ({ 
  breadcrumbItems, 
  surgeryData,
  children,
  relatedSpecialties = defaultRelatedSpecialties
}: SurgeryPageLayoutProps) => {
  // Filter out the current specialty from the related list
  const filteredRelatedSpecialties = relatedSpecialties.filter(
    specialty => !breadcrumbItems.some(item => item.path === specialty.path)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="content-container py-4">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Surgery Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={surgeryData.image} 
                alt={surgeryData.title} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h1 className="text-2xl md:text-3xl font-bold text-medical-dark mb-4">
                {surgeryData.title}
              </h1>
              
              <p className="text-gray-600 mb-6">
                {surgeryData.description}
              </p>
              
              {surgeryData.recommended && (
                <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Recommended Procedure
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md">
                  <h3 className="text-sm font-medium text-gray-500">Recovery Time</h3>
                  <p className="text-medical-dark font-medium">{surgeryData.recoveryTime}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <h3 className="text-sm font-medium text-gray-500">Cost Range</h3>
                  <p className="text-medical-dark font-medium">{surgeryData.costRange}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <h3 className="text-sm font-medium text-gray-500">Eligibility</h3>
                  <p className="text-medical-dark font-medium">{surgeryData.eligibility}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Book a Consultation
                </Button>
                <WhatsAppButton 
                  text="Chat with Specialist" 
                  message={`I'd like to know more about ${surgeryData.title}`}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content (Main) */}
          <div className="lg:col-span-2">
            {children}
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* CTA Box */}
            <div className="bg-medical-light bg-opacity-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <Logo size="sm" />
              </div>
              <h3 className="text-xl font-semibold text-medical-dark mb-4 text-center">Need Expert Advice?</h3>
              <p className="text-gray-600 mb-4">
                Schedule a consultation with our experienced surgeons to discuss your options and get personalized advice.
              </p>
              <div className="space-y-3">
                <Button className="btn-primary w-full">Book Appointment</Button>
                <WhatsAppButton 
                  text="WhatsApp Consultation" 
                  message={`I'd like to know more about ${surgeryData.title}`}
                  fullWidth
                />
              </div>
            </div>
            
            {/* Related Surgeries */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-medical-dark mb-4">Related Specialties</h3>
              <ul className="space-y-3">
                {filteredRelatedSpecialties.slice(0, 4).map((specialty, index) => (
                  <li key={index}>
                    <Link href={specialty.path} legacyBehavior>
                      <a className="text-medical-primary hover:underline block py-1">
                        {specialty.name}
                      </a>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/specialties" legacyBehavior>
                    <a className="text-gray-500 hover:text-medical-primary text-sm mt-2 block">
                      View All Specialties →
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Success Rate */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-medical-dark mb-3">Success Rate</h3>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div 
                    className="bg-medical-primary text-xs font-medium text-white text-center p-1 leading-none rounded-full h-6 flex items-center justify-center" 
                    style={{ width: "95%" }}
                  >
                    95% Success Rate
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Based on our hospital's data from the last 500 procedures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgeryPageLayout;
