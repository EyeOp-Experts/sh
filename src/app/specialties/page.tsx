"use client"
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CallButton from "@/components/ui/CallButton";
import WhatsAppButton from "@/components/ui/button-whatsapp";

// export const metadata: Metadata = {
//   title: "Medical Specialties | Swasthya Health",
//   description: "Explore our wide range of surgical specialties including orthopedics, eye surgery, cancer surgery, and gynecology. Find expert surgeons and affordable treatment options.",
//   keywords: "medical specialties, orthopedic surgery, eye surgery, cancer surgery, gynecology, hysteroscopy, affordable surgery, expert surgeons",
//   openGraph: {
//     title: "Medical Specialties | Swasthya Health",
//     description: "Explore surgical specialties like orthopedics, eye surgery, cancer surgery, and gynecology with expert surgeons and affordable options.",
//     type: "website",
//     url: "https://swasthyahealth.com/specialties",
//     images: [{ url: "https://swasthyahealth.com/assets/og-specialties.jpg" }],
//   },
// };

const specialties = [
  {
    id: "ortho",
    name: "Orthopedic Surgery",
    description: "Surgical procedures for bone and joint problems including knee replacements, hip replacements, and sports injury treatments.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    path: "/specialties/ortho",
    procedures: 4,
    iconSrc: "/assets/icons/ortho.svg"
  },
  {
    id: "eye",
    name: "Eye Surgery",
    description: "Advanced surgical solutions for various eye conditions including cataract removal, LASIK, and retinal detachment repair.",
    image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    path: "/specialties/eye-surgeries",
    procedures: 4,
    iconSrc: "/assets/icons/eye.svg"
  },
  {
    id: "cancer",
    name: "Cancer Surgery",
    description: "Comprehensive surgical solutions for various types of cancer with a focus on precision and minimal invasiveness.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    path: "/specialties/cancer-surgeries",
    procedures: 4,
    iconSrc: "/assets/icons/cancer.svg"
  },
  {
    id: "gynaecology",
    name: "Gynecology",
    description: "Specialized surgical procedures for women's reproductive health including hysteroscopy and other minimally invasive treatments.",
    image: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2340",
    path: "/specialties/gynaecology/hysteroscopy",
    procedures: 1,
    iconSrc: "/assets/icons/gynaecology.svg"
  }
];

export default function Specialties() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="content-container py-8 md:py-12">
          {/* Hero Section */}
          <div className="bg-medical-primary bg-opacity-5 rounded-xl p-6 md:p-10 mb-8 md:mb-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                Specialized Surgical Care
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Expert surgical procedures across multiple specialties, focused on minimal recovery time and maximum outcomes.
              </p>
              <div className="flex items-center bg-white rounded-lg shadow-sm p-2 max-w-lg">
                <Search className="text-gray-400 ml-2" size={20} />
                <Input 
                  type="text" 
                  placeholder="Search procedures or specialties..." 
                  className="border-none focus:ring-0 flex-grow" 
                />
                <Button size="sm">Search</Button>
              </div>
            </div>
          </div>

          {/* Specialties Grid */}
          <div>
            <h2 className="text-2xl font-bold text-medical-dark mb-6">Our Medical Specialties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((specialty) => (
                <Card key={specialty.id} className="overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative flex-1 min-h-0 h-56 overflow-hidden flex">
                    <img 
                      src={specialty.image} 
                      alt={specialty.name} 
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 flex-1"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                      <img src={specialty.iconSrc} alt="" className="w-6 h-6" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-medical-dark">
                      {specialty.name}
                    </CardTitle>
                    <CardDescription>
                      {specialty.procedures} procedures available
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{specialty.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={specialty.path} className="w-full">
                      <Button variant="outline" className="w-full text-medical-primary border-medical-primary hover:bg-medical-light group">
                        View Procedures
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-medical-dark mb-6">Why Choose Our Specialty Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-medical-light rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medical-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-medical-dark mb-2">Expert Specialists</h3>
                <p className="text-gray-600">Access to highly qualified specialists with years of experience in their respective fields.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-medical-light rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medical-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-medical-dark mb-2">Affordable Care</h3>
                <p className="text-gray-600">Transparent pricing and cost-effective solutions without compromising on quality of care.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-medical-light rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medical-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-medical-dark mb-2">Fast Recovery</h3>
                <p className="text-gray-600">Advanced techniques focused on minimizing recovery time and getting you back to normal quickly.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-white p-8 md:p-10 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-medical-dark mb-3">
                  Not sure which specialist you need?
                </h2>
                <p className="text-gray-600 max-w-lg">
                  Speak with our healthcare advisors who can guide you to the right specialist based on your symptoms and medical history.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
              <CallButton
                    label="Call Now"
                    className="bg-medical-primary hover:bg-medical-dark text-white h-10 px-4 text-sm rounded-md shadow-md justify-center"
                  />

                  <WhatsAppButton text="Chat with Us" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
