"use client";

import React from "react";
import Link from "next/link";
import { Eye, EyeOff, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="mb-4 text-swasthya-blue">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link href={link} className="text-swasthya-blue font-medium inline-flex items-center hover:underline mt-auto">
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "LASIK Surgery",
      description: "Quick, painless laser vision correction with minimal recovery time. Perfect for those with nearsightedness, farsightedness, or astigmatism.",
      icon: <Eye size={40} />,
      link: "/services#lasik"
    },
    {
      title: "SMILE Surgery",
      description: "Small incision lenticule extraction - a minimally invasive alternative to LASIK with even faster recovery and reduced dry eye symptoms.",
      icon: <Eye size={40} />,
      link: "/services#smile"
    },
    {
      title: "Cataract Surgery",
      description: "Advanced cataract removal with premium intraocular lens options to restore clear vision and reduce dependency on glasses.",
      icon: <EyeOff size={40} />,
      link: "/services#cataract"
    },
    {
      title: "Comprehensive Eye Care",
      description: "Complete eye examinations, preventive care, and treatment options for various eye conditions by our expert ophthalmologists.",
      icon: <Shield size={40} />,
      link: "/services#comprehensive"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Eye Surgery Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art surgical procedures performed by board-certified specialists to improve your vision and quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="btn-primary">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
