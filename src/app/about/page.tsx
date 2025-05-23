'use client';

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/ui/button-whatsapp";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-medical-light to-white">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-medical-dark mb-6">
                  About <span className="text-medical-primary">Swasthya Health</span>
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Swasthya Health was founded in 2010 with a vision to make quality surgical care accessible and affordable to everyone...
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Over the years, we've grown to become one of the most trusted healthcare providers in Delhi NCR...
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-medical-primary hover:bg-medical-dark text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                  <WhatsAppButton text="Chat with Us" />
                </div>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                  alt="Swasthya Health Building"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ...Other Sections (Core Values, Our Story, Contact Info) remain the same... */}
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default About;
