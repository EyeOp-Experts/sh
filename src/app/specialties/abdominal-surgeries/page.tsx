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
    image: "/assets/icons/ent.jpeg",
    eligibility: "Based on medical evaluation",
    recommended: true
  };

  const procedures = [
    {
      name: "Laparoscopic Appendectomy",
      description: "Minimally invasive removal of the appendix through small incisions using specialized instruments and a camera.",
    },
    {
      name: "Hernia Repair",
      description: "Surgical correction of a hernia, which occurs when an organ pushes through a weak spot in the surrounding muscle or tissue.",
    },
    {
      name: "Bowel Resection",
      description: "Removal of diseased portions of the small or large intestine, often performed for cancer, diverticulitis, or inflammatory bowel disease.",
    },
    {
      name: "Splenectomy",
      description: "Surgical removal of the spleen, often necessary for splenic rupture, certain blood disorders, or splenic tumors.",
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
