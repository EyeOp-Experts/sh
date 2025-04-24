import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-swasthya-blue-light py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Swasthya Health</h1>
              <p className="text-xl text-gray-700 mb-8">
                Pioneering vision care with advanced technology and compassionate service.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                {/* <p className="text-gray-700 mb-4">
                  Founded in 2003 by Dr. Rajiv Sharma, Swasthya Health began with a vision to provide world-class eye care services to patients of all backgrounds. What started as a small clinic has grown into a leading eye care institution with multiple centers across the region.
                </p> */}
                <p className="text-gray-700 mb-4">
                  Our journey has been defined by our commitment to incorporating the latest technological advancements in ophthalmology while maintaining a patient-first approach that emphasizes education, comfort, and exceptional outcomes.
                </p>
                <p className="text-gray-700">
                  Today, Swasthya Health is recognized as a center of excellence in LASIK, SMILE, and cataract surgeries, having helped over 50,000 patients achieve better vision and improved quality of life.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Modern eye clinic" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-xl text-gray-700 mb-12">
                At Swasthya Health, we're driven by a commitment to excellence in eye care and a passion for improving our patients' lives through better vision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-swasthya-blue">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in every aspect of our service, from medical procedures to patient care.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-swasthya-blue">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously adopt and develop cutting-edge technologies and techniques in eye care.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-swasthya-blue">Compassion</h3>
                  <p className="text-gray-700">
                    We treat each patient with empathy, understanding, and personalized attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Specialists</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our team of board-certified ophthalmologists and eye care professionals are leaders in their field.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Dr. Rajiv Sharma" 
                  className="w-full h-64 object-cover object-center" 
                /> */}
                <div className="p-6">
                  {/* <h3 className="text-xl font-semibold mb-1">Dr. Rajiv Sharma</h3> */}
                  <p className="text-swasthya-blue mb-3">Chief Ophthalmologist</p>
                  <p className="text-gray-700 mb-4">
                    Specializing in LASIK and refractive surgeries with over 20 years of experience and 15,000+ successful procedures.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Dr. Anita Patel" 
                  className="w-full h-64 object-cover object-center" 
                /> */}
                <div className="p-6">
                  {/* <h3 className="text-xl font-semibold mb-1">Dr. Anita Patel</h3> */}
                  <p className="text-swasthya-blue mb-3">Cataract Specialist</p>
                  <p className="text-gray-700 mb-4">
                    Pioneer in micro-incision cataract surgery and premium IOL implantation with exceptional patient outcomes.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <img 
                  src="https://randomuser.me/api/portraits/men/85.jpg" 
                  alt="Dr. Michael Wong" 
                  className="w-full h-64 object-cover object-center" 
                /> */}
                <div className="p-6">
                  {/* <h3 className="text-xl font-semibold mb-1">Dr. Michael Wong</h3> */}
                  <p className="text-swasthya-blue mb-3">Cornea Specialist</p>
                  <p className="text-gray-700 mb-4">
                    Expert in SMILE surgery and corneal treatments, recognized for his contributions to minimally invasive techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/team">
                <Button className="btn-primary">
                  View Full Team <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-swasthya-blue text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey to Better Vision</h2>
              <p className="text-xl mb-8">
                Schedule a consultation with our specialists and discover the right vision correction solution for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/book-consultation">
                  <Button className="bg-white text-swasthya-blue hover:bg-gray-100 font-medium px-6 py-3 rounded-md w-full sm:w-auto">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-transparent border border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;
