"use client"; // Required if using useState or useEffect in app router

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll get back to you shortly!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-r from-medical-light to-white">
          <div className="content-container">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-medical-dark mb-4">Contact Us</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We're here to answer your questions and help you on your journey to better vision.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-medical-dark mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="bg-medical-primary hover:bg-medical-dark text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Connect To Expert
                    </Button>
                  </form>
                </div>
              </div>
              
              <div>
                <div className="bg-medical-light bg-opacity-40 rounded-xl shadow-md p-8 mb-8">
                  <h3 className="text-xl font-bold text-medical-dark mb-4">Our Locations</h3>
                  <div className="space-y-6">
                    <div>
                      {/* <h4 className="font-medium text-medical-primary mb-2">Delhi Main Center</h4> */}
                      <div className="flex items-start mb-2">
                        <MapPin className="w-5 h-5 text-medical-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">Delhi NCR</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Phone className="w-5 h-5 text-medical-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-700">+91 9818996967</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-medical-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-700">We'll respond within 24 hours</span>
                      </div>
                    </div>
                    
                    {/* <div>
                      <h4 className="font-medium text-medical-primary mb-2">Gurgaon Center</h4>
                      <div className="flex items-start mb-2">
                        <MapPin className="w-5 h-5 text-medical-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">456 Medical Park, Sector 47, Gurgaon - 122001</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Phone className="w-5 h-5 text-medical-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-700">+91-124-9876543</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-medical-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-700">Mon-Sat: 10:00 AM - 7:00 PM</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-bold text-medical-dark mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-medical-primary mr-3" />
                      <span className="text-gray-700">eyeopexperts@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-medical-primary mr-3" />
                      <span className="text-gray-700">+91 9818996967</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 text-medical-primary mr-3" />
                      <span className="text-gray-700">WhatsApp: +91 9818996967</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium shadow-md hover:shadow-lg"
                      onClick={() => {
                        const whatsappUrl = `https://wa.me/9818996967?text=I'd like to know more about Swasthya Health services`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <section className="py-12 bg-gray-50">
          <div className="content-container">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.6343411633!2d76.82493743938246!3d28.572216124076153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1684399963101!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Swasthya Health Location"
              ></iframe>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
