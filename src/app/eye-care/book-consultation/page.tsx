"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Phone, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BookConsultation: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    toast({
      title: "Consultation Request Received",
      description: "We'll contact you within 24 hours to confirm your appointment.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-swasthya-blue-light py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Book Your Free Consultation
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Take the first step towards clearer vision with a no-obligation consultation with our specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Schedule Your Visit</h2>
                <p className="text-gray-700 mb-8">
                  Complete the form below, and our team will contact you to confirm your appointment. All consultations are free of charge with no obligation.
                </p>

                <form 
                 action="https://usebasin.com/f/34958f7f66a6" // ← Replace with your actual Basin form endpoint
                 method="POST"
                onSubmit={handleSubmit} className="space-y-6">
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="fullName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                      />
                    </div>
                    {/* <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                      />
                    </div> */}
                  {/* </div> */}

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Interested In*
                    </label>
                    <select
                      id="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="lasik">LASIK Surgery</option>
                      <option value="smile">SMILE Surgery</option>
                      <option value="cataract">Cataract Surgery</option>
                      <option value="consultation">General Eye Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                      placeholder="Tell us about your current vision issues or any questions you have..."
                    ></textarea>
                  </div> */}

                  <div>
                    <Button type="submit" className="btn-primary w-full md:w-auto px-8 py-4 text-lg">
                      Request Appointment
                    </Button>
                  </div>
                </form>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">What to Expect</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="mr-4 bg-swasthya-blue rounded-full p-3 text-white h-fit">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Initial Consultation</h4>
                      <p className="text-gray-700">
                        Your first visit includes a comprehensive eye examination and discussion of your vision correction options.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 bg-swasthya-blue rounded-full p-3 text-white h-fit">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Duration</h4>
                      <p className="text-gray-700">
                        Please allow 60-90 minutes for your initial consultation to ensure we can perform all necessary tests.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 bg-swasthya-blue rounded-full p-3 text-white h-fit">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Preparation</h4>
                      <p className="text-gray-700">
                        Bring your current glasses or contact lenses, a list of medications, and any previous eye surgery records if available.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h4 className="font-semibold text-lg mb-4">Immediate Assistance</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone size={20} className="text-swasthya-blue mr-3" />
                      <a href="tel:+919818996967" className="text-gray-700 hover:text-swasthya-blue">+91 9818996967</a>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="text-swasthya-blue mr-3" />
                      <a href="mailto:eyeopexperts@gmail.com" className="text-gray-700 hover:text-swasthya-blue">eyeopexperts@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="bg-swasthya-blue-light p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Insurance & Financing</h4>
                  <p className="text-gray-700 mb-4">
                    We accept most major insurance plans and offer flexible financing options to make your vision care affordable.
                  </p>
                  <a href="#" className="text-swasthya-blue font-medium hover:underline">Learn more about financing</a>
                </div>
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

export default BookConsultation;
