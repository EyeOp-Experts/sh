"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700 mb-8">
                We're here to answer your questions and help you on your journey to better vision.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-swasthya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href="tel:+919818996967" className="text-swasthya-blue hover:underline block">+91 9818996967</a>
                <p className="text-gray-500 text-sm mt-1">Call us for appointments</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-swasthya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:eyeopexperts@gmail.com" className="text-swasthya-blue hover:underline block">eyeopexperts@gmail.com</a>
                <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-swasthya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-700">Delhi </p>
                <p className="text-gray-700">NCR</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-swasthya-blue hover:underline text-sm mt-1 block">Get Directions</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-swasthya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-700">Mon-Sun: 9AM-8PM</p>
                {/* <p className="text-gray-700">Sat: 10AM-4PM</p>
                <p className="text-gray-700">Sun: Closed</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-700 mb-8">
                  Have a question or ready to schedule your appointment? Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form 
                 action="https://usebasin.com/f/34958f7f66a6" // ← Replace with your actual Basin form endpoint
                 method="POST"
                onSubmit={handleSubmit} className="space-y-6">
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                      />
                    </div>
                  {/* </div> */}

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="name"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent"
                    ></textarea>
                  </div> */}

                  <div>
                    <Button type="submit" className="btn-primary inline-flex items-center">
                      Send Message <Send size={16} className="ml-2" />
                    </Button>
                  </div>
                </form>
              </div>

              {/* <div>
                <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                <p className="text-gray-700 mb-8">
                  Conveniently located in the heart of the city with ample parking and public transportation access.
                </p>

                <div className="h-[400px] bg-gray-200 rounded-lg mb-6">
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-lg">
                    <p className="text-gray-600">Google Maps would be embedded here</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-4">Directions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-swasthya-blue">By Car</h4>
                      <p className="text-gray-700">
                        Convenient parking available in the building garage. Enter from Main Street.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-swasthya-blue">Public Transit</h4>
                      <p className="text-gray-700">
                        Take the Blue Line to Central Station, then walk 2 blocks east.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Contact;
