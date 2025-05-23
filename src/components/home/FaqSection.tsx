"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => {
  return (
    <div className="faq-item border-b py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-medical-dark">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-medical-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-medical-primary flex-shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book a surgical consultation?",
      answer:
        "You can book a consultation through our website by filling out the contact form, calling us directly, or sending us a WhatsApp message. Our team will get back to you within 24 hours to schedule your appointment with the appropriate specialist.",
    },
    {
      question: "What documents should I bring to my consultation?",
      answer:
        "Please bring any previous medical records related to your condition, including test reports, scan images (X-ray, MRI, CT scan, etc.), previous prescriptions, and your ID proof. This helps our doctors provide a more accurate assessment.",
    },
    {
      question: "How are surgery costs determined?",
      answer:
        "Surgery costs vary based on the procedure complexity, technology used, hospital stay duration, surgeon's expertise, and any special requirements. During your consultation, we'll provide a comprehensive cost estimate with a breakdown of expenses.",
    },
    {
      question: "Do you accept insurance for surgeries?",
      answer:
        "Yes, we work with most major health insurance providers. We recommend checking with your insurance company about coverage before your consultation. Our team can assist with the paperwork and clarify what portions may be covered under your policy.",
    },
    {
      question: "What is the typical recovery time after surgery?",
      answer:
        "Recovery periods vary significantly depending on the type of surgery, your overall health, and how well you follow post-operative care instructions. During your consultation, your surgeon will provide a personalized timeline for your specific procedure.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our surgical consultations, procedures, and care process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="mb-4 text-gray-600">Have more questions? We're here to help.</p>
          <Link href="/faq" className="btn-secondary">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
