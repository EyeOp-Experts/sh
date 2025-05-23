// src/app/specialties/abdominal-surgery/page.tsx

'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

const AbdominalSurgery = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "Abdominal Surgery" }
  ];
  
  const surgeryData = {
    title: "Abdominal Surgery",
    description: "Our abdominal surgery department specializes in treating conditions affecting the organs within the abdominal cavity. We offer both traditional and minimally invasive surgical approaches with a focus on faster recovery.",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=2340&q=80",
    recoveryTime: "1-6 weeks (varies by procedure)",
    costRange: "₹25,000 - ₹2,00,000",
    eligibility: "Based on medical evaluation",
    recommended: true
  };

  const procedures = [
    {
      name: "Laparoscopic Appendectomy",
      description: "Minimally invasive removal of the appendix through small incisions using specialized instruments and a camera.",
      duration: "1-2 hours",
      recovery: "1-2 weeks",
      cost: "₹30,000 - ₹60,000"
    },
    {
      name: "Hernia Repair",
      description: "Surgical correction of a hernia, which occurs when an organ pushes through a weak spot in the surrounding muscle or tissue.",
      duration: "1-2 hours",
      recovery: "1-3 weeks",
      cost: "₹25,000 - ₹70,000"
    },
    {
      name: "Bowel Resection",
      description: "Removal of diseased portions of the small or large intestine, often performed for cancer, diverticulitis, or inflammatory bowel disease.",
      duration: "2-4 hours",
      recovery: "4-6 weeks",
      cost: "₹80,000 - ₹2,00,000"
    },
    {
      name: "Splenectomy",
      description: "Surgical removal of the spleen, often necessary for splenic rupture, certain blood disorders, or splenic tumors.",
      duration: "2-3 hours",
      recovery: "2-6 weeks",
      cost: "₹60,000 - ₹1,20,000"
    }
  ];

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
            {procedures.map((procedure, index) => (
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
      </SurgeryPageLayout>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AbdominalSurgery;
