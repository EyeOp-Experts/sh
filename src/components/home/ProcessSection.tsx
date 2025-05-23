"use client"; // Required if using useIsMobile hook in app router

import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile"; // Ensure this is a client-side hook

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  iconPath: string;
}

const ProcessStep = ({ number, title, description, iconPath }: ProcessStepProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative process-step">
      <div className={`step-number ${number % 2 === 0 ? 'bg-medical-secondary' : 'bg-medical-primary'}`}>
        {number}
      </div>
      <div>
        <div className="flex items-center mb-2">
          {/* <Image src={iconPath} alt={`${title} icon`} width={24} height={24} className="mr-2" /> */}
          <h3 className="font-semibold text-lg text-medical-dark">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Book a Consultation",
      description: "Schedule an initial appointment with our specialist through phone, WhatsApp, or our online form.",
      iconPath: "/assets/icons/calendar.svg",
    },
    {
      number: 2,
      title: "Medical Assessment",
      description: "Our surgeon will evaluate your condition, review medical history, and recommend the best treatment option.",
      iconPath: "/assets/icons/stethoscope.svg",
    },
    {
      number: 3,
      title: "Treatment Plan",
      description: "Receive a detailed treatment plan with cost estimates, procedure information, and recovery timeline.",
      iconPath: "/assets/icons/clipboard.svg",
    },
    {
      number: 4,
      title: "Surgery & Follow-up",
      description: "Undergo your procedure followed by comprehensive post-operative care and regular follow-up visits.",
      iconPath: "/assets/icons/medical-bag.svg",
    },
  ];

  return (
    <section className="py-16">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Simple 4-Step Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've simplified the surgical consultation and treatment process to make your
            healthcare journey smooth and stress-free.
          </p>
        </div>

        <div className="md:flex md:justify-center">
          <div className="md:w-1/2">
            {steps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                iconPath={step.iconPath}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
