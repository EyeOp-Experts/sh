"use client";

import Link from "next/link";
import { Phone, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/ui/button-whatsapp";
import Logo from "@/components/ui/logo";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-medical-light via-white to-medical-light py-20 md:py-24">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="text-center md:text-left">
            <div className="mb-3 inline-block rounded-full bg-medical-light px-4 py-1.5 text-sm font-medium text-medical-primary">
              Your Path To Better Health Starts Here
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight">
              Expert Surgical Care at <span className="text-medical-primary">Affordable Rates</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              At Swasthya Health, we connect you with top surgeons across multiple specialties, 
              ensuring quality healthcare that fits your budget and prioritizes your wellness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="btn-primary text-base py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>

              <WhatsAppButton 
                text="Get Instant Help"
                className="py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              />
            </div>

            <div className="mt-8 bg-white bg-opacity-90 p-5 rounded-xl shadow-md backdrop-blur-sm">
              <h3 className="text-medical-primary font-semibold mb-3">Why Choose Swasthya Health?</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Affordable Treatment", "Expert Surgeons", "Top Hospitals", "Quick Recovery"].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-medical-success mr-2" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-all">
              <img 
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80" 
                alt="Doctor consulting with patient"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-medical-primary rounded-full p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Need help? Call us</p>
                    <p className="text-medical-dark font-bold">+91-9876543210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medical-accent rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-medical-primary rounded-full opacity-20 z-0"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-medical-success rounded-full opacity-60 z-0"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-center text-2xl font-bold text-medical-dark mb-8">Trusted By Thousands of Patients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: "Successful Surgeries" },
              { value: "50+", label: "Expert Surgeons" },
              { value: "15+", label: "Specialty Areas" },
              { value: "98%", label: "Patient Satisfaction" }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl font-bold text-medical-primary mb-2">{item.value}</div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
