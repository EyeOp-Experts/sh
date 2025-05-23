import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: 'Orthopedic Surgeries | Swasthya Health',
  description: 'Comprehensive orthopedic surgical solutions including knee replacements, hip replacements, arthroscopy, and sports injury treatments.',
  keywords: ['orthopedic surgery', 'knee replacement', 'hip replacement', 'arthroscopy', 'sports injury', 'joint surgery'],
};

export default function OrthoPage() {  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "Orthopedic Surgeries" }
  ];
  
  const surgeryData = {
    title: "Orthopedic Surgeries",
    description: "Our orthopedic department offers comprehensive surgical solutions for bone and joint problems. From knee replacements to arthroscopic procedures, we ensure optimal mobility and pain relief with minimal recovery time.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    recoveryTime: "1-12 weeks (varies by procedure)",
    costRange: "₹40,000 - ₹3,00,000",
    eligibility: "Case-by-case assessment",
    recommended: false
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SurgeryPageLayout 
        breadcrumbItems={breadcrumbItems} 
        surgeryData={surgeryData}
      >
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">Available Procedures</h2>
          <div className="space-y-6">
            {[
              {
                name: "Knee Replacement",
                description: "Total or partial knee replacement surgery to relieve pain and restore function in damaged knee joints.",
                duration: "1-2 hours",
                recovery: "4-6 weeks",
                cost: "₹80,000 - ₹2,50,000"
              },
              {
                name: "Hip Replacement",
                description: "Procedure to replace worn-out hip joints with prosthetic implants to improve mobility and reduce pain.",
                duration: "1-2 hours",
                recovery: "4-8 weeks",
                cost: "₹90,000 - ₹3,00,000"
              },
              {
                name: "Arthroscopy",
                description: "Minimally invasive procedure to diagnose and treat joint problems using a tiny camera and specialized instruments.",
                duration: "30-60 minutes",
                recovery: "1-3 weeks",
                cost: "₹40,000 - ₹80,000"
              },
              {
                name: "Sports Injury Treatment",
                description: "Specialized procedures for ACL reconstruction, meniscus repair, and other sports-related injuries.",
                duration: "1-3 hours",
                recovery: "6-12 weeks",
                cost: "₹50,000 - ₹1,50,000"
              }
            ].map((procedure, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-medical-dark">{procedure.name}</h3>
                <p className="text-gray-600 mb-3">{procedure.description}</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-medical-dark">Duration:</span> {procedure.duration}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">Recovery:</span> {procedure.recovery}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">Cost:</span> {procedure.cost}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How long will I need to use crutches after knee surgery?",
                answer: "Most patients need to use crutches or a walker for 1-2 weeks after knee surgery. Your surgeon will provide specific instructions based on your procedure and recovery progress."
              },
              {
                question: "Will I need physical therapy after joint replacement?",
                answer: "Yes, physical therapy is an essential part of recovery after joint replacement surgery. It typically begins in the hospital and continues for several weeks or months after discharge."
              },
              {
                question: "How long do joint implants typically last?",
                answer: "Modern joint implants can last 15-20 years or more. The longevity depends on factors like your activity level, weight, and how well you follow post-surgery guidelines."
              },
              {
                question: "Can I play sports after joint replacement?",
                answer: "Most patients can return to low-impact activities like swimming, cycling, and golf. High-impact sports like running and basketball are generally not recommended as they may shorten the life of the implant."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <h3 className="text-medical-dark font-semibold mb-1">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SurgeryPageLayout>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
