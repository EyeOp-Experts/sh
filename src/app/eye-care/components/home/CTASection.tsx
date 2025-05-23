"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-swasthya-blue to-swasthya-blue-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Clear Vision?</h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule your free consultation today and take the first step towards freedom from glasses and contacts.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle size={22} className="text-white mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Free Eligibility Assessment</h3>
                  <p className="text-white/80">Our specialists will determine if you're a candidate for laser eye surgery.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={22} className="text-white mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Personalized Treatment Plan</h3>
                  <p className="text-white/80">We'll create a customized surgical approach based on your vision needs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={22} className="text-white mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Cost & Financing Options</h3>
                  <p className="text-white/80">Learn about payment plans and insurance coverage during your consultation.</p>
                </div>
              </div>
            </div>
            
            <Link href="/book-consultation">
              <Button className="bg-white text-swasthya-blue hover:bg-gray-100 font-medium rounded-md px-6 py-3 shadow-md transition-all duration-200">
                Book Your Free Consultation <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Calendar size={32} className="text-white mr-4" />
              <h3 className="text-2xl font-semibold">Quick Inquiry Form</h3>
            </div>
            
            <form
            action="https://usebasin.com/f/34958f7f66a6"
             method="POST"
             className="space-y-5">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              {/* <div>
                <select className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-800">Interested In...</option>
                  <option value="lasik" className="text-gray-800">LASIK Surgery</option>
                  <option value="smile" className="text-gray-800">SMILE Surgery</option>
                  <option value="cataract" className="text-gray-800">Cataract Surgery</option>
                  <option value="consultation" className="text-gray-800">General Consultation</option>
                </select>
              </div> */}
              
              <button 
                type="submit" 
                className="w-full bg-white text-swasthya-blue font-medium rounded-md px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
              >
                Request Callback
              </button>
              
              <p className="text-sm text-white/70 text-center">
                We'll contact you within 24 hours to schedule your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
