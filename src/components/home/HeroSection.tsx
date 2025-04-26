"use client";

import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import swasthya from "@/utils/images/swasthya.png"
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-swasthya-blue-light to-swasthya-green-light py-16 md:py-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Clearer Vision, <span className="text-swasthya-blue">Better Life</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Advanced eye surgeries with cutting-edge technology. Regain your perfect vision with Swasthya Health&apos;s expert surgeons.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-swasthya-blue mr-2" />
                <span className="text-gray-700">Safe, proven LASIK & Cataract procedures</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-swasthya-blue mr-2" />
                <span className="text-gray-700">20+ years of surgical excellence</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-swasthya-blue mr-2" />
                <span className="text-gray-700">98% patient satisfaction rate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" passHref>
                <Button className="btn-primary w-full sm:w-auto">
                  Book Free Consultation <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button className="btn-secondary w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-swasthya-blue to-green-400 rounded-2xl blur opacity-30"></div>
              <Image
  src={swasthya}
  alt="Eye examination"
  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover h-80 md:h-96"
  // You might need to add width and height
  width={400}
  height={400}
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
