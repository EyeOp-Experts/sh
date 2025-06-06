// app/specialties/liver-surgery/page.tsx

"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

const LiverSurgeryPage = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "Liver Surgery" }
  ];

  const surgeryData = {
    title: "Liver Surgery",
    description:
      "Our liver surgery department specializes in advanced surgical treatments for liver diseases, including tumors, cysts, and liver failure. We employ state-of-the-art techniques for optimal outcomes.",
    image:
      "/assets/icons/liver-surgery.jpg",
    eligibility: "Patients with liver diseases requiring surgical intervention",
    recommended: false
  };

  const procedures = [
    {
      name: "Liver Resection",
      description:
        "Surgical removal of a portion of the liver, typically to treat liver cancer, metastases, or benign tumors.",
    },
    {
      name: "Liver Transplantation",
      description:
        "Replacement of a diseased liver with a healthy liver from a donor, for end-stage liver disease or acute liver failure.",
    },
    {
      name: "Laparoscopic Liver Surgery",
      description:
        "Minimally invasive approach to liver surgery using small incisions, cameras, and specialized instruments.",
    },
    {
      name: "Radiofrequency Ablation (RFA)",
      description:
        "A minimally invasive procedure that uses heat to destroy liver tumors without removing them surgically.",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SurgeryPageLayout breadcrumbItems={breadcrumbItems} surgeryData={surgeryData}>
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

export default LiverSurgeryPage;
