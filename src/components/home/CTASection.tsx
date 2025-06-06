"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import WhatsAppButton from "@/components/ui/button-whatsapp";
import CallButton from "@/components/ui/CallButton";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-medical-dark to-medical-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-secondary rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-medical-secondary rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white rounded-full opacity-5"></div>

      <div className="content-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for Better Health with Swasthya?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Our expert surgeons at Swasthya Health are ready to provide personalized consultations and
            guide you through your treatment options for a healthier tomorrow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
            <CallButton
              label="Call Now"
              className="w-full py-7 h-10 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all justify-center"
            />

            <WhatsAppButton
              text="Chat with Specialist"
              message="I'd like to book a surgical consultation with Swasthya Health"
              className="py-7 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
              fullWidth
            />
          </div>

          <p className="mt-8 text-sm opacity-80">
            Or visit our{" "}
            <Link href="/contact" className="underline hover:text-white transition-colors">
              contact page
            </Link>{" "}
            to fill out our consultation form
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
